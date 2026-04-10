const STORAGE_KEY = 'engage_14days_state';
const THEME_KEY = 'engage_14days_theme';

// Theme management
function loadTheme() {
    const saved = localStorage.getItem(THEME_KEY) || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    return saved;
}
function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem(THEME_KEY, themeName);
    state.settings.theme = themeName;
}

// Application State
let state = {
    settings: {
        questionsPerDay: 10,
        theme: loadTheme()
    },
    currentLoop: 1, 
    currentDay: null, 
    isReviewMode: false, // 復習モードかどうかのフラグ
    progress: { loop1: [1,2,3,4,5,6,7,8,9,10,11,12,13,14], loop2: [1,2,3,4,5,6,7,8,9,10,11,12,13,14], loop3: [1,2,3,4,5,6,7,8,9,10,11,12,13,14] }, 
    completedDays: { loop1: [], loop2: [], loop3: [] },
    mistakes: { loop1: [], loop2: [], loop3: [] }, // 間違えた問題のIDリスト
    quiz: {
        questions: [],
        currentIndex: 0,
        score: 0,
        isAnswered: false,
        timer: null,
        timeLeft: 0
    }
};

const mainContent = document.getElementById('main-content');
const appHeader = document.querySelector('.app-header');
const loopBadges = document.querySelectorAll('.loop-badge');
const progressBar = document.getElementById('total-progress');

function init() {
    loadState(); // ローカルストレージからの復元
    setupEventListeners();
    renderTopPage(); // 最初はトップ画面を開く
}

// データ保存・読み込み
function saveState() {
    const dataToSave = {
        settings: { questionsPerDay: state.settings.questionsPerDay },
        currentLoop: state.currentLoop,
        progress: state.progress,
        completedDays: state.completedDays,
        mistakes: state.mistakes,
        mistakeHistory: state.mistakeHistory || {}
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
}

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved) {
        try {
            const parsed = JSON.parse(saved);
            if (parsed.settings) {
                state.settings.questionsPerDay = parsed.settings.questionsPerDay || 10;
            }
            state.currentLoop = parsed.currentLoop || state.currentLoop;
            state.progress = parsed.progress || state.progress;
            state.completedDays = parsed.completedDays || state.completedDays;
            state.mistakes = parsed.mistakes || state.mistakes;
            state.mistakeHistory = parsed.mistakeHistory || {};
        } catch(e) {
            console.error("ステートの読み込みに失敗しました:", e);
        }
    }
    // テーマは別キーで管理
    state.settings.theme = loadTheme();
}

function setupEventListeners() {
    loopBadges.forEach(badge => {
        badge.addEventListener('click', (e) => {
            if(state.quiz.timer) clearInterval(state.quiz.timer);
            const loop = parseInt(e.currentTarget.dataset.loop);
            changeLoop(loop);
        });
    });
}

function changeLoop(loop) {
    if (state.currentLoop === loop) return;
    state.currentLoop = loop;
    loopBadges.forEach(badge => {
        badge.classList.remove('active');
        if (parseInt(badge.dataset.loop) === loop) badge.classList.add('active');
    });

    saveState();
    renderMap();
    updateProgress();
}

// ----------------------------------------------------
// Views
// ----------------------------------------------------

// 1. 設定用トップページ
function renderTopPage() {
    appHeader.style.display = 'none';

    let totalCompleted = state.completedDays.loop1.length + state.completedDays.loop2.length + state.completedDays.loop3.length;
    let resumeText = totalCompleted > 0 ? "👉 学習を再開する" : "🚀 チャレンジを開始する！";

    let html = `
        <div class="top-container fade-in">
            <h1 class="top-hero-title">Engage 14Days</h1>
            <p class="top-hero-subtitle">英文法エンゲージの基礎を短期間でマスターしよう</p>
            
            <div class="glass-panel settings-box">
                <div class="settings-title">⚙️ 学習設定</div>
                <div style="text-align: left; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;">
                    1日あたりの出題数
                </div>
                <select id="questions-select" class="select-input">
                    <option value="10" ${state.settings.questionsPerDay === 10 ? 'selected' : ''}>10問 / 1日</option>
                    <option value="15" ${state.settings.questionsPerDay === 15 ? 'selected' : ''}>15問 / 1日</option>
                    <option value="20" ${state.settings.questionsPerDay === 20 ? 'selected' : ''}>20問 / 1日</option>
                </select>
            </div>

            <button class="btn-primary" onclick="startApp()">${resumeText}</button>
        </div>
    `;
    mainContent.innerHTML = html;
}

window.startApp = function() {
    const sel = document.getElementById('questions-select');
    if(sel) {
        state.settings.questionsPerDay = parseInt(sel.value, 10);
        saveState();
    }
    
    appHeader.style.display = 'block';
    
    loopBadges.forEach(badge => {
        badge.classList.remove('active');
        if (parseInt(badge.dataset.loop) === state.currentLoop) badge.classList.add('active');
    });
    
    renderMap();
    updateProgress();
}

// 2. マップページ
window.renderMap = function() { 
    state.currentDay = null;
    state.isReviewMode = false;
    if(state.quiz.timer) clearInterval(state.quiz.timer);
    appHeader.style.display = 'block';

    const unlockedDays = state.progress[`loop${state.currentLoop}`] || [1];
    const completedDays = state.completedDays[`loop${state.currentLoop}`] || [];
    const currentMistakes = state.mistakes[`loop${state.currentLoop}`] || [];

    let loopThemeName = state.currentLoop === 1 ? '基礎（ヒント＆易単語）' : state.currentLoop === 2 ? '標準（ノーマル）' : '応用（オリジナル＆出典）';
    let loopColor = state.currentLoop === 1 ? 'var(--primary-color)' : state.currentLoop === 2 ? 'var(--warning-color)' : 'var(--error-color)';

    // 復習モードへの導線UI
    let reviewHtml = '';
    if (currentMistakes.length > 0) {
        reviewHtml = `
            <div class="review-section fade-in" style="text-align:center; margin-bottom:2rem;">
                <button class="btn-primary" style="background: linear-gradient(135deg, var(--warning-color), var(--error-color)); margin:0; width:auto; padding: 0.8rem 1.5rem;" onclick="startReviewMode()">
                    📝 ミスした問題を復習する (${currentMistakes.length}問)
                </button>
            </div>
        `;
    }

    let html = `
        <div class="map-container fade-in loop-mode-${state.currentLoop}">
            <div class="map-header">
                <h2>14 Days Challenge</h2>
                <p>Loop ${state.currentLoop} : <span style="color:${loopColor}; font-weight:bold;">${loopThemeName}</span></p>
                <p style="font-size: 0.8rem; color: var(--text-secondary);">出題数: 1日 ${state.settings.questionsPerDay} 問</p>
            </div>

            <div style="display:flex; gap:0.5rem; justify-content:center; margin-bottom:1.5rem; flex-wrap:wrap;">
                <button class="btn-secondary" onclick="openSettingsModal()" style="font-size:0.85rem; padding:0.5rem 1rem;">⚙️ 設定</button>
                <button class="btn-secondary" onclick="renderDiagnostic()" style="font-size:0.85rem; padding:0.5rem 1rem;">📊 診断</button>
                <button class="btn-secondary" onclick="renderManual()" style="font-size:0.85rem; padding:0.5rem 1rem;">❓ 使い方</button>
            </div>
            
            ${reviewHtml}

            <div class="day-grid">
    `;

    MOCK_DATA.forEach(dayInfo => {
        const isCompleted = completedDays.includes(dayInfo.day);
        const isUnlocked = unlockedDays.includes(dayInfo.day) || isCompleted || (dayInfo.day === 1);
        const isLocked = !isUnlocked;

        let statusIcon = '';
        if (isCompleted) statusIcon = `<div class="status-icon status-check">✓</div>`;
        else if (isLocked) statusIcon = `<div class="status-icon status-lock">🔒</div>`;

        html += `
            <div class="day-card glass-panel ${isLocked ? 'locked' : 'active'}" data-day="${dayInfo.day}">
                ${statusIcon}
                <div class="day-number">Day ${dayInfo.day}</div>
                <div class="day-title">${dayInfo.title.replace(/^Day \d+: /, '').substring(0, 20)}${dayInfo.title.replace(/^Day \d+: /, '').length>20?'...':''}</div>
            </div>
        `;
    });

    html += `</div></div>`;
    mainContent.innerHTML = html;

    document.querySelectorAll('.day-card.active').forEach(card => {
        card.addEventListener('click', (e) => {
            const day = parseInt(e.currentTarget.dataset.day);
            startDay(day);
        });
    });
}

// 配列シャッフル（Fisher-Yates）
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// 復習モード開始
window.startReviewMode = function() {
    state.currentDay = 'review';
    state.isReviewMode = true;
    
    // 現在のLoopにおけるミスのIDリスト
    const loopKey = `loop${state.currentLoop}`;
    if (!state.mistakes[loopKey]) state.mistakes[loopKey] = [];
    const currentMistakes = state.mistakes[loopKey];

    let reviewQuestions = [];
    
    // MOCK_DATA全体から、mistakesに含まれる問題を抽出
    MOCK_DATA.forEach(dayInfo => {
        dayInfo.questions.forEach(q => {
            if(currentMistakes.includes(q.id)) {
                // 選択肢をシャッフルし、正解インデックスを更新
                const clone = { ...q, day: dayInfo.day };
                if (clone.choices) {
                    const correctText = clone.choices[clone.answer];
                    clone.choices = shuffleArray(clone.choices);
                    clone.answer = clone.choices.indexOf(correctText);
                }
                reviewQuestions.push(clone);
            }
        });
    });

    // 抽出件数が多い場合はシャッフルして制限することも可能だが、今回はそのまま全て出す
    state.quiz.questions = reviewQuestions;
    state.quiz.currentIndex = 0;
    state.quiz.score = 0;
    
    renderQuiz();
}

function startDay(day) {
    const dayData = MOCK_DATA.find(d => d.day === day);
    if(!dayData || dayData.questions.length === 0) {
        alert("この日のデータはまだありません。");
        return;
    }

    state.isReviewMode = false;
    let questions = [...dayData.questions];

    // 前ほど難易度を低くする（difficulty の昇順にソート）
    questions.sort((a, b) => {
        const diffA = a.difficulty || 1;
        const diffB = b.difficulty || 1;
        return diffA - diffB;
    });

    if(questions.length > state.settings.questionsPerDay) {
        questions = questions.slice(0, state.settings.questionsPerDay);
    }

    state.currentDay = day;
    state.quiz.questions = questions;
    state.quiz.currentIndex = 0;
    state.quiz.score = 0;
    
    renderQuiz();
}

function renderQuiz() {
    const qIndex = state.quiz.currentIndex;
    if (qIndex >= state.quiz.questions.length) {
        finishQuiz();
        return;
    }

    state.quiz.isAnswered = false;
    const qData = state.quiz.questions[qIndex];
    const loop = state.currentLoop;

    let rawSentence = (loop === 1 && qData.easy_sentence) ? qData.easy_sentence : qData.sentence;
    let sentenceHTML = rawSentence.replace(/\(\s+\)/g, '( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )');

    let hintHTML = "";
    if (loop === 1) {
        hintHTML = `
            <div class="hint-box">
                <div class="hint-title">💡 Loop 1 Hint & 訳</div>
                <div style="margin-bottom: 5px; font-size: 0.85rem;">[訳] ${qData.translation}</div>
                <div>${qData.hint}</div>
            </div>
        `;
    }

    let inputAreaHTML = "";
    let univBadge = "";
    let loop3Notice = "";

    if (loop === 3) {
        if (qData.university) {
            univBadge = `<div class="university-badge">【出典】${qData.university} (${qData.type})</div>`;
        }
        loop3Notice = `<div style="margin-bottom: 1rem; color: var(--error-color); font-size: 0.9rem; text-align: center;">※ Loop 3: オリジナル問題（時間制限あり）</div>`;
        startTimer(15);
    }

    inputAreaHTML = `${univBadge}${loop3Notice}<div class="choices-grid" id="choices-container">`;
    if (qData.choices) {
        qData.choices.forEach((choice, index) => {
            inputAreaHTML += `<button class="choice-btn" onclick="selectChoice(${index}, ${qData.answer})">${choice}</button>`;
        });
    }
    inputAreaHTML += `</div>`;

    let timerHTML = '';
    if (loop === 3) {
        timerHTML = `<div class="quiz-timer">⏳ <span id="timer-display">15</span>s</div>`;
    }
    
    let headerLabel = "";
    if (state.isReviewMode) {
        let dayNote = qData.day ? `<span style="font-size:0.8rem; color:var(--text-secondary); margin-left: 10px;">[ 出典: Day ${qData.day} ]</span>` : "";
        headerLabel = `<span style="color:var(--warning-color); font-weight:bold;">📝 Review Mode</span>${dayNote}`;
    } else {
        headerLabel = `Question ${qIndex + 1} / ${state.quiz.questions.length}`;
    }

    let html = `
        <div class="fade-in">
            <div class="quiz-header">
                <button onclick="renderMap()" style="background:none; border:none; color:var(--text-secondary); cursor:pointer;">← 戻る</button>
                ${timerHTML}
                <div class="quiz-progress">${headerLabel}</div>
            </div>
            
            ${qData.engage_source ? '<div style="text-align:center; margin-bottom:0.5rem;"><span style="font-size:0.7rem; color:var(--text-secondary); background:rgba(255,255,255,0.05); padding:2px 8px; border-radius:10px;">📖 ' + qData.engage_source + '</span></div>' : ''}
            <div class="glass-panel question-box">
                ${sentenceHTML}
            </div>

            ${hintHTML}
            ${inputAreaHTML}

            <div id="feedback-area" class="feedback-box"></div>
            
            <button id="next-btn" class="next-btn" style="display:none;" onclick="nextQuestion()">次の問題へ</button>
        </div>
    `;

    mainContent.innerHTML = html;
}

function startTimer(seconds) {
    if(state.quiz.timer) clearInterval(state.quiz.timer);
    state.quiz.timeLeft = seconds;
    const display = document.getElementById('timer-display');
    
    state.quiz.timer = setInterval(() => {
        if(state.quiz.isAnswered) {
            clearInterval(state.quiz.timer);
            return;
        }
        state.quiz.timeLeft--;
        if(display) display.innerText = state.quiz.timeLeft;
        
        if (state.quiz.timeLeft <= 0) {
            clearInterval(state.quiz.timer);
            handleTimeUp();
        }
    }, 1000);
}

// 不正解・ミスの処理を共通化
function recordResult(isCorrect, qId) {
    const loopKey = `loop${state.currentLoop}`;
    if (!state.mistakes[loopKey]) state.mistakes[loopKey] = [];
    if (!state.mistakeHistory) state.mistakeHistory = {};

    if (isCorrect) {
        state.mistakes[loopKey] = state.mistakes[loopKey].filter(id => id !== qId);
    } else {
        if (!state.mistakes[loopKey].includes(qId)) {
            state.mistakes[loopKey].push(qId);
        }
        // 累計ミス回数を記録（診断用）
        state.mistakeHistory[qId] = (state.mistakeHistory[qId] || 0) + 1;
    }
    saveState();
}

function handleTimeUp() {
    if(state.quiz.isAnswered) return;
    state.quiz.isAnswered = true;
    
    const qData = state.quiz.questions[state.quiz.currentIndex];
    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach((btn, index) => {
        if (index === qData.answer) btn.classList.add('correct');
        btn.disabled = true;
    });

    recordResult(false, qData.id); // タイムアップは不正解扱い
    showFeedback(false, qData.choices ? qData.choices[qData.answer] : null, true);
}

window.selectChoice = function(selectedIndex, correctIndex) {
    if (state.quiz.isAnswered) return;
    state.quiz.isAnswered = true;
    if(state.quiz.timer) clearInterval(state.quiz.timer);

    const isCorrect = (selectedIndex === correctIndex);
    if (isCorrect) state.quiz.score++;

    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach((btn, index) => {
        if (index === correctIndex) btn.classList.add('correct');
        else if (index === selectedIndex && !isCorrect) btn.classList.add('wrong');
        btn.disabled = true;
    });

    const qData = state.quiz.questions[state.quiz.currentIndex];
    
    // 正解・不正解の記録
    recordResult(isCorrect, qData.id);

    const correctStr = qData.choices ? qData.choices[correctIndex] : null;
    showFeedback(isCorrect, correctStr);
}

window.playAudio = function(qId) {
    const audioPath = 'audio/' + qId + '.mp3';
    const audio = new Audio(audioPath);
    audio.play().catch(function(e) {
        console.warn('MP3再生失敗:', e);
        // フォールバック: Web Speech API
        if ('speechSynthesis' in window) {
            const qData = state.quiz.questions[state.quiz.currentIndex];
            if (qData) {
                const sentence = qData.sentence.replace(/\(\s+\)/g, qData.choices[qData.answer]);
                window.speechSynthesis.cancel();
                const utt = new SpeechSynthesisUtterance(sentence);
                utt.lang = 'en-US';
                utt.rate = 0.9;
                window.speechSynthesis.speak(utt);
            }
        }
    });
}

function showFeedback(isCorrect, correctStr = null, isTimeUp = false) {
    const qData = state.quiz.questions[state.quiz.currentIndex];
    const feedbackArea = document.getElementById('feedback-area');
    const nextBtn = document.getElementById('next-btn');

    let titleText = isCorrect ? '✨ 正解！ Excellent!' : '❌ ざんねん！';
    if(isTimeUp) titleText = '⏰ タイムアップ！';

    let rawSentence = (state.currentLoop === 1 && qData.easy_sentence) ? qData.easy_sentence : qData.sentence;
    let completedSentenceHtml = "";
    let completedSentencePlain = ""; 
    
    if (correctStr) {
        completedSentenceHtml = rawSentence.replace(/\(\s+\)/g, `<span style="color: var(--warning-color); font-weight: bold;"> &nbsp;${correctStr}&nbsp; </span>`);
        completedSentencePlain = rawSentence.replace(/\(\s+\)/g, correctStr); 
    } else {
        completedSentenceHtml = rawSentence;
        completedSentencePlain = rawSentence;
    }

    feedbackArea.className = `feedback-box show ${isCorrect ? 'correct' : 'wrong'}`;
    feedbackArea.innerHTML = `
        <div class="feedback-title">
            ${titleText}
        </div>
        
        <div class="completed-sentence">
            <div style="flex: 1;">${completedSentenceHtml}</div>
            <button class="play-audio-btn" onclick="playAudio('${qData.id}')" aria-label="音声を再生">
                🔊
            </button>
        </div>

        <div class="feedback-translation">${qData.translation}</div>
        <div class="feedback-explanation">
            <span style="display:inline-block; background:rgba(255,255,255,0.1); padding:2px 8px; border-radius:4px; margin-bottom:5px; font-size:0.8rem;">${qData.grammar_point || '解説'}</span><br>
            ${qData.explanation || ''}
        </div>
        ${qData.engage_source ? '<div style="margin-top:0.8rem; font-size:0.75rem; color:var(--text-secondary);">📖 ' + qData.engage_source + '</div>' : ''}
    `;

    nextBtn.style.display = 'block';
}

window.nextQuestion = function() {
    state.quiz.currentIndex++;
    renderQuiz();
}

function finishQuiz() {
    const total = state.quiz.questions.length;
    const score = state.quiz.score;
    const isPerfect = score === total;

    // 復習モードの終了画面
    if (state.isReviewMode) {
        const remainingMistakes = state.mistakes[`loop${state.currentLoop}`].length;
        
        mainContent.innerHTML = `
            <div class="fade-in glass-panel" style="padding: 3rem 2rem; text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">${isPerfect ? '🎉' : '🔥'}</div>
                <h2 style="margin-bottom: 1rem;">復習完了！</h2>
                <p style="font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 1rem;">
                    正解スコア: <span style="color: ${isPerfect ? 'var(--success-color)' : 'var(--text-primary)'}; font-weight: bold;">${score} / ${total}</span>
                </p>
                <p style="margin-bottom: 2rem; color: var(--warning-color);">残りのミス問題: ${remainingMistakes} 問</p>
                <button class="next-btn" onclick="renderMap()" style="width: auto; padding: 10px 30px; margin: 0 auto;">
                    マップへ戻る
                </button>
            </div>
        `;
        return;
    }

    // 通常モードの終了画面
    if(!state.completedDays[`loop${state.currentLoop}`].includes(state.currentDay)) {
        state.completedDays[`loop${state.currentLoop}`].push(state.currentDay);
        // 次のDayを解放する処理 (簡易版)
        let nextDay = state.currentDay + 1;
        if(nextDay <= 14 && !state.progress[`loop${state.currentLoop}`].includes(nextDay)) {
            state.progress[`loop${state.currentLoop}`].push(nextDay);
        }
    }
    
    saveState();
    updateProgress();

    mainContent.innerHTML = `
        <div class="fade-in glass-panel" style="padding: 3rem 2rem; text-align: center;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">${isPerfect ? '🎉' : '👍'}</div>
            <h2 style="margin-bottom: 1rem;">Day ${state.currentDay} クリア！</h2>
            <p style="font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 2rem;">
                スコア: <span style="color: ${isPerfect ? 'var(--success-color)' : 'var(--text-primary)'}; font-weight: bold;">${score} / ${total}</span>
            </p>
            <button class="next-btn" onclick="renderMap()" style="width: auto; padding: 10px 30px; margin: 0 auto;">
                マップへ戻る
            </button>
        </div>
    `;
}

function updateProgress() {
    const totalDays = 14;
    const completed = state.completedDays[`loop${state.currentLoop}`].length;
    const percentage = (completed / totalDays) * 100;
    if (progressBar) progressBar.style.width = `${percentage}%`;
}

// ===========================
// テーマ設定モーダル
// ===========================
const THEMES = [
    { id: 'dark',     icon: '🌙', name: 'ダーク',   desc: 'スタンダードな暗色テーマ' },
    { id: 'light',    icon: '☀️', name: 'ライト',   desc: '明るく見やすいテーマ' },
    { id: 'zgen',     icon: '💜', name: 'Z世代',    desc: 'ネオン＆バイブス全開' },
    { id: 'textbook', icon: '📖', name: '教科書',   desc: '落ち着いた紙のトーン' },
];

window.openSettingsModal = function() {
    const current = state.settings.theme || 'dark';
    let themeCards = THEMES.map(t => `
        <div class="theme-card ${t.id === current ? 'selected' : ''}" onclick="selectTheme('${t.id}')" data-theme-id="${t.id}">
            <span class="theme-icon">${t.icon}</span>
            <div style="font-weight:700;">${t.name}</div>
            <div style="font-size:0.75rem; color:var(--text-secondary); margin-top:2px;">${t.desc}</div>
        </div>
    `).join('');

    let overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'settings-modal';
    overlay.innerHTML = `
        <div class="glass-panel modal-content" style="position:relative;">
            <button class="modal-close" onclick="closeSettingsModal()">✕</button>
            <div class="modal-title">⚙️ 設定</div>

            <div style="margin-bottom:1rem; font-weight:600;">🎨 テーマ</div>
            <div class="theme-grid" id="theme-grid">
                ${themeCards}
            </div>

            <div style="margin-bottom:0.5rem; font-weight:600;">📝 出題数 / 1日</div>
            <select id="modal-q-select" class="select-input" style="margin-bottom:1.5rem;">
                <option value="10" ${state.settings.questionsPerDay===10?'selected':''}>10問</option>
                <option value="15" ${state.settings.questionsPerDay===15?'selected':''}>15問</option>
                <option value="20" ${state.settings.questionsPerDay===20?'selected':''}>20問</option>
            </select>

            <div style="display:flex; gap:0.8rem;">
                <button class="btn-primary" style="flex:1; max-width:none; padding:0.7rem;" onclick="applySettings()">保存して閉じる</button>
            </div>
        </div>
    `;
    overlay.addEventListener('click', (e) => { if(e.target === overlay) closeSettingsModal(); });
    document.body.appendChild(overlay);
}

window.selectTheme = function(themeId) {
    setTheme(themeId);
    document.querySelectorAll('.theme-card').forEach(c => {
        c.classList.toggle('selected', c.dataset.themeId === themeId);
    });
}

window.closeSettingsModal = function() {
    const m = document.getElementById('settings-modal');
    if(m) m.remove();
}

window.applySettings = function() {
    const sel = document.getElementById('modal-q-select');
    if(sel) state.settings.questionsPerDay = parseInt(sel.value);
    saveState();
    closeSettingsModal();
    renderMap();
}

// ===========================
// 診断画面
// ===========================
window.renderDiagnostic = function() {
    appHeader.style.display = 'block';
    if(state.quiz.timer) clearInterval(state.quiz.timer);

    const loopKey = `loop${state.currentLoop}`;
    const currentMistakes = state.mistakes[loopKey] || [];
    const history = state.mistakeHistory || {};

    // 全問題を章→単元にマッピング
    const chapterStats = {};  // { 'Ch.1 時制': { total: N, missed: N } }
    const allQuestions = {};
    MOCK_DATA.forEach(day => {
        day.questions.forEach(q => {
            allQuestions[q.id] = { ...q, day: day.day };
            // engage_source から章を抽出 ("Engage Ch.X タイトル ...")
            if(q.engage_source) {
                const m = q.engage_source.match(/Engage (Ch\.\d+ [^ ]+)/);
                const chKey = m ? m[1] : 'その他';
                if(!chapterStats[chKey]) chapterStats[chKey] = { total: 0, missed: 0, ids: [] };
                chapterStats[chKey].total++;
                if(currentMistakes.includes(q.id)) {
                    chapterStats[chKey].missed++;
                    chapterStats[chKey].ids.push(q.id);
                }
            }
        });
    });

    // 単元別ミス率グラフ（ミスがある章のみ表示）
    let chapterBarsHtml = '';
    const chEntries = Object.entries(chapterStats)
        .filter(([, v]) => v.missed > 0)
        .sort((a, b) => (b[1].missed / b[1].total) - (a[1].missed / a[1].total));

    if(chEntries.length === 0) {
        chapterBarsHtml = '<p style="color:var(--text-secondary); text-align:center;">🎉 現在のLoopでミスした問題はありません！</p>';
    } else {
        chEntries.forEach(([chName, data]) => {
            const pct = Math.round((data.missed / data.total) * 100);
            const barColor = pct >= 50 ? 'var(--error-color)' : pct >= 25 ? 'var(--warning-color)' : 'var(--primary-color)';
            chapterBarsHtml += `
                <div class="diag-bar-container">
                    <div class="diag-bar-label">
                        <span>${chName}</span>
                        <span style="color:${barColor}; font-weight:600;">${data.missed}/${data.total} (${pct}%)</span>
                    </div>
                    <div class="diag-bar"><div class="diag-bar-fill" style="width:${pct}%; background:${barColor};"></div></div>
                </div>`;
        });
    }

    // ミス問題リスト（累計ミス回数順）
    let missListHtml = '';
    const missItems = currentMistakes
        .map(id => ({ id, q: allQuestions[id], count: history[id] || 1 }))
        .filter(item => item.q)
        .sort((a, b) => b.count - a.count);

    if(missItems.length === 0) {
        missListHtml = '<p style="color:var(--text-secondary); text-align:center;">ミスした問題はありません</p>';
    } else {
        missItems.forEach(item => {
            const q = item.q;
            const shortSentence = q.sentence.length > 60 ? q.sentence.substring(0, 60) + '...' : q.sentence;
            missListHtml += `
                <div class="diag-miss-item">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                        <span style="font-weight:600; color:var(--text-primary);">${q.grammar_point || 'Q' + q.id}</span>
                        <span style="font-size:0.75rem; color:var(--error-color);">✕${item.count}回</span>
                    </div>
                    <div style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:2px;">${shortSentence}</div>
                    <div style="font-size:0.7rem; color:var(--text-secondary);">📖 ${q.engage_source || ''} | Day ${item.q.day}</div>
                </div>`;
        });
    }

    // 総合統計
    const totalQ = Object.values(chapterStats).reduce((s, v) => s + v.total, 0);
    const totalMissed = currentMistakes.length;
    const accuracy = totalQ > 0 ? Math.round(((totalQ - totalMissed) / totalQ) * 100) : 100;

    let html = `
        <div class="fade-in">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
                <button onclick="renderMap()" style="background:none; border:none; color:var(--text-secondary); cursor:pointer; font-size:1rem;">← マップへ</button>
                <span style="font-size:0.85rem; color:var(--text-secondary);">Loop ${state.currentLoop}</span>
            </div>

            <div class="glass-panel" style="padding:1.5rem; margin-bottom:1.5rem; text-align:center;">
                <div style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:0.5rem;">総合正答率</div>
                <div style="font-size:3rem; font-weight:800; color:${accuracy>=80?'var(--success-color)':accuracy>=50?'var(--warning-color)':'var(--error-color)'};">${accuracy}%</div>
                <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:0.3rem;">残ミス: ${totalMissed}問 / 全${totalQ}問</div>
            </div>

            <div class="diag-section">
                <div class="diag-section-title">📊 単元別ミス率</div>
                ${chapterBarsHtml}
            </div>

            <div class="diag-section">
                <div class="diag-section-title">📝 ミス問題リスト (${missItems.length}問)</div>
                ${missListHtml}
            </div>
        </div>
    `;
    mainContent.innerHTML = html;
}

// ===========================
// マニュアル（使い方ガイド）
// ===========================
window.renderManual = function() {
    appHeader.style.display = 'block';
    if(state.quiz.timer) clearInterval(state.quiz.timer);

    let html = `
        <div class="fade-in">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
                <button onclick="renderMap()" style="background:none; border:none; color:var(--text-secondary); cursor:pointer; font-size:1rem;">← マップへ</button>
                <span style="font-size:0.85rem; color:var(--text-secondary);">使い方ガイド</span>
            </div>

            <div class="glass-panel" style="padding:1.5rem; margin-bottom:1.5rem;">
                <h2 style="font-size:1.3rem; margin-bottom:1rem; text-align:center;">📚 Engage 14Days Challenge<br>使い方ガイド</h2>
                <p style="font-size:0.85rem; color:var(--text-secondary); text-align:center; margin-bottom:1rem;">
                    英文法エンゲージの全20章・576問を<br>14日間で3周マスターするアプリです
                </p>
            </div>

            <div class="glass-panel" style="padding:1.2rem; margin-bottom:1rem;">
                <h3 style="font-size:1rem; margin-bottom:0.8rem;">🎯 学習の流れ</h3>
                <div style="font-size:0.85rem; line-height:1.8; color:var(--text-secondary);">
                    <div style="margin-bottom:0.5rem;"><span style="background:var(--primary-color); color:#fff; padding:2px 8px; border-radius:4px; font-size:0.75rem;">Step 1</span> トップ画面で1日の出題数(10〜20問)を選ぶ</div>
                    <div style="margin-bottom:0.5rem;"><span style="background:var(--primary-color); color:#fff; padding:2px 8px; border-radius:4px; font-size:0.75rem;">Step 2</span> Day 1 から順に問題を解いていく</div>
                    <div style="margin-bottom:0.5rem;"><span style="background:var(--primary-color); color:#fff; padding:2px 8px; border-radius:4px; font-size:0.75rem;">Step 3</span> 解答後、解説と完成英文を確認</div>
                    <div style="margin-bottom:0.5rem;"><span style="background:var(--primary-color); color:#fff; padding:2px 8px; border-radius:4px; font-size:0.75rem;">Step 4</span> 🔊ボタンで英文を音声で確認</div>
                    <div><span style="background:var(--primary-color); color:#fff; padding:2px 8px; border-radius:4px; font-size:0.75rem;">Step 5</span> 14日分クリアしたら次のLoopへ！</div>
                </div>
            </div>

            <div class="glass-panel" style="padding:1.2rem; margin-bottom:1rem;">
                <h3 style="font-size:1rem; margin-bottom:0.8rem;">🔄 3つのLoop</h3>
                <div style="font-size:0.85rem; line-height:1.7; color:var(--text-secondary);">
                    <div style="margin-bottom:0.8rem; padding:0.8rem; background:rgba(59,130,246,0.08); border-radius:8px; border-left:3px solid var(--primary-color);">
                        <div style="font-weight:700; color:var(--primary-color); margin-bottom:2px;">Loop 1: 基礎</div>
                        ヒント＆和訳付きで安心。まずは問題の形に慣れよう！
                    </div>
                    <div style="margin-bottom:0.8rem; padding:0.8rem; background:rgba(245,158,11,0.08); border-radius:8px; border-left:3px solid var(--warning-color);">
                        <div style="font-weight:700; color:var(--warning-color); margin-bottom:2px;">Loop 2: 標準</div>
                        ヒントなしの4択。実力で解いてみよう！
                    </div>
                    <div style="padding:0.8rem; background:rgba(239,68,68,0.08); border-radius:8px; border-left:3px solid var(--error-color);">
                        <div style="font-weight:700; color:var(--error-color); margin-bottom:2px;">Loop 3: 応用</div>
                        15秒の時間制限付き！入試問題の大学出典も表示。
                    </div>
                </div>
            </div>

            <div class="glass-panel" style="padding:1.2rem; margin-bottom:1rem;">
                <h3 style="font-size:1rem; margin-bottom:0.8rem;">🛠️ 便利な機能</h3>
                <div style="font-size:0.85rem; line-height:1.7; color:var(--text-secondary);">
                    <div style="margin-bottom:0.5rem;"><strong>📝 復習モード</strong> — 間違えた問題だけを集中して解き直せます</div>
                    <div style="margin-bottom:0.5rem;"><strong>📊 診断</strong> — どの単元でミスが多いか一目で確認できます</div>
                    <div style="margin-bottom:0.5rem;"><strong>⚙️ 設定</strong> — テーマの変更(4種)や出題数の変更ができます</div>
                    <div style="margin-bottom:0.5rem;"><strong>🔊 音声再生</strong> — 正解後に完成した英文を音声で聴けます</div>
                    <div><strong>💾 自動保存</strong> — 進捗はブラウザに自動保存。途中で閉じてもOK</div>
                </div>
            </div>

            <div class="glass-panel" style="padding:1.2rem; margin-bottom:1rem;">
                <h3 style="font-size:1rem; margin-bottom:0.8rem;">📖 14日間のカリキュラム</h3>
                <div style="font-size:0.8rem; line-height:1.6; color:var(--text-secondary);">
                    <div>Day 1-2: 時制 ＋ 受動態</div>
                    <div>Day 3: 助動詞</div>
                    <div>Day 4: 仮定法</div>
                    <div>Day 5: 不定詞 ＋ 動名詞</div>
                    <div>Day 6: 分詞</div>
                    <div>Day 7: 関係詞</div>
                    <div>Day 8: 比較</div>
                    <div>Day 9-10: 前置詞 ＋ 接続詞</div>
                    <div>Day 11: 否定 ＋ 強調・倒置</div>
                    <div>Day 12-13: 動詞・名詞の語法</div>
                    <div>Day 14: 代名詞・形容詞・副詞の語法</div>
                </div>
            </div>

            <div style="text-align:center; padding:1rem; font-size:0.8rem; color:var(--text-secondary);">
                Engage 14Days Challenge v1.0<br>
                英文法・語法 Engage (Field 1 + Field 2) 準拠
            </div>
        </div>
    `;
    mainContent.innerHTML = html;
}

window.addEventListener('DOMContentLoaded', init);
