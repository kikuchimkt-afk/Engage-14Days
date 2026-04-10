// 本番データ変換スクリプト (Ch1-20 全20章対応版)
// セクション番号は全章通し (Ch1:1-8, Ch2:9-11, ... Ch20:185-193)
// 4択問題のみ対象、answer: 1-indexed → 0-indexed

const fs = require('fs');
const path = require('path');

var field1Dir = path.join(__dirname, '..', '..', 'data', 'field1');
var field2Dir = path.join(__dirname, '..', '..', 'data', 'field2');

// ch: 章番号, field: 1 or 2, secFrom/secTo: 通しセクション番号
var DAY_MAP = [
    { day: 1,  title: "Day 1: 時制（前半）",
      chapters: [{ ch: 1, field: 1, secFrom: 1, secTo: 4 }] },
    { day: 2,  title: "Day 2: 時制（後半）＋ 受動態",
      chapters: [{ ch: 1, field: 1, secFrom: 5, secTo: 8 }, { ch: 2, field: 1, secFrom: 9, secTo: 11 }] },
    { day: 3,  title: "Day 3: 助動詞",
      chapters: [{ ch: 3, field: 1, secFrom: 12, secTo: 20 }] },
    { day: 4,  title: "Day 4: 仮定法",
      chapters: [{ ch: 4, field: 1, secFrom: 21, secTo: 27 }] },
    { day: 5,  title: "Day 5: 不定詞 ＋ 動名詞",
      chapters: [{ ch: 5, field: 1, secFrom: 28, secTo: 37 }, { ch: 6, field: 1, secFrom: 38, secTo: 43 }] },
    { day: 6,  title: "Day 6: 分詞",
      chapters: [{ ch: 7, field: 1, secFrom: 43, secTo: 50 }] },
    { day: 7,  title: "Day 7: 関係詞",
      chapters: [{ ch: 8, field: 1, secFrom: 51, secTo: 61 }] },
    { day: 8,  title: "Day 8: 比較",
      chapters: [{ ch: 9, field: 1, secFrom: 62, secTo: 72 }] },
    { day: 9,  title: "Day 9: 前置詞 ＋ 接続詞（前半）",
      chapters: [{ ch: 10, field: 1, secFrom: 73, secTo: 88 }, { ch: 11, field: 1, secFrom: 89, secTo: 94 }] },
    { day: 10, title: "Day 10: 接続詞（後半）＋ 主語と動詞 ＋ 疑問詞",
      chapters: [{ ch: 11, field: 1, secFrom: 95, secTo: 100 }, { ch: 12, field: 1, secFrom: 101, secTo: 106 }, { ch: 13, field: 1, secFrom: 107, secTo: 112 }] },
    { day: 11, title: "Day 11: 否定 ＋ 強調・倒置・省略",
      chapters: [{ ch: 14, field: 1, secFrom: 113, secTo: 117 }, { ch: 15, field: 1, secFrom: 118, secTo: 123 }] },
    { day: 12, title: "Day 12: 動詞の語法（前半）",
      chapters: [{ ch: 16, field: 2, secFrom: 124, secTo: 138 }] },
    { day: 13, title: "Day 13: 動詞の語法（後半）＋ 名詞の語法",
      chapters: [{ ch: 16, field: 2, secFrom: 139, secTo: 153 }, { ch: 17, field: 2, secFrom: 154, secTo: 160 }] },
    { day: 14, title: "Day 14: 代名詞 ＋ 形容詞 ＋ 副詞の語法",
      chapters: [{ ch: 18, field: 2, secFrom: 161, secTo: 173 }, { ch: 19, field: 2, secFrom: 174, secTo: 184 }, { ch: 20, field: 2, secFrom: 185, secTo: 193 }] },
];

var chapterCache = {};
function loadChapter(chNum, fieldNum) {
    var key = 'f' + fieldNum + '_ch' + chNum;
    if (chapterCache[key]) return chapterCache[key];
    var dir = fieldNum === 1 ? field1Dir : field2Dir;
    var fname = 'chapter' + String(chNum).padStart(2, '0') + '.json';
    var fpath = path.join(dir, fname);
    var data = JSON.parse(fs.readFileSync(fpath, 'utf8'));
    chapterCache[key] = data;
    return data;
}

function getDifficulty(q, secNumberInChapter) {
    // 章内でのセクション順序で判定
    if (q.top100 === true) return 1;
    if (secNumberInChapter <= 3) return 1;
    if (secNumberInChapter <= 6) return 2;
    return 3;
}

function makeHint(q) {
    if (q.key_focus) return q.key_focus;
    if (q.grammar_rule) return q.grammar_rule;
    return q.grammar_point || '';
}

var result = [];

DAY_MAP.forEach(function(dayConfig) {
    var dayQuestions = [];
    
    dayConfig.chapters.forEach(function(chRange) {
        var chData = loadChapter(chRange.ch, chRange.field);
        
        // 章内でのセクション順序を追跡（difficulty判定用）
        var secIndex = 0;
        chData.sections.forEach(function(sec) {
            secIndex++;
            if (sec.number < chRange.secFrom || sec.number > chRange.secTo) return;
            
            sec.questions.forEach(function(q) {
                if (q.type !== '4択') return;
                
                var qId = 'ch' + String(chRange.ch).padStart(2, '0') + '_q' + String(q.number).padStart(3, '0');
                
                var engageSource = 'Engage Ch.' + chData.chapter + ' ' + chData.chapter_title + ' Sec.' + sec.number + ' Q' + q.number;
                
                dayQuestions.push({
                    id: qId,
                    type: q.type,
                    difficulty: getDifficulty(q, secIndex),
                    sentence: q.sentence,
                    easy_sentence: q.sentence,
                    choices: q.choices,
                    answer: q.answer - 1,
                    university: q.university || '',
                    translation: q.translation || '',
                    hint: makeHint(q),
                    grammar_point: q.grammar_point || '',
                    explanation: q.explanation || '',
                    engage_source: engageSource
                });
            });
        });
    });
    
    result.push({
        day: dayConfig.day,
        title: dayConfig.title,
        description: '',
        completed: false,
        questions: dayQuestions
    });
});

// data.jsを出力
var output = '// 本番データ: Engage Ch.1〜20 (Field 1 + Field 2) から自動変換\n';
output += '// 4択問題のみ、answer: 0-indexed\n';
output += '// engage_source: エンゲージの出典元\n';
output += '// 生成日時: ' + new Date().toISOString() + '\n\n';
output += 'const MOCK_DATA = ' + JSON.stringify(result, null, 2) + ';\n';

var outPath = path.join(__dirname, '..', 'js', 'data.js');
fs.writeFileSync(outPath, output, 'utf8');

// レポート
console.log('=== 変換完了 ===');
var grandTotal = 0;
result.forEach(function(day) {
    console.log(day.title + ': ' + day.questions.length + '問');
    grandTotal += day.questions.length;
});
console.log('---');
console.log('合計: ' + grandTotal + '問 (4択のみ)');

// answer index検証
console.log('');
console.log('=== answer index 検証 ===');
var errors = 0;
result.forEach(function(day) {
    day.questions.forEach(function(q) {
        if (q.answer < 0 || q.answer >= q.choices.length) {
            console.log('ERROR: ' + q.id + ' answer=' + q.answer + ' choices=' + q.choices.length);
            errors++;
        }
    });
});
console.log(errors === 0 ? 'OK: 全問題の answer index が有効範囲内です。' : 'ERROR: ' + errors + '件の問題で answer index が範囲外！');
