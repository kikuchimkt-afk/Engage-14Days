// 本番データ: Engage Ch.1〜20 (Field 1 + Field 2) から自動変換
// 4択問題のみ、answer: 0-indexed
// engage_source: エンゲージの出典元
// 生成日時: 2026-03-25T18:27:52.913Z

const MOCK_DATA = [
  {
    "day": 1,
    "title": "Day 1: 時制（前半）",
    "description": "",
    "completed": false,
    "questions": [
      {
        "id": "ch01_q001",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Ken is a last-minute person and often (   ) late for meetings.",
        "easy_sentence": "Ken is a last-minute person and often (   ) late for meetings.",
        "choices": [
          "arrive",
          "arrives",
          "will arrive",
          "arrived"
        ],
        "answer": 1,
        "university": "玉川大",
        "translation": "ケンはぎりぎりにならないとやらない人で、よく会議に遅れてくる。",
        "hint": "is と often に注目",
        "grammar_point": "現在形",
        "explanation": "現在形 is と空所の前の often から、後半は「しばしば会議に遅れてやってくる」という意味のはず。現在の習慣的動作は現在形で表す。主語が Ken なので② arrives が正解。",
        "engage_source": "Engage Ch.1 時制 Sec.1 Q1"
      },
      {
        "id": "ch01_q002",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Something strange (   ) at school yesterday when we were having lunch.",
        "easy_sentence": "Something strange (   ) at school yesterday when we were having lunch.",
        "choices": [
          "happened",
          "happens",
          "is happened",
          "was happened"
        ],
        "answer": 0,
        "university": "立命館大",
        "translation": "昨日、私たちが昼食を食べているときに学校で何か奇妙なことが起こった。",
        "hint": "yesterday に注目",
        "grammar_point": "過去形",
        "explanation": "yesterday は過去を表すので、過去形を選ぶ。happen「（物事が）起こる、生じる」は受動態にはならないので、① happened が正解。",
        "engage_source": "Engage Ch.1 時制 Sec.1 Q2"
      },
      {
        "id": "ch01_q003",
        "type": "4択",
        "difficulty": 1,
        "sentence": "These plants (   ). Can you give them a little water?",
        "easy_sentence": "These plants (   ). Can you give them a little water?",
        "choices": [
          "are dead",
          "are dying",
          "die",
          "have died"
        ],
        "answer": 1,
        "university": "兵庫医療大",
        "translation": "これらの植物は枯れかけています。少し水をやってくれますか。",
        "hint": "状況に注目",
        "grammar_point": "現在進行形",
        "explanation": "2文目の「それら（=植物）に少し水をやってくれますか」から、植物は完全に枯れてはいないとわかる。現在進行形は「…しかけている」という現在進行中の変化を表すことができるので、② are dying が正解。",
        "engage_source": "Engage Ch.1 時制 Sec.1 Q3"
      },
      {
        "id": "ch01_q004",
        "type": "4択",
        "difficulty": 1,
        "sentence": "When Nancy called me last night, I (   ) a video game.",
        "easy_sentence": "When Nancy called me last night, I (   ) a video game.",
        "choices": [
          "am playing",
          "play",
          "have played",
          "was playing"
        ],
        "answer": 3,
        "university": "名古屋女子大",
        "translation": "昨夜ナンシーが私に電話してきたとき、私はテレビゲームをしていた。",
        "hint": "When Nancy called me last night が表す時に注目",
        "grammar_point": "過去進行形",
        "explanation": "when 節が昨夜の特定の時点を指していることに注目。過去のある時点で進行中の動作は過去進行形で表すので、④ was playing が正解。",
        "engage_source": "Engage Ch.1 時制 Sec.1 Q4"
      },
      {
        "id": "ch01_q005",
        "type": "4択",
        "difficulty": 1,
        "sentence": "During my high-school days I (   ) a basketball team.",
        "easy_sentence": "During my high-school days I (   ) a basketball team.",
        "choices": [
          "belonged",
          "belonged to",
          "belonging",
          "was belonging"
        ],
        "answer": 1,
        "university": "大東文化大",
        "translation": "高校時代、私はバスケットボール部に所属していた。",
        "hint": "選択肢の belong に注目",
        "grammar_point": "進行形にしない動詞",
        "explanation": "belong は belong to ... の形で「…に所属している、…のものである」という意味を表すので、② belonged to が正解。belong のような状態動詞は原則として進行形にしないことに注意。",
        "engage_source": "Engage Ch.1 時制 Sec.1 Q5"
      },
      {
        "id": "ch01_q006",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Do you think they (   ) me nicely if I go there again?",
        "easy_sentence": "Do you think they (   ) me nicely if I go there again?",
        "choices": [
          "will treat",
          "had treated",
          "treat",
          "treated"
        ],
        "answer": 0,
        "university": "法政大",
        "translation": "再びそこへ行ったら、彼らは私によくしてくれると思いますか。",
        "hint": "if ... again に注目",
        "grammar_point": "will",
        "explanation": "if I go there again「私が再びそこへ行ったら」は未来のことについて述べている。未来のことは原則として will を使って表す。",
        "engage_source": "Engage Ch.1 時制 Sec.2 Q6"
      },
      {
        "id": "ch01_q007",
        "type": "4択",
        "difficulty": 1,
        "sentence": "What time is the boat (   ) tomorrow?",
        "easy_sentence": "What time is the boat (   ) tomorrow?",
        "choices": [
          "arrives",
          "will arrive",
          "does arrive",
          "going to arrive"
        ],
        "answer": 3,
        "university": "神奈川大",
        "translation": "その船は明日何時に到着する予定ですか。",
        "hint": "is, tomorrow に注目",
        "grammar_point": "be going to",
        "explanation": "tomorrow「明日」があるので、未来のことを尋ねている文。is があるので、be going to を用いた疑問文〈be動詞＋主語＋going to〉の語順だと判断し、④を選ぶ。",
        "engage_source": "Engage Ch.1 時制 Sec.2 Q7"
      },
      {
        "id": "ch01_q008",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Mr. Johnson (   ) to Chicago on business next month.",
        "easy_sentence": "Mr. Johnson (   ) to Chicago on business next month.",
        "choices": [
          "go",
          "gone",
          "is going",
          "went"
        ],
        "answer": 2,
        "university": "関西学院大",
        "translation": "ジョンソン氏は来月仕事でシカゴへ行く予定だ。",
        "hint": "next month に注目",
        "grammar_point": "現在進行形",
        "explanation": "next month「来月」があり、未来のことについて述べていることがわかる。現在進行形は未来の予定を表すことができるので、③ is going が正解。",
        "engage_source": "Engage Ch.1 時制 Sec.2 Q8"
      },
      {
        "id": "ch01_q009",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I expect she (   ) her mind before long.",
        "easy_sentence": "I expect she (   ) her mind before long.",
        "choices": [
          "will be changing",
          "will be changed",
          "is changed",
          "was changed"
        ],
        "answer": 0,
        "university": "福岡大",
        "translation": "もうすぐ彼女は気持ちが変わるだろうと思う。",
        "hint": "expect に注目",
        "grammar_point": "未来進行形",
        "explanation": "expect (that) ...「…するだろうと思う」の「…」には未来のことが入る。未来進行形 will be doing は「…しているだろう」〈進行中の動作〉と「…することになるだろう」〈未来の予定〉の意味がある。ここでは「（考えを）変えることになるだろう」という意味になる① will be changing が正解。",
        "engage_source": "Engage Ch.1 時制 Sec.2 Q9"
      },
      {
        "id": "ch01_q010",
        "type": "4択",
        "difficulty": 1,
        "sentence": "A: Did you manage to answer all the questions on the test?\nB: I was (   ) to finish the last question when the bell rang.",
        "easy_sentence": "A: Did you manage to answer all the questions on the test?\nB: I was (   ) to finish the last question when the bell rang.",
        "choices": [
          "about",
          "close",
          "over",
          "out"
        ],
        "answer": 0,
        "university": "学習院大",
        "translation": "A：テストの問題に全部答えられた？\nB：まさに最後の問題を書き終えようというところでチャイムが鳴ったんだ。",
        "hint": "was (  ) to finish に注目",
        "grammar_point": "be about to do",
        "explanation": "when the bell rang「チャイムが鳴ったとき」という時が示されている。前に was、後ろに不定詞があることに注目し、be about to do「まさに…するところだ」を使うと判断する。be about to do は差し迫った未来を表す表現。",
        "engage_source": "Engage Ch.1 時制 Sec.2 Q10"
      },
      {
        "id": "ch01_q011",
        "type": "4択",
        "difficulty": 1,
        "sentence": "\"Are Mary and Tom still living in Tokyo?\"\n\"No. They (   ) to Beijing.\"",
        "easy_sentence": "\"Are Mary and Tom still living in Tokyo?\"\n\"No. They (   ) to Beijing.\"",
        "choices": [
          "are just moved",
          "had just moved",
          "have just moved",
          "will just move"
        ],
        "answer": 2,
        "university": "青山学院大",
        "translation": "「メアリーとトムはまだ東京に住んでいるのですか」「いいえ。彼らはちょうど北京へ引っ越したところです」",
        "hint": "今の状況を尋ねられていること／選択肢の just に注目",
        "grammar_point": "現在完了",
        "explanation": "「メアリーとトムはまだ東京に住んでいるのですか」と尋ねられ、「いいえ」と答えているので、メアリーたちは今、東京にいないことがわかる。選択肢にはすべて just「ちょうど」があので「ちょうど北京（Beijing）へ引っ越したところです」という完了・結果の意味になるように現在完了の③ have just moved を選ぶ。",
        "engage_source": "Engage Ch.1 時制 Sec.3 Q11"
      },
      {
        "id": "ch01_q012",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I've never been (   ) China, but I'd like to go.",
        "easy_sentence": "I've never been (   ) China, but I'd like to go.",
        "choices": [
          "in",
          "at",
          "to",
          "on"
        ],
        "answer": 2,
        "university": "南山大",
        "translation": "私は中国に一度も行ったことはないが、行きたいと思っている。",
        "hint": "空所の前の have been に注目",
        "grammar_point": "have been to ...",
        "explanation": "but 以下に「しかし、行きたいと思っている」とあるので、前半は「中国に行ったことがない」であると予想できる。have been to ... で「…に行ったことがある」という経験を表す。ここでは never「一度も…ない」があるので「一度も行ったことがない」の意味になる。",
        "engage_source": "Engage Ch.1 時制 Sec.3 Q12"
      },
      {
        "id": "ch01_q014",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Ken and Mari (   ) at their grandmother's house in Hawaii since last weekend. They will go back to Japan tomorrow.",
        "easy_sentence": "Ken and Mari (   ) at their grandmother's house in Hawaii since last weekend. They will go back to Japan tomorrow.",
        "choices": [
          "will be staying",
          "stay",
          "have been staying",
          "stayed"
        ],
        "answer": 2,
        "university": "産業能率大",
        "translation": "ケンとマリは先週末からハワイの祖母の家に泊まっている。彼らは明日、日本に戻るだろう。",
        "hint": "since last weekend に注目",
        "grammar_point": "現在完了進行形",
        "explanation": "since last weekend「先週末からずっと」と、「明日、日本に戻るだろう」という2文目の内容から、「現在までずっと祖母の家に泊まっている」という文意だと判断する。現在までの動作の継続は現在完了進行形（have been doing）で表すので、③ have been staying が正解。",
        "engage_source": "Engage Ch.1 時制 Sec.3 Q14"
      },
      {
        "id": "ch01_q015",
        "type": "4択",
        "difficulty": 1,
        "sentence": "A: Have you ever been to London?\nB: Yes, actually, I (   ) there last year.",
        "easy_sentence": "A: Have you ever been to London?\nB: Yes, actually, I (   ) there last year.",
        "choices": [
          "go",
          "have gone",
          "went",
          "would go"
        ],
        "answer": 2,
        "university": "学習院大",
        "translation": "A：ロンドンに行ったことがありますか。 B：ええ、実は去年行ったんです。",
        "hint": "last year に注目",
        "grammar_point": "現在完了と過去を表す語句",
        "explanation": "文末に last year があるので、この文は過去のことを述べている。過去を表す語句がある文では、現在完了は使えない。過去の文では過去形を使うので、③ went が正解。現在完了の疑問文に引きずられて②を選ばないよう注意。",
        "engage_source": "Engage Ch.1 時制 Sec.3 Q15"
      },
      {
        "id": "ch01_q019",
        "type": "4択",
        "difficulty": 1,
        "sentence": "When Dave reached the station, he found that his train (   ) left.",
        "easy_sentence": "When Dave reached the station, he found that his train (   ) left.",
        "choices": [
          "did already",
          "has already",
          "had already",
          "was already"
        ],
        "answer": 2,
        "university": "南山大",
        "translation": "デイヴが駅に着いたとき、彼の乗る電車がすでに発車していたことに気づいた。",
        "hint": "過去を表す語句と選択肢の already に注目",
        "grammar_point": "過去完了",
        "explanation": "When Dave reached the station は過去の時点を表す。選択肢に already がある ので、「デイヴが駅に着いたとき、彼の乗る電車はすでに発車していた」という意味にする。過去のある時点までに完了していたことは過去完了（had＋過去分詞）で表す。",
        "engage_source": "Engage Ch.1 時制 Sec.4 Q19"
      },
      {
        "id": "ch01_q020",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I lost the map that I (   ) the day before.",
        "easy_sentence": "I lost the map that I (   ) the day before.",
        "choices": [
          "buy",
          "was buying",
          "have bought",
          "had bought"
        ],
        "answer": 3,
        "university": "摂南大",
        "translation": "私は前日に買った地図をなくした。",
        "hint": "主節の動詞と the day before に注目",
        "grammar_point": "大過去",
        "explanation": "that 以下は the map を先行詞とする関係代名詞節。文の動詞は lost「なくした」と過去形。the day before「前日に」があるので、「地図を買った」のは「地図をなくした」よりもさらに古い過去の時（lost）のことだとわかる。先に示されている過去の時（lost）よりもさらに古い過去（大過去）を表す場合には、過去完了（had＋過去分詞）を用いるので、④が正解。",
        "engage_source": "Engage Ch.1 時制 Sec.4 Q20"
      },
      {
        "id": "ch01_q021",
        "type": "4択",
        "difficulty": 2,
        "sentence": "My sister seemed very sleepy because she (   ) all night.",
        "easy_sentence": "My sister seemed very sleepy because she (   ) all night.",
        "choices": [
          "studies",
          "is studying",
          "has been studying",
          "had been studying"
        ],
        "answer": 3,
        "university": "名城大",
        "translation": "姉［妹］は一晩中勉強していたので、とても眠そうに見えた。",
        "hint": "主節の動詞に注目",
        "grammar_point": "過去完了進行形",
        "explanation": "主節の動詞は seemed と過去形になっている。because 節は、姉［妹］が眠そうに見えた理由を表しているのだから、空所に入る動詞は、より以前にしていたことを表すはず。過去のある時点までし続けていたことを表す④ had been studying が正解。had been doing は過去完了進行形で、「（ずっと）…し続けていた」という動作の継続を表す。",
        "engage_source": "Engage Ch.1 時制 Sec.4 Q21"
      }
    ]
  },
  {
    "day": 2,
    "title": "Day 2: 時制（後半）＋ 受動態",
    "description": "",
    "completed": false,
    "questions": [
      {
        "id": "ch01_q022",
        "type": "4択",
        "difficulty": 2,
        "sentence": "John told me that his brother (   ) sick since last weekend.",
        "easy_sentence": "John told me that his brother (   ) sick since last weekend.",
        "choices": [
          "had been",
          "will have been",
          "would be",
          "have been"
        ],
        "answer": 0,
        "university": "駒澤大",
        "translation": "ジョンは私に、彼の兄［弟］は先週末からずっと具合が悪いのだと言った。",
        "hint": "told, since に注目",
        "grammar_point": "時制の一致",
        "explanation": "that 節には〈継続〉を表す since があるので、空所には完了形が入る。主節の動詞 told が過去形なので、空所は時制の一致により過去完了の① had been が入る。従属節の時制が主節の影響を受けて過去形や過去完了になることを時制の一致と言う。",
        "engage_source": "Engage Ch.1 時制 Sec.5 Q22"
      },
      {
        "id": "ch01_q023",
        "type": "4択",
        "difficulty": 2,
        "sentence": "The teacher told us that Queen Victoria (   ) in 1901.",
        "easy_sentence": "The teacher told us that Queen Victoria (   ) in 1901.",
        "choices": [
          "died",
          "dies",
          "dead",
          "has been dead"
        ],
        "answer": 0,
        "university": "東洋大",
        "translation": "先生は私たちに、ヴィクトリア女王は1901年に亡くなったと言った。",
        "hint": "文意を考える",
        "grammar_point": "時制の一致の例外",
        "explanation": "「1901年」は、先生が授業をした過去の時点よりも前なので、通常であれば時制の一致に従い、従属節には過去完了を用いる。しかし、「ヴィクトリア女王が1901年に亡くなった」のような歴史的事実は、過去の出来事であることがはっきりしているため、時制の一致の適用を受けず、過去形で表す。よって、① died が正解。",
        "engage_source": "Engage Ch.1 時制 Sec.5 Q23"
      },
      {
        "id": "ch01_q024",
        "type": "4択",
        "difficulty": 2,
        "sentence": "In the sixteenth century, Copernicus found that the Earth (   ) the Sun.",
        "easy_sentence": "In the sixteenth century, Copernicus found that the Earth (   ) the Sun.",
        "choices": [
          "go around",
          "goes around",
          "went circling",
          "gone around"
        ],
        "answer": 1,
        "university": "国士舘大",
        "translation": "16世紀にコペルニクスは地球が太陽の周りを回っていることを発見した。",
        "hint": "that 以下の内容に注目",
        "grammar_point": "時制の一致の例外",
        "explanation": "「地球が太陽の周りを回っている」は、16世紀の時点にのみ言えることではなく、現在も未来も変わることのない事実である。このような「普遍的事実」は時制の一致の適用を受けず、現在形で表すことができる。the Earth が主語なので、② goes around が正解。",
        "engage_source": "Engage Ch.1 時制 Sec.6 Q24"
      },
      {
        "id": "ch01_q025",
        "type": "4択",
        "difficulty": 1,
        "sentence": "On their next anniversary, my grandparents (   ) for 50 years.",
        "easy_sentence": "On their next anniversary, my grandparents (   ) for 50 years.",
        "choices": [
          "had married",
          "have been married",
          "will have been married",
          "will have married"
        ],
        "answer": 2,
        "university": "日本女子大",
        "translation": "次の記念日で、祖父母は結婚して50年になる。",
        "hint": "On their next anniversary の表す時に注目",
        "grammar_point": "未来完了",
        "explanation": "On their next anniversary「次の記念日で」は未来のことを表している。選択肢すべてに married があるので、「次の記念日で祖父母は結婚して50年になる」という未来のある時点までの状態の継続を表すように、空所には未来完了を入れる。「結婚している」という状態は be married で表すので、③ will have been married が正解。",
        "engage_source": "Engage Ch.1 時制 Sec.6 Q25"
      },
      {
        "id": "ch01_q026",
        "type": "4択",
        "difficulty": 2,
        "sentence": "By the end of this year, I (   ) for this bank for eight years.",
        "easy_sentence": "By the end of this year, I (   ) for this bank for eight years.",
        "choices": [
          "had been working",
          "had worked",
          "will have been working",
          "will work"
        ],
        "answer": 2,
        "university": "近畿大",
        "translation": "今年の年末には、私は8年間この銀行に勤めていることになる。",
        "hint": "By the end of this year の表す時に注目",
        "grammar_point": "未来完了進行形",
        "explanation": "By the end of this year「今年の年末までに」は未来のある時点を表す。文末に for eight years「8年間」があるので、「今年の年末には、私は8年間この銀行に勤めていることになる」という意味になるとわかる。未来のある時点までの動作の継続を表すのは未来完了進行形（will have been doing）なので、③が正解。",
        "engage_source": "Engage Ch.1 時制 Sec.6 Q26"
      },
      {
        "id": "ch01_q027",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The baseball game is supposed to start again as soon as it (   ) raining.",
        "easy_sentence": "The baseball game is supposed to start again as soon as it (   ) raining.",
        "choices": [
          "stops",
          "should stop",
          "will stop",
          "stopped"
        ],
        "answer": 0,
        "university": "関西学院大",
        "translation": "野球の試合は雨がやみ次第、再開することになっている。",
        "hint": "as soon as ... は時を表す副詞節",
        "grammar_point": "副詞節内の動詞",
        "explanation": "文の前半は「野球の試合は再開することになっている」の意味。as soon as は「…するとすぐに」の意味の接続詞で、「雨がやむ」は未来のことを表している。時を表す副詞節内では未来のことでも現在形で表すので、① stops が正解。",
        "engage_source": "Engage Ch.1 時制 Sec.7 Q27"
      },
      {
        "id": "ch01_q028",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I will wait till you (   ) your assignment.",
        "easy_sentence": "I will wait till you (   ) your assignment.",
        "choices": [
          "finishes",
          "will have finished",
          "have finished",
          "will finish"
        ],
        "answer": 2,
        "university": "専修大",
        "translation": "あなたが宿題を終わらせてしまうまで、私はあなたを待ちます。",
        "hint": "till ... は時を表す副詞節",
        "grammar_point": "副詞節内の動詞",
        "explanation": "I will wait は「私は待ちます」の意味。till は「…するときまで（ずっと）」の意味の接続詞で、「あなたが宿題を終わらせる」は未来に起こること。時を表す副詞節内では未来完了にあたる内容でも現在完了で表すので、③ have finished が正解。",
        "engage_source": "Engage Ch.1 時制 Sec.7 Q28"
      },
      {
        "id": "ch01_q029",
        "type": "4択",
        "difficulty": 3,
        "sentence": "By the time you visit me again in Yokohama, I (   ) from high school.",
        "easy_sentence": "By the time you visit me again in Yokohama, I (   ) from high school.",
        "choices": [
          "graduated",
          "am graduating",
          "have graduated",
          "will have graduated"
        ],
        "answer": 3,
        "university": "神奈川大",
        "translation": "あなたがもう一度横浜に私を訪ねてくれるときまでには、私は高校を卒業していることでしょう。",
        "hint": "by the time 節の動詞は現在形",
        "grammar_point": "副詞節内の動詞",
        "explanation": "by the time は接続詞的に用いて「…するときまでに」という意味を表す。by the time ... が時を表す副詞節のため、動詞は visit と現在形が用いられているが、内容としては未来のことを言っている。よって、主節には未来のことを表す④ will have graduated を選ぶ。この未来完了（will have＋過去分詞）は、「あなたがもう一度横浜に私を訪ねてくれるときまでに」「私は高校を卒業しているだろう」という〈完了〉の意味を表す。",
        "engage_source": "Engage Ch.1 時制 Sec.8 Q29"
      },
      {
        "id": "ch01_q030",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I wonder if it (   ) fine tomorrow.",
        "easy_sentence": "I wonder if it (   ) fine tomorrow.",
        "choices": [
          "be",
          "is",
          "were",
          "will be"
        ],
        "answer": 3,
        "university": "松山大",
        "translation": "明日は晴れるだろうか。",
        "hint": "wonder の目的語＝名詞節",
        "grammar_point": "名詞節の if 節",
        "explanation": "wonder は「…かどうかと思う」の意味で、if 節は wonder の目的語となる名詞節。名詞節の if 節では「…かどうか」の意味になり、未来のことは will を使って表す。tomorrow「明日」があるので、④ will be が正解。",
        "engage_source": "Engage Ch.1 時制 Sec.8 Q30"
      },
      {
        "id": "ch01_q032",
        "type": "4択",
        "difficulty": 3,
        "sentence": "You can't tell when the next general election (   ) held.",
        "easy_sentence": "You can't tell when the next general election (   ) held.",
        "choices": [
          "is",
          "were",
          "will have been",
          "will be"
        ],
        "answer": 3,
        "university": "十文字学園女子大",
        "translation": "次の総選挙がいつ行われるかはわからない。",
        "hint": "tell の目的語＝名詞節",
        "grammar_point": "名詞節の when 節",
        "explanation": "when 節は tell の目的語となる名詞節（「いつ…するか」）。名詞節の when 節では未来のことは will を使って表す。「次の総選挙が行われる」のは未来のことなので、④ will be が正解。",
        "engage_source": "Engage Ch.1 時制 Sec.8 Q32"
      },
      {
        "id": "ch01_q033",
        "type": "4択",
        "difficulty": 3,
        "sentence": "We'll go out when it (   ) raining.",
        "easy_sentence": "We'll go out when it (   ) raining.",
        "choices": [
          "had stopped",
          "stopped",
          "stops",
          "will stop"
        ],
        "answer": 2,
        "university": "東北学院大",
        "translation": "雨がやんだら私たちは外出します。",
        "hint": "when 節が副詞節か名詞節かを判断する",
        "grammar_point": "副詞節の when 節",
        "explanation": "when 節は「雨がやんだら」という時を表す副詞節。副詞節内では未来のことでも現在形で表す。主語が it なので、③ stops が正解。",
        "engage_source": "Engage Ch.1 時制 Sec.8 Q33"
      },
      {
        "id": "ch02_q034",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Much of the castle (   ) in the 16th century.",
        "easy_sentence": "Much of the castle (   ) in the 16th century.",
        "choices": [
          "destroyed",
          "was destroyed",
          "has destroyed",
          "destroys"
        ],
        "answer": 1,
        "university": "東海大",
        "translation": "その城の大部分は16世紀に破壊された。",
        "hint": "主語と destroy の関係に注目",
        "grammar_point": "受動態の形",
        "explanation": "選択肢に使われている destroy は「…を破壊する」という意味の他動詞。主語の Much of the castle と destroy は、「その城の大部分は破壊される」という受動の関係になるはずだから、受動態〈be 動詞＋過去分詞〉の② was destroyed が正解。",
        "engage_source": "Engage Ch.2 受動態 Sec.9 Q34"
      },
      {
        "id": "ch02_q035",
        "type": "4択",
        "difficulty": 1,
        "sentence": "When I climbed to the top of the mountain, I was (   ) the magnificent view of the whole area.",
        "easy_sentence": "When I climbed to the top of the mountain, I was (   ) the magnificent view of the whole area.",
        "choices": [
          "moved to",
          "moved by",
          "moving on",
          "moving with"
        ],
        "answer": 1,
        "university": "獨協大",
        "translation": "山の頂上まで登ったとき、私は辺り一帯の壮大な眺めに心を動かされた。",
        "hint": "move の意味に注目",
        "grammar_point": "by＋動作主",
        "explanation": "move には「（人）の心を動かす」という意味がある。ここでは I が主語になっているので、「私の心が動かされた」となるよう、受動態を用いる。また、受動態では動作主は by ... の形で表すので、the magnificent view of the whole area「辺り一帯の壮大な眺め」の前に by を置く。よって、② moved by が正解。",
        "engage_source": "Engage Ch.2 受動態 Sec.9 Q35"
      },
      {
        "id": "ch02_q037",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The other day he (   ) in French by a foreigner.",
        "easy_sentence": "The other day he (   ) in French by a foreigner.",
        "choices": [
          "was spoken to",
          "spoke to",
          "was spoken",
          "spoken up"
        ],
        "answer": 0,
        "university": "駒澤大",
        "translation": "先日、彼は外国人にフランス語で話しかけられた。",
        "hint": "speak の使い方に注目",
        "grammar_point": "群動詞の受動態",
        "explanation": "英文は「先日、彼は外国人によってフランス語で(  )」という意味だから、(  )には「話しかけられた」という受動態が入ると推測する。「（人）に話しかける」は speak to ... で表す。speak to ... を受動態にすると be spoken to となるので、①が正解。speak to のような群動詞を受動態にするときは、to のような部分まで含めて1つの動詞として扱う。",
        "engage_source": "Engage Ch.2 受動態 Sec.9 Q37"
      },
      {
        "id": "ch02_q038",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Next week, our meeting (   ) on Wednesday instead of Friday.",
        "easy_sentence": "Next week, our meeting (   ) on Wednesday instead of Friday.",
        "choices": [
          "will be held",
          "will hold",
          "will have held",
          "will be holding"
        ],
        "answer": 0,
        "university": "南山大",
        "translation": "来週は、私たちの会議は金曜ではなく水曜に開かれる。",
        "hint": "選択肢にある hold に注目",
        "grammar_point": "助動詞を含む受動態",
        "explanation": "hold には「（会など）を開く、開催する」という意味がある。ここでは our meeting が主語になっているので、「会議が開かれる」という意味になるよう、受動態を用いる。will と受動態を組み合わせると、〈will be＋過去分詞〉「…されるだろう」の形になるので、① will be held が正解。",
        "engage_source": "Engage Ch.2 受動態 Sec.10 Q38"
      },
      {
        "id": "ch02_q039",
        "type": "4択",
        "difficulty": 1,
        "sentence": "A new building (   ) constructed on campus.",
        "easy_sentence": "A new building (   ) constructed on campus.",
        "choices": [
          "has",
          "being",
          "is being",
          "had"
        ],
        "answer": 2,
        "university": "神奈川大",
        "translation": "大学構内に新しいビルが建設中だ。",
        "hint": "constructed に注目",
        "grammar_point": "進行形の受動態",
        "explanation": "construct は「…を建設する」という意味の他動詞。A new building (  ) constructed は「新しいビルが建設される」という受動の意味になるはず。主語が単数だから、受動態にするには、(  ) 内に is が必要。③ is being を入れれば、進行形の受動態〈be 動詞＋being＋過去分詞〉「…されているところだ」の形になる。",
        "engage_source": "Engage Ch.2 受動態 Sec.10 Q39"
      },
      {
        "id": "ch02_q040",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The musical \"Les Misérables\" (   ) on Broadway since 1990.",
        "easy_sentence": "The musical \"Les Misérables\" (   ) on Broadway since 1990.",
        "choices": [
          "has performed",
          "is performed",
          "was performed",
          "has been performed"
        ],
        "answer": 3,
        "university": "南山大",
        "translation": "ミュージカル「レ・ミゼラブル」は1990年からずっとブロードウェイで上演されている。",
        "hint": "since に注目",
        "grammar_point": "完了形の受動態",
        "explanation": "perform には「（…を）上演する」という意味がある。主語が The musical \"Les Misérables\" だから、「ミュージカル「レ・ミゼラブル」が上演される」という受動の関係になるはず。受動態にするには、(  ) 内に be 動詞が必要。since 1990 があるので、「1990年からずっと上演されている」という継続の意味を入っていると考え、現在完了の受動態〈have[has] been＋過去分詞〉の形である④ has been performed を選ぶ。",
        "engage_source": "Engage Ch.2 受動態 Sec.10 Q40"
      },
      {
        "id": "ch02_q041",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I was embarrassed when my bag got (   ) in the doors on the train.",
        "easy_sentence": "I was embarrassed when my bag got (   ) in the doors on the train.",
        "choices": [
          "to catch",
          "caught",
          "catch",
          "to have caught"
        ],
        "answer": 1,
        "university": "神戸学院大",
        "translation": "私は電車のドアにかばんを挟まれて恥ずかしかった。",
        "hint": "get と選択肢の catch に注目",
        "grammar_point": "動作の受動態",
        "explanation": "catch には「（物を）挟む」という意味があるので、my bag と catch は「私のかばんが挟まれた」という受動の関係になっていると判断する。〈get＋過去分詞〉で「…される」という動作の受動態を表すので、② caught が正解。my bag was caught だと、「挟まれていた」(状態) と「挟まれた」(動作) のどちらにもとれる。〈get＋過去分詞〉は動作の意味を強調したいときに使われる。",
        "engage_source": "Engage Ch.2 受動態 Sec.10 Q41"
      },
      {
        "id": "ch02_q042",
        "type": "4択",
        "difficulty": 1,
        "sentence": "(   ) the best baseball player in Japan.",
        "easy_sentence": "(   ) the best baseball player in Japan.",
        "choices": [
          "People often say him to be",
          "He is often said that he is",
          "He is often said to be",
          "It is often said for him to be"
        ],
        "answer": 2,
        "university": "専修大",
        "translation": "彼はしばしば日本で最高の野球選手だと言われている。",
        "hint": "選択肢から文意を推測する",
        "grammar_point": "S is said to do",
        "explanation": "選択肢を見て、「人々は彼を…だと言っている」あるいは「彼は…だと言われている」という文意だと推測する。「（一般的に）…と言われている」という表現は、people を主語にする場合は、People say (that) S'＋V'... になるので、①は不可。人を主語にする場合は、S is said to do ... になるので③が正解。なお、It を主語にする場合は、It is said (that) S'＋V'... となる（→ Q43）ので、④は不可。",
        "engage_source": "Engage Ch.2 受動態 Sec.11 Q42"
      },
      {
        "id": "ch02_q044",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Einstein is known (   ) one of the greatest scientists today.",
        "easy_sentence": "Einstein is known (   ) one of the greatest scientists today.",
        "choices": [
          "as",
          "with",
          "for",
          "to"
        ],
        "answer": 0,
        "university": "埼玉工業大",
        "translation": "今日、アインシュタインは最も偉大な科学者の1人として知られている。",
        "hint": "as に注目",
        "grammar_point": "be known as ...",
        "explanation": "be known as ... で「…として知られている」という意味を表す。",
        "engage_source": "Engage Ch.2 受動態 Sec.11 Q44"
      },
      {
        "id": "ch02_q045",
        "type": "4択",
        "difficulty": 1,
        "sentence": "We were (   ) in a heavy traffic jam and couldn't get there on time.",
        "easy_sentence": "We were (   ) in a heavy traffic jam and couldn't get there on time.",
        "choices": [
          "brought",
          "caught",
          "met",
          "put"
        ],
        "answer": 1,
        "university": "学習院大",
        "translation": "私たちはひどい渋滞に巻き込まれて、時間通りにそこに着くことができなかった。",
        "hint": "in に注目",
        "grammar_point": "be caught in ...",
        "explanation": "「（渋滞、嵐）にあう、巻き込まれる」は be caught in ... で表すので、② caught が正解。受動態のあとに by 以外の前置詞が続く表現がいくつかあり、be caught in ... はその一例。この種のものはイディオムとして覚えておくとよい。",
        "engage_source": "Engage Ch.2 受動態 Sec.11 Q45"
      },
      {
        "id": "ch02_q046",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The students are all (   ) studying abroad.",
        "easy_sentence": "The students are all (   ) studying abroad.",
        "choices": [
          "interesting for",
          "interested at",
          "interesting to",
          "interested in"
        ],
        "answer": 3,
        "university": "椙山女学園大",
        "translation": "生徒たちはみんな留学に興味がある。",
        "hint": "The students に注目",
        "grammar_point": "be interested in ...",
        "explanation": "主語が The students であることに注目。人を主語にして「（人が）…に興味がある」と言うときは、be interested in ... を使うので、④が正解。",
        "engage_source": "Engage Ch.2 受動態 Sec.11 Q46"
      }
    ]
  },
  {
    "day": 3,
    "title": "Day 3: 助動詞",
    "description": "",
    "completed": false,
    "questions": [
      {
        "id": "ch03_q047",
        "type": "4択",
        "difficulty": 1,
        "sentence": "You (   ) not believe this, but I plan to become a professional jazz musician.",
        "easy_sentence": "You (   ) not believe this, but I plan to become a professional jazz musician.",
        "choices": [
          "can",
          "may",
          "must",
          "should"
        ],
        "answer": 1,
        "university": "京都産業大",
        "translation": "あなたはこのことを信じないかもしれないが、私はプロのジャズミュージシャンになるつもりだ。",
        "hint": "but に注目",
        "grammar_point": "may",
        "explanation": "英文は「あなたはこのことを信じない(  )」が、私はプロのジャズミュージシャンになるつもりだ」の意味。コンマのあとには but があるので、この文は推量の助動詞 may「かもしれない」を用いた may ..., but 〜「…かもしれない、しかし〜」の形だとわかる。",
        "engage_source": "Engage Ch.3 助動詞 Sec.12 Q47"
      },
      {
        "id": "ch03_q048",
        "type": "4択",
        "difficulty": 1,
        "sentence": "You (   ) be tired after such a long flight.",
        "easy_sentence": "You (   ) be tired after such a long flight.",
        "choices": [
          "are able to",
          "needn't",
          "ought",
          "must"
        ],
        "answer": 3,
        "university": "日本大",
        "translation": "そんな長いフライトのあとではあなたは疲れているに違いない。",
        "hint": "文の意味を考える",
        "grammar_point": "must",
        "explanation": "英文は「そんな長いフライトのあとではあなたは疲れている(  )」の意味。確信を表す④ must「…に違いない」を入れれば文意が通る。",
        "engage_source": "Engage Ch.3 助動詞 Sec.12 Q48"
      },
      {
        "id": "ch03_q049",
        "type": "4択",
        "difficulty": 1,
        "sentence": "He (   ) be over thirty; he must still be in his twenties.",
        "easy_sentence": "He (   ) be over thirty; he must still be in his twenties.",
        "choices": [
          "can't",
          "may",
          "must",
          "oughtn't"
        ],
        "answer": 0,
        "university": "京都光華女子大",
        "translation": "彼は30歳を超えているはずがない。彼はまだ20代に違いない。",
        "hint": "文の意味を考える",
        "grammar_point": "cannot[can't]",
        "explanation": "セミコロンのあとに「彼はまだ20代に違いない」とあるので、前半は「彼は30歳を超えていない」ことを表しているはず。確信を表す① can't「…のはずがない」を入れれば文意が通る。",
        "engage_source": "Engage Ch.3 助動詞 Sec.12 Q49"
      },
      {
        "id": "ch03_q050",
        "type": "4択",
        "difficulty": 1,
        "sentence": "About six years ago I decided that I (   ) learn Arabic.",
        "easy_sentence": "About six years ago I decided that I (   ) learn Arabic.",
        "choices": [
          "would",
          "will",
          "might",
          "may"
        ],
        "answer": 0,
        "university": "杏林大",
        "translation": "約6年前に、私はアラビア語を習おうと決めた。",
        "hint": "decided に注目",
        "grammar_point": "will",
        "explanation": "that 以下は decided の目的語。decide は「…を決める」の意味なので、「私はアラビア語を習おうと決めた」という内容だと考えられる。話し手の意志「…するつもりだ」は will を用いて表すが、主節の動詞が decided と過去形なので、that 節内の助動詞も時制の一致を受けて過去形 would を用いる。",
        "engage_source": "Engage Ch.3 助動詞 Sec.12 Q50"
      },
      {
        "id": "ch03_q051",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I asked the man to move his bag, but he (   ) listen.",
        "easy_sentence": "I asked the man to move his bag, but he (   ) listen.",
        "choices": [
          "could",
          "wouldn't",
          "shouldn't",
          "will"
        ],
        "answer": 1,
        "university": "松山大",
        "translation": "私はその男性に彼のバッグを動かしてくれるように頼んだが、彼は耳を貸そうとしなかった。",
        "hint": "but に注目",
        "grammar_point": "will not",
        "explanation": "〈ask＋O＋to do〉で「O に…してくれるように頼む」の意味。「私はその男性にバッグを動かしてくれるように頼んだ」という意味なので、「彼は耳を貸そうとしなかった」という意味になるよう、② wouldn't を入れる。will[would] には主語の強い意志を表す用法があり、否定形 won't[wouldn't] を使って「どうしても…しようとしない［しなかった］」という拒絶を表すことができる。",
        "engage_source": "Engage Ch.3 助動詞 Sec.12 Q51"
      },
      {
        "id": "ch03_q052",
        "type": "4択",
        "difficulty": 1,
        "sentence": "If you like, you (   ) use this computer for your next presentation.",
        "easy_sentence": "If you like, you (   ) use this computer for your next presentation.",
        "choices": [
          "ought to",
          "should",
          "must",
          "can"
        ],
        "answer": 3,
        "university": "神奈川大",
        "translation": "お望みなら、このコンピュータを使ってもよい。",
        "hint": "If you like に注目",
        "grammar_point": "can",
        "explanation": "If you like「お望みなら」とあるので、「このコンピュータを使ってもよい」とすれば文意が通る。④ can には「…してもよい」と許可を表す用法がある。",
        "engage_source": "Engage Ch.3 助動詞 Sec.13 Q52"
      },
      {
        "id": "ch03_q053",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Because it (   ) terrible traffic, I used to be late for work every day.",
        "easy_sentence": "Because it (   ) terrible traffic, I used to be late for work every day.",
        "choices": ["had to", "must", "should", "would"],
        "answer": 0,
        "university": "獨協大",
        "translation": "ひどい交通渋滞のせいで、毎日仕事に遅刻しなければならなかった。",
        "hint": "were に注目",
        "grammar_point": "have to",
        "explanation": "選択肢から、(  ) には「…しなければならない」という意味の助動詞が入るとわかる。because 節の動詞 were から、過去の文だと判断する。過去のことについて「…しなければならなかった」と言うときは、must ではなく、have to の過去形 had to を使うので、①が正解。",
        "engage_source": "Engage Ch.3 助動詞 Sec.13 Q53"
      },
      {
        "id": "ch03_q054",
        "type": "4択",
        "difficulty": 1,
        "sentence": "\"Should I continue working on the report tonight?\"\n\"No, you (   ) have to. Please turn it in by tomorrow.\"",
        "easy_sentence": "\"Should I continue working on the report tonight?\"\n\"No, you (   ) have to. Please turn it in by tomorrow.\"",
        "choices": ["mustn't", "don't", "won't", "can't"],
        "answer": 1,
        "university": "関東学院大",
        "translation": "「今夜作業を続けるべきですか？」「いいえ、そうする必要はない。明日それを仕上げてください。」",
        "hint": "空所のあとの have to に注目",
        "grammar_point": "don't have to",
        "explanation": "「今夜作業を続けるべきですか」という質問に対し、「明日それを仕上げてください」と答えているのだから、you (  ) have to は「そうする必要はない」という意味だとわかる。「…する必要はない」は don't have to で表すので、②が正解。",
        "engage_source": "Engage Ch.3 助動詞 Sec.13 Q54"
      },
      {
        "id": "ch03_q056",
        "type": "4択",
        "difficulty": 1,
        "sentence": "You (   ) bother me now; I'm about to leave.",
        "easy_sentence": "You (   ) bother me now; I'm about to leave.",
        "choices": ["had better not", "had not better", "hadn't not better", "not had better"],
        "answer": 0,
        "university": "駒澤大",
        "translation": "もう私の邪魔をしないほうがいい。私はまさに出かけるところだ。",
        "hint": "各選択肢の not の位置に注目",
        "grammar_point": "had better not",
        "explanation": "had better「…したほうがいい」は常にこの形で用いられ、主語が三人称単数でも had が has に変わることはない。had better の否定形は had better not「…しないほうがいい」。よって、①が正解。",
        "engage_source": "Engage Ch.3 助動詞 Sec.13 Q56"
      },
      {
        "id": "ch03_q057",
        "type": "4択",
        "difficulty": 1,
        "sentence": "It's a good movie. You (   ) go and see it.",
        "easy_sentence": "It's a good movie. You (   ) go and see it.",
        "choices": [
          "will",
          "shall",
          "ought",
          "should"
        ],
        "answer": 3,
        "university": "国士舘大",
        "translation": "それはよい映画だ。見に行くべきだ。",
        "hint": "文の意味を考える",
        "grammar_point": "should",
        "explanation": "1文目の「それはよい映画だ」から、2文目は相手に映画を観に行くことを勧めていると判断する。④ should「…すべきだ」を入れれば、助言の意味を表すことができる。③ ought は ought to の形で should とほぼ同じ意味を表す。",
        "engage_source": "Engage Ch.3 助動詞 Sec.14 Q57"
      },
      {
        "id": "ch03_q058",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The soccer match is really exciting, but I know that I (   ) to turn off the TV and do my homework.",
        "easy_sentence": "The soccer match is really exciting, but I know that I (   ) to turn off the TV and do my homework.",
        "choices": [
          "had better",
          "mightn't",
          "ought",
          "should"
        ],
        "answer": 2,
        "university": "明治大",
        "translation": "サッカーの試合は本当にエキサイティングだが、テレビを消して宿題をすべきだとわかっている。",
        "hint": "to に注目",
        "grammar_point": "ought to",
        "explanation": "(  ) の直後の to に注目。①〜④の選択肢の中で、直後に to をとるものは③ ought だけ。ought to は「…すべきだ」を表す。",
        "engage_source": "Engage Ch.3 助動詞 Sec.14 Q58"
      },
      {
        "id": "ch03_q059",
        "type": "4択",
        "difficulty": 1,
        "sentence": "They (   ) to be noisy at this time of the night.",
        "easy_sentence": "They (   ) to be noisy at this time of the night.",
        "choices": ["ought to", "ought not", "should not", "must not"],
        "answer": 1,
        "university": "森ノ宮医療大",
        "translation": "こんな夜遅くに騒ぐべきではない。",
        "hint": "not の位置に注目",
        "grammar_point": "ought not to",
        "explanation": "選択肢と、(  ) の直後の to から、ought to を使うと判断する。ought to の否定形は ought not to「…すべきではない」なので、②が正解。",
        "engage_source": "Engage Ch.3 助動詞 Sec.14 Q59"
      },
      {
        "id": "ch03_q060",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I (   ) live in Tokyo, but now I live in Osaka.",
        "easy_sentence": "I (   ) live in Tokyo, but now I live in Osaka.",
        "choices": ["would", "am used to", "used to", "was used to"],
        "answer": 2,
        "university": "東洋大",
        "translation": "（以前は）東京に住んでいたが、今は大阪に住んでいる。",
        "hint": "後半にある「しかし今は…」との対比に注目",
        "grammar_point": "used to",
        "explanation": "後半は「しかし今は東京に住んでいる」と以前の状態との対比を表しているので、過去の状態を表す used to「（以前は）…だった」を用いて表す。used to は助動詞としてはたらき、直後に動詞の原形がくるので、③が正解。used to は過去と現在を対比し、「現在はそうではない」という含みを持つ。",
        "engage_source": "Engage Ch.3 助動詞 Sec.15 Q60"
      },
      {
        "id": "ch03_q061",
        "type": "4択",
        "difficulty": 1,
        "sentence": "When we were young, we (   ) often go swimming in the river.",
        "easy_sentence": "When we were young, we (   ) often go swimming in the river.",
        "choices": ["can't help", "have to", "ought to", "used to"],
        "answer": 3,
        "university": "京都外国語大",
        "translation": "私たちが若かったころ、よく川に泳ぎに行ったものだ。",
        "hint": "when we were young に注目",
        "grammar_point": "used to",
        "explanation": "when we were young「私たちが若かったころ」という過去を表す副詞節があることに注目。④ used to は「（以前は）よく…した」という意味で、過去の習慣的動作を表す。",
        "engage_source": "Engage Ch.3 助動詞 Sec.15 Q61"
      },
      {
        "id": "ch03_q062",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I (   ) cry over nothing when I was a child.",
        "easy_sentence": "I (   ) cry over nothing when I was a child.",
        "choices": [
          "shall often",
          "should often",
          "will often",
          "would often"
        ],
        "answer": 3,
        "university": "日本女子大",
        "translation": "子どもの頃、私はよく何でもないことで泣いたものだ。",
        "hint": "when I was a child に注目",
        "grammar_point": "would (often)",
        "explanation": "when 節が過去のことを述べているので、主節も過去のことだと判断する。選択肢の中で、過去のことを表せるのは④だけ。would は「（以前は）よく…したものだ」という意味で、過去の習慣を表す。often をつけて使うことが多い。",
        "engage_source": "Engage Ch.3 助動詞 Sec.16 Q62"
      },
      {
        "id": "ch03_q063",
        "type": "4択",
        "difficulty": 1,
        "sentence": "She looks very tired. She (   ) very hard recently.",
        "easy_sentence": "She looks very tired. She (   ) very hard recently.",
        "choices": ["may have been studying", "must have been studying", "should have been studying", "could have been studying"],
        "answer": 1,
        "university": "京都産業大",
        "translation": "彼女はとても疲れているように見える。かなり熱心に勉強をし続けていたに違いない。",
        "hint": "have been に注目",
        "grammar_point": "must have＋過去分詞",
        "explanation": "選択肢が助動詞で、(  ) の後ろに have been があるので、〈助動詞＋have＋過去分詞〉の形は、過去の事柄に対する推量などを表すときに使う。「とても疲れているように見える」という根拠に基づいて「かなり熱心に勉強をし続けていた」と推測しているのだから、〈must have＋過去分詞〉「…したに違いない」を使うのが適切。have been studying は完了進行形で、「ずっと…し続けている」という意味を表す。",
        "engage_source": "Engage Ch.3 助動詞 Sec.16 Q63"
      },
      {
        "id": "ch03_q064",
        "type": "4択",
        "difficulty": 2,
        "sentence": "His bag is still in his office, so he (   ) have gone home yet.",
        "easy_sentence": "His bag is still in his office, so he (   ) have gone home yet.",
        "choices": ["mustn't", "can't", "shouldn't", "wouldn't"],
        "answer": 1,
        "university": "関東学院大",
        "translation": "彼のかばんがまだ事務室にあるから、彼はまだ帰宅したはずがない。",
        "hint": "文の意味を考える",
        "grammar_point": "can't[cannot] have＋過去分詞",
        "explanation": "his bag is still in his office「彼のかばんがまだ事務室にある」ことを根拠にして、so 以下のことを述べている。かばんがある＝まだ事務室にいる、と考えて、「帰宅したはずがない」となるよう、②を選ぶ。〈can't have＋過去分詞〉で「…したはずがない」を表す。",
        "engage_source": "Engage Ch.3 助動詞 Sec.16 Q64"
      },
      {
        "id": "ch03_q065",
        "type": "4択",
        "difficulty": 2,
        "sentence": "She hasn't arrived yet. She (   ) got caught in a traffic jam.",
        "easy_sentence": "She hasn't arrived yet. She (   ) got caught in a traffic jam.",
        "choices": [
          "should have",
          "might have",
          "mustn't have",
          "won't have"
        ],
        "answer": 1,
        "university": "神戸女子大",
        "translation": "彼女はまだ到着していない。交通渋滞につかまったのかもしれない。",
        "hint": "文の意味を考える",
        "grammar_point": "may[might] have＋過去分詞",
        "explanation": "選択肢と(  ) の後ろの got から、〈助動詞＋have＋過去分詞〉の形が使われていると判断できる。「まだ到着していない」という1文目の文意から、後半は「交通渋滞につかまったのかもしれない」という意味だと考え、② might have を選ぶ。〈may[might] have＋過去分詞〉は「…したかもしれない」を表す。",
        "engage_source": "Engage Ch.3 助動詞 Sec.17 Q65"
      },
      {
        "id": "ch03_q066",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Since they left very early, they (   ) in Paris by now.",
        "easy_sentence": "Since they left very early, they (   ) in Paris by now.",
        "choices": [
          "will arrive",
          "arrive",
          "can arrive",
          "should have arrived"
        ],
        "answer": 3,
        "university": "芝浦工業大",
        "translation": "彼らはとても早く出発したのだから、もうパリに着いたはずだ。",
        "hint": "by now に注目",
        "grammar_point": "should have＋過去分詞",
        "explanation": "前半の「とても早く出発したのだから」から、後半は「もうパリに着いたはずだ」という推測を述べていると考えられる。さらに by now「今ごろはもう」から、後半は「もうパリに着いただろう」という推測を述べていると考えられる。「…したはずだ」という完了の推量は〈should have＋過去分詞〉で表すので、④が正解。",
        "engage_source": "Engage Ch.3 助動詞 Sec.17 Q66"
      },
      {
        "id": "ch03_q067",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I forgot to tell you about the change in the schedule. I (   ) you sooner.",
        "easy_sentence": "I forgot to tell you about the change in the schedule. I (   ) you sooner.",
        "choices": ["must have told", "should have told", "could have told", "would have told"],
        "answer": 1,
        "university": "東洋大",
        "translation": "スケジュールの変更について伝えるのを忘れた。もっと早くあなたに伝えるべきだったのに。",
        "hint": "文の意味を考える",
        "grammar_point": "should have＋過去分詞",
        "explanation": "文末の do so は tell you about the change in the schedule のことで、but 以下は「しかし、私はスケジュールの変更について伝えるのを忘れた」の意味。つまり、前半は、「あなたに伝えるべきだったのに」の意味になるようにすればいいので、② should have を入れる。〈should have＋過去分詞〉は「…すべきだったのに（実際はしなかった）」の意味で、後悔の気持ちを表す。",
        "engage_source": "Engage Ch.3 助動詞 Sec.17 Q67"
      },
      {
        "id": "ch03_q068",
        "type": "4択",
        "difficulty": 2,
        "sentence": "London was really wonderful, but I (   ) so much money there.",
        "easy_sentence": "London was really wonderful, but I (   ) so much money there.",
        "choices": ["should not have spent", "might not have spent", "could not have spent", "would not have spent"],
        "answer": 0,
        "university": "獨協大",
        "translation": "ロンドンは本当にすばらしかった。しかし、そんなにお金を使うべきではなかったのに。",
        "hint": "文の意味を考える",
        "grammar_point": "should not have＋過去分詞",
        "explanation": "前半の動詞が was で、there はロンドンを指しているので、後半も過去のことについて述べていることとわかる。「ロンドンは本当にすばらしかった」に対し、「しかし」と続いているので、マイナスな内容になるはずである。③ should not have spent を入れれば「そんなにお金を使うべきではなかったのに（実際には使ってしまった）」となる。〈should not have＋過去分詞〉は「…すべきではなかったのに（実際はした）」という後悔を表す。",
        "engage_source": "Engage Ch.3 助動詞 Sec.17 Q68"
      },
      {
        "id": "ch03_q069",
        "type": "4択",
        "difficulty": 3,
        "sentence": "It is quite natural that you (   ) be offended by his bad manners.",
        "easy_sentence": "It is quite natural that you (   ) be offended by his bad manners.",
        "choices": [
          "can",
          "must",
          "ought to",
          "should"
        ],
        "answer": 3,
        "university": "日本大",
        "translation": "あなたが彼のマナーの悪さに腹を立てるのもまったく当然だ。",
        "hint": "natural「当然な」に注目",
        "grammar_point": "should",
        "explanation": "It is natural that ... は、「…するのも当然だ」という判断を表す表現。感情や判断を表す形容詞を用いた〈It is＋形容詞＋that ...〉では、that 節中の動詞は should do の形をとるので、④ should が正解。",
        "engage_source": "Engage Ch.3 助動詞 Sec.18 Q69"
      },
      {
        "id": "ch03_q070",
        "type": "4択",
        "difficulty": 3,
        "sentence": "明日は必ず時間を守ってくれ。\nIt is essential that you (   ) on time tomorrow.",
        "easy_sentence": "明日は必ず時間を守ってくれ。\nIt is essential that you (   ) on time tomorrow.",
        "choices": [
          "to be",
          "have been",
          "be",
          "were"
        ],
        "answer": 2,
        "university": "成城大",
        "translation": "",
        "hint": "essential「不可欠な」に注目",
        "grammar_point": "should",
        "explanation": "It is essential that ... は「…することは不可欠だ」の意味。〈It is＋形容詞＋that ...〉では、that 節中の動詞は should do の形をとるが、should が省略されて動詞の原形だけが残ることがある。③ be が正解。",
        "engage_source": "Engage Ch.3 助動詞 Sec.18 Q70"
      },
      {
        "id": "ch03_q071",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I'd (   ) stay here than go out.",
        "easy_sentence": "I'd (   ) stay here than go out.",
        "choices": [
          "rather",
          "better",
          "more",
          "well"
        ],
        "answer": 0,
        "university": "専修大",
        "translation": "私は外出するよりもここにいたい。",
        "hint": "I'd = I would",
        "grammar_point": "would rather",
        "explanation": "I'd は I would の短縮形。would rather do で「むしろ…したい」の意味。① rather が正解。",
        "engage_source": "Engage Ch.3 助動詞 Sec.19 Q71"
      },
      {
        "id": "ch03_q072",
        "type": "4択",
        "difficulty": 3,
        "sentence": "A: Do you want to go to Hakone by bus or train?\nB: I (   ) by train.",
        "easy_sentence": "A: Do you want to go to Hakone by bus or train?\nB: I (   ) by train.",
        "choices": [
          "will have gone",
          "would rather go",
          "would rather to go",
          "would rather have gone"
        ],
        "answer": 1,
        "university": "東京電機大",
        "translation": "A：箱根にはバスで行きたい？ それとも電車で？ B：電車で行きたいな。",
        "hint": "would rather の後は動詞の原形",
        "grammar_point": "would rather do",
        "explanation": "would rather do「むしろ…したい」の形。would rather の後は動詞の原形を置く。② would rather go が正解。",
        "engage_source": "Engage Ch.3 助動詞 Sec.19 Q72"
      },
      {
        "id": "ch03_q073",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I (   ) go to the party, as I have a slight fever.",
        "easy_sentence": "I (   ) go to the party, as I have a slight fever.",
        "choices": [
          "would no rather",
          "would not rather",
          "not would rather",
          "would rather not"
        ],
        "answer": 3,
        "university": "関西学院大",
        "translation": "少し熱があるので、パーティーには行きたくない。",
        "hint": "not の位置",
        "grammar_point": "would rather not do",
        "explanation": "would rather の否定形は would rather not do。④ would rather not が正解。",
        "engage_source": "Engage Ch.3 助動詞 Sec.19 Q73"
      },
      {
        "id": "ch03_q075",
        "type": "4択",
        "difficulty": 3,
        "sentence": "僕たちは彼の滑稽な変装を見て笑わないではいられなかった。\nWe (   ) laughing at his funny disguise.",
        "easy_sentence": "僕たちは彼の滑稽な変装を見て笑わないではいられなかった。\nWe (   ) laughing at his funny disguise.",
        "choices": [
          "could not but",
          "could not help",
          "could not feel like",
          "could not worth"
        ],
        "answer": 1,
        "university": "成城大",
        "translation": "",
        "hint": "could not, laughing に注目",
        "grammar_point": "can't[cannot] help doing",
        "explanation": "「…せずにはいられない」は can't[cannot] help doing で表す。",
        "engage_source": "Engage Ch.3 助動詞 Sec.20 Q75"
      },
      {
        "id": "ch03_q076",
        "type": "4択",
        "difficulty": 3,
        "sentence": "A: When I was crossing the street, a car suddenly drove by and I nearly got run over.\nB: Really? You (   ) be too careful when you cross the street.",
        "easy_sentence": "A: When I was crossing the street, a car suddenly drove by and I nearly got run over.\nB: Really? You (   ) be too careful when you cross the street.",
        "choices": [
          "can't",
          "mustn't",
          "shouldn't",
          "won't"
        ],
        "answer": 0,
        "university": "学習院大",
        "translation": "A：道を渡っていたら、急に車が来て危うくひかれそうになったわ。 B：本当？ 通りを渡るときはいくら注意をしてもしすぎることはないよ。",
        "hint": "too careful に注目",
        "grammar_point": "can't[cannot] do too ...",
        "explanation": "空所のあとに be too careful「注意をしすぎる」とあるので、① can't を入れれば、can't be too careful で「いくら注意をしてもしすぎることはない」という意味になる。can't[cannot] do too ... は「いくら…してもしすぎることはない」という意味を表し、too のあとには形容詞か副詞が続く。",
        "engage_source": "Engage Ch.3 助動詞 Sec.20 Q76"
      },
      {
        "id": "ch03_q077",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Soccer (   ) be the world's most popular sport; however, baseball is more popular in the U.S.",
        "easy_sentence": "Soccer (   ) be the world's most popular sport; however, baseball is more popular in the U.S.",
        "choices": [
          "may well",
          "should well",
          "can well",
          "must well"
        ],
        "answer": 0,
        "university": "工学院大",
        "translation": "サッカーはたぶん世界で最も人気のあるスポーツだろう。しかし、アメリカでは野球のほうが人気がある。",
        "hint": "〈助動詞＋well〉に注目",
        "grammar_point": "may[might] well do",
        "explanation": "選択肢が〈助動詞＋well〉になっていることに注目。① may well「たぶん…だろう」を入れれば文意が通る。",
        "engage_source": "Engage Ch.3 助動詞 Sec.20 Q77"
      }
    ]
  },
  {
    "day": 4,
    "title": "Day 4: 仮定法",
    "description": "",
    "completed": false,
    "questions": [
      {
        "id": "ch04_q080",
        "type": "4択",
        "difficulty": 1,
        "sentence": "If I (   ) in Tokyo, I would go to Harajuku at least once a week.",
        "easy_sentence": "If I (   ) in Tokyo, I would go to Harajuku at least once a week.",
        "choices": [
          "lived",
          "lives",
          "has lived",
          "had lived"
        ],
        "answer": 0,
        "university": "杏林大",
        "translation": "東京に住んでいれば、私は少なくとも週に1回は原宿に行くのに。",
        "hint": "would go に注目",
        "grammar_point": "仮定法過去",
        "explanation": "If「もし…なら」があり、主節に would があるので、仮定法過去の文だと判断する。仮定法過去の if 節では、動詞は過去形を用いるので、① lived が正解。仮定法過去は現在の事実に反することや、実現の可能性が低い願望などを表す表現。動詞は過去形を用いるが、現在のことを述べているという点に注意。",
        "engage_source": "Engage Ch.4 仮定法 Sec.21 Q80"
      },
      {
        "id": "ch04_q081",
        "type": "4択",
        "difficulty": 1,
        "sentence": "If I (   ) you, I wouldn't believe even a word of what she said.",
        "easy_sentence": "If I (   ) you, I wouldn't believe even a word of what she said.",
        "choices": [
          "will be",
          "were",
          "am",
          "be"
        ],
        "answer": 1,
        "university": "芝浦工業大",
        "translation": "私があなたなら、私は彼女の言ったことなど一言だって信じないだろうに。",
        "hint": "wouldn't believe に注目",
        "grammar_point": "if S were",
        "explanation": "主節の動詞が wouldn't believe なので、仮定法過去を用いた文だと判断する。仮定法過去の if 節中の動詞が be 動詞のときは、原則として主語に関係なく were を使うので、②が正解。口語では was を用いることもあるが、「もし私があなたなら」と言うときは必ず if I were you と were を用いる。",
        "engage_source": "Engage Ch.4 仮定法 Sec.21 Q81"
      },
      {
        "id": "ch04_q082",
        "type": "4択",
        "difficulty": 1,
        "sentence": "If I were you, I (   ) this job because I know you're interested in teaching math.",
        "easy_sentence": "If I were you, I (   ) this job because I know you're interested in teaching math.",
        "choices": [
          "will take",
          "would take",
          "took",
          "had taken"
        ],
        "answer": 1,
        "university": "東京電機大",
        "translation": "私があなたならこの仕事に就くでしょう。だって私はあなたが数学を教えることに興味をもっていることを知っているから。",
        "hint": "If I were you に注目",
        "grammar_point": "仮定法過去",
        "explanation": "if I were you は「もし私があなたなら」という仮定を表す仮定法過去を用いた表現なので、主節の動詞は〈助動詞の過去形＋動詞の原形〉にする。よって、② would take が正解。",
        "engage_source": "Engage Ch.4 仮定法 Sec.21 Q82"
      },
      {
        "id": "ch04_q083",
        "type": "4択",
        "difficulty": 1,
        "sentence": "It's already seven o'clock. If I had got up earlier, I (   ) the 6:30 express train.",
        "easy_sentence": "It's already seven o'clock. If I had got up earlier, I (   ) the 6:30 express train.",
        "choices": [
          "will have caught",
          "can catch",
          "could have caught",
          "will catch"
        ],
        "answer": 2,
        "university": "大東文化大",
        "translation": "もう7時だ。もっと早く起きていたら、私は6時30分の急行電車に乗れたのに。",
        "hint": "if 節の動詞が過去完了になっていることに注目",
        "grammar_point": "仮定法過去完了",
        "explanation": "if 節の動詞が had got up と過去完了になっているので、仮定法過去完了の文だと判断する。仮定法過去完了の主節には〈助動詞の過去形＋have＋過去分詞〉を使うので、③ could have caught が正解。",
        "engage_source": "Engage Ch.4 仮定法 Sec.21 Q83"
      },
      {
        "id": "ch04_q085",
        "type": "4択",
        "difficulty": 1,
        "sentence": "If I (   ) the seminar last year, I would be able to speak English more fluently now.",
        "easy_sentence": "If I (   ) the seminar last year, I would be able to speak English more fluently now.",
        "choices": [
          "had attended",
          "have attended",
          "should have attended",
          "were attending"
        ],
        "answer": 0,
        "university": "立教大",
        "translation": "去年セミナーに参加していたら、今ごろは英語をもっとスラスラと話せているだろうに。",
        "hint": "last year と now に注目",
        "grammar_point": "仮定法過去完了＋仮定法過去",
        "explanation": "主節に助動詞の過去形（would）が用いられているので、仮定法を用いた文だと考える。主節は、would be と now から現在の事実に反する内容を述べていることとわかる。しかし、if 節には last year があり、過去の事実に反する仮定を述べていると予想できるので、空所に入る動詞は仮定法過去完了の形（過去完了）でなければならない。よって、① had attended が正解。",
        "engage_source": "Engage Ch.4 仮定法 Sec.21 Q85"
      },
      {
        "id": "ch04_q086",
        "type": "4択",
        "difficulty": 1,
        "sentence": "What would happen if all the Antarctic ice (   )?",
        "easy_sentence": "What would happen if all the Antarctic ice (   )?",
        "choices": [
          "are melt",
          "were to melt",
          "will be melt",
          "melt to be"
        ],
        "answer": 1,
        "university": "東海大",
        "translation": "南極の氷がすべて溶けてしまったらどうなるだろう。",
        "hint": "would に注目",
        "grammar_point": "were to do",
        "explanation": "主節に would があることから、仮定法を用いた文だと考える。選択肢に melt があることから、if 節は「仮に南極の氷がすべて溶けてしまったら」という意味になるはず。「仮に A が…するようなことがあれば」という未来に関する実現性の低い仮定は if S were to do で表す。if 節に were to do を使う場合、主節は〈助動詞の過去形＋動詞の原形〉の形をとる。",
        "engage_source": "Engage Ch.4 仮定法 Sec.22 Q86"
      },
      {
        "id": "ch04_q087",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I know that you have to stay home tomorrow. But if you (   ) your mind, please call me.",
        "easy_sentence": "I know that you have to stay home tomorrow. But if you (   ) your mind, please call me.",
        "choices": [
          "changed",
          "should change",
          "will change",
          "would change"
        ],
        "answer": 1,
        "university": "天理大",
        "translation": "私は、明日あなたが家にいなければいけないとわかっています。でも万一、気が変わったら、私に電話してください。",
        "hint": "「気が変わる可能性」を考える",
        "grammar_point": "should",
        "explanation": "選択肢に change が含まれているので、if you (  ) your mind は「もしあなたの気が変わったら」という意味だと考えられる。最初の文で「あなたは明日家にいなければならない」と言っているのだから、気が変わる、つまり外出することになる可能性は低いはず。このような実現の可能性があまり高くない仮定は、if S should do「万一…なら」で表すので、②が正解。should は were to do（→ Q86）より実現の可能性が高いことを示す。",
        "engage_source": "Engage Ch.4 仮定法 Sec.22 Q87"
      },
      {
        "id": "ch04_q088",
        "type": "4択",
        "difficulty": 1,
        "sentence": "(   ) a little more time, I could have met him then.",
        "easy_sentence": "(   ) a little more time, I could have met him then.",
        "choices": [
          "Within",
          "With",
          "Give",
          "Take"
        ],
        "answer": 1,
        "university": "関西学院大",
        "translation": "もう少し時間があったら、私はそのとき彼に会うことができたろうに。",
        "hint": "could have met に注目",
        "grammar_point": "with",
        "explanation": "コンマのあとにある could have met を見て仮定法過去完了だと判断する。コンマより前の部分は「もう少し時間があれば」という意味だと考え、② With を選ぶ。with ... は if 節の代用として用いられ、「…があれば」という意味を表す。",
        "engage_source": "Engage Ch.4 仮定法 Sec.23 Q88"
      },
      {
        "id": "ch04_q090",
        "type": "4択",
        "difficulty": 1,
        "sentence": "(   ) their suggestion, we could not have completed our project in time for the festival.",
        "easy_sentence": "(   ) their suggestion, we could not have completed our project in time for the festival.",
        "choices": [
          "All but",
          "But for",
          "Due to",
          "Supposing"
        ],
        "answer": 1,
        "university": "立命館大",
        "translation": "彼らの提案がなかったら、私たちは祭りに間に合うようにプロジェクトを仕上げることができなかっただろう。",
        "hint": "could not have completed に注目",
        "grammar_point": "but for ...",
        "explanation": "could not have completed は仮定法過去完了で「…を仕上げられなかっただろう」という意味。コンマの前が「もし彼らの提案がなかったら」という仮定を表すとすれば文意が通るので、② But for ...「…がなければ」を選ぶ。",
        "engage_source": "Engage Ch.4 仮定法 Sec.23 Q90"
      },
      {
        "id": "ch04_q093",
        "type": "4択",
        "difficulty": 2,
        "sentence": "(   ) it a little warmer, I would go out for a walk.",
        "easy_sentence": "(   ) it a little warmer, I would go out for a walk.",
        "choices": [
          "Have been",
          "Had been",
          "Were",
          "Been"
        ],
        "answer": 2,
        "university": "日本大",
        "translation": "もう少し暖かければ散歩に出かけるのに。",
        "hint": "would go に注目",
        "grammar_point": "Were S ...",
        "explanation": "would go は〈助動詞の過去形＋動詞の原形〉なので、仮定法の可能性が高いが、英文にも選択肢にも if がない。そこで、if は省略されていると考える。if S were ... の if を省略すると、were S ... となるので、③が正解。",
        "engage_source": "Engage Ch.4 仮定法 Sec.24 Q93"
      },
      {
        "id": "ch04_q095",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Had I known that Peter was having financial problems, I (   ) him.",
        "easy_sentence": "Had I known that Peter was having financial problems, I (   ) him.",
        "choices": [
          "would help",
          "would have helped",
          "will help",
          "have helped"
        ],
        "answer": 1,
        "university": "南山大",
        "translation": "ピーターが経済的な問題を抱えていると知っていたら、私は彼を助けただろうに。",
        "hint": "Had I known に注目",
        "grammar_point": "Had S＋過去分詞 ...",
        "explanation": "Had I known は過去完了の疑問文の語順だが、文末に（?）がないので、倒置形だと判断する。仮定法過去完了の〈if＋S＋had＋過去分詞〉から if を省略すると、〈had＋S＋過去分詞〉の語順になる。仮定法過去完了の主節は〈助動詞の過去形＋have＋過去分詞〉の形だから、②が正解。",
        "engage_source": "Engage Ch.4 仮定法 Sec.24 Q95"
      },
      {
        "id": "ch04_q096",
        "type": "4択",
        "difficulty": 1,
        "sentence": "(   ) something happen, let us know immediately.",
        "easy_sentence": "(   ) something happen, let us know immediately.",
        "choices": [
          "Should",
          "If",
          "Were",
          "Had"
        ],
        "answer": 0,
        "university": "日本大",
        "translation": "万一何かが起こったら、すぐに私たちに知らせてください。",
        "hint": "happen＝原形に注目",
        "grammar_point": "Should S do ...",
        "explanation": "happen「起こる、生じる」の主語は something だから、本来なら happens となるはず。ところが実際には原形 happen になっている。ということは、前に助動詞があるはずだから、① Should が正解。if S should do（→ Q86）の if を省略すると、should S do の語順になる。",
        "engage_source": "Engage Ch.4 仮定法 Sec.24 Q96"
      },
      {
        "id": "ch04_q099",
        "type": "4択",
        "difficulty": 2,
        "sentence": "It rained heavily, (   ) I would have played tennis outside.",
        "easy_sentence": "It rained heavily, (   ) I would have played tennis outside.",
        "choices": [
          "then",
          "otherwise",
          "since",
          "because"
        ],
        "answer": 1,
        "university": "中央大",
        "translation": "雨が激しく降った。そうでなかったら、私は外でテニスをしただろうに。",
        "hint": "would have played に注目",
        "grammar_point": "otherwise",
        "explanation": "would have played は仮定法過去完了だが、if 節がない。また、if の省略（→ Q93, Q94）の語順でもない。② otherwise は「そうでなければ」という意味を表し、if 節の代わりに使うことができるので、これが正解。otherwise を if 節で書きかえれば、if it had not rained heavily となる。",
        "engage_source": "Engage Ch.4 仮定法 Sec.25 Q99"
      },
      {
        "id": "ch04_q100",
        "type": "4択",
        "difficulty": 2,
        "sentence": "(   ) her talk, you would think that she was an actress.",
        "easy_sentence": "(   ) her talk, you would think that she was an actress.",
        "choices": [
          "Hear",
          "Heard",
          "In hearing",
          "To hear"
        ],
        "answer": 3,
        "university": "上智大",
        "translation": "彼女が話すのを聞けば、彼女が女優だったと思うだろう。",
        "hint": "would think に注目",
        "grammar_point": "不定詞",
        "explanation": "would think は仮定法過去の形だが、if 節がない。不定詞は if 節の代わりに仮定の意味を表すことができるので、④ To hear を入れれば、「彼女が話すのを聞けば」という意味を表せる。To hear her talk を if 節で書きかえれば、If you heard her talk となる。",
        "engage_source": "Engage Ch.4 仮定法 Sec.25 Q100"
      },
      {
        "id": "ch04_q102",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I wish I (   ) enough money to buy the house around this time last year.",
        "easy_sentence": "I wish I (   ) enough money to buy the house around this time last year.",
        "choices": [
          "had",
          "could have",
          "had had",
          "should have"
        ],
        "answer": 2,
        "university": "明治大",
        "translation": "去年の今ごろ、私にその家を買えるだけのお金があったらよかったのに。",
        "hint": "wish, last year に注目",
        "grammar_point": "wish＋仮定法過去完了",
        "explanation": "wish と last year があるので、過去の事実に反する願望を述べる文だと判断する。過去の事実に反する願望は〈wish＋S＋had＋過去分詞（＝仮定法過去完了）〉で表すので、③ had had を選ぶ。",
        "engage_source": "Engage Ch.4 仮定法 Sec.26 Q102"
      },
      {
        "id": "ch04_q103",
        "type": "4択",
        "difficulty": 2,
        "sentence": "When I was a child, the man treated me as if I (   ) his own daughter.",
        "easy_sentence": "When I was a child, the man treated me as if I (   ) his own daughter.",
        "choices": [
          "am",
          "have been",
          "were",
          "will be"
        ],
        "answer": 2,
        "university": "近畿大",
        "translation": "私が子どものころ、その男は私を彼自身の娘であるかのように扱った。",
        "hint": "as if に注目",
        "grammar_point": "as if＋仮定法過去",
        "explanation": "as if は〈as if＋仮定法〉で「まるで…のように」という意味を表す。as if 節の主語は I なので、仮定法過去なら were[was]、仮定法過去完了なら had been が入る。選択肢に③ were があるので、仮定法過去だと判断する。〈as if＋仮定法過去〉は主節の時制にかかわらず、その時点の事実に反することを表す。",
        "engage_source": "Engage Ch.4 仮定法 Sec.26 Q103"
      },
      {
        "id": "ch04_q104",
        "type": "4択",
        "difficulty": 2,
        "sentence": "He talks as if he (   ) to many foreign countries.",
        "easy_sentence": "He talks as if he (   ) to many foreign countries.",
        "choices": [
          "is",
          "had been",
          "have been",
          "were"
        ],
        "answer": 1,
        "university": "國學院大",
        "translation": "彼はまるで多くの外国に行ったことがあるかのように話す。",
        "hint": "as if に注目",
        "grammar_point": "as if＋仮定法過去完了",
        "explanation": "as if のあとには、仮定法過去、仮定法過去完了、直説法のいずれかがくる。空所の主語は he で動詞は be。② had been を入れると仮定法過去完了になり「まるで…だったかのように」、④ were を入れると仮定法過去で「まるで…のように」。「たくさんの外国に行ったことがある」かのように話すので、② had been が正解。",
        "engage_source": "Engage Ch.4 仮定法 Sec.26 Q104"
      },
      {
        "id": "ch04_q105",
        "type": "4択",
        "difficulty": 3,
        "sentence": "(   ) I knew her phone number!",
        "easy_sentence": "(   ) I knew her phone number!",
        "choices": [
          "As to",
          "If only",
          "If ever",
          "In that"
        ],
        "answer": 1,
        "university": "摂南大",
        "translation": "彼女の電話番号を知っていればなあ！",
        "hint": "knew に注目",
        "grammar_point": "If only＋仮定法",
        "explanation": "knew は過去形で仮定法過去。② If only を入れて「彼女の電話番号を知っていればなあ！」とする。If only＋S＋動詞の過去形で「…すればなあ」という強い願望を表す。",
        "engage_source": "Engage Ch.4 仮定法 Sec.27 Q105"
      },
      {
        "id": "ch04_q106",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I would rather you (   ) here tomorrow.",
        "easy_sentence": "I would rather you (   ) here tomorrow.",
        "choices": [
          "stayed",
          "will stay",
          "are staying",
          "stay"
        ],
        "answer": 0,
        "university": "法政大",
        "translation": "明日あなたがここにいてくれるといいのだが。",
        "hint": "would rather のあとに主語 you がある",
        "grammar_point": "would rather＋S'＋仮定法過去",
        "explanation": "would rather のあとに you という主語があるので、〈would rather＋S'＋仮定法過去〉の形。「S' が…すればいいのだが」という願望を表す。① stayed が正解。",
        "engage_source": "Engage Ch.4 仮定法 Sec.27 Q106"
      },
      {
        "id": "ch04_q107",
        "type": "4択",
        "difficulty": 3,
        "sentence": "It is time the country (   ) environmental problems more seriously.",
        "easy_sentence": "It is time the country (   ) environmental problems more seriously.",
        "choices": [
          "take",
          "taken",
          "took",
          "will take"
        ],
        "answer": 2,
        "university": "明治大",
        "translation": "その国が環境問題をもっと真剣に受け止めてもよいころだ。",
        "hint": "It is time を見て仮定法過去を判断",
        "grammar_point": "It is time＋仮定法過去",
        "explanation": "It is time のあとに主語 the country がある。〈It is time＋S'＋動詞の過去形〉で「もう…してもよいころだ」を表す。③ took が正解。",
        "engage_source": "Engage Ch.4 仮定法 Sec.27 Q107"
      }
    ]
  },
  {
    "day": 5,
    "title": "Day 5: 不定詞 ＋ 動名詞",
    "description": "",
    "completed": false,
    "questions": [
      {
        "id": "ch05_q110",
        "type": "4択",
        "difficulty": 1,
        "sentence": "It was necessary (   ) me to stand up and speak out right away.",
        "easy_sentence": "It was necessary (   ) me to stand up and speak out right away.",
        "choices": [
          "for",
          "of",
          "to",
          "with"
        ],
        "answer": 0,
        "university": "宮崎大",
        "translation": "",
        "hint": "It was necessary / me to stand が続く",
        "grammar_point": "It is ... for＋人＋to do 〜",
        "explanation": "文頭に It was necessary があり／空所のあとに me to stand が続く。形式的に it を主語に置き、真の主語 to stand ... を後ろに置いている文。不定詞 to stand ... の意味上の主語は〈for＋人〉の形で表し、不定詞の前に置く。〈It is ... for＋人＋to do 〜.〉で「（人）が〜するのは…だ」の意味を表す。",
        "engage_source": "Engage Ch.5 不定詞 Sec.28 Q110"
      },
      {
        "id": "ch05_q116",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The data was analyzed in (   ) to develop their new medicine.",
        "easy_sentence": "The data was analyzed in (   ) to develop their new medicine.",
        "choices": [
          "case",
          "way",
          "fact",
          "order"
        ],
        "answer": 3,
        "university": "芝浦工業大",
        "translation": "",
        "hint": "in, to develop に注目",
        "grammar_point": "in order to do",
        "explanation": "（　）の前に in があり、後ろに不定詞があるので、④ order を入れれば in order to do「…するために」の形になり、「彼らの新薬を開発するために」という意味になる。その他の選択肢はどれも〈in＋名詞＋to do〉の形で意味を成す成句にならない。",
        "engage_source": "Engage Ch.5 不定詞 Sec.30 Q116"
      },
      {
        "id": "ch05_q118",
        "type": "4択",
        "difficulty": 1,
        "sentence": "You should leave home now (   ) miss your flight should there be a lot of traffic on the way to the airport.",
        "easy_sentence": "You should leave home now (   ) miss your flight should there be a lot of traffic on the way to the airport.",
        "choices": [
          "as you don't",
          "not because you",
          "not so as to",
          "so as not to"
        ],
        "answer": 3,
        "university": "中央大",
        "translation": "",
        "hint": "文の意味を考える",
        "grammar_point": "so as not to do",
        "explanation": "前半の「あなたはもう家を出るべきだ」と miss your flight「飛行機に乗り遅れる」をうまくつなげるには、「飛行機に乗り遅れないように」とすればよい。「…しないように」は so as not to do で表すので、④が正解。",
        "engage_source": "Engage Ch.5 不定詞 Sec.30 Q118"
      },
      {
        "id": "ch05_q119",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I ran to the station as fast as I could (   ) to miss the train.",
        "easy_sentence": "I ran to the station as fast as I could (   ) to miss the train.",
        "choices": [
          "as",
          "only",
          "until",
          "before"
        ],
        "answer": 1,
        "university": "関西学院大",
        "translation": "",
        "hint": "ran to the station と miss the train のつながりを考える",
        "grammar_point": "副詞用法（結果）",
        "explanation": "ran to the station「駅まで走った」と miss the train「電車に間に合わなかった」は、「走ったが、間に合わなかった」という意味でつながるはず。「結局…しただけだ」を表す only to do を使うと判断し、②を選ぶ。副詞用法の不定詞は「その結果…する」という意味を表す場合がある。特に、不本意な結果を表す場合は only をつけることが多い。",
        "engage_source": "Engage Ch.5 不定詞 Sec.30 Q119"
      },
      {
        "id": "ch05_q121",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I was surprised (   ) that she was badly injured in the accident.",
        "easy_sentence": "I was surprised (   ) that she was badly injured in the accident.",
        "choices": [
          "hear",
          "hearing",
          "to hear",
          "being heard"
        ],
        "answer": 2,
        "university": "大阪経済大",
        "translation": "",
        "hint": "surprised に注目",
        "grammar_point": "副詞用法（感情の原因）",
        "explanation": "surprised「驚いて」は感情を表す形容詞。〈感情を表す形容詞＋to do〉で「…して［したので］〜」という意味を表せるので、不定詞の③ to hear を選ぶ。surprised to hear で「…を聞いて驚いた」という意味。",
        "engage_source": "Engage Ch.5 不定詞 Sec.30 Q121"
      },
      {
        "id": "ch05_q122",
        "type": "4択",
        "difficulty": 1,
        "sentence": "It was careless (   ) you to lose your key.",
        "easy_sentence": "It was careless (   ) you to lose your key.",
        "choices": [
          "by",
          "of",
          "to",
          "with"
        ],
        "answer": 1,
        "university": "関西学院大",
        "translation": "",
        "hint": "careless に注目",
        "grammar_point": "副詞用法（判断の根拠）",
        "explanation": "careless「不注意な」は人の性質を表す形容詞。〈It is＋人の性質を表す形容詞＋of＋人＋to do ...〉で「…するとは（人）は〜だ」という意味を表すので、② of が正解。この構文では、不定詞は「その人はこういう性質である」と判断した根拠を示している。",
        "engage_source": "Engage Ch.5 不定詞 Sec.30 Q122"
      },
      {
        "id": "ch05_q125",
        "type": "4択",
        "difficulty": 2,
        "sentence": "A full report is expected (   ) later this month.",
        "easy_sentence": "A full report is expected (   ) later this month.",
        "choices": [
          "releasing",
          "to be released",
          "to have released",
          "to release"
        ],
        "answer": 1,
        "university": "立命館大",
        "translation": "",
        "hint": "選択肢にある release に注目",
        "grammar_point": "受動態の不定詞",
        "explanation": "be expected to do で「…する見込みだ」という意味。選択肢にある release は「…を公表する」の意味。主語が A full report「詳細な報告書」なので、release は「公表される」という意味の受動態になるはず。よって、受動態の不定詞〈to be＋過去分詞〉になっている② to be released が正解。",
        "engage_source": "Engage Ch.5 不定詞 Sec.31 Q125"
      },
      {
        "id": "ch05_q126",
        "type": "4択",
        "difficulty": 2,
        "sentence": "He seems (   ) rich when he was in his forties.",
        "easy_sentence": "He seems (   ) rich when he was in his forties.",
        "choices": [
          "that he has been",
          "that he was",
          "to be",
          "to have been"
        ],
        "answer": 3,
        "university": "立命館大",
        "translation": "",
        "hint": "文の意味を考える",
        "grammar_point": "完了形の不定詞",
        "explanation": "「彼は40代のときは裕福だったようだ」という文意だと判断する。過去のことについて「…したようだ」と言うときは〈seem to have＋過去分詞〉を使うので、④ to have been が正解。不定詞の（時）が述語動詞の（時）よりも前の場合は、完了形の不定詞〈to have＋過去分詞〉を使う。",
        "engage_source": "Engage Ch.5 不定詞 Sec.31 Q126"
      },
      {
        "id": "ch05_q127",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I saw the sun (   ) over the lake through my hotel room window.",
        "easy_sentence": "I saw the sun (   ) over the lake through my hotel room window.",
        "choices": [
          "rise",
          "risen",
          "rises",
          "rose"
        ],
        "answer": 0,
        "university": "近畿大",
        "translation": "",
        "hint": "the sun と rise の関係を考える",
        "grammar_point": "知覚動詞＋O＋do",
        "explanation": "知覚動詞 see は、〈see＋O＋do〉「O が…するのを見る」や〈see＋O＋分詞〉「O が…している［される］のを見る」の形をつくる。ここでは、the sun と rise の間に「太陽は昇る」という能動の関係が成り立つので、（　）には原形の① rise が入る。",
        "engage_source": "Engage Ch.5 不定詞 Sec.32 Q127"
      },
      {
        "id": "ch05_q128",
        "type": "4択",
        "difficulty": 2,
        "sentence": "One bee after another was seen (   ) out of a hole in the wall.",
        "easy_sentence": "One bee after another was seen (   ) out of a hole in the wall.",
        "choices": [
          "creep",
          "crept",
          "for creeping",
          "to creep"
        ],
        "answer": 3,
        "university": "日本大",
        "translation": "",
        "hint": "was seen に注目",
        "grammar_point": "〈知覚動詞＋O＋do〉の受動態",
        "explanation": "was seen は知覚動詞 saw の受動態。〈知覚動詞 see＋O＋do〉の受動態は to のある不定詞を用いて be seen to do の形で表すので、④ to creep が正解。",
        "engage_source": "Engage Ch.5 不定詞 Sec.32 Q128"
      },
      {
        "id": "ch05_q129",
        "type": "4択",
        "difficulty": 2,
        "sentence": "She made her daughter (   ) call her once a week.",
        "easy_sentence": "She made her daughter (   ) call her once a week.",
        "choices": [
          "to promise to",
          "promise to",
          "promising",
          "promising to"
        ],
        "answer": 1,
        "university": "亜細亜大",
        "translation": "",
        "hint": "使役動詞 make に注目",
        "grammar_point": "make＋O＋do",
        "explanation": "make は〈make＋O＋do〉の形で「O に…させる」という意味を表す。動詞 原形 promise が使われている②を選べば、「自分の娘に…約束させた」という意味になる。",
        "engage_source": "Engage Ch.5 不定詞 Sec.32 Q129"
      },
      {
        "id": "ch05_q130",
        "type": "4択",
        "difficulty": 2,
        "sentence": "My parents were really angry with me, and I was made (   ) never to come home so late again.",
        "easy_sentence": "My parents were really angry with me, and I was made (   ) never to come home so late again.",
        "choices": [
          "promise",
          "promised",
          "promising",
          "to promise"
        ],
        "answer": 3,
        "university": "天理大",
        "translation": "",
        "hint": "受動態 was made に注目",
        "grammar_point": "〈make＋O＋do〉の受動態",
        "explanation": "was made は「作られた」では意味が通じないから、使役動詞の受動態「…させられた」だと判断する。〈使役動詞 make＋O＋do〉の受動態は be made to do となるので、④ to promise が正解。原形不定詞が to のある不定詞に変わることに注意。",
        "engage_source": "Engage Ch.5 不定詞 Sec.32 Q130"
      },
      {
        "id": "ch05_q132",
        "type": "4択",
        "difficulty": 2,
        "sentence": "He is prepared to help you if you want him (   ).",
        "easy_sentence": "He is prepared to help you if you want him (   ).",
        "choices": [
          "do",
          "to",
          "it",
          "do it"
        ],
        "answer": 1,
        "university": "東京理科大",
        "translation": "",
        "hint": "want him に注目",
        "grammar_point": "代不定詞 to",
        "explanation": "〈want＋人＋to do〉で「（人）に…してほしい」という意味を表す。前に He is prepared to help you「あなたが彼に自分を助けてもらいたいのなら」とあるが、to help you は選択肢にない。そこで、help you が省略されたと考え、② to を選ぶ。同じ語句の繰り返しを避け、to do の do が省略されることがある。この to を代不定詞という。",
        "engage_source": "Engage Ch.5 不定詞 Sec.33 Q132"
      },
      {
        "id": "ch05_q133",
        "type": "4択",
        "difficulty": 2,
        "sentence": "The student went out of the room, though the teacher told him (   ).",
        "easy_sentence": "The student went out of the room, though the teacher told him (   ).",
        "choices": [
          "not to",
          "no to",
          "not do",
          "do not"
        ],
        "answer": 0,
        "university": "名古屋学院大",
        "translation": "",
        "hint": "told him に注目／選択肢に否定語と to がある",
        "grammar_point": "not to",
        "explanation": "選択肢に否定語と to があるので、〈tell＋人＋not to do〉「（人）に…しないように言う」の形を想定する。前半の文の「部屋を出ていった」が not to（出ていかないように）の内容。go out of the room の繰り返しを避けて not to だけ残す。① not to が正解。",
        "engage_source": "Engage Ch.5 不定詞 Sec.33 Q133"
      },
      {
        "id": "ch05_q136",
        "type": "4択",
        "difficulty": 3,
        "sentence": "It was not long before Paul (   ) to realize how serious the situation was.",
        "easy_sentence": "It was not long before Paul (   ) to realize how serious the situation was.",
        "choices": [
          "became",
          "came",
          "went",
          "turned"
        ],
        "answer": 1,
        "university": "東京国際大",
        "translation": "",
        "hint": "to realize に注目",
        "grammar_point": "come to do",
        "explanation": "空所のあとに to realize があるので、「…するようになる」を意味する come to do の形だと判断。② came が正解。It was not long before ...「まもなく…した」。",
        "engage_source": "Engage Ch.5 不定詞 Sec.35 Q136"
      },
      {
        "id": "ch05_q139",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I was (   ) pay attention to what he was saying.",
        "easy_sentence": "I was (   ) pay attention to what he was saying.",
        "choices": [
          "very busy to",
          "too busy to",
          "so busy that",
          "quite busy that"
        ],
        "answer": 1,
        "university": "駒澤大",
        "translation": "",
        "hint": "busy の程度に注目",
        "grammar_point": "too＋形容詞［副詞］＋to do",
        "explanation": "（　）の後ろに動詞句 pay attention to ...「…に注意を払う」があるので、that で終わる選択肢の③と④は入らないと判断する。〈too＋形容詞［副詞］＋to do〉「〜すぎて…できない」の形の② too busy to なら、「忙しすぎて注意を払えなかった」となるので、これが正解。",
        "engage_source": "Engage Ch.5 不定詞 Sec.36 Q139"
      },
      {
        "id": "ch05_q141",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Our English teacher is, so to (   ), a \"walking dictionary.\"",
        "easy_sentence": "Our English teacher is, so to (   ), a \"walking dictionary.\"",
        "choices": [
          "think",
          "talk",
          "hear",
          "speak"
        ],
        "answer": 3,
        "university": "西南学院大",
        "translation": "",
        "hint": "so to に注目",
        "grammar_point": "so to speak",
        "explanation": "so to（　）が挿入句になっていることに注目。④ so to speak「いわば」は、なじみの薄い用語や比喩的な表現の前に置く挿入句。",
        "engage_source": "Engage Ch.5 不定詞 Sec.36 Q141"
      },
      {
        "id": "ch05_q143",
        "type": "4択",
        "difficulty": 3,
        "sentence": "To (   ) matters (   ), he got pneumonia after breaking his leg.",
        "easy_sentence": "To (   ) matters (   ), he got pneumonia after breaking his leg.",
        "choices": [
          "give − pause",
          "take − bad",
          "make − worse",
          "put − double"
        ],
        "answer": 2,
        "university": "東京理科大",
        "translation": "",
        "hint": "To, matters に注目",
        "grammar_point": "to make matters worse",
        "explanation": "to make matters worse で「さらに悪いことに」という意味。make matters worse は〈make＋O＋C〉「O を C にする」の形（→ Q508）で、「事態をさらに悪くする」という意味。",
        "engage_source": "Engage Ch.5 不定詞 Sec.36 Q143"
      },
      {
        "id": "ch05_q144",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The president of our company is (   ) a speech at the party tomorrow.",
        "easy_sentence": "The president of our company is (   ) a speech at the party tomorrow.",
        "choices": [
          "deliver",
          "being delivered",
          "delivered",
          "to deliver"
        ],
        "answer": 3,
        "university": "国士舘大",
        "translation": "",
        "hint": "is, tomorrow に注目",
        "grammar_point": "be 動詞＋to do〈予定〉",
        "explanation": "動詞 is は現在形だが、文末に tomorrow があることに注目。〈be 動詞＋to do〉「…する予定だ」を使えば未来の予定を表すことができるので、④ to deliver が正解。予定を表す〈be 動詞＋to do〉は公式の予定などについて言う場合によく使われる。",
        "engage_source": "Engage Ch.5 不定詞 Sec.37 Q144"
      },
      {
        "id": "ch05_q145",
        "type": "4択",
        "difficulty": 3,
        "sentence": "If you are (   ) there before noon, you must start early in the morning.",
        "easy_sentence": "If you are (   ) there before noon, you must start early in the morning.",
        "choices": [
          "arrive",
          "being arrived",
          "arrived",
          "to arrive"
        ],
        "answer": 3,
        "university": "東邦大",
        "translation": "",
        "hint": "are, arrive に注目",
        "grammar_point": "be 動詞＋to do〈意図〉",
        "explanation": "（　）の直前に are があるので、原形の① arrive は入れられない。また、arrive は自動詞だから、受動態にならないので、②③も×。if 節中の〈be 動詞＋to do〉は「…したいと思う」という意図を表すので、④が正解。",
        "engage_source": "Engage Ch.5 不定詞 Sec.37 Q145"
      },
      {
        "id": "ch06_q146",
        "type": "4択",
        "difficulty": 1,
        "sentence": "(   ) too much chocolate can destroy your health.",
        "easy_sentence": "(   ) too much chocolate can destroy your health.",
        "choices": [
          "To eating",
          "Eating",
          "Eat",
          "With eating"
        ],
        "answer": 1,
        "university": "獨協大",
        "translation": "",
        "hint": "（　）に入る語のはたらきに注目",
        "grammar_point": "動名詞−主語",
        "explanation": "（　）too much chocolate が主語なので、（　）には名詞のはたらきをする語（句）が入る。動詞 eat に名詞のはたらきを持たせるには、不定詞か動名詞にすればよいので、動名詞の② Eating を選ぶ。",
        "engage_source": "Engage Ch.6 動名詞 Sec.38 Q146"
      },
      {
        "id": "ch06_q147",
        "type": "4択",
        "difficulty": 1,
        "sentence": "How about (   ) a short break before starting the next meeting?",
        "easy_sentence": "How about (   ) a short break before starting the next meeting?",
        "choices": [
          "take",
          "taking",
          "I take",
          "to take"
        ],
        "answer": 1,
        "university": "芝浦工業大",
        "translation": "",
        "hint": "about に注目",
        "grammar_point": "動名詞−前置詞の目的語",
        "explanation": "空所の前に前置詞 about があり、空所には前置詞の目的語を入れるので、名詞のはたらきをする動名詞② taking を入れる。\n《ココも注目》How about ...?「…するのはどうですか」→ Q1028",
        "engage_source": "Engage Ch.6 動名詞 Sec.38 Q147"
      },
      {
        "id": "ch06_q148",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Jim's parents don't like the idea of (   ) part-time.",
        "easy_sentence": "Jim's parents don't like the idea of (   ) part-time.",
        "choices": [
          "he working",
          "him to work",
          "his working",
          "to work"
        ],
        "answer": 2,
        "university": "東海大",
        "translation": "",
        "hint": "選択肢の代名詞に注目",
        "grammar_point": "動名詞の意味上の主語",
        "explanation": "（　）は of の目的語なので、動名詞が入る。動名詞が使われているのは①と③。working の前に he や his という代名詞があることに注目。代名詞を動名詞の意味上の主語にするときは、所有格か目的格を使うので、③ his working が正解。his working で「彼が働くこと」という意味。\n《一問に確認》動名詞の意味上の主語が名詞の場合には、所有格かそのままの形を用いる。",
        "engage_source": "Engage Ch.6 動名詞 Sec.38 Q148"
      },
      {
        "id": "ch06_q149",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The father insists on his children (   ) in the street.",
        "easy_sentence": "The father insists on his children (   ) in the street.",
        "choices": [
          "not playing",
          "not to play",
          "having not played",
          "having not to play"
        ],
        "answer": 0,
        "university": "武蔵野美術大",
        "translation": "",
        "hint": "insist の語法に注目",
        "grammar_point": "動名詞の否定形",
        "explanation": "insist は insist on doing で「…することを要求［主張］する」という意味を表す。選択肢には not があるので、「…しないことを要求する」の意味になるとわかる。動名詞の否定形は not doing で表すので、①が正解。\n《ココも注目》空所の前にある his children は、動名詞の意味上の主語。→ Q148\n〈意味上の主語＋not doing〉の語順に注意。",
        "engage_source": "Engage Ch.6 動名詞 Sec.39 Q149"
      },
      {
        "id": "ch06_q152",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I'm looking forward to (   ) my old classmates tomorrow at our elementary school reunion.",
        "easy_sentence": "I'm looking forward to (   ) my old classmates tomorrow at our elementary school reunion.",
        "choices": [
          "meet",
          "meeting",
          "have met",
          "be meeting"
        ],
        "answer": 1,
        "university": "南山大",
        "translation": "",
        "hint": "looking forward to に注目",
        "grammar_point": "look forward to doing",
        "explanation": "look forward to doing で「…するのを楽しみに待つ」の意味。",
        "engage_source": "Engage Ch.6 動名詞 Sec.40 Q152"
      },
      {
        "id": "ch06_q153",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I am used to (   ) presentations in English.",
        "easy_sentence": "I am used to (   ) presentations in English.",
        "choices": [
          "be making",
          "have made",
          "make",
          "making"
        ],
        "answer": 3,
        "university": "宮崎大",
        "translation": "",
        "hint": "am used to に注目",
        "grammar_point": "be used to doing",
        "explanation": "be used to doing で「…するのに慣れている」の意味。同じ意味は be accustomed to doing でも表せる。",
        "engage_source": "Engage Ch.6 動名詞 Sec.40 Q153"
      },
      {
        "id": "ch06_q154",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Their children are not accustomed to (   ) up early in the morning.",
        "easy_sentence": "Their children are not accustomed to (   ) up early in the morning.",
        "choices": [
          "gotten",
          "get",
          "getting",
          "have gotten"
        ],
        "answer": 2,
        "university": "名桜大",
        "translation": "",
        "hint": "are not accustomed to に注目",
        "grammar_point": "be accustomed to doing",
        "explanation": "be accustomed to doing で「…するのに慣れている」の意味。",
        "engage_source": "Engage Ch.6 動名詞 Sec.40 Q154"
      },
      {
        "id": "ch06_q155",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The participants objected to (   ) like children.",
        "easy_sentence": "The participants objected to (   ) like children.",
        "choices": [
          "be treated",
          "being treated",
          "have treated",
          "treat"
        ],
        "answer": 1,
        "university": "立命館大",
        "translation": "",
        "hint": "objected to に注目",
        "grammar_point": "object to doing",
        "explanation": "object to doing で「…することに反対する」の意味。treat は「…を扱う」の意味。（　）の後ろに treat の目的語がないので、「扱われる」という受動の意味を表すと判断し、動名詞の受動態（→ Q150）の② being treated を選ぶ。",
        "engage_source": "Engage Ch.6 動名詞 Sec.40 Q155"
      },
      {
        "id": "ch06_q156",
        "type": "4択",
        "difficulty": 1,
        "sentence": "What do you say (   ) out for lunch today?",
        "easy_sentence": "What do you say (   ) out for lunch today?",
        "choices": [
          "go",
          "to go",
          "to going",
          "to have gone"
        ],
        "answer": 2,
        "university": "日本大",
        "translation": "",
        "hint": "What do you say に注目",
        "grammar_point": "What do you say to doing?",
        "explanation": "What do you say to doing? で「…するのはどうですか」の意味。",
        "engage_source": "Engage Ch.6 動名詞 Sec.40 Q156"
      },
      {
        "id": "ch06_q158",
        "type": "4択",
        "difficulty": 2,
        "sentence": "He was not listening to me, so it was (   ) telling him what happened today.",
        "easy_sentence": "He was not listening to me, so it was (   ) telling him what happened today.",
        "choices": [
          "no good",
          "not good at",
          "no better for",
          "had better not"
        ],
        "answer": 0,
        "university": "福岡大",
        "translation": "",
        "hint": "it was, telling に注目",
        "grammar_point": "it is no good doing",
        "explanation": "文の前半は「彼は私の言うことを聞いていなかった」の意味で、後半は「だから、今日起こったことを彼に…」と続く。it is no good doing で「…してもむだだ」の意味を表すので、①を選ぶ。",
        "engage_source": "Engage Ch.6 動名詞 Sec.41 Q158"
      },
      {
        "id": "ch06_q159",
        "type": "4択",
        "difficulty": 2,
        "sentence": "There is no (   ) in doing a job if you don't do it properly.",
        "easy_sentence": "There is no (   ) in doing a job if you don't do it properly.",
        "choices": [
          "blame",
          "business",
          "fear",
          "point"
        ],
        "answer": 3,
        "university": "專修大",
        "translation": "",
        "hint": "There is no, in doing に注目",
        "grammar_point": "There is no point in doing.",
        "explanation": "There is no point in doing で「…してもむだだ」という意味。前置詞 in は省略されることもある。point の代わりに use や good, sense を使っても同じ意味を表す。",
        "engage_source": "Engage Ch.6 動名詞 Sec.41 Q159"
      },
      {
        "id": "ch06_q160",
        "type": "4択",
        "difficulty": 2,
        "sentence": "The city is known for its historical buildings, which are well worth (   ).",
        "easy_sentence": "The city is known for its historical buildings, which are well worth (   ).",
        "choices": [
          "visit",
          "visited",
          "visiting",
          "visitor"
        ],
        "answer": 2,
        "university": "秋田県立大",
        "translation": "",
        "hint": "worth に注目",
        "grammar_point": "worth doing",
        "explanation": "worth は「価値がある」という意味の前置詞で、後ろに名詞または動名詞を続けて「…の［する］価値がある」という意味を表す。よって、③ visiting が正解。① visit は名詞とも考えられるが、その場合は worth a visit と冠詞が必要。",
        "engage_source": "Engage Ch.6 動名詞 Sec.42 Q160"
      },
      {
        "id": "ch06_q162",
        "type": "4択",
        "difficulty": 2,
        "sentence": "David was busy (   ) his mother in the yard.",
        "easy_sentence": "David was busy (   ) his mother in the yard.",
        "choices": [
          "to help",
          "helped",
          "helping",
          "help"
        ],
        "answer": 2,
        "university": "青山学院大",
        "translation": "",
        "hint": "was busy に注目",
        "grammar_point": "be busy (in) doing",
        "explanation": "前に was busy があることに注目。be busy doing で「…するのに忙しい」という意味を表すので、③ helping が正解。doing の前に前置詞 in を置くこともある。",
        "engage_source": "Engage Ch.6 動名詞 Sec.42 Q162"
      },
      {
        "id": "ch06_q163",
        "type": "4択",
        "difficulty": 2,
        "sentence": "While in New York, we had a lot of difficulty (   ) a parking place.",
        "easy_sentence": "While in New York, we had a lot of difficulty (   ) a parking place.",
        "choices": [
          "finding",
          "to find",
          "searching",
          "to search"
        ],
        "answer": 0,
        "university": "成城大",
        "translation": "",
        "hint": "had a lot of difficulty に注目",
        "grammar_point": "have difficulty (in) doing",
        "explanation": "have difficulty doing で「…するのに苦労する」という意味を表す。doing の前に前置詞 in を置くこともある。\n《語注》① search を「…をさがす」の意味で用いる場合は、search for ... の形になる。",
        "engage_source": "Engage Ch.6 動名詞 Sec.42 Q163"
      },
      {
        "id": "ch06_q165",
        "type": "4択",
        "difficulty": 2,
        "sentence": "(   ) of the man's death, she burst into tears.",
        "easy_sentence": "(   ) of the man's death, she burst into tears.",
        "choices": [
          "Of hearing the news",
          "On hearing the news",
          "To hearing the news",
          "With hearing the news"
        ],
        "answer": 1,
        "university": "国士舘大",
        "translation": "",
        "hint": "前置詞に注目",
        "grammar_point": "on doing",
        "explanation": "on doing は「…するとすぐに」という意味を表すので、②を入れれば「その男性が亡くなったという知らせを聞くとすぐに」という意味になる。\n《ココも注目》on doing「…するとすぐに」は〈as soon as＋S'＋V'...〉（→ Q353）で書きかえられる。\n《一問に確認》in doing は「…している間に」の意味。",
        "engage_source": "Engage Ch.6 動名詞 Sec.43 Q165"
      },
      {
        "id": "ch06_q166",
        "type": "4択",
        "difficulty": 2,
        "sentence": "修理にどのくらい時間がかかるかは言えない。\nThere is (   ) the repairs will take.",
        "easy_sentence": "修理にどのくらい時間がかかるかは言えない。\nThere is (   ) the repairs will take.",
        "choices": [
          "telling how long no",
          "how long telling no",
          "no telling how long",
          "telling no how long"
        ],
        "answer": 2,
        "university": "駒澤大",
        "translation": "",
        "hint": "There is がある",
        "grammar_point": "There is no doing.",
        "explanation": "There is が文頭にあるので、「…できない」は There is no doing. を用いて表す。telling の目的語にあたるのは疑問詞節 how long the repairs will take。",
        "engage_source": "Engage Ch.6 動名詞 Sec.43 Q166"
      },
      {
        "id": "ch06_q167",
        "type": "4択",
        "difficulty": 2,
        "sentence": "It (   ) without saying that anyone riding a motorcycle should wear a helmet.",
        "easy_sentence": "It (   ) without saying that anyone riding a motorcycle should wear a helmet.",
        "choices": [
          "calls",
          "goes",
          "takes",
          "moves"
        ],
        "answer": 1,
        "university": "獨協大",
        "translation": "",
        "hint": "It, without saying that に注目",
        "grammar_point": "It goes without saying that S'＋V'...",
        "explanation": "〈It goes without saying that S'＋V'...〉で「…は言うまでもない」という意味。\n《ココも注目》独立不定詞の needless to say（→ p.078, List 23）を用いて書きかえることができる。",
        "engage_source": "Engage Ch.6 動名詞 Sec.43 Q167"
      }
    ]
  },
  {
    "day": 6,
    "title": "Day 6: 分詞",
    "description": "",
    "completed": false,
    "questions": [
      {
        "id": "ch07_q168",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Bill looked at the (   ) child.",
        "easy_sentence": "Bill looked at the (   ) child.",
        "choices": [
          "slept",
          "sleeping",
          "to sleep",
          "sleep"
        ],
        "answer": 1,
        "university": "大阪学院大",
        "translation": "",
        "hint": "sleep と child の関係に注目",
        "grammar_point": "現在分詞の前置修飾",
        "explanation": "（　）に入る動詞 sleep と child は、「子どもは眠っている」という能動の関係になる。能動の関係なら現在分詞を使うので、② sleeping が正解。分詞が1語で名詞を修飾する場合は、分詞は名詞の前に置く。",
        "engage_source": "Engage Ch.7 分詞 Sec.43 Q168"
      },
      {
        "id": "ch07_q169",
        "type": "4択",
        "difficulty": 1,
        "sentence": "(   ) is handy when you want to add some flavor to the meal you're cooking.",
        "easy_sentence": "(   ) is handy when you want to add some flavor to the meal you're cooking.",
        "choices": [
          "Dried garlic",
          "Drying garlic",
          "Garlic dried",
          "Garlic which is drying"
        ],
        "answer": 0,
        "university": "九州ルーテル学院大",
        "translation": "",
        "hint": "garlic と dry の関係に注目",
        "grammar_point": "過去分詞の前置修飾",
        "explanation": "文の意味を考えると、「乾燥ニンニクは便利だ」ということ。garlic と dry には「ニンニクは乾かされる」という受動の関係があるので、過去分詞 dried を用いる。分詞1語で名詞を修飾する場合は、名詞の前に置くので、①が正解。",
        "engage_source": "Engage Ch.7 分詞 Sec.43 Q169"
      },
      {
        "id": "ch07_q170",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The (   ) leaves were piled up under the tree.",
        "easy_sentence": "The (   ) leaves were piled up under the tree.",
        "choices": [
          "falling",
          "fell",
          "fallen",
          "felt"
        ],
        "answer": 2,
        "university": "東洋大",
        "translation": "",
        "hint": "the leaves と fall の関係に注目",
        "grammar_point": "完了を表す過去分詞",
        "explanation": "were piled up under the tree は「木の根元に積み上げられていた」という意味だから、主語の The（　）leaves は「落ち葉」という意味だと判断する。「落ちた葉」は「落ちた」と考え、fall の過去分詞③ fallen を使って fallen leaves と表す。fall「落ちる」が自動詞であることに注意。自動詞は受動態にできないので、名詞を修飾する自動詞の過去分詞は完了の意味を表す。",
        "engage_source": "Engage Ch.7 分詞 Sec.43 Q170"
      },
      {
        "id": "ch07_q171",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The passengers (   ) from Paris to Sydney must go to the transit area in Terminal A as soon as possible.",
        "easy_sentence": "The passengers (   ) from Paris to Sydney must go to the transit area in Terminal A as soon as possible.",
        "choices": [
          "are traveling",
          "travel",
          "traveled",
          "traveling"
        ],
        "answer": 3,
        "university": "近畿大",
        "translation": "",
        "hint": "the passengers と travel の関係に注目",
        "grammar_point": "現在分詞の後置修飾",
        "explanation": "述語動詞は must go なので、それよりも前の部分が主部。（　）from Paris to Sydney が後ろから The passengers を修飾し、「パリからシドニーへ行く乗客」という意味になると考える。the passengers「乗客」と travel「進む、行く」の間には、「乗客は行く」という能動の意味関係が成り立つので、現在分詞の④ traveling が正解。",
        "engage_source": "Engage Ch.7 分詞 Sec.44 Q171"
      },
      {
        "id": "ch07_q172",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The exam (   ) to students in the reading class was too hard.",
        "easy_sentence": "The exam (   ) to students in the reading class was too hard.",
        "choices": [
          "giving",
          "given",
          "which gave",
          "that given"
        ],
        "answer": 1,
        "university": "鎮南大",
        "translation": "",
        "hint": "the exam と give の関係に注目",
        "grammar_point": "過去分詞の後置修飾",
        "explanation": "述語動詞は was なので、それよりも前の部分が主部。（　）to students in the reading class が後ろから The exam を修飾して「講読の授業で生徒たちに課された試験」という意味になると判断する。The exam と give は「試験は課された」という受動の関係になるので、過去分詞の② given が正解。",
        "engage_source": "Engage Ch.7 分詞 Sec.44 Q172"
      },
      {
        "id": "ch07_q174",
        "type": "4択",
        "difficulty": 1,
        "sentence": "She felt (   ) by her parents' kind words.",
        "easy_sentence": "She felt (   ) by her parents' kind words.",
        "choices": [
          "to encourage",
          "encouraged",
          "encouraging",
          "encourage"
        ],
        "answer": 1,
        "university": "日本大",
        "translation": "",
        "hint": "she と encourage の関係に注目",
        "grammar_point": "SVC（＝分詞）",
        "explanation": "feel の直後に不定詞や動詞の原形がくることはないので、②か③のどちらかが正解。SVC（＝分詞）の構文では、V を be 動詞に置きかえて、現在分詞と過去分詞のどちらを入れれば文が成り立つかを考える。encouraging の後ろに「誰を励ましているのか」を示す目的語がないから、She was encouraging「彼女は励ましていた」は成り立たない。She was encouraged by ...「彼女は…に励まされた」なら成り立つので、② encouraged が正解。",
        "engage_source": "Engage Ch.7 分詞 Sec.45 Q174"
      },
      {
        "id": "ch07_q175",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I was shocked to find that someone had left the water (   ) in the upstairs bathtub.",
        "easy_sentence": "I was shocked to find that someone had left the water (   ) in the upstairs bathtub.",
        "choices": [
          "ran",
          "run",
          "running",
          "is running"
        ],
        "answer": 2,
        "university": "学習院大",
        "translation": "",
        "hint": "the water と run の関係を考える",
        "grammar_point": "SVOC（＝分詞）",
        "explanation": "had left the water（　）は〈leave＋O＋C〉「OをC（の状態）にしておく」の形。選択肢には run が使われているので、the water と run の関係を考える。「水は流れている」という能動の関係が成り立つので、現在分詞の③ running が正解。",
        "engage_source": "Engage Ch.7 分詞 Sec.45 Q175"
      },
      {
        "id": "ch07_q176",
        "type": "4択",
        "difficulty": 1,
        "sentence": "She kept me (   ) for half an hour at the station.",
        "easy_sentence": "She kept me (   ) for half an hour at the station.",
        "choices": [
          "to wait",
          "wait",
          "waiting",
          "waited"
        ],
        "answer": 2,
        "university": "日本大",
        "translation": "",
        "hint": "me と wait の関係に注目",
        "grammar_point": "keep＋O＋C",
        "explanation": "kept me（　）は〈keep＋O＋C〉「OをC（の状態）にしておく」の形。選択肢には wait が使われているので、me と wait の関係を考える。「私は待っている」という能動の関係なので、現在分詞の③ waiting が正解。",
        "engage_source": "Engage Ch.7 分詞 Sec.45 Q176"
      },
      {
        "id": "ch07_q177",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I asked her to keep me (   ) of any new developments in the matter.",
        "easy_sentence": "I asked her to keep me (   ) of any new developments in the matter.",
        "choices": [
          "informing",
          "to inform",
          "informed",
          "information"
        ],
        "answer": 2,
        "university": "專修大",
        "translation": "",
        "hint": "me と inform の関係を考える",
        "grammar_point": "keep＋O＋過去分詞",
        "explanation": "keep me（　）は〈keep＋O＋C〉の形。me と inform の関係を考えると、「私は知らされる」という受動の関係になるので、過去分詞の③ informed が正解。",
        "engage_source": "Engage Ch.7 分詞 Sec.45 Q177"
      },
      {
        "id": "ch07_q178",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Because of the noise, I could not make myself (   ).",
        "easy_sentence": "Because of the noise, I could not make myself (   ).",
        "choices": [
          "listen",
          "listening",
          "heard",
          "hearing"
        ],
        "answer": 2,
        "university": "甲南大",
        "translation": "",
        "hint": "make myself に注目",
        "grammar_point": "make oneself heard",
        "explanation": "make myself（　）は〈make＋O＋C〉「OをCにする」の形。myself と hear の関係を考えると、「私の声が聞かれる」という受動の関係になるので、過去分詞の③ heard が正解。make oneself heard で「自分の声を（人に）届かせる」という意味。",
        "engage_source": "Engage Ch.7 分詞 Sec.45 Q178"
      },
      {
        "id": "ch07_q179",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Can you make yourself (   ) in English?",
        "easy_sentence": "Can you make yourself (   ) in English?",
        "choices": [
          "understand well",
          "well understood",
          "to be understood",
          "to understand"
        ],
        "answer": 1,
        "university": "神奈川工科大",
        "translation": "",
        "hint": "make yourself に注目",
        "grammar_point": "make oneself understood",
        "explanation": "make yourself（　）は〈make＋O＋C〉の形。yourself と understand の関係を考えると、「あなたの言うことが理解される」という受動の関係になるので、過去分詞 understood を含む② well understood が正解。make oneself understood で「自分の言うことを理解してもらう」という意味。",
        "engage_source": "Engage Ch.7 分詞 Sec.45 Q179"
      },
      {
        "id": "ch07_q180",
        "type": "4択",
        "difficulty": 2,
        "sentence": "When I looked out of the window last night, I saw a cat (   ) into my neighbor's yard.",
        "easy_sentence": "When I looked out of the window last night, I saw a cat (   ) into my neighbor's yard.",
        "choices": [
          "is sneaked",
          "sneaking",
          "sneaks",
          "to sneak"
        ],
        "answer": 1,
        "university": "センター試験",
        "translation": "",
        "hint": "saw a cat に注目",
        "grammar_point": "see＋O＋現在分詞",
        "explanation": "選択肢に使われている sneak は「こっそり入る」という意味。知覚動詞 see は〈see＋O＋分詞〉の形がとれる。分詞の形は O との意味関係で決まる。a cat と sneak は「ネコがこっそり入る」という能動の関係になるので、現在分詞の② sneaking が正解。〈see＋O＋現在分詞〉は「Oが…しているのを見る」という意味を表す。〈see＋O＋do〉（→ Q127）との違いは Check 14 を参照。",
        "engage_source": "Engage Ch.7 分詞 Sec.46 Q180"
      },
      {
        "id": "ch07_q181",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I heard my name (   ). Didn't you hear it?",
        "easy_sentence": "I heard my name (   ). Didn't you hear it?",
        "choices": [
          "called",
          "calling",
          "having called",
          "to call"
        ],
        "answer": 0,
        "university": "宮崎大",
        "translation": "",
        "hint": "my name と call の意味関係を考える",
        "grammar_point": "hear＋O＋過去分詞",
        "explanation": "知覚動詞 hear は〈知覚動詞＋O＋分詞〉の形をとることができる。my name と call は「私の名前が呼ばれる」という受動の関係になるので過去分詞の① called が正解。〈hear＋O＋過去分詞〉は「Oが…されるのが聞こえる」という意味を表す。",
        "engage_source": "Engage Ch.7 分詞 Sec.46 Q181"
      },
      {
        "id": "ch07_q182",
        "type": "4択",
        "difficulty": 2,
        "sentence": "She was seen (   ) into the station with a big suitcase.",
        "easy_sentence": "She was seen (   ) into the station with a big suitcase.",
        "choices": [
          "go",
          "went",
          "gone",
          "going"
        ],
        "answer": 3,
        "university": "日本大",
        "translation": "",
        "hint": "was seen に注目",
        "grammar_point": "〈知覚動詞＋O＋分詞〉の受動態",
        "explanation": "She was seen（　）は受動態の文。能動態に直せば saw her（　）となる。これは〈see＋O＋do〉か〈see＋O＋分詞〉のどちらかの形。〈see＋O＋do〉の受動態なら be seen to do（→ Q128）となるはずだが、選択肢に不定詞はないので、（　）には分詞が入ると決まる。her と go は「彼女は行く」という能動の関係になるから、現在分詞の④ going が正解。〈see＋O＋現在分詞〉の受動態は〈be seen＋現在分詞〉「…しているのを見られる」となる。",
        "engage_source": "Engage Ch.7 分詞 Sec.46 Q182"
      },
      {
        "id": "ch07_q183",
        "type": "4択",
        "difficulty": 2,
        "sentence": "(   ) tired, I decided not to go to the party.",
        "easy_sentence": "(   ) tired, I decided not to go to the party.",
        "choices": [
          "To feel",
          "Feel",
          "Feeling",
          "I feel"
        ],
        "answer": 2,
        "university": "芝浦工業大",
        "translation": "",
        "hint": "接続詞や前置詞がないことに注目",
        "grammar_point": "分詞構文",
        "explanation": "（　）の前や選択肢の中に、接続詞や前置詞がないことに注目。接続詞や前置詞を使わずに文に情報を加えるのが分詞構文。ここでは現在分詞の③ Feeling を入れて、Feeling tired「疲れていたので」という〈理由〉を表す分詞構文にする。",
        "engage_source": "Engage Ch.7 分詞 Sec.47 Q183"
      },
      {
        "id": "ch07_q184",
        "type": "4択",
        "difficulty": 1,
        "sentence": "(   ) from a distance, the mountain looks like Mt. Fuji.",
        "easy_sentence": "(   ) from a distance, the mountain looks like Mt. Fuji.",
        "choices": [
          "Viewing",
          "To view",
          "Having viewed",
          "Viewed"
        ],
        "answer": 3,
        "university": "関西学院大",
        "translation": "",
        "hint": "文の主語 the mountain に注目",
        "grammar_point": "受動態の分詞構文",
        "explanation": "（　）の前や選択肢の中に接続詞や前置詞がないので、分詞構文だと判断する。the mountain と view は「山は見られる」という受動の関係になるから、過去分詞の④ Viewed が正解。分詞構文では、文の主語と分詞が能動の関係なら現在分詞を、受動の関係なら過去分詞を使う。",
        "engage_source": "Engage Ch.7 分詞 Sec.47 Q184"
      },
      {
        "id": "ch07_q185",
        "type": "4択",
        "difficulty": 2,
        "sentence": "(   ) what to do, he came to me for help.",
        "easy_sentence": "(   ) what to do, he came to me for help.",
        "choices": [
          "Knowing not",
          "Not knowing",
          "Not known",
          "Having not known"
        ],
        "answer": 1,
        "university": "福井工業大",
        "translation": "",
        "hint": "not の位置に注目",
        "grammar_point": "否定形の分詞構文",
        "explanation": "すべての選択肢に not と分詞が含まれているので、否定形の分詞構文だと判断する。分詞構文の否定形は分詞の直前に not[never] を置く。分詞の意味上の主語（＝文の主語）he と know の間には「彼は知っている」という能動の意味関係が成り立つので、現在分詞を用いた② Not knowing が正解。",
        "engage_source": "Engage Ch.7 分詞 Sec.48 Q185"
      },
      {
        "id": "ch07_q187",
        "type": "4択",
        "difficulty": 2,
        "sentence": "(   ) the same suitcase for more than ten years, Edward is going to buy a new one this summer.",
        "easy_sentence": "(   ) the same suitcase for more than ten years, Edward is going to buy a new one this summer.",
        "choices": [
          "Having used",
          "Using",
          "Having been used",
          "Have used"
        ],
        "answer": 0,
        "university": "東京電機大",
        "translation": "",
        "hint": "for more than ten years に注目",
        "grammar_point": "完了形で表す分詞構文",
        "explanation": "選択肢を見て、分詞構文の問題だと判断する。for more than ten years「10年以上の間」があるので、「10年以上同じスーツケースを使ってきたので」という意味の分詞構文にする。〈完了・結果・継続・経験〉などの意味をもつ分詞構文は、完了形〈having＋過去分詞〉で表す。主語の Edward と use は「エドワードが使う」という能動の関係になるから、① Having used が正解。",
        "engage_source": "Engage Ch.7 分詞 Sec.48 Q187"
      },
      {
        "id": "ch07_q188",
        "type": "4択",
        "difficulty": 2,
        "sentence": "(   ) a bit too humid, we decided to start using the air conditioner.",
        "easy_sentence": "(   ) a bit too humid, we decided to start using the air conditioner.",
        "choices": [
          "Having been",
          "It being",
          "It was",
          "Had it been"
        ],
        "answer": 1,
        "university": "日本大",
        "translation": "",
        "hint": "humid に注目",
        "grammar_point": "独立分詞構文",
        "explanation": "humid は「蒸し暑い」という意味の形容詞。寒暖などを表す文では、it を主語にするが、コンマのあとの文の主語は we になっている。分詞構文では、分詞の意味上の主語が文の主語と一致しない場合、分詞の前に意味上の主語を置くので、② It being が正解。この形の分詞構文は独立分詞構文と呼ばれる。",
        "engage_source": "Engage Ch.7 分詞 Sec.48 Q188"
      },
      {
        "id": "ch07_q189",
        "type": "4択",
        "difficulty": 2,
        "sentence": "(   ) no buses running so late at night, I had to walk home in the rain.",
        "easy_sentence": "(   ) no buses running so late at night, I had to walk home in the rain.",
        "choices": [
          "Due",
          "Because",
          "There being",
          "Being"
        ],
        "answer": 2,
        "university": "日本大",
        "translation": "",
        "hint": "文の意味を考える",
        "grammar_point": "独立分詞構文",
        "explanation": "コンマの後ろに「私は雨の中を歩いて家に帰らなければならなかった」とあるので、コンマの前は「夜遅くにバスの便がなかったから」という〈理由〉を表すと考える。because there were no buses running so late at night という〈There＋be 動詞 ...〉を分詞構文にする場合、there を分詞の意味上の主語と考え、文の主語 I とは異なるので、分詞の前に there を置く。",
        "engage_source": "Engage Ch.7 分詞 Sec.48 Q189"
      },
      {
        "id": "ch07_q192",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Roxana is very careful with money, (   ) her age.",
        "easy_sentence": "Roxana is very careful with money, (   ) her age.",
        "choices": [
          "considering",
          "examining",
          "speculating",
          "thinking"
        ],
        "answer": 0,
        "university": "東洋英和女学院大",
        "translation": "",
        "hint": "選択肢に注目",
        "grammar_point": "considering ...",
        "explanation": "considering ... で「…を考慮すれば、…のわりには」の意味。",
        "engage_source": "Engage Ch.7 分詞 Sec.49 Q192"
      },
      {
        "id": "ch07_q194",
        "type": "4択",
        "difficulty": 3,
        "sentence": "With the deadline for the article (   ), I have less time to sleep.",
        "easy_sentence": "With the deadline for the article (   ), I have less time to sleep.",
        "choices": [
          "approached",
          "approaches",
          "approaching",
          "to approach"
        ],
        "answer": 2,
        "university": "近畿大",
        "translation": "",
        "hint": "With に注目",
        "grammar_point": "with＋O＋現在分詞",
        "explanation": "〈with＋O＋分詞〉の形で「Oが…しながら」「Oが…しているので」などの意味を表す。the deadline と approach は「締め切りが近づいている」という能動の関係だから、現在分詞の③ approaching が正解。",
        "engage_source": "Engage Ch.7 分詞 Sec.50 Q194"
      },
      {
        "id": "ch07_q195",
        "type": "4択",
        "difficulty": 3,
        "sentence": "He was sitting by the desk with his arms (   ).",
        "easy_sentence": "He was sitting by the desk with his arms (   ).",
        "choices": [
          "be folded",
          "fold",
          "folded",
          "folding"
        ],
        "answer": 2,
        "university": "宮崎大",
        "translation": "",
        "hint": "with his arms に注目",
        "grammar_point": "with＋O＋過去分詞",
        "explanation": "〈with＋O＋分詞〉の形。his arms と fold は「腕が組まれる」という受動の関係だから、過去分詞の③ folded が正解。with one's arms folded で「腕を組んで」という意味。",
        "engage_source": "Engage Ch.7 分詞 Sec.50 Q195"
      },
      {
        "id": "ch07_q196",
        "type": "4択",
        "difficulty": 3,
        "sentence": "There is no bread (   ) in the basket.",
        "easy_sentence": "There is no bread (   ) in the basket.",
        "choices": [
          "leave",
          "leaving",
          "left",
          "to leave"
        ],
        "answer": 2,
        "university": "宮崎大",
        "translation": "",
        "hint": "bread と leave の関係を考える",
        "grammar_point": "分詞の後置修飾（受動）",
        "explanation": "bread と leave は「パンが残される」という受動の関係になるので、過去分詞の③ left が正解。no bread left in the basket で「かごの中にパンが残っていない」という意味。",
        "engage_source": "Engage Ch.7 分詞 Sec.50 Q196"
      }
    ]
  },
  {
    "day": 7,
    "title": "Day 7: 関係詞",
    "description": "",
    "completed": false,
    "questions": [
      {
        "id": "ch08_q197",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The man (   ) bought the watch is from China.",
        "easy_sentence": "The man (   ) bought the watch is from China.",
        "choices": [
          "who",
          "whose",
          "whom",
          "which"
        ],
        "answer": 0,
        "university": "大阪経済大",
        "translation": "",
        "hint": "先行詞は〈人〉か〈人以外〉か／空所の役割に注目",
        "grammar_point": "主格 who",
        "explanation": "述語動詞は is で、The man is from China. が文の骨格。（　）bought the watch は The man を修飾する関係詞節。空所には bought に対する主語としてはたらく語が入るので、主格の関係代名詞が入る。先行詞は The man で〈人〉なので、① who が正解。",
        "engage_source": "Engage Ch.8 関係詞 Sec.51 Q197"
      },
      {
        "id": "ch08_q198",
        "type": "4択",
        "difficulty": 1,
        "sentence": "New York is a city (   ) is popular with tourists.",
        "easy_sentence": "New York is a city (   ) is popular with tourists.",
        "choices": [
          "where",
          "when",
          "which",
          "how"
        ],
        "answer": 2,
        "university": "東北学院大",
        "translation": "",
        "hint": "先行詞は〈人〉か〈人以外〉か／空所の役割に注目",
        "grammar_point": "主格 which",
        "explanation": "New York is a city. が文の骨格で、（　）以下は a city を修飾する関係詞節。空所には is に対する主語としてはたらく語が入るので、主格の関係代名詞が入る。先行詞は a city で〈人以外〉なので、③ which が正解。",
        "engage_source": "Engage Ch.8 関係詞 Sec.51 Q198"
      },
      {
        "id": "ch08_q199",
        "type": "4択",
        "difficulty": 1,
        "sentence": "That is the boy (   ) we met the other day.",
        "easy_sentence": "That is the boy (   ) we met the other day.",
        "choices": [
          "which",
          "who",
          "where",
          "there"
        ],
        "answer": 1,
        "university": "東京工芸大",
        "translation": "",
        "hint": "先行詞は〈人〉か〈人以外〉か／空所の役割に注目",
        "grammar_point": "目的格 who(m)",
        "explanation": "That is the boy が文の骨格で、（　）以下は the boy を修飾する関係詞節。met の目的語がないので、空所には目的格の関係代名詞が入る。先行詞 (the boy) は〈人〉なので whom が入るが、whom は who で代用できるので、②が正解。whom を who で代用するのは（略式）。",
        "engage_source": "Engage Ch.8 関係詞 Sec.51 Q199"
      },
      {
        "id": "ch08_q200",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Last week, I went to see a movie with Sally and the seats (   ) we had reserved were really good.",
        "easy_sentence": "Last week, I went to see a movie with Sally and the seats (   ) we had reserved were really good.",
        "choices": [
          "where",
          "which",
          "when",
          "what"
        ],
        "answer": 1,
        "university": "南山大",
        "translation": "",
        "hint": "先行詞は〈人〉か〈人以外〉か／空所の役割に注目",
        "grammar_point": "目的格 which",
        "explanation": "and 以下の文の骨格は the seats were really good で、（　）we had reserved は the seats を修飾する関係詞節。had reserved の目的語がないので、空所には目的格の関係代名詞が入る。先行詞 (the seats) が〈人以外〉なので、② which が正解。",
        "engage_source": "Engage Ch.8 関係詞 Sec.51 Q200"
      },
      {
        "id": "ch08_q201",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Take a look at the house (   ) roof is blue.",
        "easy_sentence": "Take a look at the house (   ) roof is blue.",
        "choices": [
          "that",
          "which",
          "whose",
          "in which"
        ],
        "answer": 2,
        "university": "日本大",
        "translation": "",
        "hint": "the house と roof に注目",
        "grammar_point": "所有格 whose",
        "explanation": "Take a look at the house という命令文が文の骨格で、（　）roof is blue は the house を修飾する関係詞節。この roof は「その家の屋根」のことだから、（　）には「その…」を表す所有格の関係代名詞③ whose が入る。所有格の関係代名詞 whose は必ず〈先行詞＋ whose ＋名詞〉の形で使う。",
        "engage_source": "Engage Ch.8 関係詞 Sec.51 Q201"
      },
      {
        "id": "ch08_q205",
        "type": "4択",
        "difficulty": 1,
        "sentence": "This is a famous poem (   ) I do not understand the meaning.",
        "easy_sentence": "This is a famous poem (   ) I do not understand the meaning.",
        "choices": [
          "which",
          "of which",
          "of that",
          "whose"
        ],
        "answer": 1,
        "university": "福岡大",
        "translation": "",
        "hint": "a famous poem を関係詞節に入れる",
        "grammar_point": "前置詞＋目的格の関係代名詞",
        "explanation": "a famous poem を（　）以下の文に入れて、意味の通る文を作ると、I do not understand the meaning of the famous poem.「私はその有名な詩の意味を理解できない」となる。前置詞 of を補う必要があり、〈of＋関係代名詞〉の形の② of which が正解。",
        "engage_source": "Engage Ch.8 関係詞 Sec.52 Q205"
      },
      {
        "id": "ch08_q207",
        "type": "4択",
        "difficulty": 1,
        "sentence": "That person is the one (   ) I think rescued the kitten.",
        "easy_sentence": "That person is the one (   ) I think rescued the kitten.",
        "choices": [
          "what",
          "where",
          "who",
          "whom"
        ],
        "answer": 2,
        "university": "立命館大",
        "translation": "",
        "hint": "rescued の主語がないことに注目",
        "grammar_point": "連鎖関係代名詞節",
        "explanation": "the one を（　）以下が修飾していることをつかむ。the one を I think rescued the kitten の中に入れて、意味の通る文を作る。rescued の主語がないので、the one は rescued の主語の位置に入り、I think the one(=person) rescued the kitten.「私は、その人がその子ネコを救ったのだと思う」という文ができる。この the one は rescued の主語にあたるから、主格の③ who が正解。",
        "engage_source": "Engage Ch.8 関係詞 Sec.53 Q207"
      },
      {
        "id": "ch08_q209",
        "type": "4択",
        "difficulty": 2,
        "sentence": "When I went to the U.S. last summer, I visited the house (   ) George Washington lived.",
        "easy_sentence": "When I went to the U.S. last summer, I visited the house (   ) George Washington lived.",
        "choices": [
          "that",
          "what",
          "where",
          "which"
        ],
        "answer": 2,
        "university": "津田塾大",
        "translation": "",
        "hint": "the house を関係詞節に入れる",
        "grammar_point": "関係副詞 where",
        "explanation": "選択肢を見て、関係詞の問題だと判断する。the house を（　）の後ろの文に入れると、George Washington lived in the house.「ジョージ・ワシントンはその家に住んだ」と、in を補う必要がある。しかし、選択肢に in which はない。in the house「その家に」は場所を表す副詞句だから、関係副詞 where になる。",
        "engage_source": "Engage Ch.8 関係詞 Sec.54 Q209"
      },
      {
        "id": "ch08_q210",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Do you remember the day (   ) we first met Paul?",
        "easy_sentence": "Do you remember the day (   ) we first met Paul?",
        "choices": [
          "which",
          "whom",
          "when",
          "where"
        ],
        "answer": 2,
        "university": "藤央大",
        "translation": "",
        "hint": "the day を関係詞節に入れる",
        "grammar_point": "関係副詞 when",
        "explanation": "the day を（　）の後ろの文に入れると、We first met Paul on the day.「私たちはその日に初めてポールに会った」と、on を補う必要がある。しかし、選択肢に on which はない。on the day「その日に」は時を表す副詞句だから、関係副詞 when になる。",
        "engage_source": "Engage Ch.8 関係詞 Sec.54 Q210"
      },
      {
        "id": "ch08_q212",
        "type": "4択",
        "difficulty": 2,
        "sentence": "A car crashed into a tree just a few meters away from (   ) we were standing.",
        "easy_sentence": "A car crashed into a tree just a few meters away from (   ) we were standing.",
        "choices": [
          "which",
          "what",
          "when",
          "where"
        ],
        "answer": 3,
        "university": "西南学院大",
        "translation": "",
        "hint": "from の目的語がないことに注目",
        "grammar_point": "関係副詞 where の先行詞の省略",
        "explanation": "... meters away from ～「～から…メートル離れて」のあとには場所を表す名詞がくるはずだが、選択肢には the place のような場所を表す名詞がない。関係副詞 where は the place where の意味の場合に、先行詞なしで使うことができるので、④ where を入れる。",
        "engage_source": "Engage Ch.8 関係詞 Sec.55 Q212"
      },
      {
        "id": "ch08_q213",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I want to know the reason (   ) you did that.",
        "easy_sentence": "I want to know the reason (   ) you did that.",
        "choices": [
          "which",
          "what",
          "when",
          "why"
        ],
        "answer": 3,
        "university": "宗教了犬",
        "translation": "",
        "hint": "the reason に注目",
        "grammar_point": "関係副詞 why",
        "explanation": "空所の前は「私はその理由が知りたい」という意味。先行詞は the reason なので、関係副詞 why を入れる。",
        "engage_source": "Engage Ch.8 関係詞 Sec.55 Q213"
      },
      {
        "id": "ch08_q217",
        "type": "4択",
        "difficulty": 2,
        "sentence": "My friend John, (   ) lives in California, has a car with New York license plates.",
        "easy_sentence": "My friend John, (   ) lives in California, has a car with New York license plates.",
        "choices": [
          "who",
          "that",
          "whose",
          "which"
        ],
        "answer": 0,
        "university": "岡山理科大",
        "translation": "",
        "hint": "コンマに注目",
        "grammar_point": "非制限用法の関係代名詞 who",
        "explanation": "My friend John はコンマで囲まれた部分で補足説明されている。固有名詞 John が先行詞なので非制限用法。先行詞は〈人〉で、関係詞節内で主語のはたらきをするので、主格の関係代名詞① who が正解。that は非制限用法には用いない。",
        "engage_source": "Engage Ch.8 関係詞 Sec.55 Q217"
      },
      {
        "id": "ch08_q218",
        "type": "4択",
        "difficulty": 1,
        "sentence": "\"There's a black cat in the kitchen!\" my roommate cried in the middle of the night, (   ) surprised me.",
        "easy_sentence": "\"There's a black cat in the kitchen!\" my roommate cried in the middle of the night, (   ) surprised me.",
        "choices": [
          "that",
          "when",
          "where",
          "which"
        ],
        "answer": 3,
        "university": "鹿児島大",
        "translation": "",
        "hint": "コンマに注目",
        "grammar_point": "非制限用法の which（節を先行詞にする）",
        "explanation": "選択肢を見て、関係詞の問題だと判断する。surprised「…を驚かせた」の主語が欠けているので、（　）には主格の関係代名詞（①か④）が入る。（　）の前にコンマがあるので、非制限用法だとわかる。that は非制限用法では使えないので、④ which が正解。「私」を驚かせたのは、コンマの前の「『キッチンに黒ネコがいる！』とルームメイトが真夜中に叫んだこと」という内容。このように、節全体が先行詞にあたる場合には、which を非制限用法で使う。",
        "engage_source": "Engage Ch.8 関係詞 Sec.55 Q218"
      },
      {
        "id": "ch08_q219",
        "type": "4択",
        "difficulty": 2,
        "sentence": "My student said he had done his homework, (   ) proved to be a lie.",
        "easy_sentence": "My student said he had done his homework, (   ) proved to be a lie.",
        "choices": [
          "it",
          "that",
          "what",
          "which"
        ],
        "answer": 3,
        "university": "宮城学院女子大",
        "translation": "",
        "hint": "（　）に入る語のはたらきに注目",
        "grammar_point": "非制限用法の which（文の一部を先行詞にする）",
        "explanation": "（　）に入る語は、(1) コンマの前後をつなぐ、(2) proved の主語になる、という2つのはたらきを持つ。この2つのはたらきを持つのは②と④。（　）の前にコンマがあるので非制限用法。that は非制限用法には用いないので、④ which が正解。",
        "engage_source": "Engage Ch.8 関係詞 Sec.55 Q219"
      },
      {
        "id": "ch08_q220",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I was taking a bath last night, (   ) the lights suddenly went out.",
        "easy_sentence": "I was taking a bath last night, (   ) the lights suddenly went out.",
        "choices": [
          "when",
          "why",
          "what",
          "how"
        ],
        "answer": 0,
        "university": "日本大",
        "translation": "",
        "hint": "コンマに注目",
        "grammar_point": "非制限用法の when",
        "explanation": "（　）の前にコンマがあるので、非制限用法の関係詞が入る。後半の the lights suddenly went out「明かりが突然消えた」は完全な文なので、（　）には関係代名詞ではなく関係副詞が入る。非制限用法で使える関係副詞は where と when だけなので、① when が正解。非制限用法の when には、(1) 先行詞を補足説明する場合と、(2) 前の内容を受けて「…、そしてそのとき〜」という意味を表す場合がある。本問は (2) にあたる。",
        "engage_source": "Engage Ch.8 関係詞 Sec.55 Q220"
      },
      {
        "id": "ch08_q221",
        "type": "4択",
        "difficulty": 2,
        "sentence": "It was a very hot afternoon. We found a coffee shop, (   ) we rested for a while.",
        "easy_sentence": "It was a very hot afternoon. We found a coffee shop, (   ) we rested for a while.",
        "choices": [
          "which",
          "when",
          "where",
          "that"
        ],
        "answer": 2,
        "university": "二松學舍大",
        "translation": "",
        "hint": "コンマに注目",
        "grammar_point": "非制限用法の where",
        "explanation": "選択肢から、関係詞の問題だと判断する。（　）の前にコンマがあるので、非制限用法。we rested for a while「私たちはしばらく休んだ」は完全な文なので、（　）には関係代名詞ではなく関係副詞③ where が正解。非制限用法の where は、(1) 先行詞を補足説明する場合と、(2)「…、そしてそこで〜」を表す場合がある。本問は (2) にあたる。",
        "engage_source": "Engage Ch.8 関係詞 Sec.55 Q221"
      },
      {
        "id": "ch08_q222",
        "type": "4択",
        "difficulty": 2,
        "sentence": "We have released several products recently, all of (   ) are selling well.",
        "easy_sentence": "We have released several products recently, all of (   ) are selling well.",
        "choices": [
          "which",
          "such",
          "they",
          "what"
        ],
        "answer": 0,
        "university": "獨協大",
        "translation": "",
        "hint": "all of（　）のはたらきに注目",
        "grammar_point": "非制限用法の〈all of which[whom]〉",
        "explanation": "all of（　）「（　）のすべて」は「最近発売した製品のすべて」を表すはず。関係代名詞を入れれば「それら（＝製品）のすべて」という意味を表し、さらにコンマの前後をつなぐはたらきも果たせる。非制限用法の all of which は「…、そしてその全部が［を］〜」という意味を表す。all 以外に、many、some、none などの数量を表す代名詞を使うこともある。また、先行詞が〈人〉の場合は関係代名詞 whom を使う。",
        "engage_source": "Engage Ch.8 関係詞 Sec.55 Q222"
      },
      {
        "id": "ch08_q223",
        "type": "4択",
        "difficulty": 2,
        "sentence": "(   ) is important is to keep early hours.",
        "easy_sentence": "(   ) is important is to keep early hours.",
        "choices": [
          "Whether",
          "Which",
          "That",
          "What"
        ],
        "answer": 3,
        "university": "明治大",
        "translation": "",
        "hint": "（　）のはたらきと意味に注目",
        "grammar_point": "関係代名詞 what",
        "explanation": "（　）is important は文の骨格で、（　）is important を名詞節としてまとめている。この2つのはたらきが同時にできるのは② Which と④ What。「□は重要なこと」は「…すること、…するもの」という意味の名詞節をつくるので、④が正解。",
        "engage_source": "Engage Ch.8 関係詞 Sec.56 Q223"
      },
      {
        "id": "ch08_q226",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Your future depends on (   ) you do in the present.",
        "easy_sentence": "Your future depends on (   ) you do in the present.",
        "choices": [
          "which",
          "whether",
          "what",
          "whose"
        ],
        "answer": 2,
        "university": "中央大",
        "translation": "",
        "hint": "文の意味を考える",
        "grammar_point": "関係代名詞 what",
        "explanation": "depend on ... は「…にかかっている、…次第だ」を表すから、この文は「あなたの将来は、今あなたがすることにかかっている」という意味だと推測できる。「…すること」は関係代名詞 what で表せるので、③が正解。この文では what がつくる名詞節が前置詞の目的語になっている。",
        "engage_source": "Engage Ch.8 関係詞 Sec.56 Q226"
      },
      {
        "id": "ch08_q227",
        "type": "4択",
        "difficulty": 3,
        "sentence": "John is not (   ) he used to be.",
        "easy_sentence": "John is not (   ) he used to be.",
        "choices": [
          "what",
          "that",
          "which",
          "when"
        ],
        "answer": 0,
        "university": "千葉工業大",
        "translation": "",
        "hint": "空所のあとに he used to be がある",
        "grammar_point": "what S used to be",
        "explanation": "空所のあとに S used to be があることに注目。what S used to be で「昔のS、以前のS」の意味を表すので、① what が正解。",
        "engage_source": "Engage Ch.8 関係詞 Sec.57 Q227"
      },
      {
        "id": "ch08_q228",
        "type": "4択",
        "difficulty": 3,
        "sentence": "She gave me (   ) little money she had.",
        "easy_sentence": "She gave me (   ) little money she had.",
        "choices": [
          "which",
          "whether",
          "what",
          "whose"
        ],
        "answer": 2,
        "university": "独協大",
        "translation": "",
        "hint": "little money に注目",
        "grammar_point": "what（+little）＋名詞 ...",
        "explanation": "（　）little money に注目する。〈what little＋名詞〉で「わずかながらも…するすべての（名詞）」という意味を表せるので、③ what が正解。〈what＋名詞〉は「…するすべての（名詞）」という意味を表す。名詞の前に little や few を置いて、「わずかながらも」という意味を強調することが多い。",
        "engage_source": "Engage Ch.8 関係詞 Sec.57 Q228"
      },
      {
        "id": "ch08_q229",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Takashi knows so many words in English. He's (   ) we call a walking dictionary.",
        "easy_sentence": "Takashi knows so many words in English. He's (   ) we call a walking dictionary.",
        "choices": [
          "what",
          "that",
          "which",
          "why"
        ],
        "answer": 0,
        "university": "南山大",
        "translation": "",
        "hint": "we call に注目",
        "grammar_point": "what we call A",
        "explanation": "walking dictionary は「歩く辞書、生き字引」の意。空所のあとに we call があるので、① what を入れて what we call A「いわゆるA」とすれば、「彼はいわゆる生き字引だ」となり、文意が通る。what is called A でも同じ意味を表す。",
        "engage_source": "Engage Ch.8 関係詞 Sec.57 Q229"
      },
      {
        "id": "ch08_q231",
        "type": "4択",
        "difficulty": 3,
        "sentence": "(   ) passes the final interview next week will get the job.",
        "easy_sentence": "(   ) passes the final interview next week will get the job.",
        "choices": [
          "Whoever",
          "Whose",
          "Who",
          "Whom"
        ],
        "answer": 0,
        "university": "南山大",
        "translation": "",
        "hint": "主部に注目",
        "grammar_point": "whoever",
        "explanation": "will get the job で「仕事に就くだろう」という意味。仕事に就くのは「人」だから、（　）passes the final interview は「…する人」という意味の名詞節をつくる。先行詞なしで「…する人」の意味を表せるのは① Whoever だけ。whoever は「…する人は誰でも」という意味の名詞節をつくる。",
        "engage_source": "Engage Ch.8 関係詞 Sec.58 Q231"
      },
      {
        "id": "ch08_q233",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Help yourself to (   ) food there is in the refrigerator.",
        "easy_sentence": "Help yourself to (   ) food there is in the refrigerator.",
        "choices": [
          "whoever",
          "whatever",
          "whenever",
          "wherever"
        ],
        "answer": 1,
        "university": "広島工業大",
        "translation": "",
        "hint": "（　）の直後に food という名詞があることに注目",
        "grammar_point": "whatever＋名詞",
        "explanation": "（　）の直後に food という名詞があることに注目。〈複合関係詞＋名詞〉の形で使えるのは Whatever だけ。② whatever food で「どんな食べ物でも」の意味。",
        "engage_source": "Engage Ch.8 関係詞 Sec.58 Q233"
      },
      {
        "id": "ch08_q234",
        "type": "4択",
        "difficulty": 3,
        "sentence": "(   ) happens, you can rely on my friendship.",
        "easy_sentence": "(   ) happens, you can rely on my friendship.",
        "choices": [
          "However",
          "Whatever",
          "Whenever",
          "Whoever"
        ],
        "answer": 1,
        "university": "日本大",
        "translation": "",
        "hint": "happens に注目",
        "grammar_point": "whatever〈譲歩〉",
        "explanation": "（　）は happens の主語にあたるから、（　）には名詞のはたらきを持つ語が入る。選択肢の中で、名詞のはたらきを持つのは②と④。whatever を入れれば「何が…しようとも」という譲歩を表す副詞節になり、意味が通る。whoever は「誰が…しようとも」という意味なので、意味が通らない。",
        "engage_source": "Engage Ch.8 関係詞 Sec.58 Q234"
      },
      {
        "id": "ch08_q235",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I try to see my family (   ) I have free time.",
        "easy_sentence": "I try to see my family (   ) I have free time.",
        "choices": [
          "whenever",
          "whatever",
          "however",
          "whichever"
        ],
        "answer": 0,
        "university": "筑協大",
        "translation": "",
        "hint": "I have free time が完全な文であることに注目",
        "grammar_point": "whenever",
        "explanation": "選択肢から、空所には複合関係詞が入るとわかる。空所のあとに続く I have free time は完全な文なので、空所には複合関係代名詞ではなく複合関係副詞が入る。「私は暇があるときにはいつでも家族に会うようにしている」と考えて、① whenever「…するときはいつでも」が正解。",
        "engage_source": "Engage Ch.8 関係詞 Sec.59 Q235"
      },
      {
        "id": "ch08_q236",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Your parents will support and love you, (   ) you go.",
        "easy_sentence": "Your parents will support and love you, (   ) you go.",
        "choices": [
          "there",
          "somewhere",
          "whatever",
          "wherever"
        ],
        "answer": 3,
        "university": "順天堂大",
        "translation": "",
        "hint": "you go に注目",
        "grammar_point": "wherever〈譲歩〉",
        "explanation": "you go は（S + V）の文で、文の要素がそろっているので、（　）は副詞のはたらきをしている。この2つのはたらきを持っている語は④ wherever だけ。wherever は「…するところならどこでも」という意味もある。ここでは後者の意味で使われている。",
        "engage_source": "Engage Ch.8 関係詞 Sec.59 Q236"
      },
      {
        "id": "ch08_q240",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Children should not have more money (   ) is needed.",
        "easy_sentence": "Children should not have more money (   ) is needed.",
        "choices": [
          "it",
          "but",
          "because",
          "than"
        ],
        "answer": 3,
        "university": "東洋大",
        "translation": "",
        "hint": "more に注目",
        "grammar_point": "関係代名詞 than",
        "explanation": "「子どもたちは必要以上のお金を持つべきではない」という意味になる。比較級 more があるので、④ than が入る。than is needed で「必要とされるよりも」の意味を表す。本問での than は直前の名詞 money を受け、かつ is needed に対する主語のはたらきをしているので、関係代名詞と見なすことができる。",
        "engage_source": "Engage Ch.8 関係詞 Sec.61 Q240"
      },
      {
        "id": "ch08_q242",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I fell asleep when I tried to do my homework in bed last night, (   ) is often the case.",
        "easy_sentence": "I fell asleep when I tried to do my homework in bed last night, (   ) is often the case.",
        "choices": [
          "as",
          "when",
          "for",
          "what"
        ],
        "answer": 0,
        "university": "近畿大",
        "translation": "",
        "hint": "空所のあとに is often the case がある",
        "grammar_point": "as is often the case",
        "explanation": "as is often the case で「よくあることだが」という意味を表す。この as は主節全体を先行詞とする関係代名詞と見なすことができる。",
        "engage_source": "Engage Ch.8 関係詞 Sec.61 Q242"
      }
    ]
  },
  {
    "day": 8,
    "title": "Day 8: 比較",
    "description": "",
    "completed": false,
    "questions": [
      {
        "id": "ch09_q243",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The polar bears are (   ) the koalas at the city zoo. They are so adorable.",
        "easy_sentence": "The polar bears are (   ) the koalas at the city zoo. They are so adorable.",
        "choices": [
          "as more popular than",
          "much popular than",
          "as popular than",
          "as popular as"
        ],
        "answer": 3,
        "university": "東北福祉大",
        "translation": "",
        "hint": "「…と同じくらい〜」",
        "grammar_point": "as＋原級＋as ...",
        "explanation": "選択肢に as や than が含まれているので、比較の問題だと判断する。〈as＋原級＋as ...〉が正しい形なので、④が正解。",
        "engage_source": "Engage Ch.9 比較 Sec.62 Q243"
      },
      {
        "id": "ch09_q245",
        "type": "4択",
        "difficulty": 1,
        "sentence": "My younger brother has (   ) I have.",
        "easy_sentence": "My younger brother has (   ) I have.",
        "choices": [
          "as much as strength",
          "as much strength as",
          "strength as much as",
          "much strength as"
        ],
        "answer": 1,
        "university": "名城大",
        "translation": "",
        "hint": "「…と同じくらい多くの（名詞）」",
        "grammar_point": "as＋many[much]＋名詞＋as ...",
        "explanation": "選択肢の as が2つずつあるので、〈as＋原級＋as ...〉の比較の文だと判断する。ただし、many や much を使って「…と同じくらい多くの（名詞）」と言うときは、〈as many[much]＋名詞＋as ...〉の形を使うので、②が正解。この形では、2つの as の間に〈many[much]＋名詞〉がセットで入ることに注意。",
        "engage_source": "Engage Ch.9 比較 Sec.62 Q245"
      },
      {
        "id": "ch09_q248",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The new hotel building is (   ) the old one.",
        "easy_sentence": "The new hotel building is (   ) the old one.",
        "choices": [
          "as twice tall as",
          "higher twice than",
          "twice as tall as",
          "as tall as twice"
        ],
        "answer": 2,
        "university": "金城学院大",
        "translation": "",
        "hint": "「…の2倍〜」",
        "grammar_point": "twice as＋原級＋as ...",
        "explanation": "〈X times as＋原級＋as ...〉の倍数表現。「2倍」は twice を使う。twice は as の前に置くので、③ twice as tall as が正解。",
        "engage_source": "Engage Ch.9 比較 Sec.63 Q248"
      },
      {
        "id": "ch09_q249",
        "type": "4択",
        "difficulty": 1,
        "sentence": "This island is almost (   ) that one.",
        "easy_sentence": "This island is almost (   ) that one.",
        "choices": [
          "as three times as",
          "three times the size of",
          "three times of",
          "larger three times than"
        ],
        "answer": 1,
        "university": "創価大",
        "translation": "",
        "hint": "「…のX倍の大きさ」",
        "grammar_point": "X times the size of ...",
        "explanation": "倍数は〈X times as＋原級＋as ...〉の他に、〈X times the size[length, weight ...] of ...〉「…のX倍の大きさ[長さ、重さ]」でも表せる。② three times the size of が正解。",
        "engage_source": "Engage Ch.9 比較 Sec.63 Q249"
      },
      {
        "id": "ch09_q250",
        "type": "4択",
        "difficulty": 1,
        "sentence": "\"To sell this product, you need to call (   ) you can,\" said the manager.",
        "easy_sentence": "\"To sell this product, you need to call (   ) you can,\" said the manager.",
        "choices": [
          "as many people",
          "as many people as",
          "as more people",
          "as more people as"
        ],
        "answer": 1,
        "university": "鹿児島大",
        "translation": "",
        "hint": "「できるだけ多くの（名詞）」",
        "grammar_point": "as many＋名詞＋as S can",
        "explanation": "〈as many＋名詞＋as S can〉で「できるだけ多くの（名詞）」を表す。② as many people as が正解。",
        "engage_source": "Engage Ch.9 比較 Sec.64 Q250"
      },
      {
        "id": "ch09_q251",
        "type": "4択",
        "difficulty": 1,
        "sentence": "If you learn by heart (   ), you will certainly get a higher score on the test.",
        "easy_sentence": "If you learn by heart (   ), you will certainly get a higher score on the test.",
        "choices": [
          "as many as English proverbs",
          "as many English proverbs possible",
          "English proverbs as many as possible",
          "as many English proverbs as possible"
        ],
        "answer": 3,
        "university": "專修大",
        "translation": "",
        "hint": "「できるだけ…」",
        "grammar_point": "as ... as possible",
        "explanation": "選択肢の as と possible が含まれているので、as ... as possible「できるだけ…」を用いる。many は English proverbs「英語のことわざ」を修飾していると考え、〈as＋many＋名詞＋as ...〉（→ Q245）の形になっている④を選ぶ。",
        "engage_source": "Engage Ch.9 比較 Sec.64 Q251"
      },
      {
        "id": "ch09_q252",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Only half of the shops opened this year have attracted as many (   ).",
        "easy_sentence": "Only half of the shops opened this year have attracted as many (   ).",
        "choices": [
          "as customers expecting",
          "as expected customers",
          "expected as customers",
          "customers as expected"
        ],
        "answer": 3,
        "university": "福岡大",
        "translation": "",
        "hint": "「期待されたほど…」",
        "grammar_point": "as ... as expected",
        "explanation": "選択肢に as と expect が含まれているので、as ... as expected「期待されたほど…」が用いられていると考える。many は customers「客」を修飾していると考え、〈as＋many＋名詞＋as ...〉（→ Q245）の形になる④を選ぶ。",
        "engage_source": "Engage Ch.9 比較 Sec.64 Q252"
      },
      {
        "id": "ch09_q253",
        "type": "4択",
        "difficulty": 1,
        "sentence": "(   ) two million people gathered to listen to the new president's speech.",
        "easy_sentence": "(   ) two million people gathered to listen to the new president's speech.",
        "choices": [
          "So as many",
          "As so many",
          "So many than",
          "As many as"
        ],
        "answer": 3,
        "university": "筑協大",
        "translation": "",
        "hint": "「…も（多く）の」：数の多さを強調",
        "grammar_point": "as many as＋数詞",
        "explanation": "空所以下は「200万人が新大統領の演説を聴きに集まった」という意味。two million という数詞の前に as と many を用いた表現が入るのだから、〈as many as＋数詞〉「…も（多く）の」を用いる。数の多さを強調する表現で、「200万もの人」の意味になる。",
        "engage_source": "Engage Ch.9 比較 Sec.64 Q253"
      },
      {
        "id": "ch09_q254",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Ken is not so much a scholar (   ) a businessman.",
        "easy_sentence": "Ken is not so much a scholar (   ) a businessman.",
        "choices": [
          "at",
          "as",
          "with",
          "of"
        ],
        "answer": 1,
        "university": "青山学院大",
        "translation": "",
        "hint": "「AというよりはBだ」",
        "grammar_point": "not so much A as B",
        "explanation": "not so much A as B で「AというよりはB」の意味を表す。",
        "engage_source": "Engage Ch.9 比較 Sec.64 Q254"
      },
      {
        "id": "ch09_q255",
        "type": "4択",
        "difficulty": 1,
        "sentence": "He is so shy that he cannot so (   ) as greet his neighbors.",
        "easy_sentence": "He is so shy that he cannot so (   ) as greet his neighbors.",
        "choices": [
          "less",
          "much",
          "proud",
          "shy"
        ],
        "answer": 1,
        "university": "金城学院大",
        "translation": "",
        "hint": "「…さえしない」",
        "grammar_point": "not so much as do",
        "explanation": "cannot so, as に注目。not so much as do で「…さえしない」の意味を表す。",
        "engage_source": "Engage Ch.9 比較 Sec.64 Q255"
      },
      {
        "id": "ch09_q257",
        "type": "4択",
        "difficulty": 2,
        "sentence": "John is (   ) taller than me.",
        "easy_sentence": "John is (   ) taller than me.",
        "choices": [
          "more",
          "much",
          "very",
          "much more"
        ],
        "answer": 1,
        "university": "関西学院大",
        "translation": "",
        "hint": "「はるかに…」",
        "grammar_point": "much＋比較級",
        "explanation": "空所が比較級 taller の直前にあることに注目。選択肢の語句から、空所には比較級を強調する語が入る。② much が正解。",
        "engage_source": "Engage Ch.9 比較 Sec.65 Q257"
      },
      {
        "id": "ch09_q261",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I prefer staying at home (   ) going out on Sundays.",
        "easy_sentence": "I prefer staying at home (   ) going out on Sundays.",
        "choices": [
          "in",
          "than",
          "to",
          "for"
        ],
        "answer": 2,
        "university": "大妻女子大",
        "translation": "",
        "hint": "「BよりもAを好む」",
        "grammar_point": "prefer A to B",
        "explanation": "prefer A to B で「BよりもAを好む」の意味。比較の相手の前に to を用いる。",
        "engage_source": "Engage Ch.9 比較 Sec.66 Q261"
      },
      {
        "id": "ch09_q262",
        "type": "4択",
        "difficulty": 2,
        "sentence": "This computer is technically (   ) to its competitors.",
        "easy_sentence": "This computer is technically (   ) to its competitors.",
        "choices": [
          "quicker",
          "superior",
          "more efficient",
          "faster"
        ],
        "answer": 1,
        "university": "中央大",
        "translation": "",
        "hint": "「…よりも優れている」",
        "grammar_point": "superior to ...",
        "explanation": "superior to ... で「…よりも優れている」の意味。比較の相手の前に to を用いる表現。",
        "engage_source": "Engage Ch.9 比較 Sec.66 Q262"
      },
      {
        "id": "ch09_q267",
        "type": "4択",
        "difficulty": 3,
        "sentence": "My grandfather is (   ) than kind.",
        "easy_sentence": "My grandfather is (   ) than kind.",
        "choices": [
          "gentler",
          "much gentle",
          "more gentler",
          "more gentle"
        ],
        "answer": 3,
        "university": "東京工芸大",
        "translation": "",
        "hint": "「BというよりもむしろA」",
        "grammar_point": "more A than B",
        "explanation": "more A than B で「BというよりもむしろA」の意味。④ more gentle than kind「親切というよりもむしろ穏やかだ」が正解。",
        "engage_source": "Engage Ch.9 比較 Sec.68 Q267"
      },
      {
        "id": "ch09_q268",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I have never seen the report, much (   ) read it.",
        "easy_sentence": "I have never seen the report, much (   ) read it.",
        "choices": [
          "better",
          "less",
          "more",
          "worse"
        ],
        "answer": 1,
        "university": "中央大",
        "translation": "",
        "hint": "「まして…ない」",
        "grammar_point": "much less ...",
        "explanation": "much less ... で「まして…（ない）」の意味。否定文のあとで「まして…なんてことはない」と言う表現。② less が正解。",
        "engage_source": "Engage Ch.9 比較 Sec.68 Q268"
      },
      {
        "id": "ch09_q269",
        "type": "4択",
        "difficulty": 3,
        "sentence": "That river has become so polluted that it can (   ) be used as a source of drinking water.",
        "easy_sentence": "That river has become so polluted that it can (   ) be used as a source of drinking water.",
        "choices": [
          "no less",
          "much more",
          "more or less",
          "no longer"
        ],
        "answer": 3,
        "university": "成城大",
        "translation": "",
        "hint": "「もはや…ない」",
        "grammar_point": "no longer ...",
        "explanation": "「もうその水を飲料水に使うことはできない」は that 以下に表されている。can と be used の間に「もはや…ない」を表す④ no longer を入れる。",
        "engage_source": "Engage Ch.9 比較 Sec.68 Q269"
      },
      {
        "id": "ch09_q271",
        "type": "4択",
        "difficulty": 3,
        "sentence": "His excuse is (   ) believable than mine.",
        "easy_sentence": "His excuse is (   ) believable than mine.",
        "choices": [
          "as",
          "no less",
          "not",
          "so"
        ],
        "answer": 1,
        "university": "立命館大",
        "translation": "",
        "hint": "「…と同様に〜」",
        "grammar_point": "no less＋形容詞＋than ...",
        "explanation": "no less ... than ～ で「～に劣らず…」「～と同様に…」の意味。② no less が正解。",
        "engage_source": "Engage Ch.9 比較 Sec.68 Q271"
      },
      {
        "id": "ch09_q272",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I can (   ) play the violin than my sister can. Neither of us ever learned how to play.",
        "easy_sentence": "I can (   ) play the violin than my sister can. Neither of us ever learned how to play.",
        "choices": [
          "no more",
          "no much",
          "not much",
          "rather"
        ],
        "answer": 0,
        "university": "聖央大",
        "translation": "",
        "hint": "「～と同様に…でない」",
        "grammar_point": "no more ... than ～",
        "explanation": "「姉も弾けないし、私も弾けない」ことを表す。no more ... than ～ で「～と同様に…でない」の意味。① no more が正解。",
        "engage_source": "Engage Ch.9 比較 Sec.68 Q272"
      },
      {
        "id": "ch09_q273",
        "type": "4択",
        "difficulty": 3,
        "sentence": "You should know (   ) than to ask about that sensitive matter.",
        "easy_sentence": "You should know (   ) than to ask about that sensitive matter.",
        "choices": [
          "well",
          "better",
          "more",
          "worse"
        ],
        "answer": 1,
        "university": "專修大",
        "translation": "",
        "hint": "「…するほど愚かではない」",
        "grammar_point": "know better than to do",
        "explanation": "know better than to do で「…するほど愚かではないはずだ」の意味。② better が正解。",
        "engage_source": "Engage Ch.9 比較 Sec.68 Q273"
      },
      {
        "id": "ch09_q274",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I like her (   ) better for her shyness.",
        "easy_sentence": "I like her (   ) better for her shyness.",
        "choices": [
          "the very",
          "the all",
          "all the",
          "very the"
        ],
        "answer": 2,
        "university": "松山大",
        "translation": "",
        "hint": "「…なのでますます〜」",
        "grammar_point": "all the＋比較級＋for ...",
        "explanation": "〈all the＋比較級＋for ...〉で「…なのでますます〜」の意味。「彼女は内気なので、いっそう私は彼女が好きなのだ」となる。",
        "engage_source": "Engage Ch.9 比較 Sec.69 Q274"
      },
      {
        "id": "ch09_q275",
        "type": "4択",
        "difficulty": 3,
        "sentence": "She spent a month in the hospital, but she is (   ) the better for it.",
        "easy_sentence": "She spent a month in the hospital, but she is (   ) the better for it.",
        "choices": [
          "even",
          "by far",
          "none",
          "still"
        ],
        "answer": 2,
        "university": "兵庫医療大",
        "translation": "",
        "hint": "「…だからといって少しも〜ない」",
        "grammar_point": "none the＋比較級＋for ...",
        "explanation": "前半の「彼女は病院で1か月を過ごした」のあとに but があるので、後半は「彼女はよくなっていない」と考える。③ none the better for ... で「…だからといって少しもよくなっていない」。",
        "engage_source": "Engage Ch.9 比較 Sec.69 Q275"
      },
      {
        "id": "ch09_q276",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The deeper we went into the cave, (   ) the path became.",
        "easy_sentence": "The deeper we went into the cave, (   ) the path became.",
        "choices": [
          "as narrow as ever",
          "narrower",
          "the narrower",
          "the narrowest"
        ],
        "answer": 2,
        "university": "近畿大",
        "translation": "",
        "hint": "「…すればするほどますます〜」",
        "grammar_point": "the＋比較級 ..., the＋比較級 〜",
        "explanation": "〈the＋比較級 ..., the＋比較級 〜〉で「…すればするほどますます〜」の意味。the deeper に対応して、③ the narrower が正解。",
        "engage_source": "Engage Ch.9 比較 Sec.69 Q276"
      },
      {
        "id": "ch09_q278",
        "type": "4択",
        "difficulty": 3,
        "sentence": "This piano is (   ) better of the two.",
        "easy_sentence": "This piano is (   ) better of the two.",
        "choices": [
          "a",
          "the",
          "too",
          "very"
        ],
        "answer": 1,
        "university": "関西学院大",
        "translation": "",
        "hint": "「2つのうちでより〜なほう」",
        "grammar_point": "the＋比較級＋of the two",
        "explanation": "「2つのうちでより〜なほう」は〈the＋比較級＋of the two〉で表す。② the が正解。",
        "engage_source": "Engage Ch.9 比較 Sec.69 Q278"
      },
      {
        "id": "ch09_q279",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Of the three, Denis is (   ) student.",
        "easy_sentence": "Of the three, Denis is (   ) student.",
        "choices": [
          "a more diligent",
          "a most diligent",
          "the more diligent",
          "the most diligent"
        ],
        "answer": 3,
        "university": "鎮央大",
        "translation": "",
        "hint": "「〜の中でいちばん…」",
        "grammar_point": "the＋最上級＋in[of] 〜",
        "explanation": "文頭の Of the three と選択肢の内容から、「3人の中で、デニスがいちばん勤勉な生徒だ」という意味だと判断する。「〜の中でいちばん…」は〈the＋最上級＋in[of] 〜〉で表す。diligent「勤勉な」の最上級は most diligent だから、④が正解。",
        "engage_source": "Engage Ch.9 比較 Sec.70 Q279"
      },
      {
        "id": "ch09_q280",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The last question was (   ) one for the students to answer. Only Jennifer marked the correct answer.",
        "easy_sentence": "The last question was (   ) one for the students to answer. Only Jennifer marked the correct answer.",
        "choices": [
          "easier",
          "less easy",
          "the easiest",
          "the least easy"
        ],
        "answer": 3,
        "university": "日本大",
        "translation": "",
        "hint": "「最も…でない」",
        "grammar_point": "the least＋原級",
        "explanation": "2文目には「正しい答えにマークしたのはジェニファーだけだった」とあるので、最後の問題は生徒にとって答えるのが「最も易しくなかった」と考える。④ the least easy が正解。〈the least＋原級〉は「最も…でない」の意味。",
        "engage_source": "Engage Ch.9 比較 Sec.70 Q280"
      },
      {
        "id": "ch09_q281",
        "type": "4択",
        "difficulty": 3,
        "sentence": "In terms of population, India is the second (   ) country in the world.",
        "easy_sentence": "In terms of population, India is the second (   ) country in the world.",
        "choices": [
          "large",
          "larger",
          "largest",
          "largely"
        ],
        "answer": 2,
        "university": "中村学園大",
        "translation": "",
        "hint": "「2番目に…」",
        "grammar_point": "the second＋最上級",
        "explanation": "「人口の点で言えば、インドは世界で2番目に大きな国だ」。the second のあとには最上級がくるので、③ largest が正解。",
        "engage_source": "Engage Ch.9 比較 Sec.70 Q281"
      },
      {
        "id": "ch09_q283",
        "type": "4択",
        "difficulty": 3,
        "sentence": "That was (   ) the worst meal I had ever had.",
        "easy_sentence": "That was (   ) the worst meal I had ever had.",
        "choices": [
          "near by",
          "by far",
          "more",
          "very"
        ],
        "answer": 1,
        "university": "関西学院大",
        "translation": "",
        "hint": "「ずばぬけて…」",
        "grammar_point": "by far＋the＋最上級",
        "explanation": "〈the＋最上級〉の前に by far を置くと、最上級を強調することができるので、②が正解。by far の代わりに much を使うこともできる。また、very を使う場合は、〈the very＋最上級〉の語順になることに注意。",
        "engage_source": "Engage Ch.9 比較 Sec.70 Q283"
      },
      {
        "id": "ch09_q285",
        "type": "4択",
        "difficulty": 3,
        "sentence": "In physics no person is (   ) than Albert Einstein.",
        "easy_sentence": "In physics no person is (   ) than Albert Einstein.",
        "choices": [
          "as important",
          "important",
          "more important",
          "so important"
        ],
        "answer": 2,
        "university": "藤女子大",
        "translation": "",
        "hint": "比較級を用いて最上級の意味を表す",
        "grammar_point": "No (other)＋単数名詞＋is＋比較級＋than A.",
        "explanation": "than があるので比較級を用いる。important の比較級は more をつけるので③ more important が正解。〈No (other)＋単数名詞＋is＋比較級＋than A.〉で「Aよりも…な（名詞）は（ほかに）ない」という意味になる。",
        "engage_source": "Engage Ch.9 比較 Sec.71 Q285"
      },
      {
        "id": "ch09_q287",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Mt. Fuji is higher than (   ) in Japan.",
        "easy_sentence": "Mt. Fuji is higher than (   ) in Japan.",
        "choices": [
          "no other mountain",
          "no other mountains",
          "any other mountain",
          "any other mountains"
        ],
        "answer": 2,
        "university": "東洋大",
        "translation": "",
        "hint": "比較級を用いて最上級の意味を表す",
        "grammar_point": "A is＋比較級＋than any other＋単数名詞.",
        "explanation": "〈A is＋比較級＋than any other＋単数名詞.〉で「Aはほかの（名詞）よりも…だ」の意味。③ any other mountain が正解。any other のあとは単数名詞。",
        "engage_source": "Engage Ch.9 比較 Sec.71 Q287"
      },
      {
        "id": "ch09_q288",
        "type": "4択",
        "difficulty": 3,
        "sentence": "One of (   ) about living abroad is being away from your friends and family.",
        "easy_sentence": "One of (   ) about living abroad is being away from your friends and family.",
        "choices": [
          "hardest thing",
          "the hardest thing",
          "the hardest things",
          "hardest things"
        ],
        "answer": 2,
        "university": "中部大",
        "translation": "",
        "hint": "「最も…な（名詞）のうちの1つ」",
        "grammar_point": "one of the＋最上級＋複数名詞",
        "explanation": "one of the＋最上級＋複数名詞で「最も…な（名詞）のうちの1つ」の意味。③ the hardest things が正解。",
        "engage_source": "Engage Ch.9 比較 Sec.72 Q288"
      },
      {
        "id": "ch09_q289",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Health is the most important thing of (   ).",
        "easy_sentence": "Health is the most important thing of (   ).",
        "choices": [
          "something",
          "anything",
          "all",
          "nothing"
        ],
        "answer": 2,
        "university": "日本大",
        "translation": "",
        "hint": "「すべての中で最も…」",
        "grammar_point": "the＋最上級 ... of all",
        "explanation": "of all で「すべての中で」の意味。③ all が正解。",
        "engage_source": "Engage Ch.9 比較 Sec.72 Q289"
      }
    ]
  },
  {
    "day": 9,
    "title": "Day 9: 前置詞 ＋ 接続詞（前半）",
    "description": "",
    "completed": false,
    "questions": [
      {
        "id": "ch10_q290",
        "type": "4択",
        "difficulty": 1,
        "sentence": "He is supposed to arrive (   ) the airport at 2:30.",
        "easy_sentence": "He is supposed to arrive (   ) the airport at 2:30.",
        "choices": [
          "to",
          "among",
          "with",
          "at"
        ],
        "answer": 3,
        "university": "産能短大",
        "translation": "",
        "hint": "広がりのない場所を表す at",
        "grammar_point": "at：場所を点としてイメージする",
        "explanation": "arrive は自動詞。「…に到着する」は arrive at ... または arrive in ... で表すので、④ at が正解。at は場所を点としてイメージする場合に用いられる。ここでは the airport「空港」を到着する「点」ととらえている。",
        "engage_source": "Engage Ch.10 前置詞 Sec.73 Q290"
      },
      {
        "id": "ch10_q291",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Prof. Larson's office is located (   ) the fifth floor.",
        "easy_sentence": "Prof. Larson's office is located (   ) the fifth floor.",
        "choices": [
          "at",
          "in",
          "of",
          "on"
        ],
        "answer": 3,
        "university": "藤女子大",
        "translation": "",
        "hint": "接触している面をイメージする",
        "grammar_point": "on：面としてとらえる on",
        "explanation": "locate は「位置する」という意味で、floor に注目。on は面としてとらえる on で、「5階に」は on the fifth floor と表す。",
        "engage_source": "Engage Ch.10 前置詞 Sec.73 Q291"
      },
      {
        "id": "ch10_q292",
        "type": "4択",
        "difficulty": 1,
        "sentence": "He looked at himself (   ) the mirror.",
        "easy_sentence": "He looked at himself (   ) the mirror.",
        "choices": [
          "for",
          "in",
          "at",
          "about"
        ],
        "answer": 1,
        "university": "北星学園大",
        "translation": "",
        "hint": "空間の中を表す",
        "grammar_point": "in：空間をイメージする in",
        "explanation": "「鏡の中の自分自身を見た」。鏡の中は空間としてイメージするので、② in が正解。",
        "engage_source": "Engage Ch.10 前置詞 Sec.73 Q292"
      },
      {
        "id": "ch10_q293",
        "type": "4択",
        "difficulty": 1,
        "sentence": "They will visit us (   ).",
        "easy_sentence": "They will visit us (   ).",
        "choices": [
          "seven o'clock",
          "in seven o'clock",
          "at seven o'clock",
          "to seven o'clock"
        ],
        "answer": 2,
        "university": "熊本県立大",
        "translation": "",
        "hint": "「…時に」",
        "grammar_point": "at：時の一点を表す at",
        "explanation": "「7時に」は at seven o'clock で表す。at は時の一点を表す。",
        "engage_source": "Engage Ch.10 前置詞 Sec.74 Q293"
      },
      {
        "id": "ch10_q295",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I moved to Nagano Prefecture, Japan, (   ) February 2008.",
        "easy_sentence": "I moved to Nagano Prefecture, Japan, (   ) February 2008.",
        "choices": [
          "at",
          "in",
          "with",
          "on"
        ],
        "answer": 1,
        "university": "松本歯科大",
        "translation": "",
        "hint": "幅のある時間を表す",
        "grammar_point": "in：年、月、週などを表す in",
        "explanation": "February「2月」のように幅のある時間を表す場合には、前置詞は in を用いるので、② in が正解。",
        "engage_source": "Engage Ch.10 前置詞 Sec.75 Q295"
      },
      {
        "id": "ch10_q296",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The dental clinic is closed (   ) Thursday afternoons.",
        "easy_sentence": "The dental clinic is closed (   ) Thursday afternoons.",
        "choices": [
          "at",
          "for",
          "in",
          "on"
        ],
        "answer": 3,
        "university": "活鋭大",
        "translation": "",
        "hint": "「木曜日の午後に」",
        "grammar_point": "on：特定の時間を表す on",
        "explanation": "「午後に」という場合は in the afternoon や in the afternoons となるが、「木曜日の午後」といった特定の日の朝・夕などには、on を用いて on Thursday afternoon(s) や on the morning of Thursday とする。",
        "engage_source": "Engage Ch.10 前置詞 Sec.75 Q296"
      },
      {
        "id": "ch10_q297",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I visited a lot of museums (   ) my stay in France.",
        "easy_sentence": "I visited a lot of museums (   ) my stay in France.",
        "choices": [
          "for",
          "while",
          "till",
          "during"
        ],
        "answer": 3,
        "university": "岐阜聖徳大",
        "translation": "",
        "hint": "「…の間に」",
        "grammar_point": "during：特定の期間を表す during",
        "explanation": "my stay「私の滞在」は特定の期間なので during を用いる。④ during が正解。",
        "engage_source": "Engage Ch.10 前置詞 Sec.75 Q297"
      },
      {
        "id": "ch10_q299",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Please get a credit card (   ) the day of your departure from Japan.",
        "easy_sentence": "Please get a credit card (   ) the day of your departure from Japan.",
        "choices": [
          "as",
          "by",
          "since",
          "till"
        ],
        "answer": 1,
        "university": "中央大",
        "translation": "",
        "hint": "「…までに」",
        "grammar_point": "by：期限を表す by",
        "explanation": "「日本を出発する日までにクレジットカードを取得してください」。by は「…までに」の意味で期限を表す。",
        "engage_source": "Engage Ch.10 前置詞 Sec.76 Q299"
      },
      {
        "id": "ch10_q300",
        "type": "4択",
        "difficulty": 2,
        "sentence": "The new highway will be completed (   ) five years.",
        "easy_sentence": "The new highway will be completed (   ) five years.",
        "choices": [
          "by",
          "until",
          "within",
          "for"
        ],
        "answer": 2,
        "university": "関東学院大",
        "translation": "",
        "hint": "期間の範囲内を表す",
        "grammar_point": "within：「…以内に」",
        "explanation": "「新しい高速道路は5年以内に完成するだろう」。within は「…以内に」の意味。",
        "engage_source": "Engage Ch.10 前置詞 Sec.77 Q300"
      },
      {
        "id": "ch10_q301",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I'll be back (   ) an hour.",
        "easy_sentence": "I'll be back (   ) an hour.",
        "choices": [
          "after",
          "in",
          "by",
          "within"
        ],
        "answer": 1,
        "university": "東海大",
        "translation": "",
        "hint": "「（今から）…後に」を表す",
        "grammar_point": "in：「…後に」",
        "explanation": "「1時間後に戻ります」。in は「（今から）…後に」の意味。",
        "engage_source": "Engage Ch.10 前置詞 Sec.77 Q301"
      },
      {
        "id": "ch10_q302",
        "type": "4択",
        "difficulty": 2,
        "sentence": "A new virus has spread (   ) the world.",
        "easy_sentence": "A new virus has spread (   ) the world.",
        "choices": [
          "over",
          "though",
          "throughout",
          "into"
        ],
        "answer": 2,
        "university": "創価大",
        "translation": "",
        "hint": "「…の至る所に」",
        "grammar_point": "throughout：「…中に」",
        "explanation": "「新しいウイルスが世界中に広がった」。throughout は「…の至る所に」の意味。",
        "engage_source": "Engage Ch.10 前置詞 Sec.77 Q302"
      },
      {
        "id": "ch10_q303",
        "type": "4択",
        "difficulty": 2,
        "sentence": "The plane flew (   ) the clouds.",
        "easy_sentence": "The plane flew (   ) the clouds.",
        "choices": [
          "above",
          "along",
          "between",
          "beside"
        ],
        "answer": 0,
        "university": "龍谷大",
        "translation": "",
        "hint": "真上でなくても上方を表す",
        "grammar_point": "above：「…の上方に」",
        "explanation": "「飛行機は雲の上を飛んだ」。above は「…の上方に」の意味。",
        "engage_source": "Engage Ch.10 前置詞 Sec.78 Q303"
      },
      {
        "id": "ch10_q304",
        "type": "4択",
        "difficulty": 2,
        "sentence": "We walked (   ) the river for about an hour.",
        "easy_sentence": "We walked (   ) the river for about an hour.",
        "choices": [
          "among",
          "along",
          "between",
          "across"
        ],
        "answer": 1,
        "university": "京都産業大",
        "translation": "",
        "hint": "細長いものに沿う",
        "grammar_point": "along：「…に沿って」",
        "explanation": "「私たちは約1時間、川沿いを歩いた」。along は「…に沿って」の意味。",
        "engage_source": "Engage Ch.10 前置詞 Sec.78 Q304"
      },
      {
        "id": "ch10_q305",
        "type": "4択",
        "difficulty": 3,
        "sentence": "According to the research, the gap (   ) the rich and the poor has increased recently.",
        "easy_sentence": "According to the research, the gap (   ) the rich and the poor has increased recently.",
        "choices": [
          "in",
          "of",
          "with",
          "between"
        ],
        "answer": 3,
        "university": "大阪学院大",
        "translation": "",
        "hint": "2つのものの間を表す",
        "grammar_point": "between：「（2つ）の間で」",
        "explanation": "gap は「隔たり、すき間」という意味。後ろに the rich and the poor「裕福な者と貧しい者」があるので、「貧富の差」という意味だと考え、① between を選ぶ。between は「2つ[2人]の間で」を表す前置詞。",
        "engage_source": "Engage Ch.10 前置詞 Sec.79 Q305"
      },
      {
        "id": "ch10_q306",
        "type": "4択",
        "difficulty": 3,
        "sentence": "We found a beautiful white lily (   ) the many flowers.",
        "easy_sentence": "We found a beautiful white lily (   ) the many flowers.",
        "choices": [
          "during",
          "among",
          "between",
          "about"
        ],
        "answer": 1,
        "university": "東京工芸大",
        "translation": "",
        "hint": "3つ以上のものの中を表す",
        "grammar_point": "among：「（3つ以上）の中で」",
        "explanation": "the many flowers で「たくさんの花の中に」という意味を表すと考え、② among を選ぶ。among は「3つ[3人]以上の中で」を表すのに用いられる。",
        "engage_source": "Engage Ch.10 前置詞 Sec.79 Q306"
      },
      {
        "id": "ch10_q307",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Are you (   ) or against her plan?",
        "easy_sentence": "Are you (   ) or against her plan?",
        "choices": [
          "on",
          "to",
          "for",
          "around"
        ],
        "answer": 2,
        "university": "名城大",
        "translation": "",
        "hint": "賛成を表す",
        "grammar_point": "for：「…に賛成して」",
        "explanation": "for ... or against ...「…に賛成ですか、それとも反対ですか」。for は「…に賛成して」の意味。",
        "engage_source": "Engage Ch.10 前置詞 Sec.80 Q307"
      },
      {
        "id": "ch10_q308",
        "type": "4択",
        "difficulty": 3,
        "sentence": "It is (   ) the law to cross the street while the walk signal is red.",
        "easy_sentence": "It is (   ) the law to cross the street while the walk signal is red.",
        "choices": [
          "against",
          "before",
          "behind",
          "over"
        ],
        "answer": 0,
        "university": "大阪経済大",
        "translation": "",
        "hint": "反対・違反を表す",
        "grammar_point": "against：「…に反して」",
        "explanation": "「歩行信号が赤の間に道路を横断するのは、法律違反だ」。against the law で「法律に反して」。",
        "engage_source": "Engage Ch.10 前置詞 Sec.80 Q308"
      },
      {
        "id": "ch10_q310",
        "type": "4択",
        "difficulty": 3,
        "sentence": "インターネットでこの記事を見つけたときには、彼女はとても驚いた様子だった。\nShe looked very surprised when she found this article (   ) the Internet.",
        "easy_sentence": "インターネットでこの記事を見つけたときには、彼女はとても驚いた様子だった。\nShe looked very surprised when she found this article (   ) the Internet.",
        "choices": [
          "in",
          "onto",
          "on",
          "throughout"
        ],
        "answer": 2,
        "university": "名城大",
        "translation": "",
        "hint": "メディアの利用を表す",
        "grammar_point": "on：電話・インターネットなどの手段を表す on",
        "explanation": "（　）the Internet で「インターネットで」という意味になると考えられる。電話、テレビ、インターネットといった媒体の利用を表すには on を用いる。",
        "engage_source": "Engage Ch.10 前置詞 Sec.82 Q310"
      },
      {
        "id": "ch10_q311",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I forgot my pen. Can you lend me something to write (   )?",
        "easy_sentence": "I forgot my pen. Can you lend me something to write (   )?",
        "choices": [
          "by",
          "down",
          "on",
          "with"
        ],
        "answer": 3,
        "university": "武蔵大",
        "translation": "",
        "hint": "「それを使って書くもの」",
        "grammar_point": "with：道具を表す with",
        "explanation": "「ペン」は「それを使って書くもの」。something to write（　）は「それを使って書くための何か」の意味だとわかる。道具を表すには with を用いる。",
        "engage_source": "Engage Ch.10 前置詞 Sec.82 Q311"
      },
      {
        "id": "ch10_q312",
        "type": "4択",
        "difficulty": 3,
        "sentence": "In Japan, meat is usually sold (   ).",
        "easy_sentence": "In Japan, meat is usually sold (   ).",
        "choices": [
          "at the gram",
          "by the gram",
          "for a gram",
          "in a gram"
        ],
        "answer": 1,
        "university": "日本女子大",
        "translation": "",
        "hint": "「…単位で」",
        "grammar_point": "by the＋単位",
        "explanation": "「日本では、肉はふつうグラム単位で売られている」。by the gram で「グラム単位で」。",
        "engage_source": "Engage Ch.10 前置詞 Sec.82 Q312"
      },
      {
        "id": "ch10_q314",
        "type": "4択",
        "difficulty": 3,
        "sentence": "My sister works (   ) a secretary for a big company.",
        "easy_sentence": "My sister works (   ) a secretary for a big company.",
        "choices": [
          "on",
          "about",
          "for",
          "as"
        ],
        "answer": 3,
        "university": "広島国際大",
        "translation": "",
        "hint": "職業・身分を表す",
        "grammar_point": "as：「…として」",
        "explanation": "「姉は大企業の秘書として働いている」。as は「…として」の意味。",
        "engage_source": "Engage Ch.10 前置詞 Sec.83 Q314"
      },
      {
        "id": "ch10_q315",
        "type": "4択",
        "difficulty": 3,
        "sentence": "She cried (   ) a little child.",
        "easy_sentence": "She cried (   ) a little child.",
        "choices": [
          "like",
          "among",
          "because",
          "likely"
        ],
        "answer": 0,
        "university": "神奈川工科大",
        "translation": "",
        "hint": "前置詞 like",
        "grammar_point": "like：「…のように」",
        "explanation": "空所の後ろには a little child が続いている。前置詞 like には「…のように」の意味があり、cried like a little child で「小さな子どものように泣いた」という意味になる。",
        "engage_source": "Engage Ch.10 前置詞 Sec.83 Q315"
      },
      {
        "id": "ch10_q316",
        "type": "4択",
        "difficulty": 3,
        "sentence": "(   ) the previous generation, young people today spend more time indoors playing computer games.",
        "easy_sentence": "(   ) the previous generation, young people today spend more time indoors playing computer games.",
        "choices": [
          "Different",
          "Unlike",
          "Contrary",
          "Despite"
        ],
        "answer": 1,
        "university": "大阪産業大",
        "translation": "",
        "hint": "対比を表す前置詞",
        "grammar_point": "unlike：「…と違って」",
        "explanation": "the previous generation「前の世代」と young people today「今日の若者」は対比的。② Unlike「…と違って」が正解。",
        "engage_source": "Engage Ch.10 前置詞 Sec.83 Q316"
      },
      {
        "id": "ch10_q317",
        "type": "4択",
        "difficulty": 3,
        "sentence": "そのドレス似合うね。\nYou look fine (   ) the dress.",
        "easy_sentence": "そのドレス似合うね。\nYou look fine (   ) the dress.",
        "choices": [
          "in",
          "of",
          "on",
          "at"
        ],
        "answer": 0,
        "university": "駒澤大",
        "translation": "",
        "hint": "着用を表す in",
        "grammar_point": "in：「…を着て」",
        "explanation": "「そのドレスを着ている姿が似合うね」。in は「…を着て」の意味。",
        "engage_source": "Engage Ch.10 前置詞 Sec.84 Q317"
      },
      {
        "id": "ch10_q318",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The boy came (   ) a flashlight in his coat pocket.",
        "easy_sentence": "The boy came (   ) a flashlight in his coat pocket.",
        "choices": [
          "of",
          "around",
          "with",
          "on"
        ],
        "answer": 2,
        "university": "摂南大",
        "translation": "",
        "hint": "「…を持って」",
        "grammar_point": "with：付帯状況を表す with",
        "explanation": "「その少年はコートのポケットの中に懐中電灯を持ってやってきた」。with は付帯状況を表す。",
        "engage_source": "Engage Ch.10 前置詞 Sec.84 Q318"
      },
      {
        "id": "ch10_q321",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Why don't we have a break now? Let's have a chat (   ) a cup of tea.",
        "easy_sentence": "Why don't we have a break now? Let's have a chat (   ) a cup of tea.",
        "choices": [
          "in",
          "for",
          "by",
          "over"
        ],
        "answer": 3,
        "university": "関西学院大",
        "translation": "",
        "hint": "「…を飲みながら」",
        "grammar_point": "over：「…しながら」",
        "explanation": "「休憩にしませんか。お茶を飲みながらおしゃべりしましょう」。over は「…しながら」の意味。",
        "engage_source": "Engage Ch.10 前置詞 Sec.84 Q321"
      },
      {
        "id": "ch10_q323",
        "type": "4択",
        "difficulty": 3,
        "sentence": "There will be eighteen people at the party, (   ) you and me.",
        "easy_sentence": "There will be eighteen people at the party, (   ) you and me.",
        "choices": [
          "exist",
          "existing",
          "include",
          "including"
        ],
        "answer": 3,
        "university": "青山学院大",
        "translation": "",
        "hint": "前置詞的に使う分詞",
        "grammar_point": "including：「…を含めて」",
        "explanation": "「パーティーには、あなたと私を含めて18人が来るだろう」。including は「…を含めて」の意味。",
        "engage_source": "Engage Ch.10 前置詞 Sec.85 Q323"
      },
      {
        "id": "ch10_q324",
        "type": "4択",
        "difficulty": 3,
        "sentence": "He can attend the meeting any day (   ) Monday and Tuesday.",
        "easy_sentence": "He can attend the meeting any day (   ) Monday and Tuesday.",
        "choices": [
          "apart",
          "despite",
          "except",
          "without"
        ],
        "answer": 2,
        "university": "中央大",
        "translation": "",
        "hint": "除外を表す",
        "grammar_point": "except：「…を除いた、…以外の」",
        "explanation": "「彼は月曜日と火曜日以外はいつでも、会議に出席できる」。except は「…を除いた」の意味。",
        "engage_source": "Engage Ch.10 前置詞 Sec.85 Q324"
      },
      {
        "id": "ch10_q325",
        "type": "4択",
        "difficulty": 3,
        "sentence": "All (   ) Peter were able to get to class on time.",
        "easy_sentence": "All (   ) Peter were able to get to class on time.",
        "choices": [
          "but",
          "not",
          "that",
          "without"
        ],
        "answer": 0,
        "university": "慶應義塾大",
        "translation": "",
        "hint": "前置詞の but",
        "grammar_point": "but：「…を除いて」",
        "explanation": "All が主語。空所には前置詞が入る。all but ... で「…以外は全部」という意味を表すので、① but が正解。この but「…を除いて」は前置詞。",
        "engage_source": "Engage Ch.10 前置詞 Sec.85 Q325"
      },
      {
        "id": "ch10_q326",
        "type": "4択",
        "difficulty": 3,
        "sentence": "He went to study abroad (   ) his parents' opposition.",
        "easy_sentence": "He went to study abroad (   ) his parents' opposition.",
        "choices": [
          "aside",
          "despite",
          "except",
          "nevertheless"
        ],
        "answer": 1,
        "university": "金沢工業大",
        "translation": "",
        "hint": "譲歩を表す前置詞",
        "grammar_point": "despite：「…にもかかわらず」",
        "explanation": "「彼は両親の反対にもかかわらず留学した」。despite は「…にもかかわらず」の意味。",
        "engage_source": "Engage Ch.10 前置詞 Sec.85 Q326"
      },
      {
        "id": "ch10_q327",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Caught in a terrible traffic jam, we missed the ferry (   ) just one minute.",
        "easy_sentence": "Caught in a terrible traffic jam, we missed the ferry (   ) just one minute.",
        "choices": [
          "at",
          "by",
          "for",
          "in"
        ],
        "answer": 1,
        "university": "東京理科大",
        "translation": "",
        "hint": "「…の差で」",
        "grammar_point": "by：差を表す by",
        "explanation": "「大渋滞につかまって、私たちはわずか1分の差でフェリーに乗り損なった」。by は差を表す。",
        "engage_source": "Engage Ch.10 前置詞 Sec.86 Q327"
      },
      {
        "id": "ch10_q328",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The Internet is useful because we can find information (   ) almost any topic on it.",
        "easy_sentence": "The Internet is useful because we can find information (   ) almost any topic on it.",
        "choices": [
          "on",
          "in",
          "to",
          "at"
        ],
        "answer": 0,
        "university": "群馬大",
        "translation": "",
        "hint": "話題・テーマを表す on",
        "grammar_point": "on：「…に関する」",
        "explanation": "「ほとんどどんな話題に関する情報でもインターネット上に見つけることができるので、インターネットは便利だ」。on は「…に関する」の意味。",
        "engage_source": "Engage Ch.10 前置詞 Sec.86 Q328"
      },
      {
        "id": "ch10_q329",
        "type": "4択",
        "difficulty": 3,
        "sentence": "We enjoyed some delicious watermelon (   ) dessert.",
        "easy_sentence": "We enjoyed some delicious watermelon (   ) dessert.",
        "choices": [
          "by",
          "for",
          "on",
          "to"
        ],
        "answer": 1,
        "university": "藤女子大",
        "translation": "",
        "hint": "「…用に」",
        "grammar_point": "for：〈用途〉を表す for",
        "explanation": "dessert は「デザート」という意味。「デザートに、デザート用に」と考え、〈用途〉を表す② for を入れる。",
        "engage_source": "Engage Ch.10 前置詞 Sec.87 Q329"
      },
      {
        "id": "ch10_q330",
        "type": "4択",
        "difficulty": 3,
        "sentence": "My son may only be two years old, but he is very smart (   ) his age.",
        "easy_sentence": "My son may only be two years old, but he is very smart (   ) his age.",
        "choices": [
          "in",
          "between",
          "for",
          "within"
        ],
        "answer": 2,
        "university": "東海大",
        "translation": "",
        "hint": "「…のわりには」",
        "grammar_point": "for：〈基準〉を表す for",
        "explanation": "「2歳という年齢のわりには」という文意だと考え、③ for を選ぶ。for は very, a little などの程度を表す表現とともに用いられて、「…のわりには」という意味を表すことがある。",
        "engage_source": "Engage Ch.10 前置詞 Sec.87 Q330"
      },
      {
        "id": "ch10_q333",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The man was known (   ) everybody in the town.",
        "easy_sentence": "The man was known (   ) everybody in the town.",
        "choices": [
          "by",
          "for",
          "to",
          "with"
        ],
        "answer": 2,
        "university": "北海学園大",
        "translation": "",
        "hint": "前置詞の使い分け",
        "grammar_point": "be known to ...：「…に知られている」",
        "explanation": "「その男はその町のみんなに知られていた」。be known to ... で「…に知られている」の意味。",
        "engage_source": "Engage Ch.10 前置詞 Sec.88 Q333"
      },
      {
        "id": "ch10_q334",
        "type": "4択",
        "difficulty": 3,
        "sentence": "She is married (   ) a doctor.",
        "easy_sentence": "She is married (   ) a doctor.",
        "choices": [
          "to",
          "with",
          "for",
          "by"
        ],
        "answer": 0,
        "university": "日本大",
        "translation": "",
        "hint": "前置詞の使い分け",
        "grammar_point": "be married to ...：「…と結婚している」",
        "explanation": "「彼女は医者と結婚している」。be married to ... で「…と結婚している」の意味。",
        "engage_source": "Engage Ch.10 前置詞 Sec.88 Q334"
      },
      {
        "id": "ch10_q335",
        "type": "4択",
        "difficulty": 3,
        "sentence": "(   ) my surprise, the rumor turned out to be true.",
        "easy_sentence": "(   ) my surprise, the rumor turned out to be true.",
        "choices": [
          "At",
          "For",
          "In",
          "To"
        ],
        "answer": 3,
        "university": "松山大",
        "translation": "",
        "hint": "〈to one's＋感情名詞〉",
        "grammar_point": "to one's surprise：「驚いたことに」",
        "explanation": "「驚いたことに、そのうわさは本当であることがわかった」。to one's surprise で「驚いたことに」。",
        "engage_source": "Engage Ch.10 前置詞 Sec.88 Q335"
      },
      {
        "id": "ch10_q336",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I am (   ) a loss what to do next.",
        "easy_sentence": "I am (   ) a loss what to do next.",
        "choices": [
          "at",
          "in",
          "on",
          "to"
        ],
        "answer": 0,
        "university": "中京大",
        "translation": "",
        "hint": "慣用表現",
        "grammar_point": "at a loss：「途方に暮れて」",
        "explanation": "「次に何をしたらよいか途方に暮れている」。at a loss で「途方に暮れて」。",
        "engage_source": "Engage Ch.10 前置詞 Sec.88 Q336"
      },
      {
        "id": "ch11_q337",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Takako's brother is very sweet (   ) is tight with money.",
        "easy_sentence": "Takako's brother is very sweet (   ) is tight with money.",
        "choices": [
          "nor",
          "so",
          "then",
          "but"
        ],
        "answer": 3,
        "university": "至誠館大",
        "translation": "",
        "hint": "前後の意味関係を考える",
        "grammar_point": "but「しかし」",
        "explanation": "空所の前後は「タカコのお兄さん[弟さん]はとても優しい」と「お金を出し惜しみする」という対立する内容なので、① but「しかし」が入る。",
        "engage_source": "Engage Ch.11 接続詞 Sec.89 Q337"
      },
      {
        "id": "ch11_q338",
        "type": "4択",
        "difficulty": 1,
        "sentence": "A : I never have time to eat breakfast.\nB : Get up earlier, (   ) you'll have plenty of time.",
        "easy_sentence": "A : I never have time to eat breakfast.\nB : Get up earlier, (   ) you'll have plenty of time.",
        "choices": [
          "and",
          "or",
          "but",
          "nor"
        ],
        "answer": 0,
        "university": "追手門学院大",
        "translation": "",
        "hint": "結果を表す and",
        "grammar_point": "命令文＋and ...「〜しなさい、そうすれば…」",
        "explanation": "A は「私は朝食を食べる時間が全然ありません」と言っているのに対し、B は「もっと早く起きなさい。（　）あなたには十分な時間がありますよ」と言っている。「早く起きる→朝食を食べる時間がある」という関係なので、「そうすれば」の意味になるように① and を入れる。",
        "engage_source": "Engage Ch.11 接続詞 Sec.89 Q338"
      },
      {
        "id": "ch11_q339",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Hurry up, (   ) you'll miss the last train.",
        "easy_sentence": "Hurry up, (   ) you'll miss the last train.",
        "choices": [
          "or",
          "but",
          "so",
          "unless"
        ],
        "answer": 0,
        "university": "明治大",
        "translation": "",
        "hint": "否定的結果を表す or",
        "grammar_point": "命令文＋or ...「〜しなさい、そうしないと…」",
        "explanation": "「急ぎなさい、そうしないと最終電車に乗り遅れますよ」。命令文＋or ... で「〜しなさい、そうしないと…」。",
        "engage_source": "Engage Ch.11 接続詞 Sec.89 Q339"
      },
      {
        "id": "ch11_q341",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Naomi has succeeded in business (   ) by hard work but also by luck.",
        "easy_sentence": "Naomi has succeeded in business (   ) by hard work but also by luck.",
        "choices": [
          "not all",
          "not as",
          "not only",
          "not so much"
        ],
        "answer": 2,
        "university": "南山大",
        "translation": "",
        "hint": "追加を表す",
        "grammar_point": "not only A but also B「AだけでなくBも」",
        "explanation": "「ナオミが仕事で成功したのは、大変な努力によるだけではなく幸運にもよる」。not only A but also B「AだけでなくBも」。",
        "engage_source": "Engage Ch.11 接続詞 Sec.90 Q341"
      },
      {
        "id": "ch11_q342",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Mr. Yamada can communicate in (   ) English and German.",
        "easy_sentence": "Mr. Yamada can communicate in (   ) English and German.",
        "choices": [
          "either",
          "both",
          "so",
          "such"
        ],
        "answer": 1,
        "university": "拓殖大",
        "translation": "",
        "hint": "両方を表す",
        "grammar_point": "both A and B「AもBも、AとBの両方」",
        "explanation": "空所の後ろに English and German という（A and B）の形が続くことに注目。both A and B で「AとBの両方」の意味を表すので、空所には② both を入れる。",
        "engage_source": "Engage Ch.11 接続詞 Sec.90 Q342"
      },
      {
        "id": "ch11_q343",
        "type": "4択",
        "difficulty": 1,
        "sentence": "To get to the library, you can take (   ) a train or a bus.",
        "easy_sentence": "To get to the library, you can take (   ) a train or a bus.",
        "choices": [
          "neither",
          "rather than",
          "either",
          "both"
        ],
        "answer": 2,
        "university": "福井工業大",
        "translation": "",
        "hint": "二者択一を表す",
        "grammar_point": "either A or B「AかBのどちらか」",
        "explanation": "空所の後ろに a train or a bus という（A or B）の形が続くことに注目。either A or B で「AかBのどちらか」の意味を表すので、空所には③ either を入れる。",
        "engage_source": "Engage Ch.11 接続詞 Sec.90 Q343"
      },
      {
        "id": "ch11_q344",
        "type": "4択",
        "difficulty": 1,
        "sentence": "My grandfather had problems during his stay in Canada because he could speak neither English (   ) French.",
        "easy_sentence": "My grandfather had problems during his stay in Canada because he could speak neither English (   ) French.",
        "choices": [
          "and",
          "but",
          "or",
          "nor"
        ],
        "answer": 3,
        "university": "東海大",
        "translation": "",
        "hint": "両方の否定",
        "grammar_point": "neither A nor B「AもBも（どちらも）…ない」",
        "explanation": "neither に注目。neither A nor B で「AもBも…ない」の意味。④ nor が正解。",
        "engage_source": "Engage Ch.11 接続詞 Sec.90 Q344"
      },
      {
        "id": "ch11_q345",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Many shoppers use coupons (   ) they shop for groceries and household items at supermarkets.",
        "easy_sentence": "Many shoppers use coupons (   ) they shop for groceries and household items at supermarkets.",
        "choices": [
          "unless",
          "when",
          "where",
          "until"
        ],
        "answer": 1,
        "university": "名城大",
        "translation": "",
        "hint": "時を表す接続詞",
        "grammar_point": "when「…するとき」",
        "explanation": "「多くの買い物客が、スーパーマーケットで食料や日用品を買うとき、クーポン券を使う」。② when「…するとき」。",
        "engage_source": "Engage Ch.11 接続詞 Sec.91 Q345"
      },
      {
        "id": "ch11_q346",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I fell asleep (   ) I was watching the movie.",
        "easy_sentence": "I fell asleep (   ) I was watching the movie.",
        "choices": [
          "during",
          "while",
          "because of",
          "in spite of"
        ],
        "answer": 1,
        "university": "甲南大",
        "translation": "",
        "hint": "同時進行を表す",
        "grammar_point": "while「…している間に」",
        "explanation": "「私は映画を見ている間に眠ってしまった」。② while「…している間に」。",
        "engage_source": "Engage Ch.11 接続詞 Sec.91 Q346"
      },
      {
        "id": "ch11_q347",
        "type": "4択",
        "difficulty": 1,
        "sentence": "(   ) working in the customer call center, she received more than ten complaints about the new product.",
        "easy_sentence": "(   ) working in the customer call center, she received more than ten complaints about the new product.",
        "choices": [
          "Upon",
          "Into",
          "While",
          "During"
        ],
        "answer": 2,
        "university": "東洋大",
        "translation": "",
        "hint": "分詞構文的用法",
        "grammar_point": "While doing「…している間に」",
        "explanation": "「顧客コールセンターで働いている間に、彼女は新製品について10件以上の苦情を受けた」。③ While。",
        "engage_source": "Engage Ch.11 接続詞 Sec.91 Q347"
      },
      {
        "id": "ch11_q348",
        "type": "4択",
        "difficulty": 1,
        "sentence": "It has been years (   ) that car company came out with a new model.",
        "easy_sentence": "It has been years (   ) that car company came out with a new model.",
        "choices": [
          "once",
          "along",
          "since",
          "while"
        ],
        "answer": 2,
        "university": "日本大",
        "translation": "",
        "hint": "現在完了との共起",
        "grammar_point": "since「…して以来（ずっと）」",
        "explanation": "It has been years は〈It has been＋時間＋since ...〉「…してから（時間）になる」の一部と判断し、③ since を入れる。",
        "engage_source": "Engage Ch.11 接続詞 Sec.91 Q348"
      },
      {
        "id": "ch11_q349",
        "type": "4択",
        "difficulty": 1,
        "sentence": "If your headache gets worse, take this medicine and stay in bed (   ) the pain is relieved.",
        "easy_sentence": "If your headache gets worse, take this medicine and stay in bed (   ) the pain is relieved.",
        "choices": [
          "until",
          "by",
          "by the time",
          "in time"
        ],
        "answer": 0,
        "university": "福岡大",
        "translation": "",
        "hint": "動作の継続を表す",
        "grammar_point": "until「…まで（ずっと）」〈継続〉",
        "explanation": "「頭痛がひどくなったら、この薬を飲んで痛みが和らぐまでベッドで寝ていなさい」という意味。① until を選ぶ。",
        "engage_source": "Engage Ch.11 接続詞 Sec.91 Q349"
      },
      {
        "id": "ch11_q350",
        "type": "4択",
        "difficulty": 1,
        "sentence": "He will be back home (   ) the package is delivered.",
        "easy_sentence": "He will be back home (   ) the package is delivered.",
        "choices": [
          "then",
          "by the time",
          "until",
          "at times"
        ],
        "answer": 1,
        "university": "名古屋学芸大",
        "translation": "",
        "hint": "期限を表す接続詞",
        "grammar_point": "by the time「…するまでに」〈期限〉",
        "explanation": "「彼は荷物が配達されるときまでには帰宅するだろう」。② by the time「…するまでに」。",
        "engage_source": "Engage Ch.11 接続詞 Sec.91 Q350"
      },
      {
        "id": "ch11_q351",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Please don't forget to turn off the gas (   ) you go out.",
        "easy_sentence": "Please don't forget to turn off the gas (   ) you go out.",
        "choices": [
          "during",
          "before",
          "since",
          "until"
        ],
        "answer": 1,
        "university": "南山大",
        "translation": "",
        "hint": "時の前後関係を表す",
        "grammar_point": "before「…する前に」",
        "explanation": "「出かける前にガスを止めるのを忘れないでください」。② before「…する前に」。",
        "engage_source": "Engage Ch.11 接続詞 Sec.91 Q351"
      },
      {
        "id": "ch11_q357",
        "type": "4択",
        "difficulty": 2,
        "sentence": "As (   ) as I know, he has never done such a terrible thing.",
        "easy_sentence": "As (   ) as I know, he has never done such a terrible thing.",
        "choices": [
          "soon",
          "long",
          "far",
          "much"
        ],
        "answer": 2,
        "university": "関西学院大",
        "translation": "",
        "hint": "範囲を表す",
        "grammar_point": "as far as S know「Sが知る限りでは」",
        "explanation": "「私の知る限りでは、彼がそんなひどいことをしたことはない」。as far as S know で「Sが知る限りでは」。",
        "engage_source": "Engage Ch.11 接続詞 Sec.93 Q357"
      },
      {
        "id": "ch11_q358",
        "type": "4択",
        "difficulty": 2,
        "sentence": "As (   ) we leave home by five o'clock, we should get there on time.",
        "easy_sentence": "As (   ) we leave home by five o'clock, we should get there on time.",
        "choices": [
          "long as",
          "far as",
          "to",
          "if"
        ],
        "answer": 0,
        "university": "神奈川大",
        "translation": "",
        "hint": "条件を表す",
        "grammar_point": "as long as「…しさえすれば」",
        "explanation": "「5時までに家を出発しさえすれば、私たちは時間通りにそこに着くはずだ」。as long as で「…しさえすれば」。",
        "engage_source": "Engage Ch.11 接続詞 Sec.93 Q358"
      },
      {
        "id": "ch11_q360",
        "type": "4択",
        "difficulty": 2,
        "sentence": "It started raining, (   ) they had to stop playing tennis.",
        "easy_sentence": "It started raining, (   ) they had to stop playing tennis.",
        "choices": [
          "because",
          "in spite of",
          "so",
          "though"
        ],
        "answer": 2,
        "university": "東京経済大",
        "translation": "",
        "hint": "結果を表す接続詞",
        "grammar_point": "so (that) ...「だから…、それで…」〈結果〉",
        "explanation": "「雨が降り始めた。それで彼らはテニスをするのをやめなければならなかった」。③ so。",
        "engage_source": "Engage Ch.11 接続詞 Sec.94 Q360"
      },
      {
        "id": "ch11_q361",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Your father was (   ) he jumped into the river and saved me from drowning.",
        "easy_sentence": "Your father was (   ) he jumped into the river and saved me from drowning.",
        "choices": [
          "as brave as",
          "not a fool as",
          "so brave that",
          "too foolish to"
        ],
        "answer": 2,
        "university": "京都産業大",
        "translation": "",
        "hint": "程度を表す",
        "grammar_point": "so ... that 〜「とても…なので〜」〈程度〉",
        "explanation": "「あなたのお父さんはとても勇敢なので、川に飛び込んでおぼれかけた私を助けてくれた」。③ so brave that。",
        "engage_source": "Engage Ch.11 接続詞 Sec.94 Q361"
      },
      {
        "id": "ch11_q362",
        "type": "4択",
        "difficulty": 2,
        "sentence": "That waiter was (   ) that we decided not to complain about the poor service.",
        "easy_sentence": "That waiter was (   ) that we decided not to complain about the poor service.",
        "choices": [
          "so kindness a man",
          "so kindness of a man",
          "such nice a man",
          "such a nice man"
        ],
        "answer": 3,
        "university": "青山学院大",
        "translation": "",
        "hint": "程度を表す",
        "grammar_point": "such a＋形容詞＋名詞＋that 〜「とても…な（名詞）なので〜」",
        "explanation": "「そのウェイターはとてもいい人だったので、私たちは粗末なサービスに文句を言わないことに決めた」。④ such a nice man。",
        "engage_source": "Engage Ch.11 接続詞 Sec.94 Q362"
      }
    ]
  },
  {
    "day": 10,
    "title": "Day 10: 接続詞（後半）＋ 主語と動詞 ＋ 疑問詞",
    "description": "",
    "completed": false,
    "questions": [
      {
        "id": "ch11_q363",
        "type": "4択",
        "difficulty": 3,
        "sentence": "She arranged the schedule (   ) everything would go well.",
        "easy_sentence": "She arranged the schedule (   ) everything would go well.",
        "choices": [
          "as far as",
          "because",
          "so as to",
          "so that"
        ],
        "answer": 3,
        "university": "藤女子大",
        "translation": "",
        "hint": "目的を表す",
        "grammar_point": "so that＋S＋助動詞「Sが…するために」〈目的〉",
        "explanation": "「彼女はすべてがうまくいくようにそのスケジュールを調整した」。④ so that。",
        "engage_source": "Engage Ch.11 接続詞 Sec.95 Q363"
      },
      {
        "id": "ch11_q366",
        "type": "4択",
        "difficulty": 3,
        "sentence": "(   ) my train was delayed, I was late for school.",
        "easy_sentence": "(   ) my train was delayed, I was late for school.",
        "choices": [
          "Although",
          "Since",
          "So",
          "Due to"
        ],
        "answer": 1,
        "university": "帰山大",
        "translation": "",
        "hint": "理由を表す接続詞",
        "grammar_point": "since「…なので」",
        "explanation": "「私の乗った電車が遅れたので、私は学校に遅刻した」。② Since「…なので」。",
        "engage_source": "Engage Ch.11 接続詞 Sec.96 Q366"
      },
      {
        "id": "ch11_q367",
        "type": "4択",
        "difficulty": 3,
        "sentence": "We decided not to go to London this year, (   ) it is too expensive.",
        "easy_sentence": "We decided not to go to London this year, (   ) it is too expensive.",
        "choices": [
          "as",
          "due to",
          "so",
          "although"
        ],
        "answer": 0,
        "university": "芝浦工業大",
        "translation": "",
        "hint": "理由を表す接続詞",
        "grammar_point": "as「…なので」",
        "explanation": "「お金がかかりすぎるので、私たちは今年はロンドンへ行かないことに決めた」。① as「…なので」。",
        "engage_source": "Engage Ch.11 接続詞 Sec.96 Q367"
      },
      {
        "id": "ch11_q368",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Do not despise them just (   ) they are poorly dressed.",
        "easy_sentence": "Do not despise them just (   ) they are poorly dressed.",
        "choices": [
          "because",
          "for",
          "that",
          "though"
        ],
        "answer": 0,
        "university": "近畿大",
        "translation": "",
        "hint": "理由を表す接続詞",
        "grammar_point": "because「…だから」",
        "explanation": "「みすぼらしい身なりをしているからといって彼らをさげすんではいけない」。① because。",
        "engage_source": "Engage Ch.11 接続詞 Sec.96 Q368"
      },
      {
        "id": "ch11_q369",
        "type": "4択",
        "difficulty": 3,
        "sentence": "(   ) you are retired, you can travel more.",
        "easy_sentence": "(   ) you are retired, you can travel more.",
        "choices": [
          "Nevertheless",
          "Now that",
          "Whether",
          "So as"
        ],
        "answer": 1,
        "university": "広島国際大",
        "translation": "",
        "hint": "理由・条件を表す",
        "grammar_point": "now (that) ...「今や[もう]…だから」",
        "explanation": "「もう引退しているのだから、あなたはもっと旅行ができます」。② Now that。",
        "engage_source": "Engage Ch.11 接続詞 Sec.97 Q369"
      },
      {
        "id": "ch11_q370",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I don't think I want to buy this jacket (   ) I can try it on first.",
        "easy_sentence": "I don't think I want to buy this jacket (   ) I can try it on first.",
        "choices": [
          "because",
          "unless",
          "when",
          "if"
        ],
        "answer": 1,
        "university": "專修大",
        "translation": "",
        "hint": "条件の否定を表す",
        "grammar_point": "unless「…しない限り、もし…でなければ」",
        "explanation": "「まず試着ができないのなら、私はこの上着を買いたいとは思わない」。② unless。",
        "engage_source": "Engage Ch.11 接続詞 Sec.97 Q370"
      },
      {
        "id": "ch11_q371",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Any color is fine, (   ) it looks stylish enough.",
        "easy_sentence": "Any color is fine, (   ) it looks stylish enough.",
        "choices": [
          "otherwise",
          "provided",
          "as much as",
          "unless"
        ],
        "answer": 1,
        "university": "関西学院大",
        "translation": "",
        "hint": "条件を表す接続詞",
        "grammar_point": "provided「もし…ならば」",
        "explanation": "「十分おしゃれに見えるなら、どんな色でもいい」。② provided。",
        "engage_source": "Engage Ch.11 接続詞 Sec.97 Q371"
      },
      {
        "id": "ch11_q372",
        "type": "4択",
        "difficulty": 3,
        "sentence": "(   ) you start something, don't leave it unfinished.",
        "easy_sentence": "(   ) you start something, don't leave it unfinished.",
        "choices": [
          "For fear",
          "Once",
          "Unless",
          "While"
        ],
        "answer": 1,
        "university": "九州ルーテル学院大",
        "translation": "",
        "hint": "条件を表す接続詞",
        "grammar_point": "once「ひとたび…すれば、いったん…したら」",
        "explanation": "「ひとたび何かを始めたら、途中で放り出すな」。② Once。",
        "engage_source": "Engage Ch.11 接続詞 Sec.97 Q372"
      },
      {
        "id": "ch11_q373",
        "type": "4択",
        "difficulty": 3,
        "sentence": "You can leave work early today on (   ) that you work late tomorrow.",
        "easy_sentence": "You can leave work early today on (   ) that you work late tomorrow.",
        "choices": [
          "situation",
          "condition",
          "requirement",
          "promise"
        ],
        "answer": 1,
        "university": "松山大",
        "translation": "",
        "hint": "条件を表す",
        "grammar_point": "on condition (that) ...「…という条件で、もし…ならば」",
        "explanation": "「明日遅くまで働くなら、あなたは今日は早く仕事を終えてもかまわない」。② condition。",
        "engage_source": "Engage Ch.11 接続詞 Sec.97 Q373"
      },
      {
        "id": "ch11_q374",
        "type": "4択",
        "difficulty": 3,
        "sentence": "(   ) yesterday was a national holiday, the students still had to attend classes.",
        "easy_sentence": "(   ) yesterday was a national holiday, the students still had to attend classes.",
        "choices": [
          "Nevertheless",
          "Despite",
          "However",
          "Although"
        ],
        "answer": 3,
        "university": "前山大",
        "translation": "",
        "hint": "譲歩を表す接続詞",
        "grammar_point": "although[though]「…だけれども、…にもかかわらず」",
        "explanation": "「昨日は祝日だったにもかかわらず、生徒たちはそれでも授業に出席しなければならなかった」。④ Although。",
        "engage_source": "Engage Ch.11 接続詞 Sec.98 Q374"
      },
      {
        "id": "ch11_q375",
        "type": "4択",
        "difficulty": 3,
        "sentence": "(   ) we leave right now, we are still going to be late.",
        "easy_sentence": "(   ) we leave right now, we are still going to be late.",
        "choices": [
          "In spite of",
          "Even if",
          "However",
          "Because"
        ],
        "answer": 1,
        "university": "足利工業大",
        "translation": "",
        "hint": "仮定の譲歩を表す",
        "grammar_point": "even if「たとえ…しても」",
        "explanation": "「今すぐ出発したとしても、それでも私たちは遅刻することになる」。② Even if。",
        "engage_source": "Engage Ch.11 接続詞 Sec.98 Q375"
      },
      {
        "id": "ch11_q376",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I was interested in the conversation (   ) I didn't understand everything.",
        "easy_sentence": "I was interested in the conversation (   ) I didn't understand everything.",
        "choices": [
          "if",
          "in spite of",
          "even though",
          "as soon as"
        ],
        "answer": 2,
        "university": "実対大",
        "translation": "",
        "hint": "事実の譲歩を表す",
        "grammar_point": "even though「…だけれども」",
        "explanation": "「すべてを理解したわけではなかったけれども、私はその会話に興味があった」。③ even though。",
        "engage_source": "Engage Ch.11 接続詞 Sec.98 Q376"
      },
      {
        "id": "ch11_q377",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Young (   ) he was, he was an experienced programmer.",
        "easy_sentence": "Young (   ) he was, he was an experienced programmer.",
        "choices": [
          "as",
          "before",
          "how",
          "if"
        ],
        "answer": 0,
        "university": "日本大",
        "translation": "",
        "hint": "倒置による譲歩",
        "grammar_point": "形容詞＋as＋S＋V「…だけれども」",
        "explanation": "「若かったが、彼は経験豊かなプログラマーだった」。① as。Young as he was は「若かったけれども」の意味。",
        "engage_source": "Engage Ch.11 接続詞 Sec.98 Q377"
      },
      {
        "id": "ch11_q378",
        "type": "4択",
        "difficulty": 3,
        "sentence": "(   ) her parents agree or not, she won't change her mind.",
        "easy_sentence": "(   ) her parents agree or not, she won't change her mind.",
        "choices": [
          "Either",
          "Though",
          "While",
          "Whether"
        ],
        "answer": 3,
        "university": "拓殖大",
        "translation": "",
        "hint": "譲歩を表す",
        "grammar_point": "whether ... or not「…であろうとなかろうと」",
        "explanation": "「彼女の両親が賛成してもしなくても、彼女は自分の考えを変えないだろう」。④ Whether。",
        "engage_source": "Engage Ch.11 接続詞 Sec.98 Q378"
      },
      {
        "id": "ch11_q379",
        "type": "4択",
        "difficulty": 3,
        "sentence": "(   ) he decided to eat all kinds of vegetables, he still has trouble eating carrots.",
        "easy_sentence": "(   ) he decided to eat all kinds of vegetables, he still has trouble eating carrots.",
        "choices": [
          "While",
          "Since",
          "However",
          "So"
        ],
        "answer": 0,
        "university": "芝浦工業大",
        "translation": "",
        "hint": "対比・譲歩を表す",
        "grammar_point": "while〈譲歩〉「…だけれども」",
        "explanation": "「彼は全種類の野菜を食べようと決心したけれども、それでもニンジンを食べるのには苦労している」。① While。",
        "engage_source": "Engage Ch.11 接続詞 Sec.98 Q379"
      },
      {
        "id": "ch11_q380",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Usually, people in Osaka stand on the right side of an escalator, (   ) people in Tokyo stand on the left side.",
        "easy_sentence": "Usually, people in Osaka stand on the right side of an escalator, (   ) people in Tokyo stand on the left side.",
        "choices": [
          "for",
          "since",
          "so",
          "while"
        ],
        "answer": 3,
        "university": "教育市立看護大",
        "translation": "",
        "hint": "対比を表す接続詞",
        "grammar_point": "while〈対比〉「…なのに対して、…である一方」",
        "explanation": "「ふつう、大阪の人はエスカレーターの右側に立つのに対し、東京の人は左側に立つ」。④ while。",
        "engage_source": "Engage Ch.11 接続詞 Sec.98 Q380"
      },
      {
        "id": "ch11_q381",
        "type": "4択",
        "difficulty": 3,
        "sentence": "She is poor, (   ) her brothers are very rich.",
        "easy_sentence": "She is poor, (   ) her brothers are very rich.",
        "choices": [
          "whereas",
          "now",
          "despite",
          "which"
        ],
        "answer": 0,
        "university": "松山大",
        "translation": "",
        "hint": "対比を表す接続詞",
        "grammar_point": "whereas「…であるのに対して」",
        "explanation": "「彼女は貧しい。ところが彼女の兄弟はとても裕福だ」。① whereas。",
        "engage_source": "Engage Ch.11 接続詞 Sec.98 Q381"
      },
      {
        "id": "ch11_q382",
        "type": "4択",
        "difficulty": 3,
        "sentence": "人は年をとるにつれて賢くなるとはかぎらない。\nWe do not necessarily grow wiser (   ) we grow older.",
        "easy_sentence": "人は年をとるにつれて賢くなるとはかぎらない。\nWe do not necessarily grow wiser (   ) we grow older.",
        "choices": [
          "than",
          "as",
          "that",
          "which"
        ],
        "answer": 1,
        "university": "成城大",
        "translation": "",
        "hint": "比例を表す接続詞",
        "grammar_point": "as「…するにつれて」",
        "explanation": "「人は年をとるにつれて賢くなるとはかぎらない」。② as「…するにつれて」。",
        "engage_source": "Engage Ch.11 接続詞 Sec.99 Q382"
      },
      {
        "id": "ch11_q383",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I wish my students had done (   ) they were told.",
        "easy_sentence": "I wish my students had done (   ) they were told.",
        "choices": [
          "as",
          "if",
          "just",
          "that"
        ],
        "answer": 0,
        "university": "東北薬科大",
        "translation": "",
        "hint": "様態を表す接続詞",
        "grammar_point": "as「…するように、…する通りに」",
        "explanation": "「私の生徒たちが言われたようにしたらよかったのに」。① as「…するように」。",
        "engage_source": "Engage Ch.11 接続詞 Sec.99 Q383"
      },
      {
        "id": "ch11_q385",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Our company's biggest problem is (   ) some customers have switched to our competitors.",
        "easy_sentence": "Our company's biggest problem is (   ) some customers have switched to our competitors.",
        "choices": [
          "while",
          "which",
          "that",
          "as"
        ],
        "answer": 2,
        "university": "南山大",
        "translation": "",
        "hint": "名詞節を導く that",
        "grammar_point": "that節「…ということ」",
        "explanation": "「私たちの会社の最も大きな問題は、顧客の中に競合会社に乗り換えてしまった人たちがいるということだ」。③ that。",
        "engage_source": "Engage Ch.11 接続詞 Sec.100 Q385"
      },
      {
        "id": "ch11_q386",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The rumor (   ) she left the city is untrue.",
        "easy_sentence": "The rumor (   ) she left the city is untrue.",
        "choices": [
          "but",
          "that",
          "when",
          "whether"
        ],
        "answer": 1,
        "university": "鎮央大",
        "translation": "",
        "hint": "名詞＋ that 節",
        "grammar_point": "that節〈同格〉「…という（名詞）」",
        "explanation": "「彼女が町を去ったというそのうわさはうそだ」。② that。rumor と that 節は同格の関係。",
        "engage_source": "Engage Ch.11 接続詞 Sec.100 Q386"
      },
      {
        "id": "ch11_q387",
        "type": "4択",
        "difficulty": 3,
        "sentence": "He is lucky (   ) that he has never experienced failure.",
        "easy_sentence": "He is lucky (   ) that he has never experienced failure.",
        "choices": [
          "at",
          "on",
          "of",
          "in"
        ],
        "answer": 3,
        "university": "青山学院大",
        "translation": "",
        "hint": "理由・点を表す接続詞的用法",
        "grammar_point": "in that ...「…という点で」",
        "explanation": "「彼は、失敗を経験したことがないという点で幸運だ」。④ in。in that ... で「…という点で」。",
        "engage_source": "Engage Ch.11 接続詞 Sec.100 Q387"
      },
      {
        "id": "ch11_q388",
        "type": "4択",
        "difficulty": 3,
        "sentence": "He asked me (   ) I wanted to take a rest.",
        "easy_sentence": "He asked me (   ) I wanted to take a rest.",
        "choices": [
          "if",
          "that",
          "unless",
          "which"
        ],
        "answer": 0,
        "university": "京都女子大",
        "translation": "",
        "hint": "名詞節を導く if",
        "grammar_point": "if「…かどうか」",
        "explanation": "「彼は私に、休憩を取りたいかどうか尋ねた」。① if「…かどうか」。",
        "engage_source": "Engage Ch.11 接続詞 Sec.100 Q388"
      },
      {
        "id": "ch11_q389",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The question is (   ) we can finish the project in time.",
        "easy_sentence": "The question is (   ) we can finish the project in time.",
        "choices": [
          "if",
          "until",
          "whether",
          "while"
        ],
        "answer": 2,
        "university": "日本大",
        "translation": "",
        "hint": "名詞節を導く whether",
        "grammar_point": "whether「…かどうか」",
        "explanation": "「問題は、私たちが間に合うようにその研究課題を終わらせられるかどうかということだ」。③ whether。",
        "engage_source": "Engage Ch.11 接続詞 Sec.100 Q389"
      },
      {
        "id": "ch12_q390",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The number of students who can swim (   ) rising.",
        "easy_sentence": "The number of students who can swim (   ) rising.",
        "choices": [
          "is",
          "are",
          "to be",
          "were"
        ],
        "answer": 0,
        "university": "青山学院大",
        "translation": "",
        "hint": "主語の単複の判断",
        "grammar_point": "the number of ...「…の数」は単数扱い",
        "explanation": "文の主語は The number of students「生徒の数」。the number of ... は単数扱いなので、be 動詞は① is が適切。",
        "engage_source": "Engage Ch.12 主語と動詞 Sec.101 Q390"
      },
      {
        "id": "ch12_q391",
        "type": "4択",
        "difficulty": 1,
        "sentence": "A number of university students (   ) invited to the party.",
        "easy_sentence": "A number of university students (   ) invited to the party.",
        "choices": [
          "had",
          "have",
          "was",
          "were"
        ],
        "answer": 3,
        "university": "近畿大",
        "translation": "",
        "hint": "主語の単複の判断",
        "grammar_point": "a number of ...「たくさんの…」は複数扱い",
        "explanation": "a number of ...「たくさんの…」は複数扱い。④ were が正解。",
        "engage_source": "Engage Ch.12 主語と動詞 Sec.101 Q391"
      },
      {
        "id": "ch12_q392",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Both you and I (   ) suspected by the police.",
        "easy_sentence": "Both you and I (   ) suspected by the police.",
        "choices": [
          "are",
          "am",
          "is",
          "be"
        ],
        "answer": 0,
        "university": "駒澤大",
        "translation": "",
        "hint": "主語の単複の判断",
        "grammar_point": "both A and B は複数扱い",
        "explanation": "both A and B は「AもBも」で複数扱い。① are が正解。",
        "engage_source": "Engage Ch.12 主語と動詞 Sec.102 Q392"
      },
      {
        "id": "ch12_q393",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Either you or I (   ) supposed to organize a welcoming party for our new boss.",
        "easy_sentence": "Either you or I (   ) supposed to organize a welcoming party for our new boss.",
        "choices": [
          "am",
          "be",
          "will be",
          "is"
        ],
        "answer": 0,
        "university": "広島工業大",
        "translation": "",
        "hint": "近接の主語に一致",
        "grammar_point": "either A or B は B に合わせる",
        "explanation": "either A or B は B に動詞を合わせる。B = I なので、① am が正解。",
        "engage_source": "Engage Ch.12 主語と動詞 Sec.102 Q393"
      },
      {
        "id": "ch12_q394",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Not suggestions but sympathy (   ) now.",
        "easy_sentence": "Not suggestions but sympathy (   ) now.",
        "choices": [
          "are needed",
          "is needed",
          "need",
          "needs"
        ],
        "answer": 1,
        "university": "近鉄大",
        "translation": "",
        "hint": "近接の主語に一致",
        "grammar_point": "not A but B「AではなくB」動詞は B に合わせる",
        "explanation": "not A but B は、話題の中心が B なので、動詞は B に合わせる。sympathy は単数なので② is needed が正解。",
        "engage_source": "Engage Ch.12 主語と動詞 Sec.103 Q394"
      },
      {
        "id": "ch12_q395",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Not only Rie but also her mother (   ) to that chorus club.",
        "easy_sentence": "Not only Rie but also her mother (   ) to that chorus club.",
        "choices": [
          "belong",
          "belongs",
          "is belonging",
          "are belonging"
        ],
        "answer": 1,
        "university": "大阪経済大",
        "translation": "",
        "hint": "近接の主語に一致",
        "grammar_point": "not only A but also B「AだけでなくBも」動詞は B に合わせる",
        "explanation": "not only A but also B は B に動詞を合わせる。her mother は三人称単数なので② belongs が正解。",
        "engage_source": "Engage Ch.12 主語と動詞 Sec.103 Q395"
      },
      {
        "id": "ch12_q396",
        "type": "4択",
        "difficulty": 1,
        "sentence": "(   ) of those boys was the winner of the first prize.",
        "easy_sentence": "(   ) of those boys was the winner of the first prize.",
        "choices": [
          "Both",
          "Neither",
          "Half",
          "No"
        ],
        "answer": 1,
        "university": "工学院大",
        "translation": "",
        "hint": "代名詞の単複",
        "grammar_point": "Neither は単数扱い",
        "explanation": "was（単数の動詞）に合う主語を選ぶ。② Neither「どちらも…ない」は単数扱い。",
        "engage_source": "Engage Ch.12 主語と動詞 Sec.103 Q396"
      },
      {
        "id": "ch12_q398",
        "type": "4択",
        "difficulty": 1,
        "sentence": "See to it that the elderly (   ) properly cared for.",
        "easy_sentence": "See to it that the elderly (   ) properly cared for.",
        "choices": [
          "has",
          "have",
          "are",
          "is"
        ],
        "answer": 2,
        "university": "玉川大",
        "translation": "",
        "hint": "「…な人々」",
        "grammar_point": "〈the＋形容詞〉は複数扱い",
        "explanation": "the elderly「お年寄り」は〈the＋形容詞〉で「…な人々」を表し、複数扱い。③ are が正解。",
        "engage_source": "Engage Ch.12 主語と動詞 Sec.103 Q398"
      },
      {
        "id": "ch12_q399",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Quite a few homeless people (   ) coping with the cold last night.",
        "easy_sentence": "Quite a few homeless people (   ) coping with the cold last night.",
        "choices": [
          "were",
          "was",
          "are",
          "is"
        ],
        "answer": 0,
        "university": "松澤大",
        "translation": "",
        "hint": "数量表現の単複",
        "grammar_point": "quite a few ...「かなりの数の…」は複数扱い",
        "explanation": "quite a few ... は「かなりの数の…」という意味で、複数扱い。① were が正解。",
        "engage_source": "Engage Ch.12 主語と動詞 Sec.104 Q399"
      },
      {
        "id": "ch12_q400",
        "type": "4択",
        "difficulty": 2,
        "sentence": "There (   ) a lot of snow in this area in winter.",
        "easy_sentence": "There (   ) a lot of snow in this area in winter.",
        "choices": [
          "are",
          "has",
          "have",
          "is"
        ],
        "answer": 3,
        "university": "京都光華女子大",
        "translation": "",
        "hint": "There is/are の使い分け",
        "grammar_point": "不可算名詞は単数扱い",
        "explanation": "「この地域は冬に雪が多い」。snow は不可算名詞なので、単数扱い。④ is が正解。",
        "engage_source": "Engage Ch.12 主語と動詞 Sec.104 Q400"
      },
      {
        "id": "ch12_q401",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Knowing several (   ) helpful if you want to work for an international company in the future.",
        "easy_sentence": "Knowing several (   ) helpful if you want to work for an international company in the future.",
        "choices": [
          "language are",
          "language is",
          "languages are",
          "languages is"
        ],
        "answer": 1,
        "university": "立命館大",
        "translation": "",
        "hint": "句・節が主語の場合",
        "grammar_point": "動名詞主語は単数扱い",
        "explanation": "Knowing several language(s) が主語。動名詞が主語の場合は単数扱いなので、動詞は is。languageは several がつくので languages だが、② language is が正解。",
        "engage_source": "Engage Ch.12 主語と動詞 Sec.104 Q401"
      },
      {
        "id": "ch12_q403",
        "type": "4択",
        "difficulty": 2,
        "sentence": "At the high school James and Anne attended, mathematics (   ) by Ms. Owen.",
        "easy_sentence": "At the high school James and Anne attended, mathematics (   ) by Ms. Owen.",
        "choices": [
          "are taught",
          "taught",
          "were taught",
          "was taught"
        ],
        "answer": 3,
        "university": "駒澤大",
        "translation": "",
        "hint": "形は複数でも単数扱いの名詞",
        "grammar_point": "mathematics は単数扱い",
        "explanation": "mathematics は学問名で、形は複数形だが単数扱い。④ was taught が正解。",
        "engage_source": "Engage Ch.12 主語と動詞 Sec.104 Q403"
      },
      {
        "id": "ch12_q405",
        "type": "4択",
        "difficulty": 2,
        "sentence": "One of the most interesting facts about kangaroos (   ) that they cannot walk backwards.",
        "easy_sentence": "One of the most interesting facts about kangaroos (   ) that they cannot walk backwards.",
        "choices": [
          "is",
          "are",
          "were",
          "be"
        ],
        "answer": 0,
        "university": "阪南大",
        "translation": "",
        "hint": "主語と動詞の距離に注意",
        "grammar_point": "One of ... は単数扱い",
        "explanation": "主語は One of the most interesting facts「最も興味深い事実の一つ」。One は単数なので① is が正解。",
        "engage_source": "Engage Ch.12 主語と動詞 Sec.106 Q405"
      },
      {
        "id": "ch12_q406",
        "type": "4択",
        "difficulty": 2,
        "sentence": "環境保護に関心のある人なら誰でも、この製品を使用することが環境によくないことを知っている。\nAnyone interested in protecting the environment (   ) that using this product is not eco-friendly.",
        "easy_sentence": "環境保護に関心のある人なら誰でも、この製品を使用することが環境によくないことを知っている。\nAnyone interested in protecting the environment (   ) that using this product is not eco-friendly.",
        "choices": [
          "know",
          "knows",
          "are knowing",
          "have known"
        ],
        "answer": 1,
        "university": "成城大",
        "translation": "",
        "hint": "代名詞の単複に注意",
        "grammar_point": "Anyone は単数扱い",
        "explanation": "Anyone は単数扱い。② knows が正解。",
        "engage_source": "Engage Ch.12 主語と動詞 Sec.106 Q406"
      },
      {
        "id": "ch12_q407",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I have two friends from high school who (   ) injured in the crash.",
        "easy_sentence": "I have two friends from high school who (   ) injured in the crash.",
        "choices": [
          "was",
          "were",
          "have",
          "has"
        ],
        "answer": 1,
        "university": "帝京大",
        "translation": "",
        "hint": "先行詞の単複に注意",
        "grammar_point": "関係代名詞 who の先行詞に合わせる",
        "explanation": "who の先行詞は two friends（複数）。② were が正解。",
        "engage_source": "Engage Ch.12 主語と動詞 Sec.106 Q407"
      },
      {
        "id": "ch13_q408",
        "type": "4択",
        "difficulty": 1,
        "sentence": "(   ) are you going to visit your friend in London?",
        "easy_sentence": "(   ) are you going to visit your friend in London?",
        "choices": [
          "What",
          "Who",
          "Whom",
          "When"
        ],
        "answer": 3,
        "university": "駒澤大",
        "translation": "",
        "hint": "疑問代名詞か疑問副詞か",
        "grammar_point": "疑問副詞 When",
        "explanation": "疑問文の主語は you、動詞は are going to visit、目的語は your friend で、in London と場所を表す語句もある。文の要素に不足はないので、空所には疑問代名詞ではなく副詞としてはたらく疑問詞（疑問副詞）が入るはず。よって、④ When「いつ」が適する。",
        "engage_source": "Engage Ch.13 疑問詞 Sec.107 Q408"
      },
      {
        "id": "ch13_q409",
        "type": "4択",
        "difficulty": 1,
        "sentence": "A : How (   ) do you go to a sports gym?\nB : Twice a week.",
        "easy_sentence": "A : How (   ) do you go to a sports gym?\nB : Twice a week.",
        "choices": [
          "long",
          "much",
          "often",
          "far"
        ],
        "answer": 2,
        "university": "青山学院大",
        "translation": "",
        "hint": "howの疑問文",
        "grammar_point": "How often「どのくらいの頻度で」",
        "explanation": "答えが Twice a week「1週間に2回」なので、頻度を尋ねている。③ often「どのくらいの頻度で」。",
        "engage_source": "Engage Ch.13 疑問詞 Sec.107 Q409"
      },
      {
        "id": "ch13_q410",
        "type": "4択",
        "difficulty": 1,
        "sentence": "A : I ride my bike every day, rain or shine.\nB : How (   ) do you normally ride?",
        "easy_sentence": "A : I ride my bike every day, rain or shine.\nB : How (   ) do you normally ride?",
        "choices": [
          "soon",
          "much",
          "far",
          "many"
        ],
        "answer": 2,
        "university": "跡見学園女子大",
        "translation": "",
        "hint": "howの疑問文",
        "grammar_point": "How far「どのくらい（の距離を）」",
        "explanation": "「私は毎日、雨でも晴れでも、自転車に乗ります」。B：「ふつうどのくらい（の距離を）乗るんですか」。③ far。",
        "engage_source": "Engage Ch.13 疑問詞 Sec.107 Q410"
      },
      {
        "id": "ch13_q411",
        "type": "4択",
        "difficulty": 1,
        "sentence": "How (   ) does it take to walk from here to the station?",
        "easy_sentence": "How (   ) does it take to walk from here to the station?",
        "choices": [
          "far",
          "much",
          "long",
          "many"
        ],
        "answer": 2,
        "university": "帆山女学圏大",
        "translation": "",
        "hint": "howの疑問文",
        "grammar_point": "How long「どのくらい（時間が）」",
        "explanation": "「ここから駅まで歩いてどのくらい（時間が）かかりますか」。③ long。",
        "engage_source": "Engage Ch.13 疑問詞 Sec.107 Q411"
      },
      {
        "id": "ch13_q412",
        "type": "4択",
        "difficulty": 1,
        "sentence": "\"How (   ) will the train leave?\" \"In ten minutes.\"",
        "easy_sentence": "\"How (   ) will the train leave?\" \"In ten minutes.\"",
        "choices": [
          "far",
          "much",
          "often",
          "soon"
        ],
        "answer": 3,
        "university": "東洋大",
        "translation": "",
        "hint": "howの疑問文",
        "grammar_point": "How soon「あとどれくらいで」",
        "explanation": "「あとどれくらいで電車は発車しますか」「10分後です」。④ soon。",
        "engage_source": "Engage Ch.13 疑問詞 Sec.107 Q412"
      },
      {
        "id": "ch13_q413",
        "type": "4択",
        "difficulty": 1,
        "sentence": "(   ) is the population of this country?",
        "easy_sentence": "(   ) is the population of this country?",
        "choices": [
          "How much",
          "What",
          "How many",
          "When"
        ],
        "answer": 1,
        "university": "日本大",
        "translation": "",
        "hint": "What is the population of ...?",
        "grammar_point": "人口を尋ねる場合は What を用いる",
        "explanation": "「この国の人口はどのくらいですか」。数を尋ねる場合は How many ...?、量を尋ねる場合は How much ...? を用いるが、population「人口」を尋ねる場合は、② What を用いる。",
        "engage_source": "Engage Ch.13 疑問詞 Sec.107 Q413"
      },
      {
        "id": "ch13_q419",
        "type": "4択",
        "difficulty": 2,
        "sentence": "You know a lot about computers, (   )? I know nothing about it.",
        "easy_sentence": "You know a lot about computers, (   )? I know nothing about it.",
        "choices": [
          "do you",
          "don't you",
          "isn't it",
          "is it"
        ],
        "answer": 1,
        "university": "帝京大",
        "translation": "",
        "hint": "付加疑問文の基本",
        "grammar_point": "肯定文＋否定の付加疑問",
        "explanation": "「あなたはコンピュータについて多くを知っていますね」。肯定文なので否定の付加疑問。② don't you。",
        "engage_source": "Engage Ch.13 疑問詞 Sec.110 Q419"
      },
      {
        "id": "ch13_q420",
        "type": "4択",
        "difficulty": 2,
        "sentence": "You aren't interested in the sports, (   )?",
        "easy_sentence": "You aren't interested in the sports, (   )?",
        "choices": [
          "you aren't",
          "aren't you",
          "you are",
          "are you"
        ],
        "answer": 3,
        "university": "東海大",
        "translation": "",
        "hint": "付加疑問文の基本",
        "grammar_point": "否定文＋肯定の付加疑問",
        "explanation": "「あなたはスポーツに興味がないんですね」。否定文なので肯定の付加疑問。④ are you。",
        "engage_source": "Engage Ch.13 疑問詞 Sec.110 Q420"
      },
      {
        "id": "ch13_q421",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Let's play tennis, (   )?",
        "easy_sentence": "Let's play tennis, (   )?",
        "choices": [
          "will you",
          "are we",
          "don't you",
          "shall we"
        ],
        "answer": 3,
        "university": "関西学院大",
        "translation": "",
        "hint": "Let'sの付加疑問",
        "grammar_point": "Let's ..., shall we?",
        "explanation": "「テニスをしましょうよ」。Let's ... の付加疑問は④ shall we。",
        "engage_source": "Engage Ch.13 疑問詞 Sec.110 Q421"
      },
      {
        "id": "ch13_q422",
        "type": "4択",
        "difficulty": 2,
        "sentence": "\"Don't you like eggs?\" \"(   )\"",
        "easy_sentence": "\"Don't you like eggs?\" \"(   )\"",
        "choices": [
          "Yes. I don't like them.",
          "No. I love to eat one every morning.",
          "Sure. I don't have any.",
          "Yes, I do. I like fried eggs."
        ],
        "answer": 3,
        "university": "松山大",
        "translation": "",
        "hint": "答えが肯定なら Yes、否定なら No",
        "grammar_point": "否定疑問文に対する応答",
        "explanation": "「あなたは卵が好きじゃないのですか」「好きですよ。私は目玉焼きが好きです」。④ Yes, I do. I like fried eggs.",
        "engage_source": "Engage Ch.13 疑問詞 Sec.111 Q422"
      },
      {
        "id": "ch13_q425",
        "type": "4択",
        "difficulty": 2,
        "sentence": "\"What do you think of this movie?\" \"(   )\"",
        "easy_sentence": "\"What do you think of this movie?\" \"(   )\"",
        "choices": [
          "It's exciting.",
          "I'm thinking about it.",
          "I think I want to see it.",
          "I don't think so."
        ],
        "answer": 0,
        "university": "東海大",
        "translation": "",
        "hint": "意見を求める表現",
        "grammar_point": "What do you think of ...?「…をどう思いますか」",
        "explanation": "「この映画をどう思いますか」「わくわくするよ」。① It's exciting.",
        "engage_source": "Engage Ch.13 疑問詞 Sec.112 Q425"
      },
      {
        "id": "ch13_q426",
        "type": "4択",
        "difficulty": 2,
        "sentence": "(   ) do you like your new school?",
        "easy_sentence": "(   ) do you like your new school?",
        "choices": [
          "What",
          "Which",
          "How",
          "Why"
        ],
        "answer": 2,
        "university": "北海学園大",
        "translation": "",
        "hint": "感想を求める表現",
        "grammar_point": "How do you like ...?「…はいかがですか」",
        "explanation": "「新しい学校はいかがですか」。③ How。How do you like ...? で「…はいかがですか」。",
        "engage_source": "Engage Ch.13 疑問詞 Sec.112 Q426"
      },
      {
        "id": "ch13_q427",
        "type": "4択",
        "difficulty": 2,
        "sentence": "(   ) do you say \"thank you\" in Chinese?",
        "easy_sentence": "(   ) do you say \"thank you\" in Chinese?",
        "choices": [
          "What",
          "Which",
          "How",
          "Why"
        ],
        "answer": 2,
        "university": "北海学園大",
        "translation": "",
        "hint": "言い方を尋ねる表現",
        "grammar_point": "How do you say ... in 〜?「…を〜語でどう言いますか」",
        "explanation": "「中国語で「ありがとう」はどう言いますか」。③ How。",
        "engage_source": "Engage Ch.13 疑問詞 Sec.112 Q427"
      },
      {
        "id": "ch13_q428",
        "type": "4択",
        "difficulty": 2,
        "sentence": "How about (   ) shopping this afternoon?",
        "easy_sentence": "How about (   ) shopping this afternoon?",
        "choices": [
          "go",
          "going",
          "to go",
          "gone"
        ],
        "answer": 1,
        "university": "松山大",
        "translation": "",
        "hint": "提案の表現",
        "grammar_point": "How about doing ...?「…するのはどうですか」",
        "explanation": "How about doing ...? で「…するのはどうですか」。② going。",
        "engage_source": "Engage Ch.13 疑問詞 Sec.112 Q428"
      },
      {
        "id": "ch13_q429",
        "type": "4択",
        "difficulty": 2,
        "sentence": "What do you say (   ) going to the movies tonight?",
        "easy_sentence": "What do you say (   ) going to the movies tonight?",
        "choices": [
          "about",
          "for",
          "to",
          "with"
        ],
        "answer": 2,
        "university": "南山大",
        "translation": "",
        "hint": "提案の表現",
        "grammar_point": "What do you say to doing ...?「…するのはどうですか」",
        "explanation": "What do you say to doing ...? で「…するのはどうですか」。③ to。",
        "engage_source": "Engage Ch.13 疑問詞 Sec.112 Q429"
      }
    ]
  },
  {
    "day": 11,
    "title": "Day 11: 否定 ＋ 強調・倒置・省略",
    "description": "",
    "completed": false,
    "questions": [
      {
        "id": "ch14_q430",
        "type": "4択",
        "difficulty": 1,
        "sentence": "(   ) all rainwater falling from a cloud reaches the ground.",
        "easy_sentence": "(   ) all rainwater falling from a cloud reaches the ground.",
        "choices": [
          "No",
          "None",
          "Not",
          "Nowhere"
        ],
        "answer": 2,
        "university": "近畿大",
        "translation": "",
        "hint": "部分否定",
        "grammar_point": "not all ...「すべての…が〜とは限らない」",
        "explanation": "「雲から落ちるすべての雨水が地面に到達するとは限らない」。not all ... で部分否定を表す。③ Not が正解。",
        "engage_source": "Engage Ch.14 否定 Sec.113 Q430"
      },
      {
        "id": "ch14_q431",
        "type": "4択",
        "difficulty": 1,
        "sentence": "They say that the poor are not (   ) unhappy.",
        "easy_sentence": "They say that the poor are not (   ) unhappy.",
        "choices": [
          "always",
          "hardly",
          "never",
          "sometimes"
        ],
        "answer": 0,
        "university": "日本大",
        "translation": "",
        "hint": "部分否定",
        "grammar_point": "not always「必ずしも…とは限らない」",
        "explanation": "「貧しい人々が必ずしも不幸だとは限らないと言われている」。not always で部分否定。① always。",
        "engage_source": "Engage Ch.14 否定 Sec.113 Q431"
      },
      {
        "id": "ch14_q433",
        "type": "4択",
        "difficulty": 1,
        "sentence": "A : Which shirt do you like better, the striped one or the check one?\nB : To be honest, I don't really like (   ) of them.",
        "easy_sentence": "A : Which shirt do you like better, the striped one or the check one?\nB : To be honest, I don't really like (   ) of them.",
        "choices": [
          "too",
          "either",
          "neither",
          "none"
        ],
        "answer": 1,
        "university": "学習院大",
        "translation": "",
        "hint": "全否定",
        "grammar_point": "not ... either「どちらも…ない」",
        "explanation": "「どっちのシャツが好き？」「正直言って、両方ともあまり好きじゃない」。not ... either で「どちらも…ない」。② either。",
        "engage_source": "Engage Ch.14 否定 Sec.114 Q433"
      },
      {
        "id": "ch14_q434",
        "type": "4択",
        "difficulty": 1,
        "sentence": "This coat is too big and that one is too small. (   ) fits me.",
        "easy_sentence": "This coat is too big and that one is too small. (   ) fits me.",
        "choices": [
          "Neither",
          "Either",
          "Both",
          "They"
        ],
        "answer": 0,
        "university": "東京工芸大",
        "translation": "",
        "hint": "全否定",
        "grammar_point": "Neither「どちらも…ない」",
        "explanation": "「このコートは大きすぎるし、あのコートは小さすぎる。どちらも私には合わない」。① Neither。",
        "engage_source": "Engage Ch.14 否定 Sec.114 Q434"
      },
      {
        "id": "ch14_q435",
        "type": "4択",
        "difficulty": 1,
        "sentence": "\"I can't believe what he said.\" \"I can't, (   ).\"",
        "easy_sentence": "\"I can't believe what he said.\" \"I can't, (   ).\"",
        "choices": [
          "too",
          "either",
          "neither",
          "also"
        ],
        "answer": 1,
        "university": "松山大",
        "translation": "",
        "hint": "否定の付加",
        "grammar_point": "否定文, either「…もまた（…ない）」",
        "explanation": "「彼が言ったことは信じられない」「私も信じられない」。否定文での「…もまた」は either を使う。② either。",
        "engage_source": "Engage Ch.14 否定 Sec.114 Q435"
      },
      {
        "id": "ch14_q437",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I am not sleepy (   ) all.",
        "easy_sentence": "I am not sleepy (   ) all.",
        "choices": [
          "at",
          "quite",
          "in",
          "but"
        ],
        "answer": 0,
        "university": "東京歯科大",
        "translation": "",
        "hint": "強い否定",
        "grammar_point": "not ... at all「少しも…ない」",
        "explanation": "「私は少しも眠くない」。not ... at all で「少しも…ない」。① at。",
        "engage_source": "Engage Ch.14 否定 Sec.115 Q437"
      },
      {
        "id": "ch14_q442",
        "type": "4択",
        "difficulty": 2,
        "sentence": "The prime minister made a long speech, but his message was (   ) but clear.",
        "easy_sentence": "The prime minister made a long speech, but his message was (   ) but clear.",
        "choices": [
          "everything",
          "something",
          "nothing",
          "anything"
        ],
        "answer": 3,
        "university": "実邦大",
        "translation": "",
        "hint": "否定語を使わない否定",
        "grammar_point": "anything but ...「少しも…ではない」",
        "explanation": "「首相は長い演説を行ったが、彼のメッセージは少しも明瞭ではなかった」。anything but ... で「少しも…ではない」。④ anything。",
        "engage_source": "Engage Ch.14 否定 Sec.116 Q442"
      },
      {
        "id": "ch14_q443",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Even though I emailed her several times, Mary has (   ) to respond.",
        "easy_sentence": "Even though I emailed her several times, Mary has (   ) to respond.",
        "choices": [
          "yet",
          "soon",
          "not",
          "been"
        ],
        "answer": 0,
        "university": "神田外語大",
        "translation": "",
        "hint": "否定語を使わない否定",
        "grammar_point": "have yet to do「まだ…していない」",
        "explanation": "「私はメアリーに何度かメールをしたけれども、彼女はまだ返事をくれない」。have yet to do で「まだ…していない」。① yet。",
        "engage_source": "Engage Ch.14 否定 Sec.116 Q443"
      },
      {
        "id": "ch14_q444",
        "type": "4択",
        "difficulty": 2,
        "sentence": "It (   ) to be seen whether his theory is right or not.",
        "easy_sentence": "It (   ) to be seen whether his theory is right or not.",
        "choices": [
          "proves",
          "remains",
          "stays",
          "turns"
        ],
        "answer": 1,
        "university": "國學院大",
        "translation": "",
        "hint": "否定語を使わない否定",
        "grammar_point": "It remains to be seen ...「…はまだわからない」",
        "explanation": "「彼の説が正しいのかどうかはまだわからない」。It remains to be seen ... で「…はまだわからない」。② remains。",
        "engage_source": "Engage Ch.14 否定 Sec.116 Q444"
      },
      {
        "id": "ch15_q451",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The teacher never talked about her private life in front of her students, and her husband (   ).",
        "easy_sentence": "The teacher never talked about her private life in front of her students, and her husband (   ).",
        "choices": [
          "didn't, too",
          "didn't, either",
          "neither did",
          "never did"
        ],
        "answer": 2,
        "university": "松山大",
        "translation": "",
        "hint": "否定の付加",
        "grammar_point": "neither did＋主語「…もまた〜しなかった」",
        "explanation": "「先生は生徒の前では決して自分の私生活について話さなかったし、私の夫も同様だった」。③ neither did。",
        "engage_source": "Engage Ch.15 強調・倒置・省略 Sec.119 Q451"
      },
      {
        "id": "ch15_q452",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I (   ) agree with you. You should go for it!",
        "easy_sentence": "I (   ) agree with you. You should go for it!",
        "choices": [
          "do",
          "am",
          "have",
          "shall"
        ],
        "answer": 0,
        "university": "九州産業大",
        "translation": "",
        "hint": "動詞の強調",
        "grammar_point": "do＋動詞の原形（強調）",
        "explanation": "「私は本当にあなたに賛成です。ぜひやるべきです！」。① do（動詞 agree を強調）。",
        "engage_source": "Engage Ch.15 強調・倒置・省略 Sec.119 Q452"
      },
      {
        "id": "ch15_q453",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Jane is (   ) most attractive person.",
        "easy_sentence": "Jane is (   ) most attractive person.",
        "choices": [
          "a",
          "the",
          "one",
          "some"
        ],
        "answer": 0,
        "university": "成蹊大",
        "translation": "",
        "hint": "最上級の強調",
        "grammar_point": "a most＋形容詞「とても…」（強調）",
        "explanation": "「ジェーンはとても魅力的な人だ」。a most＋形容詞で「とても…」の意味。① a。",
        "engage_source": "Engage Ch.15 強調・倒置・省略 Sec.119 Q453"
      },
      {
        "id": "ch15_q454",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Not only (   ) all the expenses but she also cooked the meal.",
        "easy_sentence": "Not only (   ) all the expenses but she also cooked the meal.",
        "choices": [
          "she paid",
          "did she pay",
          "she did pay",
          "paid she"
        ],
        "answer": 1,
        "university": "工学院大",
        "translation": "",
        "hint": "否定語の倒置",
        "grammar_point": "Not only＋倒置「…だけでなく」",
        "explanation": "Not only が文頭に出ると倒置（疑問文の語順）になる。② did she pay。",
        "engage_source": "Engage Ch.15 強調・倒置・省略 Sec.120 Q454"
      },
      {
        "id": "ch15_q455",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Seldom (   ) find such a good restaurant as this one.",
        "easy_sentence": "Seldom (   ) find such a good restaurant as this one.",
        "choices": [
          "you can",
          "you find",
          "will you",
          "finding you"
        ],
        "answer": 2,
        "university": "龍谷大",
        "translation": "",
        "hint": "否定語の倒置",
        "grammar_point": "Seldom＋倒置「めったに…ない」",
        "explanation": "Seldom が文頭に出ると倒置。③ will you。",
        "engage_source": "Engage Ch.15 強調・倒置・省略 Sec.120 Q455"
      },
      {
        "id": "ch15_q457",
        "type": "4択",
        "difficulty": 1,
        "sentence": "At no time (   ) about her private life in front of her students.",
        "easy_sentence": "At no time (   ) about her private life in front of her students.",
        "choices": [
          "did not the teacher talk",
          "did the teacher talk",
          "the teacher not talking",
          "the teacher talked"
        ],
        "answer": 1,
        "university": "近畿大",
        "translation": "",
        "hint": "否定語の倒置",
        "grammar_point": "At no time＋倒置「決して…ない」",
        "explanation": "否定語句 At no time が文頭に出ると倒置。② did the teacher talk。",
        "engage_source": "Engage Ch.15 強調・倒置・省略 Sec.120 Q457"
      },
      {
        "id": "ch15_q458",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Not until doctors have completed their internships (   ) to practice medicine as a profession.",
        "easy_sentence": "Not until doctors have completed their internships (   ) to practice medicine as a profession.",
        "choices": [
          "they begin",
          "can they begin",
          "did they begin",
          "they could begin"
        ],
        "answer": 1,
        "university": "東海大",
        "translation": "",
        "hint": "否定語の倒置",
        "grammar_point": "Not until＋倒置「…して初めて〜する」",
        "explanation": "Not until が文頭に出ると主節が倒置。② can they begin。",
        "engage_source": "Engage Ch.15 強調・倒置・省略 Sec.120 Q458"
      },
      {
        "id": "ch15_q459",
        "type": "4択",
        "difficulty": 2,
        "sentence": "The player hit (   ) powerful a smash that her opponent was unable to return the ball.",
        "easy_sentence": "The player hit (   ) powerful a smash that her opponent was unable to return the ball.",
        "choices": [
          "very",
          "such",
          "quite",
          "so"
        ],
        "answer": 3,
        "university": "杏林大",
        "translation": "",
        "hint": "結果・程度の構文",
        "grammar_point": "so＋形容詞＋a＋名詞＋that ...「とても…なので〜」",
        "explanation": "so powerful a smash that ... の語順。④ so。",
        "engage_source": "Engage Ch.15 強調・倒置・省略 Sec.121 Q459"
      },
      {
        "id": "ch15_q460",
        "type": "4択",
        "difficulty": 2,
        "sentence": "He is (   ) boy to tell a lie.",
        "easy_sentence": "He is (   ) boy to tell a lie.",
        "choices": [
          "a too honest",
          "too an honest",
          "too honest a",
          "too honest"
        ],
        "answer": 2,
        "university": "天使大",
        "translation": "",
        "hint": "語順注意",
        "grammar_point": "too＋形容詞＋a＋名詞「…すぎる」",
        "explanation": "too honest a boy の語順。③ too honest a。",
        "engage_source": "Engage Ch.15 強調・倒置・省略 Sec.121 Q460"
      },
      {
        "id": "ch15_q461",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I have to work on Sundays, and (   ).",
        "easy_sentence": "I have to work on Sundays, and (   ).",
        "choices": [
          "my husband has, too",
          "so does my husband",
          "my husband either",
          "neither my husband does"
        ],
        "answer": 1,
        "university": "東邦大",
        "translation": "",
        "hint": "倒置の表現",
        "grammar_point": "so＋助動詞[be 動詞]＋S「Sもそうだ」",
        "explanation": "「私は日曜日に働かなければならないし、私の夫も同様だ」。② so does my husband。",
        "engage_source": "Engage Ch.15 強調・倒置・省略 Sec.122 Q461"
      },
      {
        "id": "ch15_q462",
        "type": "4択",
        "difficulty": 2,
        "sentence": "My wife doesn't like jazz, and (   ).",
        "easy_sentence": "My wife doesn't like jazz, and (   ).",
        "choices": [
          "I don't, too",
          "neither do I",
          "so do I",
          "as I do"
        ],
        "answer": 1,
        "university": "岩手医科大",
        "translation": "",
        "hint": "倒置の表現",
        "grammar_point": "neither[nor]＋助動詞[be 動詞]＋S「Sもまた…ない」",
        "explanation": "「私の妻はジャズが好きではないし、私も好きではない」。② neither do I。",
        "engage_source": "Engage Ch.15 強調・倒置・省略 Sec.122 Q462"
      },
      {
        "id": "ch15_q465",
        "type": "4択",
        "difficulty": 2,
        "sentence": "There is little, if (   ), difference between the two computers.",
        "easy_sentence": "There is little, if (   ), difference between the two computers.",
        "choices": [
          "any",
          "some",
          "none",
          "few"
        ],
        "answer": 0,
        "university": "成城大",
        "translation": "",
        "hint": "if を用いた慣用句",
        "grammar_point": "if any「もしあるにしても」",
        "explanation": "「たとえあるにしても、その2つのコンピュータの間にはほとんどない」。① any。",
        "engage_source": "Engage Ch.15 強調・倒置・省略 Sec.123 Q465"
      },
      {
        "id": "ch15_q466",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Andy seldom, (   ), watches TV.",
        "easy_sentence": "Andy seldom, (   ), watches TV.",
        "choices": [
          "as if",
          "if ever",
          "if any",
          "by far"
        ],
        "answer": 1,
        "university": "千葉工業大",
        "translation": "",
        "hint": "if を用いた慣用句",
        "grammar_point": "if ever「たとえあるにしても」（頻度）",
        "explanation": "「アンディはめったにテレビを見ない」。② if ever（「たとえ見ることはあるにしても」）。",
        "engage_source": "Engage Ch.15 強調・倒置・省略 Sec.123 Q466"
      }
    ]
  },
  {
    "day": 12,
    "title": "Day 12: 動詞の語法（前半）",
    "description": "",
    "completed": false,
    "questions": [
      {
        "id": "ch16_q467",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Jennifer (   ) from university and married Ben immediately.",
        "easy_sentence": "Jennifer (   ) from university and married Ben immediately.",
        "choices": [
          "graduated",
          "was graduated",
          "was graduating",
          "graduate"
        ],
        "answer": 0,
        "university": "",
        "translation": "",
        "hint": "自動詞＋前置詞",
        "grammar_point": "graduate from A「Aを卒業する」",
        "explanation": "graduateは自動詞なので、fromが必要。① graduated。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.124 Q467"
      },
      {
        "id": "ch16_q468",
        "type": "4択",
        "difficulty": 1,
        "sentence": "You should apologize (   ) for losing your temper.",
        "easy_sentence": "You should apologize (   ) for losing your temper.",
        "choices": [
          "him",
          "to him",
          "as him",
          "at him"
        ],
        "answer": 1,
        "university": "西南学院大",
        "translation": "",
        "hint": "自動詞＋前置詞",
        "grammar_point": "apologize to＋人＋for ...「(人)に…のことをわびる」",
        "explanation": "apologizeは自動詞。〈apologize to＋人〉の形。② to him。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.124 Q468"
      },
      {
        "id": "ch16_q469",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Sam can't (   ) the competition because he has broken his leg.",
        "easy_sentence": "Sam can't (   ) the competition because he has broken his leg.",
        "choices": [
          "participate",
          "participate to",
          "participate in",
          "participate on"
        ],
        "answer": 2,
        "university": "東京電機大",
        "translation": "",
        "hint": "自動詞＋前置詞",
        "grammar_point": "participate in A「Aに参加する」",
        "explanation": "participateは自動詞。inが必要。＝ take part in A。③ participate in。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.124 Q469"
      },
      {
        "id": "ch16_q470",
        "type": "4択",
        "difficulty": 1,
        "sentence": "We should (   ) our plans for the future.",
        "easy_sentence": "We should (   ) our plans for the future.",
        "choices": [
          "be discussed",
          "discuss",
          "discuss about",
          "discuss of"
        ],
        "answer": 1,
        "university": "近畿大",
        "translation": "",
        "hint": "他動詞（前置詞不要）",
        "grammar_point": "discuss「…について話し合う」",
        "explanation": "discussは他動詞なのでaboutは不要。② discuss。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.125 Q470"
      },
      {
        "id": "ch16_q471",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Robert (   ) his father in appearance but not in character.",
        "easy_sentence": "Robert (   ) his father in appearance but not in character.",
        "choices": [
          "is being resembled",
          "is resembled",
          "is resembling",
          "resembles"
        ],
        "answer": 3,
        "university": "佛教大",
        "translation": "",
        "hint": "他動詞（進行形不可）",
        "grammar_point": "resemble「…に似ている」",
        "explanation": "resembleは他動詞。受動態・進行形にしない。④ resembles。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.125 Q471"
      },
      {
        "id": "ch16_q472",
        "type": "4択",
        "difficulty": 1,
        "sentence": "(   ) the end of our vacation, we dreaded going home.",
        "easy_sentence": "(   ) the end of our vacation, we dreaded going home.",
        "choices": [
          "Approaching",
          "Approaching at",
          "Approaching into",
          "Approaching to"
        ],
        "answer": 0,
        "university": "日本大",
        "translation": "",
        "hint": "他動詞（前置詞不要）",
        "grammar_point": "approach「…に近づく」",
        "explanation": "approachは他動詞。toは不要。① Approaching。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.125 Q472"
      },
      {
        "id": "ch16_q473",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The cat (   ) sleeping peacefully on the roof.",
        "easy_sentence": "The cat (   ) sleeping peacefully on the roof.",
        "choices": [
          "lie",
          "lying",
          "laid",
          "lay"
        ],
        "answer": 3,
        "university": "成城大",
        "translation": "",
        "hint": "自動詞の活用",
        "grammar_point": "lie-lay-lain「横になる」",
        "explanation": "lieの過去形はlay。④ lay。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.126 Q473"
      },
      {
        "id": "ch16_q474",
        "type": "4択",
        "difficulty": 1,
        "sentence": "My father had kindly (   ) the book on my desk before I came home yesterday.",
        "easy_sentence": "My father had kindly (   ) the book on my desk before I came home yesterday.",
        "choices": [
          "laid",
          "lain",
          "lay",
          "lied"
        ],
        "answer": 0,
        "university": "立教大",
        "translation": "",
        "hint": "他動詞の活用",
        "grammar_point": "lay-laid-laid「…を置く」",
        "explanation": "layの過去分詞はlaid。① laid。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.126 Q474"
      },
      {
        "id": "ch16_q475",
        "type": "4択",
        "difficulty": 1,
        "sentence": "With a shaky hand, the old man (   ) the cup to his mouth.",
        "easy_sentence": "With a shaky hand, the old man (   ) the cup to his mouth.",
        "choices": [
          "arose",
          "aroused",
          "raised",
          "rose"
        ],
        "answer": 2,
        "university": "自治医科大",
        "translation": "",
        "hint": "他動詞の活用",
        "grammar_point": "raise「…を上げる」",
        "explanation": "raiseは他動詞「…を上げる」。③ raised。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.126 Q475"
      },
      {
        "id": "ch16_q477",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Almost everybody has decided (   ) the test before graduation.",
        "easy_sentence": "Almost everybody has decided (   ) the test before graduation.",
        "choices": [
          "having taken",
          "taking",
          "to take",
          "to have taken"
        ],
        "answer": 2,
        "university": "佛教大",
        "translation": "",
        "hint": "不定詞を目的語にとる動詞",
        "grammar_point": "decide to do「…することに決める」",
        "explanation": "decideは不定詞を目的語にとる。③ to take。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.127 Q477"
      },
      {
        "id": "ch16_q478",
        "type": "4択",
        "difficulty": 2,
        "sentence": "The delivery company (   ) to deliver the package on time.",
        "easy_sentence": "The delivery company (   ) to deliver the package on time.",
        "choices": [
          "failed",
          "missed",
          "lost",
          "quit"
        ],
        "answer": 0,
        "university": "法政大",
        "translation": "",
        "hint": "不定詞を目的語にとる動詞",
        "grammar_point": "fail to do「…しそこなう」",
        "explanation": "fail to doで「…しそこなう、…できない」。① failed。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.127 Q478"
      },
      {
        "id": "ch16_q479",
        "type": "4択",
        "difficulty": 2,
        "sentence": "She managed (   ) to buy the concert tickets.",
        "easy_sentence": "She managed (   ) to buy the concert tickets.",
        "choices": [
          "saving enough money",
          "to saving enough money",
          "enough money saving",
          "to save enough money"
        ],
        "answer": 3,
        "university": "亜細亜大",
        "translation": "",
        "hint": "不定詞を目的語にとる動詞",
        "grammar_point": "manage to do「どうにか…する」",
        "explanation": "manage to doで「どうにか…する」。④ to save enough money。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.127 Q479"
      },
      {
        "id": "ch16_q480",
        "type": "4択",
        "difficulty": 2,
        "sentence": "The spy pretended (   ) a student.",
        "easy_sentence": "The spy pretended (   ) a student.",
        "choices": [
          "being",
          "to be",
          "like",
          "as if"
        ],
        "answer": 1,
        "university": "福岡大",
        "translation": "",
        "hint": "不定詞を目的語にとる動詞",
        "grammar_point": "pretend to do「…するふりをする」",
        "explanation": "pretend to doで「…するふりをする」。② to be。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.127 Q480"
      },
      {
        "id": "ch16_q481",
        "type": "4択",
        "difficulty": 2,
        "sentence": "We (   ) to accept such a poor proposal.",
        "easy_sentence": "We (   ) to accept such a poor proposal.",
        "choices": [
          "denied",
          "objected",
          "refused",
          "disliked"
        ],
        "answer": 2,
        "university": "杏林大",
        "translation": "",
        "hint": "不定詞を目的語にとる動詞",
        "grammar_point": "refuse to do「…することを拒む」",
        "explanation": "refuse to doで「…することを拒む、断る」。③ refused。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.127 Q481"
      },
      {
        "id": "ch16_q483",
        "type": "4択",
        "difficulty": 2,
        "sentence": "They are considering (   ) to a smaller town.",
        "easy_sentence": "They are considering (   ) to a smaller town.",
        "choices": [
          "move",
          "moving",
          "to move",
          "movement"
        ],
        "answer": 1,
        "university": "専修大",
        "translation": "",
        "hint": "動名詞を目的語にとる動詞",
        "grammar_point": "consider doing「…しようかと考える」",
        "explanation": "considerは動名詞を目的語にとる。② moving。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.128 Q483"
      },
      {
        "id": "ch16_q484",
        "type": "4択",
        "difficulty": 2,
        "sentence": "He finished (   ) his report.",
        "easy_sentence": "He finished (   ) his report.",
        "choices": [
          "written",
          "writing",
          "write",
          "to write"
        ],
        "answer": 1,
        "university": "芝浦工業大",
        "translation": "",
        "hint": "動名詞を目的語にとる動詞",
        "grammar_point": "finish doing「…し終える」",
        "explanation": "finishは動名詞を目的語にとる。② writing。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.128 Q484"
      },
      {
        "id": "ch16_q485",
        "type": "4択",
        "difficulty": 2,
        "sentence": "The doctor told John that he should (   ) for the sake of his health.",
        "easy_sentence": "The doctor told John that he should (   ) for the sake of his health.",
        "choices": [
          "have stopped to smoke",
          "stop to smoke",
          "stop smoking",
          "not smoking"
        ],
        "answer": 2,
        "university": "明治大",
        "translation": "",
        "hint": "動名詞を目的語にとる動詞",
        "grammar_point": "stop doing「…するのをやめる」",
        "explanation": "stop doingで「…するのをやめる」。③ stop smoking。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.128 Q485"
      },
      {
        "id": "ch16_q486",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Janet quit (   ) tennis because she hurt her elbow.",
        "easy_sentence": "Janet quit (   ) tennis because she hurt her elbow.",
        "choices": [
          "to play",
          "to playing",
          "playing",
          "played"
        ],
        "answer": 2,
        "university": "桃山大",
        "translation": "",
        "hint": "動名詞を目的語にとる動詞",
        "grammar_point": "quit doing「…するのをやめる」",
        "explanation": "quitは動名詞を目的語にとる。③ playing。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.128 Q486"
      },
      {
        "id": "ch16_q487",
        "type": "4択",
        "difficulty": 2,
        "sentence": "He finally gave up (   ) to persuade her.",
        "easy_sentence": "He finally gave up (   ) to persuade her.",
        "choices": [
          "to try",
          "to be trying",
          "trying",
          "being tried"
        ],
        "answer": 2,
        "university": "南山大",
        "translation": "",
        "hint": "動名詞を目的語にとる動詞",
        "grammar_point": "give up doing「…するのをあきらめる」",
        "explanation": "give up doingで「…するのをあきらめる」。③ trying。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.128 Q487"
      },
      {
        "id": "ch16_q488",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I managed to avoid (   ) stuck in a traffic jam.",
        "easy_sentence": "I managed to avoid (   ) stuck in a traffic jam.",
        "choices": [
          "to get",
          "getting",
          "having got",
          "been getting"
        ],
        "answer": 1,
        "university": "中央大",
        "translation": "",
        "hint": "動名詞を目的語にとる動詞",
        "grammar_point": "avoid doing「…するのを避ける」",
        "explanation": "avoidは動名詞を目的語にとる。② getting。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.128 Q488"
      },
      {
        "id": "ch16_q489",
        "type": "4択",
        "difficulty": 2,
        "sentence": "She denied (   ) about the plan.",
        "easy_sentence": "She denied (   ) about the plan.",
        "choices": [
          "to know",
          "to knowing",
          "that knowing",
          "knowing"
        ],
        "answer": 3,
        "university": "京都産業大",
        "translation": "",
        "hint": "動名詞を目的語にとる動詞",
        "grammar_point": "deny doing「…したことを否定する」",
        "explanation": "denyは動名詞を目的語にとる。④ knowing。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.128 Q489"
      },
      {
        "id": "ch16_q490",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Would you mind (   ) the window?",
        "easy_sentence": "Would you mind (   ) the window?",
        "choices": [
          "to open",
          "open",
          "to opening",
          "opening"
        ],
        "answer": 3,
        "university": "東洋大",
        "translation": "",
        "hint": "動名詞を目的語にとる動詞",
        "grammar_point": "mind doing「…するのを気にする」",
        "explanation": "mindは動名詞を目的語にとる。④ opening。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.128 Q490"
      },
      {
        "id": "ch16_q491",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I suggested (   ) early in the morning.",
        "easy_sentence": "I suggested (   ) early in the morning.",
        "choices": [
          "leaving",
          "to leave",
          "us to leave",
          "for us leave"
        ],
        "answer": 0,
        "university": "東京経済大",
        "translation": "",
        "hint": "動名詞を目的語にとる動詞",
        "grammar_point": "suggest doing「…することを提案する」",
        "explanation": "suggestは動名詞を目的語にとる。① leaving。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.128 Q491"
      },
      {
        "id": "ch16_q492",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Don't forget (   ) this letter on your way home.",
        "easy_sentence": "Don't forget (   ) this letter on your way home.",
        "choices": [
          "posting",
          "to post",
          "having posted",
          "post"
        ],
        "answer": 1,
        "university": "十文字学園女子大",
        "translation": "",
        "hint": "不定詞と動名詞の使い分け",
        "grammar_point": "forget to do「…するのを忘れる」（未実現）",
        "explanation": "forget to doで「…するのを忘れる」（未実現の行為）。② to post。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.129 Q492"
      },
      {
        "id": "ch16_q493",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I clearly remember (   ) the door before I left the house.",
        "easy_sentence": "I clearly remember (   ) the door before I left the house.",
        "choices": [
          "locking",
          "to lock",
          "to have locked",
          "lock"
        ],
        "answer": 0,
        "university": "名城大",
        "translation": "",
        "hint": "不定詞と動名詞の使い分け",
        "grammar_point": "remember doing「…したことを覚えている」（事実）",
        "explanation": "remember doingで「…したことを覚えている」（過去の事実）。① locking。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.129 Q493"
      },
      {
        "id": "ch16_q494",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I shall never forget (   ) the Alps for the first time.",
        "easy_sentence": "I shall never forget (   ) the Alps for the first time.",
        "choices": [
          "to see",
          "seeing",
          "to seeing",
          "of seeing"
        ],
        "answer": 1,
        "university": "甲南大",
        "translation": "",
        "hint": "不定詞と動名詞の使い分け",
        "grammar_point": "forget doing「…したことを忘れる」（事実）",
        "explanation": "forget doingで「…したことを忘れる」（過去の事実）。② seeing。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.129 Q494"
      },
      {
        "id": "ch16_q495",
        "type": "4択",
        "difficulty": 3,
        "sentence": "She tried (   ) the exam, but she failed.",
        "easy_sentence": "She tried (   ) the exam, but she failed.",
        "choices": [
          "passing",
          "to pass",
          "the pass of",
          "to passing"
        ],
        "answer": 1,
        "university": "北里大",
        "translation": "",
        "hint": "不定詞と動名詞の使い分け",
        "grammar_point": "try to do「…しようとする」（未実現）",
        "explanation": "try to doで「…しようとする」（未実現の行為）。② to pass。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.130 Q495"
      },
      {
        "id": "ch16_q496",
        "type": "4択",
        "difficulty": 3,
        "sentence": "We regret (   ) you that your application has been denied.",
        "easy_sentence": "We regret (   ) you that your application has been denied.",
        "choices": [
          "to inform",
          "informing",
          "inform",
          "informed"
        ],
        "answer": 0,
        "university": "九州国際大",
        "translation": "",
        "hint": "不定詞と動名詞の使い分け",
        "grammar_point": "regret to do「残念ながら…する」",
        "explanation": "regret to doで「残念ながら…する」。① to inform。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.130 Q496"
      },
      {
        "id": "ch16_q497",
        "type": "4択",
        "difficulty": 3,
        "sentence": "This room needs (   ).",
        "easy_sentence": "This room needs (   ).",
        "choices": [
          "clean",
          "to clean",
          "cleaning",
          "cleaned"
        ],
        "answer": 2,
        "university": "獨協大",
        "translation": "",
        "hint": "受動の意味を持つ動名詞",
        "grammar_point": "need doing「…される必要がある」",
        "explanation": "need doing = need to be done。③ cleaning。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.130 Q497"
      },
      {
        "id": "ch16_q498",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The fence wants (   ).",
        "easy_sentence": "The fence wants (   ).",
        "choices": [
          "paint",
          "painting",
          "painted",
          "to paint"
        ],
        "answer": 1,
        "university": "中京大",
        "translation": "",
        "hint": "受動の意味を持つ動名詞",
        "grammar_point": "want doing「…される必要がある」",
        "explanation": "want doing = want to be done。② painting。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.130 Q498"
      },
      {
        "id": "ch16_q499",
        "type": "4択",
        "difficulty": 3,
        "sentence": "My parents wouldn't let me (   ) out after midnight.",
        "easy_sentence": "My parents wouldn't let me (   ) out after midnight.",
        "choices": [
          "go",
          "going",
          "to go",
          "gone"
        ],
        "answer": 0,
        "university": "東海大",
        "translation": "",
        "hint": "使役動詞",
        "grammar_point": "let O do「Oに（自由に）…させる」",
        "explanation": "letは原形不定詞を続ける。① go。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.131 Q499"
      },
      {
        "id": "ch16_q500",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The cold weather made the children (   ) inside all day.",
        "easy_sentence": "The cold weather made the children (   ) inside all day.",
        "choices": [
          "stayed",
          "staying",
          "stay",
          "to stay"
        ],
        "answer": 2,
        "university": "法政大",
        "translation": "",
        "hint": "使役動詞",
        "grammar_point": "make O do「Oに（無理やり）…させる」",
        "explanation": "makeは原形不定詞を続ける。③ stay。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.131 Q500"
      },
      {
        "id": "ch16_q501",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Please have the students (   ) these forms.",
        "easy_sentence": "Please have the students (   ) these forms.",
        "choices": [
          "fill out",
          "to fill out",
          "filling out",
          "filled out"
        ],
        "answer": 0,
        "university": "神戸松蔭女子学院大",
        "translation": "",
        "hint": "使役動詞",
        "grammar_point": "have O do「Oに…してもらう」",
        "explanation": "haveは原形不定詞を続ける。① fill out。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.131 Q501"
      },
      {
        "id": "ch16_q503",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I was made (   ) for an hour.",
        "easy_sentence": "I was made (   ) for an hour.",
        "choices": [
          "to wait",
          "wait",
          "waiting",
          "waited"
        ],
        "answer": 0,
        "university": "センター試験",
        "translation": "",
        "hint": "使役動詞の受動態",
        "grammar_point": "be made to do（makeの受動態）",
        "explanation": "makeの受動態ではto不定詞を使う。① to wait。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.131 Q503"
      },
      {
        "id": "ch16_q504",
        "type": "4択",
        "difficulty": 3,
        "sentence": "How can we get him (   ) his mind about going abroad?",
        "easy_sentence": "How can we get him (   ) his mind about going abroad?",
        "choices": [
          "change",
          "changed",
          "have changed",
          "to change"
        ],
        "answer": 3,
        "university": "中央大",
        "translation": "",
        "hint": "使役動詞get",
        "grammar_point": "get＋人＋to do「(人)に…させる」",
        "explanation": "getは他の使役動詞と異なりto不定詞を続ける。④ to change。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.132 Q504"
      },
      {
        "id": "ch16_q505",
        "type": "4択",
        "difficulty": 3,
        "sentence": "There's something wrong with the engine. You should (   ).",
        "easy_sentence": "There's something wrong with the engine. You should (   ).",
        "choices": [
          "make your car fix",
          "get your car fixed",
          "have your car to fix",
          "let your car to be fixed"
        ],
        "answer": 1,
        "university": "高知大",
        "translation": "",
        "hint": "使役動詞get",
        "grammar_point": "get＋もの＋過去分詞「(もの)を…してもらう」",
        "explanation": "get＋もの＋過去分詞で「(もの)を…してもらう」。② get your car fixed。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.132 Q505"
      },
      {
        "id": "ch16_q506",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The owner of the watch wants to have (   ).",
        "easy_sentence": "The owner of the watch wants to have (   ).",
        "choices": [
          "been repaired it",
          "been repairing it",
          "it repaired",
          "it repairing"
        ],
        "answer": 2,
        "university": "中央大",
        "translation": "",
        "hint": "使役動詞have",
        "grammar_point": "have＋もの＋過去分詞「(もの)を…してもらう」",
        "explanation": "have＋もの＋過去分詞で「(もの)を…してもらう」。③ it repaired。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.132 Q506"
      },
      {
        "id": "ch16_q507",
        "type": "4択",
        "difficulty": 3,
        "sentence": "She had her purse (   ) at the airport.",
        "easy_sentence": "She had her purse (   ) at the airport.",
        "choices": [
          "steal",
          "to steal",
          "stealing",
          "stolen"
        ],
        "answer": 3,
        "university": "広島修道大",
        "translation": "",
        "hint": "使役動詞have",
        "grammar_point": "have＋もの＋過去分詞「(もの)を…される」（被害）",
        "explanation": "have＋もの＋過去分詞で「(もの)を…される」（被害）。④ stolen。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.132 Q507"
      },
      {
        "id": "ch16_q508",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I want (   ) me a favor.",
        "easy_sentence": "I want (   ) me a favor.",
        "choices": [
          "you did",
          "you done",
          "that you do",
          "you to do"
        ],
        "answer": 3,
        "university": "法政大",
        "translation": "",
        "hint": "SVO to do",
        "grammar_point": "want＋O＋to do「Oに…してもらいたい」",
        "explanation": "want＋O＋to doで「Oに…してもらいたい」。④ you to do。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.132 Q508"
      },
      {
        "id": "ch16_q509",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I didn't expect (   ) the work in January.",
        "easy_sentence": "I didn't expect (   ) the work in January.",
        "choices": [
          "his completing",
          "him complete",
          "he complete",
          "him to complete"
        ],
        "answer": 3,
        "university": "鹿児島大",
        "translation": "",
        "hint": "SVO to do",
        "grammar_point": "expect＋O＋to do「Oが…すると予期する」",
        "explanation": "expect＋O＋to doで「Oが…すると予期する」。④ him to complete。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.132 Q509"
      },
      {
        "id": "ch16_q511",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Taro's professor (   ) him to join the university's English Speaking Society.",
        "easy_sentence": "Taro's professor (   ) him to join the university's English Speaking Society.",
        "choices": [
          "proposed",
          "argued",
          "advised",
          "suggested"
        ],
        "answer": 2,
        "university": "南山大",
        "translation": "",
        "hint": "SVO to do",
        "grammar_point": "advise＋O＋to do「Oに…するよう助言する」",
        "explanation": "advise＋O＋to doで「Oに…するよう助言する」。③ advised。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.132 Q511"
      },
      {
        "id": "ch16_q515",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Fifty years ago in this country, the government did not (   ) people to travel abroad.",
        "easy_sentence": "Fifty years ago in this country, the government did not (   ) people to travel abroad.",
        "choices": [
          "allow",
          "let",
          "make",
          "suggest"
        ],
        "answer": 0,
        "university": "近畿大",
        "translation": "",
        "hint": "SVO to do",
        "grammar_point": "allow＋O＋to do「Oが…するのを許す」",
        "explanation": "allow＋O＋to doで「Oが…するのを許す」。① allow。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.132 Q515"
      },
      {
        "id": "ch16_q516",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Illness (   ) him to stay in bed for a week.",
        "easy_sentence": "Illness (   ) him to stay in bed for a week.",
        "choices": [
          "prevented",
          "spared",
          "forced",
          "made"
        ],
        "answer": 2,
        "university": "拓殖大",
        "translation": "",
        "hint": "SVO to do",
        "grammar_point": "force＋O＋to do「Oに…することを強いる」",
        "explanation": "force＋O＋to doで「Oに…することを強いる」。③ forced。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.132 Q516"
      },
      {
        "id": "ch16_q517",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The teacher tried to (   ) him to stay in school.",
        "easy_sentence": "The teacher tried to (   ) him to stay in school.",
        "choices": [
          "discuss",
          "persuade",
          "hope",
          "suggest"
        ],
        "answer": 1,
        "university": "立教大",
        "translation": "",
        "hint": "SVO to do",
        "grammar_point": "persuade＋O＋to do「Oを説得して…させる」",
        "explanation": "persuade＋O＋to doで「Oを説得して…させる」。② persuade。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.132 Q517"
      },
      {
        "id": "ch16_q518",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Can you help me (   ) for my office key?",
        "easy_sentence": "Can you help me (   ) for my office key?",
        "choices": [
          "look",
          "looked",
          "to be looked",
          "to have looked"
        ],
        "answer": 0,
        "university": "立命館大",
        "translation": "",
        "hint": "help＋O＋原形/to不定詞",
        "grammar_point": "help＋O＋(to) do「Oが…するのを手伝う」",
        "explanation": "helpはO＋原形不定詞またはto不定詞をとる。① look。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.133 Q518"
      },
      {
        "id": "ch16_q521",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The new medicine (   ) the disease from spreading in a short time.",
        "easy_sentence": "The new medicine (   ) the disease from spreading in a short time.",
        "choices": [
          "suspended",
          "interrupted",
          "prevented",
          "interfered"
        ],
        "answer": 2,
        "university": "日本大",
        "translation": "",
        "hint": "SVO from doing",
        "grammar_point": "prevent＋O＋from doing「Oが…するのを妨げる」",
        "explanation": "prevent＋O＋from doingで「Oが…するのを妨げる」。③ prevented。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.133 Q521"
      },
      {
        "id": "ch16_q524",
        "type": "4択",
        "difficulty": 3,
        "sentence": "He informed his parents (   ) his safe arrival.",
        "easy_sentence": "He informed his parents (   ) his safe arrival.",
        "choices": [
          "in",
          "to",
          "of",
          "with"
        ],
        "answer": 2,
        "university": "青山学院大",
        "translation": "",
        "hint": "SVO of A",
        "grammar_point": "inform＋A＋of B「AにBを知らせる」",
        "explanation": "inform＋A＋of Bで「AにBを知らせる」。③ of。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.134 Q524"
      },
      {
        "id": "ch16_q525",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I don't think I'll ever forgive David (   ) the way he treated her.",
        "easy_sentence": "I don't think I'll ever forgive David (   ) the way he treated her.",
        "choices": [
          "about",
          "at",
          "for",
          "in"
        ],
        "answer": 2,
        "university": "東京理科大",
        "translation": "",
        "hint": "SVO for A",
        "grammar_point": "forgive＋A＋for B「AのBを許す」",
        "explanation": "forgive＋A＋for Bで「AのBを許す」。③ for。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.134 Q525"
      },
      {
        "id": "ch16_q526",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Please excuse me (   ) your birthday.",
        "easy_sentence": "Please excuse me (   ) your birthday.",
        "choices": [
          "forget",
          "that I forgot",
          "for forgetting",
          "to have forgotten"
        ],
        "answer": 2,
        "university": "岩手医科大",
        "translation": "",
        "hint": "SVO for A",
        "grammar_point": "excuse＋A＋for B「AのBを許す」",
        "explanation": "excuse＋A＋for doingで「Aが…したことを許す」。③ for forgetting。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.134 Q526"
      },
      {
        "id": "ch16_q527",
        "type": "4択",
        "difficulty": 3,
        "sentence": "After the meal, the table was (   ) of the dishes.",
        "easy_sentence": "After the meal, the table was (   ) of the dishes.",
        "choices": [
          "cleaned",
          "cleared",
          "removed",
          "taken"
        ],
        "answer": 1,
        "university": "学習院大",
        "translation": "",
        "hint": "分離・はく奪のof",
        "grammar_point": "clear A of B「AからBを取り除く」",
        "explanation": "clear A of Bで「AからBを取り除く」。② cleared。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.136 Q527"
      },
      {
        "id": "ch16_q528",
        "type": "4択",
        "difficulty": 3,
        "sentence": "A plant will die if you deprive it (   ) light.",
        "easy_sentence": "A plant will die if you deprive it (   ) light.",
        "choices": [
          "at",
          "away",
          "of",
          "with"
        ],
        "answer": 2,
        "university": "日本大",
        "translation": "",
        "hint": "分離・はく奪のof",
        "grammar_point": "deprive A of B「AからBを奪う」",
        "explanation": "deprive A of Bで「AからBを奪う」。③ of。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.136 Q528"
      },
      {
        "id": "ch16_q531",
        "type": "4択",
        "difficulty": 3,
        "sentence": "He remained (   ) for a long time.",
        "easy_sentence": "He remained (   ) for a long time.",
        "choices": [
          "silent",
          "silently",
          "silence",
          "with silence"
        ],
        "answer": 0,
        "university": "北海学園大",
        "translation": "",
        "hint": "SVC",
        "grammar_point": "remain C「Cのままである」",
        "explanation": "remainは補語に形容詞をとる。① silent。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.138 Q531"
      },
      {
        "id": "ch16_q532",
        "type": "4択",
        "difficulty": 3,
        "sentence": "His story proved (   ) false.",
        "easy_sentence": "His story proved (   ) false.",
        "choices": [
          "to be",
          "that",
          "was",
          "being"
        ],
        "answer": 0,
        "university": "日本大",
        "translation": "",
        "hint": "SVC",
        "grammar_point": "prove (to be) C「Cだとわかる」",
        "explanation": "prove (to be) Cで「Cだとわかる」。① to be。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.138 Q532"
      }
    ]
  },
  {
    "day": 13,
    "title": "Day 13: 動詞の語法（後半）＋ 名詞の語法",
    "description": "",
    "completed": false,
    "questions": [
      {
        "id": "ch16_q535",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Machines (   ) us much time and trouble.",
        "easy_sentence": "Machines (   ) us much time and trouble.",
        "choices": [
          "save",
          "protect",
          "spend",
          "omit"
        ],
        "answer": 0,
        "university": "天使大",
        "translation": "",
        "hint": "SVOO",
        "grammar_point": "save＋人＋もの「(人)の(もの)を省く」",
        "explanation": "save＋人＋ものの形。① save。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.139 Q535"
      },
      {
        "id": "ch16_q537",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Missing a morning meal will (   ) you hungry for the rest of the day.",
        "easy_sentence": "Missing a morning meal will (   ) you hungry for the rest of the day.",
        "choices": [
          "leave",
          "let",
          "cause",
          "help"
        ],
        "answer": 0,
        "university": "東京都市大",
        "translation": "",
        "hint": "SVOC",
        "grammar_point": "leave＋O＋C「OをCの状態にしておく」",
        "explanation": "leave＋O＋Cで「OをCの状態のままにしておく」。① leave。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.140 Q537"
      },
      {
        "id": "ch16_q538",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The Internet has (   ) it easier to communicate with people living in other countries.",
        "easy_sentence": "The Internet has (   ) it easier to communicate with people living in other countries.",
        "choices": [
          "given",
          "used",
          "allowed",
          "made"
        ],
        "answer": 3,
        "university": "名城大",
        "translation": "",
        "hint": "SVOC",
        "grammar_point": "make＋it＋形容詞＋to do「…するのを…にする」",
        "explanation": "make＋it＋形容詞＋to doの形。④ made。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.140 Q538"
      },
      {
        "id": "ch16_q539",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Did you enjoy that book? I didn't (   ) it particularly interesting.",
        "easy_sentence": "Did you enjoy that book? I didn't (   ) it particularly interesting.",
        "choices": [
          "find",
          "discover",
          "buy",
          "read"
        ],
        "answer": 0,
        "university": "大東文化大",
        "translation": "",
        "hint": "SVOC",
        "grammar_point": "find＋O＋C「OがCだとわかる」",
        "explanation": "find＋O＋Cで「OがCだとわかる」。① find。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.140 Q539"
      },
      {
        "id": "ch16_q540",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The professor recommends (   ) to expand your horizons.",
        "easy_sentence": "The professor recommends (   ) to expand your horizons.",
        "choices": [
          "to go abroad",
          "you go abroad",
          "your go abroad",
          "for you going abroad"
        ],
        "answer": 1,
        "university": "東京医科大",
        "translation": "",
        "hint": "that節のshould省略",
        "grammar_point": "recommend (that) S (should) do",
        "explanation": "recommendはthat節で(should)＋原形を使う。② you go abroad。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.141 Q540"
      },
      {
        "id": "ch16_q543",
        "type": "4択",
        "difficulty": 3,
        "sentence": "My parents insist that I (   ) home by eleven, at the latest.",
        "easy_sentence": "My parents insist that I (   ) home by eleven, at the latest.",
        "choices": [
          "am coming",
          "can come",
          "come",
          "will come"
        ],
        "answer": 2,
        "university": "京都産業大",
        "translation": "",
        "hint": "that節のshould省略",
        "grammar_point": "insist (that) S (should) do",
        "explanation": "insistはthat節で(should)＋原形を使う。③ come。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.141 Q543"
      },
      {
        "id": "ch16_q544",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The court ordered that the company (   ) a large fine.",
        "easy_sentence": "The court ordered that the company (   ) a large fine.",
        "choices": [
          "will pay",
          "pays",
          "pay",
          "paying"
        ],
        "answer": 2,
        "university": "神奈川大",
        "translation": "",
        "hint": "that節のshould省略",
        "grammar_point": "order (that) S (should) do",
        "explanation": "orderはthat節で(should)＋原形を使う。③ pay。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.141 Q544"
      },
      {
        "id": "ch16_q545",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Any rope will (   ) if it is strong.",
        "easy_sentence": "Any rope will (   ) if it is strong.",
        "choices": [
          "make",
          "be",
          "do",
          "get"
        ],
        "answer": 2,
        "university": "東洋大",
        "translation": "",
        "hint": "doの用法",
        "grammar_point": "will do「役に立つ、間に合う」",
        "explanation": "will doで「役に立つ、間に合う」。③ do。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.142 Q545"
      },
      {
        "id": "ch16_q546",
        "type": "4択",
        "difficulty": 3,
        "sentence": "It will (   ) you more harm than good to stay up all night studying.",
        "easy_sentence": "It will (   ) you more harm than good to stay up all night studying.",
        "choices": [
          "do",
          "make",
          "provide",
          "become"
        ],
        "answer": 0,
        "university": "専修大",
        "translation": "",
        "hint": "doの用法",
        "grammar_point": "do＋人＋harm[good]「(人)に害[益]をもたらす」",
        "explanation": "do＋人＋harm[good]の形。① do。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.142 Q546"
      },
      {
        "id": "ch16_q547",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Will you do me a (   )?",
        "easy_sentence": "Will you do me a (   )?",
        "choices": [
          "help",
          "favor",
          "hand",
          "good"
        ],
        "answer": 1,
        "university": "京都外国語大",
        "translation": "",
        "hint": "doの用法",
        "grammar_point": "do me a favor「私の頼みを聞く」",
        "explanation": "do me a favorで「私の頼みを聞く」。② favor。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.142 Q547"
      },
      {
        "id": "ch16_q548",
        "type": "4択",
        "difficulty": 3,
        "sentence": "When I don't feel (   ), I often listen to music.",
        "easy_sentence": "When I don't feel (   ), I often listen to music.",
        "choices": [
          "like to study",
          "like studying",
          "likely to study",
          "likely studying"
        ],
        "answer": 1,
        "university": "亜細亜大",
        "translation": "",
        "hint": "likeの用法",
        "grammar_point": "feel like doing「…したい気がする」",
        "explanation": "feel like doingで「…したい気がする」。② like studying。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.143 Q548"
      },
      {
        "id": "ch16_q549",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I would like (   ) a word with you.",
        "easy_sentence": "I would like (   ) a word with you.",
        "choices": [
          "having",
          "to have",
          "have",
          "had"
        ],
        "answer": 1,
        "university": "國學院大",
        "translation": "",
        "hint": "likeの用法",
        "grammar_point": "would like to do「…したい」",
        "explanation": "would like to doで「…したい」。② to have。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.143 Q549"
      },
      {
        "id": "ch16_q550",
        "type": "4択",
        "difficulty": 3,
        "sentence": "They (   ) politicians for the high unemployment rate.",
        "easy_sentence": "They (   ) politicians for the high unemployment rate.",
        "choices": [
          "absorb",
          "blame",
          "repeat",
          "satisfy"
        ],
        "answer": 1,
        "university": "立命館大",
        "translation": "",
        "hint": "非難の表現",
        "grammar_point": "blame＋人＋for A「Aのことで(人)を非難する」",
        "explanation": "blame＋人＋for Aで「Aのことで(人)を非難する」。② blame。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.144 Q550"
      },
      {
        "id": "ch16_q552",
        "type": "4択",
        "difficulty": 3,
        "sentence": "What caused you (   ) your mind?",
        "easy_sentence": "What caused you (   ) your mind?",
        "choices": [
          "change",
          "changed",
          "changing",
          "to change"
        ],
        "answer": 3,
        "university": "西南学院大",
        "translation": "",
        "hint": "原因の表現",
        "grammar_point": "cause＋O＋to do「Oに…させる」",
        "explanation": "cause＋O＋to doで「Oに…させる」。④ to change。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.145 Q552"
      },
      {
        "id": "ch16_q553",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Careless driving (   ) many traffic accidents.",
        "easy_sentence": "Careless driving (   ) many traffic accidents.",
        "choices": [
          "causes",
          "leads",
          "makes",
          "results"
        ],
        "answer": 0,
        "university": "甲南大",
        "translation": "",
        "hint": "原因の表現",
        "grammar_point": "cause「…を引き起こす」",
        "explanation": "causeは他動詞で直接目的語をとる。① causes。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.145 Q553"
      },
      {
        "id": "ch16_q554",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Hard work resulted (   ) his success.",
        "easy_sentence": "Hard work resulted (   ) his success.",
        "choices": [
          "at",
          "for",
          "in",
          "to"
        ],
        "answer": 2,
        "university": "龍谷大",
        "translation": "",
        "hint": "原因の表現",
        "grammar_point": "result in A「Aという結果になる」",
        "explanation": "result in Aで「Aという結果になる」。③ in。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.145 Q554"
      },
      {
        "id": "ch16_q555",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The discovery may lead (   ) a cure for the disease.",
        "easy_sentence": "The discovery may lead (   ) a cure for the disease.",
        "choices": [
          "at",
          "to",
          "in",
          "for"
        ],
        "answer": 1,
        "university": "京都産業大",
        "translation": "",
        "hint": "原因の表現",
        "grammar_point": "lead to A「Aにつながる」",
        "explanation": "lead to Aで「Aにつながる」。② to。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.145 Q555"
      },
      {
        "id": "ch16_q556",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The heavy rain (   ) a lot of damage to the crops.",
        "easy_sentence": "The heavy rain (   ) a lot of damage to the crops.",
        "choices": [
          "brought",
          "carried",
          "gave",
          "took"
        ],
        "answer": 0,
        "university": "東京電機大",
        "translation": "",
        "hint": "原因の表現",
        "grammar_point": "bring＋もの＋to A「Aに(もの)をもたらす」",
        "explanation": "bring＋もの＋to Aで「Aにものをもたらす」。① brought。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.145 Q556"
      },
      {
        "id": "ch16_q557",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The company provides its employees (   ) health insurance.",
        "easy_sentence": "The company provides its employees (   ) health insurance.",
        "choices": [
          "at",
          "for",
          "to",
          "with"
        ],
        "answer": 3,
        "university": "近畿大",
        "translation": "",
        "hint": "与えるの表現",
        "grammar_point": "provide＋A＋with B「AにBを供給する」",
        "explanation": "provide＋A＋with Bで「AにBを供給する」。④ with。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.146 Q557"
      },
      {
        "id": "ch16_q558",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The mayor presented the winner (   ) a gold medal.",
        "easy_sentence": "The mayor presented the winner (   ) a gold medal.",
        "choices": [
          "for",
          "to",
          "with",
          "on"
        ],
        "answer": 2,
        "university": "南山大",
        "translation": "",
        "hint": "与えるの表現",
        "grammar_point": "present＋A＋with B「AにBを贈る」",
        "explanation": "present＋A＋with Bで「AにBを贈る」。③ with。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.146 Q558"
      },
      {
        "id": "ch16_q559",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Tom has been married (   ) Mary for ten years.",
        "easy_sentence": "Tom has been married (   ) Mary for ten years.",
        "choices": [
          "to",
          "with",
          "for",
          "in"
        ],
        "answer": 0,
        "university": "近畿大",
        "translation": "",
        "hint": "結婚の表現",
        "grammar_point": "be married to A「Aと結婚している」",
        "explanation": "be married to Aで「Aと結婚している」。① to。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.147 Q559"
      },
      {
        "id": "ch16_q560",
        "type": "4択",
        "difficulty": 3,
        "sentence": "My sister got married (   ) a doctor last year.",
        "easy_sentence": "My sister got married (   ) a doctor last year.",
        "choices": [
          "with",
          "to",
          "for",
          "by"
        ],
        "answer": 1,
        "university": "亜細亜大",
        "translation": "",
        "hint": "結婚の表現",
        "grammar_point": "get married to A「Aと結婚する」",
        "explanation": "get married to Aで「Aと結婚する」。② to。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.147 Q560"
      },
      {
        "id": "ch16_q561",
        "type": "4択",
        "difficulty": 3,
        "sentence": "He (   ) a beautiful woman from France.",
        "easy_sentence": "He (   ) a beautiful woman from France.",
        "choices": [
          "married",
          "married to",
          "married with",
          "got married"
        ],
        "answer": 0,
        "university": "東海大",
        "translation": "",
        "hint": "結婚の表現",
        "grammar_point": "marry A「Aと結婚する」（他動詞）",
        "explanation": "marryは他動詞で前置詞不要。① married。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.147 Q561"
      },
      {
        "id": "ch16_q562",
        "type": "4択",
        "difficulty": 3,
        "sentence": "That red dress really (   ) you.",
        "easy_sentence": "That red dress really (   ) you.",
        "choices": [
          "fits",
          "goes",
          "matches",
          "suits"
        ],
        "answer": 3,
        "university": "佛教大",
        "translation": "",
        "hint": "似合うの使い分け",
        "grammar_point": "suit「(人)に似合う」",
        "explanation": "suit＋人で「(人)に似合う」。④ suits。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.148 Q562"
      },
      {
        "id": "ch16_q563",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Your tie doesn't (   ) your shirt.",
        "easy_sentence": "Your tie doesn't (   ) your shirt.",
        "choices": [
          "fit",
          "match",
          "suit",
          "agree"
        ],
        "answer": 1,
        "university": "東洋大",
        "translation": "",
        "hint": "似合うの使い分け",
        "grammar_point": "match「(もの)に合う」",
        "explanation": "match＋ものは「(もの)に(色柄が)合う」。② match。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.148 Q563"
      },
      {
        "id": "ch16_q564",
        "type": "4択",
        "difficulty": 3,
        "sentence": "These shoes don't (   ) me. They're too tight.",
        "easy_sentence": "These shoes don't (   ) me. They're too tight.",
        "choices": [
          "fit",
          "match",
          "suit",
          "go"
        ],
        "answer": 0,
        "university": "中京大",
        "translation": "",
        "hint": "似合うの使い分け",
        "grammar_point": "fit「(サイズが)合う」",
        "explanation": "fit＋人は「(サイズが)(人)に合う」。① fit。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.148 Q564"
      },
      {
        "id": "ch16_q565",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I doubt (   ) he will come to the party.",
        "easy_sentence": "I doubt (   ) he will come to the party.",
        "choices": [
          "that",
          "whether",
          "if",
          "what"
        ],
        "answer": 1,
        "university": "中央大",
        "translation": "",
        "hint": "疑うの使い分け",
        "grammar_point": "doubt「…ではないと思う」",
        "explanation": "doubtは「…ではないと思う」。whether/if節をとる。② whether。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.149 Q565"
      },
      {
        "id": "ch16_q566",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I suspect (   ) he is lying.",
        "easy_sentence": "I suspect (   ) he is lying.",
        "choices": [
          "what",
          "which",
          "that",
          "whether"
        ],
        "answer": 2,
        "university": "立命館大",
        "translation": "",
        "hint": "疑うの使い分け",
        "grammar_point": "suspect「…ではないかと思う」",
        "explanation": "suspectは「…ではないかと思う」。that節をとる。③ that。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.149 Q566"
      },
      {
        "id": "ch16_q567",
        "type": "4択",
        "difficulty": 3,
        "sentence": "May I (   ) your dictionary?",
        "easy_sentence": "May I (   ) your dictionary?",
        "choices": [
          "borrow",
          "lend",
          "rent",
          "hire"
        ],
        "answer": 0,
        "university": "近畿大",
        "translation": "",
        "hint": "借りる/貸すの使い分け",
        "grammar_point": "borrow「(無料で)借りる」",
        "explanation": "borrowは「(無料で)借りる」。① borrow。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.150 Q567"
      },
      {
        "id": "ch16_q568",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Could you (   ) me your pen for a moment?",
        "easy_sentence": "Could you (   ) me your pen for a moment?",
        "choices": [
          "borrow",
          "lend",
          "rent",
          "use"
        ],
        "answer": 1,
        "university": "獨協大",
        "translation": "",
        "hint": "借りる/貸すの使い分け",
        "grammar_point": "lend「(無料で)貸す」",
        "explanation": "lendは「(無料で)貸す」。② lend。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.150 Q568"
      },
      {
        "id": "ch16_q569",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Someone (   ) my wallet on the train.",
        "easy_sentence": "Someone (   ) my wallet on the train.",
        "choices": [
          "robbed",
          "stole",
          "stolen",
          "robbed of"
        ],
        "answer": 1,
        "university": "東北学院大",
        "translation": "",
        "hint": "盗むの使い分け",
        "grammar_point": "steal＋もの「(もの)を盗む」",
        "explanation": "steal＋ものの形。② stole。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.151 Q569"
      },
      {
        "id": "ch16_q570",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The man (   ) her of her jewels.",
        "easy_sentence": "The man (   ) her of her jewels.",
        "choices": [
          "stole",
          "robbed",
          "took",
          "deprived"
        ],
        "answer": 1,
        "university": "日本大",
        "translation": "",
        "hint": "盗むの使い分け",
        "grammar_point": "rob＋人＋of＋もの「(人)から(もの)を奪う」",
        "explanation": "rob＋人＋of＋ものの形。② robbed。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.151 Q570"
      },
      {
        "id": "ch16_q571",
        "type": "4択",
        "difficulty": 3,
        "sentence": "We arrived (   ) the airport just in time.",
        "easy_sentence": "We arrived (   ) the airport just in time.",
        "choices": [
          "at",
          "in",
          "to",
          "on"
        ],
        "answer": 0,
        "university": "神奈川大",
        "translation": "",
        "hint": "着くの使い分け",
        "grammar_point": "arrive at[in] A「Aに着く」",
        "explanation": "arrive at＋比較的小さい場所。① at。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.152 Q571"
      },
      {
        "id": "ch16_q572",
        "type": "4択",
        "difficulty": 3,
        "sentence": "She finally (   ) Tokyo after a long journey.",
        "easy_sentence": "She finally (   ) Tokyo after a long journey.",
        "choices": [
          "arrived",
          "reached",
          "got",
          "came"
        ],
        "answer": 1,
        "university": "立命館大",
        "translation": "",
        "hint": "着くの使い分け",
        "grammar_point": "reach A「Aに着く」（他動詞）",
        "explanation": "reachは他動詞で前置詞不要。② reached。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.152 Q572"
      },
      {
        "id": "ch16_q573",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The sign (   ) that no parking is allowed here.",
        "easy_sentence": "The sign (   ) that no parking is allowed here.",
        "choices": [
          "says",
          "speaks",
          "tells",
          "talks"
        ],
        "answer": 0,
        "university": "立命館大",
        "translation": "",
        "hint": "言うの使い分け",
        "grammar_point": "say that ...「…と書いてある」",
        "explanation": "掲示物などが主語のときはsayを使う。① says。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.153 Q573"
      },
      {
        "id": "ch16_q574",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The newspaper (   ) that there was an earthquake in China.",
        "easy_sentence": "The newspaper (   ) that there was an earthquake in China.",
        "choices": [
          "said",
          "spoke",
          "told",
          "talked"
        ],
        "answer": 0,
        "university": "近畿大",
        "translation": "",
        "hint": "言うの使い分け",
        "grammar_point": "say that ...「…と書いてある」",
        "explanation": "新聞などが主語のときもsayを使う。① said。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.153 Q574"
      },
      {
        "id": "ch16_q575",
        "type": "4択",
        "difficulty": 3,
        "sentence": "She told me (   ) she had been to France.",
        "easy_sentence": "She told me (   ) she had been to France.",
        "choices": [
          "what",
          "which",
          "that",
          "as"
        ],
        "answer": 2,
        "university": "日本大",
        "translation": "",
        "hint": "言うの使い分け",
        "grammar_point": "tell＋人＋that ...「(人)に…と言う」",
        "explanation": "tell＋人＋that節の形。③ that。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.153 Q575"
      },
      {
        "id": "ch16_q576",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Please tell me (   ) your trip.",
        "easy_sentence": "Please tell me (   ) your trip.",
        "choices": [
          "about",
          "of",
          "for",
          "on"
        ],
        "answer": 0,
        "university": "西南学院大",
        "translation": "",
        "hint": "言うの使い分け",
        "grammar_point": "tell＋人＋about A「(人)にAについて話す」",
        "explanation": "tell＋人＋about Aの形。① about。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.153 Q576"
      },
      {
        "id": "ch16_q577",
        "type": "4択",
        "difficulty": 3,
        "sentence": "My mother told me (   ) the truth.",
        "easy_sentence": "My mother told me (   ) the truth.",
        "choices": [
          "say",
          "speak",
          "tell",
          "to tell"
        ],
        "answer": 3,
        "university": "中央大",
        "translation": "",
        "hint": "言うの使い分け",
        "grammar_point": "tell＋人＋to do「(人)に…するよう言う」",
        "explanation": "tell＋人＋to doの形。④ to tell。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.153 Q577"
      },
      {
        "id": "ch16_q578",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Let's talk (   ) the plan for the summer vacation.",
        "easy_sentence": "Let's talk (   ) the plan for the summer vacation.",
        "choices": [
          "about",
          "to",
          "for",
          "at"
        ],
        "answer": 0,
        "university": "東海大",
        "translation": "",
        "hint": "言うの使い分け",
        "grammar_point": "talk about A「Aについて話す」",
        "explanation": "talk about Aで「Aについて話す」。① about。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.153 Q578"
      },
      {
        "id": "ch16_q579",
        "type": "4択",
        "difficulty": 3,
        "sentence": "She talked her husband (   ) buying a new car.",
        "easy_sentence": "She talked her husband (   ) buying a new car.",
        "choices": [
          "into",
          "out of",
          "from",
          "about"
        ],
        "answer": 1,
        "university": "北海学園大",
        "translation": "",
        "hint": "言うの使い分け",
        "grammar_point": "talk＋人＋out of doing「(人)を説得して…させない」",
        "explanation": "talk＋人＋out of doingで「(人)を説得して…させない」。② out of。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.153 Q579"
      },
      {
        "id": "ch16_q580",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The professor (   ) the students in a loud voice.",
        "easy_sentence": "The professor (   ) the students in a loud voice.",
        "choices": [
          "addressed",
          "said",
          "spoke",
          "told"
        ],
        "answer": 0,
        "university": "成城大",
        "translation": "",
        "hint": "言うの使い分け",
        "grammar_point": "address＋人「(人)に話しかける」",
        "explanation": "addressは他動詞で人に話しかけるの意味。① addressed。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.153 Q580"
      },
      {
        "id": "ch16_q581",
        "type": "4択",
        "difficulty": 3,
        "sentence": "He explained the reason (   ) me.",
        "easy_sentence": "He explained the reason (   ) me.",
        "choices": [
          "at",
          "for",
          "to",
          "with"
        ],
        "answer": 2,
        "university": "立教大",
        "translation": "",
        "hint": "言うの使い分け",
        "grammar_point": "explain＋もの＋to＋人「(人)に(もの)を説明する」",
        "explanation": "explainはSVOOの形をとれない。explain＋もの＋to＋人の形。③ to。",
        "engage_source": "Engage Ch.16 動詞の語法 Sec.153 Q581"
      },
      {
        "id": "ch17_q582",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Please (   ) another person.",
        "easy_sentence": "Please (   ) another person.",
        "choices": [
          "room open for",
          "make room for",
          "make a room for",
          "give a room for"
        ],
        "answer": 1,
        "university": "長浜バイオ大",
        "translation": "",
        "hint": "不可算名詞",
        "grammar_point": "room「場所、空間」（不可算名詞）",
        "explanation": "make room for Aで「Aのために場所を空ける」。roomは「場所、空間」の意味では不可算名詞。② make room for。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.154 Q582"
      },
      {
        "id": "ch17_q584",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Our university has a lot of great (   ) for exercising.",
        "easy_sentence": "Our university has a lot of great (   ) for exercising.",
        "choices": [
          "equipment",
          "an equipment",
          "equipments",
          "some equipments"
        ],
        "answer": 0,
        "university": "熊本県立大",
        "translation": "",
        "hint": "不可算名詞",
        "grammar_point": "equipment「設備」（不可算名詞）",
        "explanation": "equipmentは不可算名詞。複数形やa/anをつけない。① equipment。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.154 Q584"
      },
      {
        "id": "ch17_q585",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Computers and the Internet can help us get (   ) quickly.",
        "easy_sentence": "Computers and the Internet can help us get (   ) quickly.",
        "choices": [
          "more informations",
          "a lot of information",
          "many informations",
          "many information"
        ],
        "answer": 1,
        "university": "熊本県立大",
        "translation": "",
        "hint": "不可算名詞",
        "grammar_point": "information「情報」（不可算名詞）",
        "explanation": "informationは不可算名詞。② a lot of information。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.154 Q585"
      },
      {
        "id": "ch17_q586",
        "type": "4択",
        "difficulty": 1,
        "sentence": "My friend gave me (   ) on how to keep fit.",
        "easy_sentence": "My friend gave me (   ) on how to keep fit.",
        "choices": [
          "an advice",
          "advices",
          "some advices",
          "some advice"
        ],
        "answer": 3,
        "university": "中部大",
        "translation": "",
        "hint": "不可算名詞",
        "grammar_point": "advice「アドバイス、助言」（不可算名詞）",
        "explanation": "adviceは不可算名詞。④ some advice。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.154 Q586"
      },
      {
        "id": "ch17_q587",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Few people have (   ) of world history.",
        "easy_sentence": "Few people have (   ) of world history.",
        "choices": [
          "a much knowledge",
          "a lot of knowledges",
          "enough knowledge",
          "good knowledges"
        ],
        "answer": 2,
        "university": "国士舘大",
        "translation": "",
        "hint": "不可算名詞",
        "grammar_point": "knowledge「知識」（不可算名詞）",
        "explanation": "knowledgeは不可算名詞。③ enough knowledge。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.154 Q587"
      },
      {
        "id": "ch17_q588",
        "type": "4択",
        "difficulty": 1,
        "sentence": "How many pieces of (   ) do you have?",
        "easy_sentence": "How many pieces of (   ) do you have?",
        "choices": [
          "a luggage",
          "luggages",
          "luggage",
          "the luggages"
        ],
        "answer": 2,
        "university": "神奈川大",
        "translation": "",
        "hint": "不可算名詞",
        "grammar_point": "luggage「手荷物」（不可算名詞）",
        "explanation": "luggageは不可算名詞。pieces ofで数える。③ luggage。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.154 Q588"
      },
      {
        "id": "ch17_q589",
        "type": "4択",
        "difficulty": 1,
        "sentence": "It's important to make (   ) with people from other countries.",
        "easy_sentence": "It's important to make (   ) with people from other countries.",
        "choices": [
          "friend",
          "friends",
          "a friend",
          "the friend"
        ],
        "answer": 1,
        "university": "大東文化大",
        "translation": "",
        "hint": "複数形を使う表現",
        "grammar_point": "make friends with「…と友達になる」",
        "explanation": "make friends withは常に複数形。② friends。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.155 Q589"
      },
      {
        "id": "ch17_q590",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The students took (   ) reading the story aloud.",
        "easy_sentence": "The students took (   ) reading the story aloud.",
        "choices": [
          "turn",
          "turns",
          "a turn",
          "the turn"
        ],
        "answer": 1,
        "university": "近畿大",
        "translation": "",
        "hint": "複数形を使う表現",
        "grammar_point": "take turns doing「交代で…する」",
        "explanation": "take turnsは常に複数形。② turns。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.155 Q590"
      },
      {
        "id": "ch17_q591",
        "type": "4択",
        "difficulty": 1,
        "sentence": "She is on good (   ) with all her colleagues.",
        "easy_sentence": "She is on good (   ) with all her colleagues.",
        "choices": [
          "term",
          "terms",
          "a term",
          "the term"
        ],
        "answer": 1,
        "university": "立命館大",
        "translation": "",
        "hint": "複数形を使う表現",
        "grammar_point": "be on good terms with「…と仲がよい」",
        "explanation": "be on good termsは常に複数形。② terms。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.155 Q591"
      },
      {
        "id": "ch17_q592",
        "type": "4択",
        "difficulty": 1,
        "sentence": "We elected him (   ) of our tennis club.",
        "easy_sentence": "We elected him (   ) of our tennis club.",
        "choices": [
          "a captain",
          "captain",
          "the captain",
          "as captain"
        ],
        "answer": 1,
        "university": "名城大",
        "translation": "",
        "hint": "冠詞の用法",
        "grammar_point": "elect O＋役職名（無冠詞）",
        "explanation": "elect O＋役職名の形では役職名は無冠詞。② captain。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.156 Q592"
      },
      {
        "id": "ch17_q593",
        "type": "4択",
        "difficulty": 1,
        "sentence": "Could you pass me (   ) salt, please?",
        "easy_sentence": "Could you pass me (   ) salt, please?",
        "choices": [
          "a",
          "an",
          "the",
          "some"
        ],
        "answer": 2,
        "university": "亜細亜大",
        "translation": "",
        "hint": "冠詞の用法",
        "grammar_point": "the＋特定のもの",
        "explanation": "目の前にある特定の塩なのでtheを使う。③ the。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.156 Q593"
      },
      {
        "id": "ch17_q594",
        "type": "4択",
        "difficulty": 2,
        "sentence": "About two (   ) of the students were absent.",
        "easy_sentence": "About two (   ) of the students were absent.",
        "choices": [
          "third",
          "thirds",
          "three",
          "threes"
        ],
        "answer": 1,
        "university": "中央大",
        "translation": "",
        "hint": "数の表現",
        "grammar_point": "分数の表し方：分子は基数、分母は序数",
        "explanation": "2/3 = two thirds。分子が2以上なら分母は複数形。② thirds。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.157 Q594"
      },
      {
        "id": "ch17_q595",
        "type": "4択",
        "difficulty": 2,
        "sentence": "The hotel charges 200 dollars (   ).",
        "easy_sentence": "The hotel charges 200 dollars (   ).",
        "choices": [
          "per a night",
          "per night",
          "a per night",
          "by night"
        ],
        "answer": 1,
        "university": "南山大",
        "translation": "",
        "hint": "数の表現",
        "grammar_point": "per night「1泊につき」",
        "explanation": "perの後は無冠詞の単数名詞。② per night。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.157 Q595"
      },
      {
        "id": "ch17_q596",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Could you give me a (   ) of paper?",
        "easy_sentence": "Could you give me a (   ) of paper?",
        "choices": [
          "bit",
          "piece",
          "sheet",
          "slice"
        ],
        "answer": 1,
        "university": "東京理科大",
        "translation": "",
        "hint": "数の表現",
        "grammar_point": "a piece of paper「1枚の紙」",
        "explanation": "a piece of paperで「1枚の紙」。② piece。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.157 Q596"
      },
      {
        "id": "ch17_q597",
        "type": "4択",
        "difficulty": 2,
        "sentence": "There are (   ) in this city.",
        "easy_sentence": "There are (   ) in this city.",
        "choices": [
          "ten thousands people",
          "ten thousand people",
          "ten thousand of people",
          "ten thousands of people"
        ],
        "answer": 1,
        "university": "青山学院大",
        "translation": "",
        "hint": "数の表現",
        "grammar_point": "数詞＋thousand（複数形にしない）",
        "explanation": "数詞の後のthousandは複数形にしない。② ten thousand people。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.157 Q597"
      },
      {
        "id": "ch17_q598",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I have an (   ) with my dentist at three o'clock.",
        "easy_sentence": "I have an (   ) with my dentist at three o'clock.",
        "choices": [
          "appointment",
          "engagement",
          "promise",
          "reservation"
        ],
        "answer": 0,
        "university": "京都産業大",
        "translation": "",
        "hint": "名詞の使い分け",
        "grammar_point": "appointment「（人と会う）約束、予約」",
        "explanation": "医者の予約はappointment。① appointment。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.158 Q598"
      },
      {
        "id": "ch17_q599",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I'd like to make a (   ) for two at seven tonight.",
        "easy_sentence": "I'd like to make a (   ) for two at seven tonight.",
        "choices": [
          "appointment",
          "booking",
          "promise",
          "reservation"
        ],
        "answer": 3,
        "university": "中央大",
        "translation": "",
        "hint": "名詞の使い分け",
        "grammar_point": "reservation「（場所・席の）予約」",
        "explanation": "レストランの予約はreservation。④ reservation。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.158 Q599"
      },
      {
        "id": "ch17_q600",
        "type": "4択",
        "difficulty": 2,
        "sentence": "My (   ) lives in Osaka.",
        "easy_sentence": "My (   ) lives in Osaka.",
        "choices": [
          "nephew",
          "niece",
          "cousin",
          "aunt"
        ],
        "answer": 0,
        "university": "近畿大",
        "translation": "",
        "hint": "名詞の使い分け",
        "grammar_point": "nephew「おい」",
        "explanation": "nephew は「おい」の意味。① nephew。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.159 Q600"
      },
      {
        "id": "ch17_q601",
        "type": "4択",
        "difficulty": 2,
        "sentence": "The bus was full of (   ).",
        "easy_sentence": "The bus was full of (   ).",
        "choices": [
          "customers",
          "clients",
          "passengers",
          "guests"
        ],
        "answer": 2,
        "university": "立命館大",
        "translation": "",
        "hint": "客の使い分け",
        "grammar_point": "passenger「乗客」",
        "explanation": "バスの乗客はpassenger。③ passengers。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.159 Q601"
      },
      {
        "id": "ch17_q602",
        "type": "4択",
        "difficulty": 2,
        "sentence": "The lawyer met with his (   ) to discuss the case.",
        "easy_sentence": "The lawyer met with his (   ) to discuss the case.",
        "choices": [
          "customer",
          "client",
          "guest",
          "passenger"
        ],
        "answer": 1,
        "university": "駒澤大",
        "translation": "",
        "hint": "客の使い分け",
        "grammar_point": "client「（弁護士などの）依頼人」",
        "explanation": "弁護士の依頼人はclient。② client。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.159 Q602"
      },
      {
        "id": "ch17_q603",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The (   ) of living has risen sharply.",
        "easy_sentence": "The (   ) of living has risen sharply.",
        "choices": [
          "cost",
          "fare",
          "fee",
          "charge"
        ],
        "answer": 0,
        "university": "法政大",
        "translation": "",
        "hint": "料金の使い分け",
        "grammar_point": "cost「費用、経費」",
        "explanation": "the cost of livingで「生活費」。① cost。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.160 Q603"
      },
      {
        "id": "ch17_q604",
        "type": "4択",
        "difficulty": 3,
        "sentence": "How much is the bus (   )?",
        "easy_sentence": "How much is the bus (   )?",
        "choices": [
          "cost",
          "fare",
          "fee",
          "price"
        ],
        "answer": 1,
        "university": "東京理科大",
        "translation": "",
        "hint": "料金の使い分け",
        "grammar_point": "fare「運賃」",
        "explanation": "バスの運賃はfare。② fare。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.160 Q604"
      },
      {
        "id": "ch17_q605",
        "type": "4択",
        "difficulty": 3,
        "sentence": "You have to pay an admission (   ) to enter the museum.",
        "easy_sentence": "You have to pay an admission (   ) to enter the museum.",
        "choices": [
          "cost",
          "fare",
          "fee",
          "price"
        ],
        "answer": 2,
        "university": "近畿大",
        "translation": "",
        "hint": "料金の使い分け",
        "grammar_point": "fee「料金、手数料」",
        "explanation": "入場料はadmission fee。③ fee。",
        "engage_source": "Engage Ch.17 名詞の語法 Sec.160 Q605"
      }
    ]
  },
  {
    "day": 14,
    "title": "Day 14: 代名詞 ＋ 形容詞 ＋ 副詞の語法",
    "description": "",
    "completed": false,
    "questions": [
      {
        "id": "ch18_q606",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I will give the money to Bob if he really needs (   ).",
        "easy_sentence": "I will give the money to Bob if he really needs (   ).",
        "choices": [
          "one",
          "the one",
          "it",
          "them"
        ],
        "answer": 2,
        "university": "東邦大",
        "translation": "",
        "hint": "it/oneの使い分け",
        "grammar_point": "it＝特定の名詞を指す",
        "explanation": "the moneyを指すのでit。③ it。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.161 Q606"
      },
      {
        "id": "ch18_q607",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I'd like to have a cup of tea. Are you going to have (   ), too?",
        "easy_sentence": "I'd like to have a cup of tea. Are you going to have (   ), too?",
        "choices": [
          "any",
          "it",
          "one",
          "same"
        ],
        "answer": 2,
        "university": "東京家政大",
        "translation": "",
        "hint": "it/oneの使い分け",
        "grammar_point": "one＝不特定の可算名詞の代用",
        "explanation": "a cup of teaの代わりに不特定のoneを使う。③ one。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.161 Q607"
      },
      {
        "id": "ch18_q608",
        "type": "4択",
        "difficulty": 1,
        "sentence": "This bag is out of fashion, so I want to buy (   ).",
        "easy_sentence": "This bag is out of fashion, so I want to buy (   ).",
        "choices": [
          "a new one",
          "my new one",
          "new one",
          "some new one"
        ],
        "answer": 0,
        "university": "天理大",
        "translation": "",
        "hint": "oneの修飾",
        "grammar_point": "a＋形容詞＋one",
        "explanation": "oneに形容詞がつくときはa/anが必要。① a new one。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.161 Q608"
      },
      {
        "id": "ch18_q609",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The new designs are much better than the old (   ).",
        "easy_sentence": "The new designs are much better than the old (   ).",
        "choices": [
          "it",
          "ones",
          "that",
          "these"
        ],
        "answer": 1,
        "university": "國學院大",
        "translation": "",
        "hint": "oneの複数形",
        "grammar_point": "the＋形容詞＋ones（複数）",
        "explanation": "designsの代わりにones（複数形）。② ones。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.161 Q609"
      },
      {
        "id": "ch18_q610",
        "type": "4択",
        "difficulty": 1,
        "sentence": "He's a completely different person from (   ) I met five years ago.",
        "easy_sentence": "He's a completely different person from (   ) I met five years ago.",
        "choices": [
          "one",
          "the one",
          "that",
          "who"
        ],
        "answer": 1,
        "university": "工学院大",
        "translation": "",
        "hint": "the oneの用法",
        "grammar_point": "the one「（特定の）その人」",
        "explanation": "特定の人を指すのでthe one。② the one。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.161 Q610"
      },
      {
        "id": "ch18_q611",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I found (   ) difficult to solve the problem.",
        "easy_sentence": "I found (   ) difficult to solve the problem.",
        "choices": [
          "that",
          "this",
          "it",
          "what"
        ],
        "answer": 2,
        "university": "名城大",
        "translation": "",
        "hint": "形式目的語it",
        "grammar_point": "find＋it＋形容詞＋to do（形式目的語）",
        "explanation": "find＋it＋形容詞＋to doの形。③ it。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.162 Q611"
      },
      {
        "id": "ch18_q612",
        "type": "4択",
        "difficulty": 1,
        "sentence": "We take (   ) for granted that we can travel freely.",
        "easy_sentence": "We take (   ) for granted that we can travel freely.",
        "choices": [
          "that",
          "this",
          "it",
          "what"
        ],
        "answer": 2,
        "university": "近畿大",
        "translation": "",
        "hint": "形式目的語it",
        "grammar_point": "take it for granted that ...「…を当然のことと思う」",
        "explanation": "take it for granted that ...の形。③ it。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.162 Q612"
      },
      {
        "id": "ch18_q613",
        "type": "4択",
        "difficulty": 1,
        "sentence": "(   ) is no use crying over spilt milk.",
        "easy_sentence": "(   ) is no use crying over spilt milk.",
        "choices": [
          "That",
          "This",
          "It",
          "What"
        ],
        "answer": 2,
        "university": "法政大",
        "translation": "",
        "hint": "形式主語it",
        "grammar_point": "It is no use doing「…しても無駄だ」",
        "explanation": "It is no use doingの形。③ It。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.162 Q613"
      },
      {
        "id": "ch18_q614",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The population of Japan is larger than (   ) of France.",
        "easy_sentence": "The population of Japan is larger than (   ) of France.",
        "choices": [
          "it",
          "one",
          "that",
          "this"
        ],
        "answer": 2,
        "university": "青山学院大",
        "translation": "",
        "hint": "thatの代用",
        "grammar_point": "that＝the＋不可算名詞の代用",
        "explanation": "the populationを指すthat。③ that。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.163 Q614"
      },
      {
        "id": "ch18_q615",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The climate of Tokyo is milder than (   ) of Beijing.",
        "easy_sentence": "The climate of Tokyo is milder than (   ) of Beijing.",
        "choices": [
          "it",
          "one",
          "that",
          "this"
        ],
        "answer": 2,
        "university": "中央大",
        "translation": "",
        "hint": "thatの代用",
        "grammar_point": "that＝the＋不可算名詞の代用",
        "explanation": "the climateを指すthat。③ that。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.163 Q615"
      },
      {
        "id": "ch18_q616",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The ears of a rabbit are longer than (   ) of a cat.",
        "easy_sentence": "The ears of a rabbit are longer than (   ) of a cat.",
        "choices": [
          "it",
          "ones",
          "these",
          "those"
        ],
        "answer": 3,
        "university": "立命館大",
        "translation": "",
        "hint": "thoseの代用",
        "grammar_point": "those＝the＋可算名詞の複数形の代用",
        "explanation": "the earsを指すthose。④ those。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.163 Q616"
      },
      {
        "id": "ch18_q617",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The rules of basketball are different from (   ) of soccer.",
        "easy_sentence": "The rules of basketball are different from (   ) of soccer.",
        "choices": [
          "it",
          "one",
          "that",
          "those"
        ],
        "answer": 3,
        "university": "日本大",
        "translation": "",
        "hint": "thoseの代用",
        "grammar_point": "those＝the＋可算名詞の複数形の代用",
        "explanation": "the rulesを指すthose。④ those。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.163 Q617"
      },
      {
        "id": "ch18_q618",
        "type": "4択",
        "difficulty": 2,
        "sentence": "(   ) students in my class passed the exam.",
        "easy_sentence": "(   ) students in my class passed the exam.",
        "choices": [
          "All",
          "All of",
          "All the",
          "Every"
        ],
        "answer": 0,
        "university": "京都産業大",
        "translation": "",
        "hint": "allの用法",
        "grammar_point": "all＋名詞「すべての…」",
        "explanation": "all＋複数名詞で「すべての…」。① All。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.164 Q618"
      },
      {
        "id": "ch18_q619",
        "type": "4択",
        "difficulty": 2,
        "sentence": "(   ) the students in my class like English.",
        "easy_sentence": "(   ) the students in my class like English.",
        "choices": [
          "Almost",
          "Most",
          "Most of",
          "Almost of"
        ],
        "answer": 2,
        "university": "近畿大",
        "translation": "",
        "hint": "mostの用法",
        "grammar_point": "most of the＋名詞「…のほとんど」",
        "explanation": "most of the＋名詞の形。③ Most of。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.164 Q619"
      },
      {
        "id": "ch18_q620",
        "type": "4択",
        "difficulty": 2,
        "sentence": "(   ) Japanese people eat rice every day.",
        "easy_sentence": "(   ) Japanese people eat rice every day.",
        "choices": [
          "Almost",
          "Most",
          "Most of",
          "Almost of"
        ],
        "answer": 1,
        "university": "立教大",
        "translation": "",
        "hint": "mostの用法",
        "grammar_point": "most＋名詞「ほとんどの…」",
        "explanation": "most＋名詞で「ほとんどの…」。② Most。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.164 Q620"
      },
      {
        "id": "ch18_q621",
        "type": "4択",
        "difficulty": 2,
        "sentence": "(   ) everybody knows that.",
        "easy_sentence": "(   ) everybody knows that.",
        "choices": [
          "Almost",
          "Most",
          "Most of",
          "Nearly of"
        ],
        "answer": 0,
        "university": "日本大",
        "translation": "",
        "hint": "almostの用法",
        "grammar_point": "almost＋代名詞「ほとんど…」",
        "explanation": "almostは副詞。代名詞の前に置ける。① Almost。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.165 Q621"
      },
      {
        "id": "ch18_q622",
        "type": "4択",
        "difficulty": 2,
        "sentence": "She has read (   ) all the books in the library.",
        "easy_sentence": "She has read (   ) all the books in the library.",
        "choices": [
          "almost",
          "most",
          "most of",
          "nearly of"
        ],
        "answer": 0,
        "university": "中央大",
        "translation": "",
        "hint": "almostの用法",
        "grammar_point": "almost all「ほとんどすべて」",
        "explanation": "almost allで「ほとんどすべて」。① almost。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.165 Q622"
      },
      {
        "id": "ch18_q623",
        "type": "4択",
        "difficulty": 2,
        "sentence": "The work is (   ) finished.",
        "easy_sentence": "The work is (   ) finished.",
        "choices": [
          "almost",
          "most",
          "most of",
          "mostly"
        ],
        "answer": 0,
        "university": "東京理科大",
        "translation": "",
        "hint": "almostの用法",
        "grammar_point": "almost＋形容詞「ほとんど…」",
        "explanation": "almostは副詞で形容詞を修飾できる。① almost。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.165 Q623"
      },
      {
        "id": "ch18_q624",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I don't like this one. Show me (   ).",
        "easy_sentence": "I don't like this one. Show me (   ).",
        "choices": [
          "another",
          "other",
          "the other one",
          "others"
        ],
        "answer": 0,
        "university": "南山大",
        "translation": "",
        "hint": "another/otherの使い分け",
        "grammar_point": "another「（不特定の）もう1つの」",
        "explanation": "不特定の別のものを求めるのでanother。① another。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.166 Q624"
      },
      {
        "id": "ch18_q625",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I have two brothers. One is a doctor and (   ) is a lawyer.",
        "easy_sentence": "I have two brothers. One is a doctor and (   ) is a lawyer.",
        "choices": [
          "another",
          "other",
          "the other",
          "others"
        ],
        "answer": 2,
        "university": "龍谷大",
        "translation": "",
        "hint": "another/otherの使い分け",
        "grammar_point": "the other「（2つのうちの）もう一方」",
        "explanation": "2つのうちの残り1つはthe other。③ the other。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.166 Q625"
      },
      {
        "id": "ch18_q626",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Some students like math, and (   ) like English.",
        "easy_sentence": "Some students like math, and (   ) like English.",
        "choices": [
          "another",
          "other",
          "the other",
          "others"
        ],
        "answer": 3,
        "university": "法政大",
        "translation": "",
        "hint": "another/otherの使い分け",
        "grammar_point": "others「（不特定の）他の人たち」",
        "explanation": "不特定の他の人たちはothers。④ others。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.166 Q626"
      },
      {
        "id": "ch18_q627",
        "type": "4択",
        "difficulty": 2,
        "sentence": "There are five apples. Two are red and (   ) are green.",
        "easy_sentence": "There are five apples. Two are red and (   ) are green.",
        "choices": [
          "another",
          "other",
          "the other",
          "the others"
        ],
        "answer": 3,
        "university": "青山学院大",
        "translation": "",
        "hint": "another/otherの使い分け",
        "grammar_point": "the others「（残りの）他の全部」",
        "explanation": "残りの全部はthe others。④ the others。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.166 Q627"
      },
      {
        "id": "ch18_q628",
        "type": "4択",
        "difficulty": 2,
        "sentence": "We should respect one (   ).",
        "easy_sentence": "We should respect one (   ).",
        "choices": [
          "another",
          "other",
          "the other",
          "others"
        ],
        "answer": 0,
        "university": "京都産業大",
        "translation": "",
        "hint": "相互代名詞",
        "grammar_point": "one another「お互いに」",
        "explanation": "one another = each otherで「お互いに」。① another。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.166 Q628"
      },
      {
        "id": "ch18_q630",
        "type": "4択",
        "difficulty": 3,
        "sentence": "(   ) of the two answers is correct.",
        "easy_sentence": "(   ) of the two answers is correct.",
        "choices": [
          "Both",
          "Either",
          "Neither",
          "All"
        ],
        "answer": 1,
        "university": "立命館大",
        "translation": "",
        "hint": "either/neitherの用法",
        "grammar_point": "either of＋the＋複数名詞「どちらか一方」",
        "explanation": "「どちらか一方が正しい」。② Either。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.167 Q630"
      },
      {
        "id": "ch18_q631",
        "type": "4択",
        "difficulty": 3,
        "sentence": "(   ) of the two students knew the answer.",
        "easy_sentence": "(   ) of the two students knew the answer.",
        "choices": [
          "Both",
          "Either",
          "Neither",
          "Each"
        ],
        "answer": 2,
        "university": "中央大",
        "translation": "",
        "hint": "either/neitherの用法",
        "grammar_point": "neither of＋the＋複数名詞「どちらも…ない」",
        "explanation": "「2人の学生のどちらも答えを知らなかった」。③ Neither。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.167 Q631"
      },
      {
        "id": "ch18_q632",
        "type": "4択",
        "difficulty": 3,
        "sentence": "(   ) sides of the street were lined with trees.",
        "easy_sentence": "(   ) sides of the street were lined with trees.",
        "choices": [
          "Both",
          "Either",
          "Neither",
          "Each"
        ],
        "answer": 0,
        "university": "日本大",
        "translation": "",
        "hint": "bothの用法",
        "grammar_point": "both＋複数名詞「両方の」",
        "explanation": "「通りの両側に」。① Both。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.167 Q632"
      },
      {
        "id": "ch18_q633",
        "type": "4択",
        "difficulty": 3,
        "sentence": "(   ) student has his own locker.",
        "easy_sentence": "(   ) student has his own locker.",
        "choices": [
          "All",
          "Both",
          "Each",
          "Some"
        ],
        "answer": 2,
        "university": "近畿大",
        "translation": "",
        "hint": "each/everyの使い分け",
        "grammar_point": "each＋単数名詞「各々の」",
        "explanation": "個々に注目するeach。③ Each。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.168 Q633"
      },
      {
        "id": "ch18_q634",
        "type": "4択",
        "difficulty": 3,
        "sentence": "(   ) child needs love and care.",
        "easy_sentence": "(   ) child needs love and care.",
        "choices": [
          "All",
          "Each",
          "Every",
          "Some"
        ],
        "answer": 2,
        "university": "東洋大",
        "translation": "",
        "hint": "each/everyの使い分け",
        "grammar_point": "every＋単数名詞「すべての」",
        "explanation": "「すべての子供」を一般化して述べるevery。③ Every。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.168 Q634"
      },
      {
        "id": "ch18_q635",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I go to the dentist (   ) six months.",
        "easy_sentence": "I go to the dentist (   ) six months.",
        "choices": [
          "all",
          "each",
          "every",
          "per"
        ],
        "answer": 2,
        "university": "青山学院大",
        "translation": "",
        "hint": "everyの特殊用法",
        "grammar_point": "every＋数詞＋名詞「…ごとに」",
        "explanation": "every six monthsで「6ヶ月ごとに」。③ every。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.168 Q635"
      },
      {
        "id": "ch18_q636",
        "type": "4択",
        "difficulty": 3,
        "sentence": "There are trees on (   ) side of the river.",
        "easy_sentence": "There are trees on (   ) side of the river.",
        "choices": [
          "all",
          "both",
          "each",
          "every"
        ],
        "answer": 2,
        "university": "法政大",
        "translation": "",
        "hint": "eachの用法",
        "grammar_point": "each side「各側」",
        "explanation": "eachは2つ以上の個々に使える。③ each。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.168 Q636"
      },
      {
        "id": "ch18_q637",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Not (   ) student can afford to study abroad.",
        "easy_sentence": "Not (   ) student can afford to study abroad.",
        "choices": [
          "all",
          "each",
          "every",
          "some"
        ],
        "answer": 2,
        "university": "関西外国語大",
        "translation": "",
        "hint": "everyの部分否定",
        "grammar_point": "not every「すべて…というわけではない」（部分否定）",
        "explanation": "not everyで部分否定。③ every。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.168 Q637"
      },
      {
        "id": "ch18_q638",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The buses run (   ) fifteen minutes.",
        "easy_sentence": "The buses run (   ) fifteen minutes.",
        "choices": [
          "all",
          "each",
          "every",
          "per"
        ],
        "answer": 2,
        "university": "立命館大",
        "translation": "",
        "hint": "everyの特殊用法",
        "grammar_point": "every＋数詞＋minutes「…分ごとに」",
        "explanation": "every fifteen minutesで「15分ごとに」。③ every。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.168 Q638"
      },
      {
        "id": "ch18_q639",
        "type": "4択",
        "difficulty": 3,
        "sentence": "(   ) of the boys has a different hobby.",
        "easy_sentence": "(   ) of the boys has a different hobby.",
        "choices": [
          "All",
          "Both",
          "Each",
          "Every"
        ],
        "answer": 2,
        "university": "日本大",
        "translation": "",
        "hint": "eachの用法",
        "grammar_point": "each of＋the＋複数名詞",
        "explanation": "each of＋the＋複数名詞の形。③ Each。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.168 Q639"
      },
      {
        "id": "ch18_q640",
        "type": "4択",
        "difficulty": 3,
        "sentence": "\"Will it rain tomorrow?\" \"I hope (   ).\"",
        "easy_sentence": "\"Will it rain tomorrow?\" \"I hope (   ).\"",
        "choices": [
          "no",
          "not",
          "so",
          "to"
        ],
        "answer": 1,
        "university": "センター試験",
        "translation": "",
        "hint": "soとnotによる代用",
        "grammar_point": "I hope not「そうでないといいのだが」",
        "explanation": "I hope notで「そうでないといいのだが」。② not。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.169 Q640"
      },
      {
        "id": "ch18_q641",
        "type": "4択",
        "difficulty": 3,
        "sentence": "\"Is she coming to the party?\" \"I'm afraid (   ).\"",
        "easy_sentence": "\"Is she coming to the party?\" \"I'm afraid (   ).\"",
        "choices": [
          "no",
          "not",
          "so",
          "to"
        ],
        "answer": 2,
        "university": "法政大",
        "translation": "",
        "hint": "soとnotによる代用",
        "grammar_point": "I'm afraid so「残念ながらそうです」",
        "explanation": "I'm afraid soで「残念ながらそうです」。③ so。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.169 Q641"
      },
      {
        "id": "ch18_q642",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Is there anything (   ) in today's newspaper?",
        "easy_sentence": "Is there anything (   ) in today's newspaper?",
        "choices": [
          "interest",
          "interested",
          "interesting",
          "of interest"
        ],
        "answer": 2,
        "university": "近畿大",
        "translation": "",
        "hint": "不定代名詞の語順",
        "grammar_point": "something＋形容詞「…な何か」",
        "explanation": "不定代名詞は形容詞が後ろに来る。③ interesting。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.170 Q642"
      },
      {
        "id": "ch18_q643",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I want something (   ) to drink.",
        "easy_sentence": "I want something (   ) to drink.",
        "choices": [
          "cold",
          "a cold",
          "coldly",
          "the cold"
        ],
        "answer": 0,
        "university": "法政大",
        "translation": "",
        "hint": "不定代名詞の語順",
        "grammar_point": "something＋形容詞＋to do",
        "explanation": "不定代名詞＋形容詞＋to不定詞の語順。① cold。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.170 Q643"
      },
      {
        "id": "ch18_q644",
        "type": "4択",
        "difficulty": 3,
        "sentence": "This book is (   ). Please don't take it.",
        "easy_sentence": "This book is (   ). Please don't take it.",
        "choices": [
          "me",
          "my",
          "mine",
          "I"
        ],
        "answer": 2,
        "university": "東洋大",
        "translation": "",
        "hint": "所有代名詞",
        "grammar_point": "mine「私のもの」",
        "explanation": "所有代名詞mineはmy bookの代わり。③ mine。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.171 Q644"
      },
      {
        "id": "ch18_q645",
        "type": "4択",
        "difficulty": 3,
        "sentence": "A friend of (   ) told me the news.",
        "easy_sentence": "A friend of (   ) told me the news.",
        "choices": [
          "me",
          "my",
          "mine",
          "I"
        ],
        "answer": 2,
        "university": "日本大",
        "translation": "",
        "hint": "二重所有格",
        "grammar_point": "a friend of mine「私の友人の1人」",
        "explanation": "a friend of mineは二重所有格。③ mine。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.171 Q645"
      },
      {
        "id": "ch18_q646",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Your plan is better than (   ).",
        "easy_sentence": "Your plan is better than (   ).",
        "choices": [
          "our",
          "ours",
          "us",
          "we"
        ],
        "answer": 1,
        "university": "立命館大",
        "translation": "",
        "hint": "所有代名詞",
        "grammar_point": "ours「私たちのもの」",
        "explanation": "our planの代わりにours。② ours。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.171 Q646"
      },
      {
        "id": "ch18_q647",
        "type": "4択",
        "difficulty": 3,
        "sentence": "She introduced (   ) to the new students.",
        "easy_sentence": "She introduced (   ) to the new students.",
        "choices": [
          "her",
          "hers",
          "herself",
          "she"
        ],
        "answer": 2,
        "university": "東海大",
        "translation": "",
        "hint": "再帰代名詞",
        "grammar_point": "introduce oneself「自己紹介する」",
        "explanation": "主語と目的語が同一なのでherself。③ herself。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.172 Q647"
      },
      {
        "id": "ch18_q648",
        "type": "4択",
        "difficulty": 3,
        "sentence": "He hurt (   ) while playing soccer.",
        "easy_sentence": "He hurt (   ) while playing soccer.",
        "choices": [
          "him",
          "his",
          "himself",
          "he"
        ],
        "answer": 2,
        "university": "中央大",
        "translation": "",
        "hint": "再帰代名詞",
        "grammar_point": "hurt oneself「けがをする」",
        "explanation": "主語と目的語が同一なのでhimself。③ himself。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.172 Q648"
      },
      {
        "id": "ch18_q649",
        "type": "4択",
        "difficulty": 3,
        "sentence": "She went to the party by (   ).",
        "easy_sentence": "She went to the party by (   ).",
        "choices": [
          "her",
          "hers",
          "herself",
          "she"
        ],
        "answer": 2,
        "university": "法政大",
        "translation": "",
        "hint": "再帰代名詞の慣用表現",
        "grammar_point": "by oneself「ひとりで」",
        "explanation": "by oneselfで「ひとりで」= alone。③ herself。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.173 Q649"
      },
      {
        "id": "ch18_q650",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Help (   ) to the cake.",
        "easy_sentence": "Help (   ) to the cake.",
        "choices": [
          "you",
          "your",
          "yours",
          "yourself"
        ],
        "answer": 3,
        "university": "近畿大",
        "translation": "",
        "hint": "再帰代名詞の慣用表現",
        "grammar_point": "help oneself to A「Aを自由にとって食べる」",
        "explanation": "help oneself to Aで「Aを自由にとって食べる」。④ yourself。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.173 Q650"
      },
      {
        "id": "ch18_q651",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I couldn't make (   ) understood in English.",
        "easy_sentence": "I couldn't make (   ) understood in English.",
        "choices": [
          "me",
          "my",
          "myself",
          "mine"
        ],
        "answer": 2,
        "university": "立命館大",
        "translation": "",
        "hint": "再帰代名詞の慣用表現",
        "grammar_point": "make oneself understood「自分の意思を伝える」",
        "explanation": "make oneself understoodで「自分の意思を伝える」。③ myself。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.173 Q651"
      },
      {
        "id": "ch18_q652",
        "type": "4択",
        "difficulty": 3,
        "sentence": "She was beside (   ) with joy.",
        "easy_sentence": "She was beside (   ) with joy.",
        "choices": [
          "her",
          "hers",
          "herself",
          "she"
        ],
        "answer": 2,
        "university": "東洋大",
        "translation": "",
        "hint": "再帰代名詞の慣用表現",
        "grammar_point": "beside oneself「我を忘れて」",
        "explanation": "beside oneselfで「我を忘れて」。③ herself。",
        "engage_source": "Engage Ch.18 代名詞の語法 Sec.173 Q652"
      },
      {
        "id": "ch19_q654",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I couldn't find (   ) information about the college in the handbook.",
        "easy_sentence": "I couldn't find (   ) information about the college in the handbook.",
        "choices": [
          "an",
          "many",
          "much",
          "some"
        ],
        "answer": 2,
        "university": "東北学院大",
        "translation": "",
        "hint": "many/muchの使い分け",
        "grammar_point": "much＋不可算名詞「たくさんの…」",
        "explanation": "informationは不可算名詞なので、不可算名詞を修飾できる③ much「たくさんの」が正解。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.174 Q654"
      },
      {
        "id": "ch19_q655",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I wanted to buy a new smartphone, but I didn't have (   ) money.",
        "easy_sentence": "I wanted to buy a new smartphone, but I didn't have (   ) money.",
        "choices": [
          "enough",
          "little",
          "few",
          "no"
        ],
        "answer": 0,
        "university": "岐阜聖徳学園大",
        "translation": "",
        "hint": "enough/some/anyの使い分け",
        "grammar_point": "enough A「十分なA」",
        "explanation": "moneyは不可算名詞なので、空所には不可算名詞を修飾する形容詞が入る。didn'tがあり、「十分なお金がなかった」という意味から、「十分な」の意味を表す① enoughが正解。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.175 Q655"
      },
      {
        "id": "ch19_q656",
        "type": "4択",
        "difficulty": 1,
        "sentence": "If there's (   ) soup left, would you put it in the refrigerator?",
        "easy_sentence": "If there's (   ) soup left, would you put it in the refrigerator?",
        "choices": [
          "few",
          "some",
          "bit",
          "many"
        ],
        "answer": 1,
        "university": "西南学院大",
        "translation": "",
        "hint": "someの用法",
        "grammar_point": "some＋可算名詞・不可算名詞「いくらかの」",
        "explanation": "soup「スープ」は不可算名詞なので、空所には不可算名詞を修飾する形容詞が入る。② some「いくらかの」は可算名詞・不可算名詞のどちらも修飾することができるので、これが正解。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.175 Q656"
      },
      {
        "id": "ch19_q658",
        "type": "4択",
        "difficulty": 1,
        "sentence": "There were still (   ) people left at the party when I went home.",
        "easy_sentence": "There were still (   ) people left at the party when I went home.",
        "choices": [
          "a few",
          "little",
          "few",
          "a little"
        ],
        "answer": 0,
        "university": "芝浦工業大",
        "translation": "",
        "hint": "few/littleの使い分け",
        "grammar_point": "a few＋可算名詞「少しの…」",
        "explanation": "peopleは複数扱いの名詞なので、① a few「少しの…」か③ few「ほとんど…ない」のどちらかが入る。still「まだ」があるので、「まだ少しの人々が残っていた」という肯定的な意味になると考えられる。〈a few＋可算名詞〉で「少しの…」という肯定的な意味になる。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.176 Q658"
      },
      {
        "id": "ch19_q659",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I need (   ) time to decide which university to apply to.",
        "easy_sentence": "I need (   ) time to decide which university to apply to.",
        "choices": [
          "any",
          "many",
          "a little",
          "a few"
        ],
        "answer": 2,
        "university": "南山大",
        "translation": "",
        "hint": "few/littleの使い分け",
        "grammar_point": "a little＋不可算名詞「少しの…」",
        "explanation": "timeは不可算名詞。不可算名詞を修飾できるのは、① any「どんな…でも」か③ a little「少しの…」。「…を決めるには少し時間が必要だ」という意味になるように③を選ぶ。〈a little＋不可算名詞〉で「少しの…」という肯定的な意味になる。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.176 Q659"
      },
      {
        "id": "ch19_q660",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I am glad to hear that my son made (   ) mistakes in the examination.",
        "easy_sentence": "I am glad to hear that my son made (   ) mistakes in the examination.",
        "choices": [
          "quite a few",
          "little",
          "few",
          "a few"
        ],
        "answer": 2,
        "university": "名城大",
        "translation": "",
        "hint": "few/littleの使い分け",
        "grammar_point": "few＋可算名詞「ほとんど…ない」",
        "explanation": "「息子が試験で（　　）のミスをしたと聞いてうれしい」という文意から、① quite a few「かなり多くの…」や④ a few「少しの…」では「ミスをしたことがうれしい」という文意になり、おかしい。「ほとんどミスをしなかった」という文脈になるはずだと考え、③ few「ほとんど…ない」を選ぶ。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.176 Q660"
      },
      {
        "id": "ch19_q661",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The house had (   ) furniture when we saw it.",
        "easy_sentence": "The house had (   ) furniture when we saw it.",
        "choices": [
          "a couple of",
          "few",
          "little",
          "not many"
        ],
        "answer": 2,
        "university": "日本大",
        "translation": "",
        "hint": "few/littleの使い分け",
        "grammar_point": "little＋不可算名詞「ほとんど…ない」",
        "explanation": "furniture「家具」は不可算名詞なので、③ little以外は入らない。littleは不可算名詞を修飾して「ほとんど…ない」という意味を表す。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.176 Q661"
      },
      {
        "id": "ch19_q663",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I have been living in New York for (   ) of months.",
        "easy_sentence": "I have been living in New York for (   ) of months.",
        "choices": [
          "several",
          "some",
          "a couple",
          "a few"
        ],
        "answer": 2,
        "university": "芝浦工業大",
        "translation": "",
        "hint": "数や量の表し方",
        "grammar_point": "a couple of＋名詞の複数形「2、3の…、いくつかの…」",
        "explanation": "選択肢から、（　　）of monthsは「数か月」の意味だと判断する。空所の直後にof monthsがあり、そのあとに名詞の複数形（months）が続くので、③を入れてa couple of monthsとすれば「2、3か月、数か月」になる。a couple of Aには「2、3の…、いくつかの…」以外に、「2つ [2人] の…」の意味もある。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.177 Q663"
      },
      {
        "id": "ch19_q664",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I have (   ) to do today.",
        "easy_sentence": "I have (   ) to do today.",
        "choices": [
          "a lot of work",
          "a few work",
          "little works",
          "much works"
        ],
        "answer": 0,
        "university": "大阪産業大",
        "translation": "",
        "hint": "数や量の表し方",
        "grammar_point": "a lot of A / lots of A「たくさんのA」",
        "explanation": "work「仕事」の意味のworkは不可算名詞。不可算名詞は複数形をとらず、a fewで修飾できないので、① a lot of workが正解。a lot of / lots ofは「たくさんの…」は可算名詞・不可算名詞のどちらも修飾できる。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.177 Q664"
      },
      {
        "id": "ch19_q665",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Don't worry, we have (   ) of time.",
        "easy_sentence": "Don't worry, we have (   ) of time.",
        "choices": [
          "plenty",
          "much",
          "many",
          "more"
        ],
        "answer": 0,
        "university": "芝浦工業大",
        "translation": "",
        "hint": "数や量の表し方",
        "grammar_point": "plenty of A「たくさんのA、十分なA」",
        "explanation": "選択肢から、（　　）of timeで「多くの時間」の意味になると判断する。空所の直後にofがあるので、plenty of A「たくさんのA、十分なA」の形にする。plenty ofは、可算名詞・不可算名詞のどちらも修飾できる。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.177 Q665"
      },
      {
        "id": "ch19_q666",
        "type": "4択",
        "difficulty": 2,
        "sentence": "In some countries, a large (   ) of older cars still don't have air bags.",
        "easy_sentence": "In some countries, a large (   ) of older cars still don't have air bags.",
        "choices": [
          "amount",
          "member",
          "number",
          "total"
        ],
        "answer": 2,
        "university": "愛知学院大",
        "translation": "",
        "hint": "数や量の表し方",
        "grammar_point": "a large number of＋名詞の複数形「多くの…、多数の…」",
        "explanation": "a large（　　）of ... の形なのでa large number of ...「多くの…、多数の…」にする。largeの代わりにgoodやgreatが用いられることもある。ofのあとには名詞の複数形がくる。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.177 Q666"
      },
      {
        "id": "ch19_q667",
        "type": "4択",
        "difficulty": 2,
        "sentence": "The company spent a great (   ) of money trying to fix the air-conditioning system.",
        "easy_sentence": "The company spent a great (   ) of money trying to fix the air-conditioning system.",
        "choices": [
          "deal",
          "figure",
          "total",
          "number"
        ],
        "answer": 0,
        "university": "南山大",
        "translation": "",
        "hint": "数や量の表し方",
        "grammar_point": "a great [good] deal of＋不可算名詞「たくさんの…、大量の…」",
        "explanation": "ofのあとにmoneyがあるので、不可算名詞を続けられるa great deal of ...「たくさんの…、大量の…」にする。a good deal ofとすることもある。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.177 Q667"
      },
      {
        "id": "ch19_q668",
        "type": "4択",
        "difficulty": 2,
        "sentence": "驚いたことに、その工場で消費される電力はごくわずかだった。\nTo our surprise, the factory only consumed a small (   ) of electricity.",
        "easy_sentence": "驚いたことに、その工場で消費される電力はごくわずかだった。\nTo our surprise, the factory only consumed a small (   ) of electricity.",
        "choices": [
          "part",
          "amount",
          "sum",
          "deal"
        ],
        "answer": 1,
        "university": "獨協医科大",
        "translation": "",
        "hint": "数や量の表し方",
        "grammar_point": "a small amount of＋不可算名詞「微量の…、わずかの…」",
        "explanation": "a small（　　）of electricityで「わずかな電力」を表す。electricityは不可算名詞なので、② amount「量」を用いてa small amount of ...「わずかな量の…」とする。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.178 Q668"
      },
      {
        "id": "ch19_q669",
        "type": "4択",
        "difficulty": 2,
        "sentence": "He is (   ) of playing every kind of music from classical to pop.",
        "easy_sentence": "He is (   ) of playing every kind of music from classical to pop.",
        "choices": [
          "able",
          "capable",
          "competent",
          "possible"
        ],
        "answer": 1,
        "university": "中央大",
        "translation": "",
        "hint": "「…できる」を表す形容詞",
        "grammar_point": "be capable of doing「…する能力がある、…できる」",
        "explanation": "選択肢はすべて「…できる」という意味を表す形容詞なので、be（　　）of doingの形で「…できる」という意味を表すものを選ぶ。capableは人を主語にしてbe capable of doingの形で「…する能力がある、…できる」という意味を表す。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.178 Q669"
      },
      {
        "id": "ch19_q671",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Is it (   ) for you to come to my office at 4 p.m.?",
        "easy_sentence": "Is it (   ) for you to come to my office at 4 p.m.?",
        "choices": [
          "stable",
          "capable",
          "possible",
          "enable"
        ],
        "answer": 2,
        "university": "南南大",
        "translation": "",
        "hint": "「…できる」を表す形容詞",
        "grammar_point": "it is possible (for 人) to do「((人) が) …することが可能である」",
        "explanation": "この文は〈it is＋形容詞＋for＋人＋to do〉の疑問文。この形をとることができる形容詞は、③ possible。it is possible (for 人) to doで「((人) が) …することが可能である」の意味を表す。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.178 Q671"
      },
      {
        "id": "ch19_q672",
        "type": "4択",
        "difficulty": 2,
        "sentence": "Please come and see me when (   ).",
        "easy_sentence": "Please come and see me when (   ).",
        "choices": [
          "you are convenient",
          "it is convenient for you",
          "you are convenience",
          "it is convenience for you"
        ],
        "answer": 1,
        "university": "杏林大",
        "translation": "",
        "hint": "人が主語の場合には用いない形容詞",
        "grammar_point": "convenient「便利な、都合のよい」",
        "explanation": "形容詞convenient「便利な、都合のよい」は〈人〉を主語にすることはできない。〈be convenient for＋人〉の形で「(人) にとって都合がよい、便利だ」の意味を表す。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.178 Q672"
      },
      {
        "id": "ch19_q673",
        "type": "4択",
        "difficulty": 2,
        "sentence": "(   ) to work hard to succeed.",
        "easy_sentence": "(   ) to work hard to succeed.",
        "choices": [
          "You are necessary",
          "You are needed",
          "It is necessary for you",
          "It is necessary of you"
        ],
        "answer": 2,
        "university": "中村学園大",
        "translation": "",
        "hint": "人が主語の場合には用いない形容詞",
        "grammar_point": "it is necessary for you to do …「あなたは…する必要がある」",
        "explanation": "「成功するためにはあなたは熱心に働く必要がある」という意味の文にする。「あなたは…する必要がある」は〈It is necessary for you to do ...〉か〈You need to do ...〉で表すので、③が正解。形容詞necessary「必要な」は〈人〉を主語にすることはできないことに注意。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.179 Q673"
      },
      {
        "id": "ch19_q675",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The personality test shows that you and I are really (   ).",
        "easy_sentence": "The personality test shows that you and I are really (   ).",
        "choices": [
          "alike",
          "like",
          "likelihood",
          "likely"
        ],
        "answer": 0,
        "university": "芝浦工業大",
        "translation": "",
        "hint": "補語としてのみ用いられる形容詞",
        "grammar_point": "alike「よく似た」",
        "explanation": "① alike「よく似た」は補語として用いる形容詞。その他の選択肢では文意が通らない。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.180 Q675"
      },
      {
        "id": "ch19_q677",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Despite their name, some rare earth metals are (   ) in large quantities in the Earth's crust.",
        "easy_sentence": "Despite their name, some rare earth metals are (   ) in large quantities in the Earth's crust.",
        "choices": [
          "present",
          "presented",
          "represent",
          "represented"
        ],
        "answer": 0,
        "university": "関西学院大",
        "translation": "",
        "hint": "位置によって意味が異なる形容詞",
        "grammar_point": "present「存在している」「現在の」",
        "explanation": "空所の前にareがあることに注目。some rare earth metals are（　　）はSVCの文。文頭にDespite their name「その名前に反して」のこと、つまりrare earth metalsのことで、空所以降はrare「珍しい」に反する意味になる。① presentは補語で用いると「存在している」の意味になるので、これが正解。presentを名詞修飾で用いると「現在の」の意味になる。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.181 Q677"
      },
      {
        "id": "ch19_q678",
        "type": "4択",
        "difficulty": 3,
        "sentence": "When our team won the soccer game, I was (   )!",
        "easy_sentence": "When our team won the soccer game, I was (   )!",
        "choices": [
          "more exciting",
          "so excite",
          "so excited",
          "so exciting"
        ],
        "answer": 2,
        "university": "鹿児島大",
        "translation": "",
        "hint": "分詞形容詞",
        "grammar_point": "excited「（人が）興奮した」",
        "explanation": "主語が（人）なので、過去分詞型の形容詞excited「（人が）興奮した」を用いる。③ so excited。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.182 Q678"
      },
      {
        "id": "ch19_q679",
        "type": "4択",
        "difficulty": 3,
        "sentence": "A：We're moving into a bigger house next week.\nB：Sounds (   )!",
        "easy_sentence": "A：We're moving into a bigger house next week.\nB：Sounds (   )!",
        "choices": [
          "excited",
          "exciting",
          "to excite",
          "like you excite"
        ],
        "answer": 1,
        "university": "陸前大",
        "translation": "",
        "hint": "分詞形容詞",
        "grammar_point": "exciting「（事・物が）興奮させるような、わくわくする」",
        "explanation": "That sounds（　　）!と主語を補って考える。soundは〈sound＋形容詞〉で「…に聞こえる、…のように思われる」の意味。ここではsoundsの主語にあたるThatはAの発言を指し、「それはわくわくするね」という意味になるので、現在分詞型の② excitingが正解。excitingは「（事・物が）興奮させるような、わくわくする」の意味。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.182 Q679"
      },
      {
        "id": "ch19_q680",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Almost everyone thought that Mike's idea was terrible, but our boss found it (   ).",
        "easy_sentence": "Almost everyone thought that Mike's idea was terrible, but our boss found it (   ).",
        "choices": [
          "interested",
          "interests",
          "interest",
          "interesting"
        ],
        "answer": 3,
        "university": "明治大",
        "translation": "",
        "hint": "分詞形容詞",
        "grammar_point": "interesting「（事・物が）興味深い、おもしろい」",
        "explanation": "found it（　　）は〈find＋O＋C〉「OをCと思う」の形なので、it（= Mike's idea）と空所の間には（O＝C）の関係が成り立つ。つまり、〈Mike's idea is（　　）〉という文が成り立つので、空所には〈事・物〉を主語にとる現在分詞型の④ interesting「興味深い、おもしろい」が適する。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.182 Q680"
      },
      {
        "id": "ch19_q681",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The movie was so (   ) that I couldn't stay awake.",
        "easy_sentence": "The movie was so (   ) that I couldn't stay awake.",
        "choices": [
          "bore",
          "bored",
          "boring",
          "boredom"
        ],
        "answer": 2,
        "university": "摂南大",
        "translation": "",
        "hint": "分詞形容詞",
        "grammar_point": "boring「（事・物が）退屈な、うんざりするような」",
        "explanation": "主語がThe movie であることに注目。so（　　）that ...は〈so＋形容詞 [副詞]＋that ...〉「とても～なので…」の構文なので、空所には形容詞が入る。主語がThe movie「映画」なので、現在分詞型の③ boring「退屈な、うんざりするような」が正解。stay awakeは「起きている」の意味。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.182 Q681"
      },
      {
        "id": "ch19_q682",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Kate felt (   ) with the lecture, since the professor was speaking too slowly.",
        "easy_sentence": "Kate felt (   ) with the lecture, since the professor was speaking too slowly.",
        "choices": [
          "interesting",
          "bored",
          "boring",
          "interested"
        ],
        "answer": 1,
        "university": "福岡大",
        "translation": "",
        "hint": "分詞形容詞",
        "grammar_point": "bored with A「Aに退屈して、うんざりして」",
        "explanation": "〈feel＋形容詞〉「…に感じる」は第2文型(SVC)なので、空所に入る形容詞が現在分詞型か過去分詞型かは、be動詞の場合と同様に考えればよい。ここでは主語がKateなので、過去分詞型のsatisfied「満足している」が適する。「…に満足している」はbe satisfied with ...で表すので、③が正解。since以下にある「教授があまりにもゆっくり話していたからだ」から、② bored「退屈して」が正解。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.182 Q682"
      },
      {
        "id": "ch19_q683",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The news that the event will be cancelled is really (   ) to us all.",
        "easy_sentence": "The news that the event will be cancelled is really (   ) to us all.",
        "choices": [
          "disappoint",
          "disappointing",
          "disappointed",
          "to disappoint"
        ],
        "answer": 1,
        "university": "福岡大",
        "translation": "",
        "hint": "分詞形容詞",
        "grammar_point": "disappointing「（事・物が）がっかりさせる」",
        "explanation": "主語がThe news「ニュース」なので、現在分詞型の形容詞② disappointing「がっかりさせる」が適する。③ disappointedは「（人が）がっかりする」という意味で、〈人〉が主語になる。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.182 Q683"
      },
      {
        "id": "ch19_q684",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Alice was (   ) to find out that she had passed the test.",
        "easy_sentence": "Alice was (   ) to find out that she had passed the test.",
        "choices": [
          "pleasant",
          "pleased",
          "pleasing",
          "pleasure"
        ],
        "answer": 1,
        "university": "愛知学院大",
        "translation": "",
        "hint": "分詞形容詞",
        "grammar_point": "pleased「うれしい、喜んで」",
        "explanation": "主語が（人）なので、過去分詞型の形容詞② pleased「（人が）うれしい」が正解。③のpleasingは主語が「（人）に喜びを与える」の意味。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.182 Q684"
      },
      {
        "id": "ch19_q685",
        "type": "4択",
        "difficulty": 3,
        "sentence": "私は後ろ前にTシャツを着ているのがわかって恥ずかしかった。\nI (   ) because I put my T-shirt on backward.",
        "easy_sentence": "私は後ろ前にTシャツを着ているのがわかって恥ずかしかった。\nI (   ) because I put my T-shirt on backward.",
        "choices": [
          "embarrassed",
          "have embarrassed",
          "was embarrassed",
          "was embarrassing"
        ],
        "answer": 2,
        "university": "成城大",
        "translation": "",
        "hint": "分詞形容詞",
        "grammar_point": "embarrassed「（人が）恥ずかしい、ばつが悪い」",
        "explanation": "「私は恥ずかしかった」という意味になるので、主語Iのあとにはbe動詞が必要。主語が（人）なので、過去分詞型のembarrassed「恥ずかしい、ばつが悪い」を用いるので③が正解。④のembarrassingは「（事・物が）恥ずかしい」の意味。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.182 Q685"
      },
      {
        "id": "ch19_q686",
        "type": "4択",
        "difficulty": 3,
        "sentence": "It's quite (   ) that you have already finished your assignment.",
        "easy_sentence": "It's quite (   ) that you have already finished your assignment.",
        "choices": [
          "to be surprising",
          "to be surprised",
          "surprising",
          "surprised"
        ],
        "answer": 2,
        "university": "玉林荘大",
        "translation": "",
        "hint": "分詞形容詞",
        "grammar_point": "surprising「（事・物が）驚くべき」",
        "explanation": "文全体はIt is ... that ～ の形式主語構文。真の主語はthat以下「あなたがもう宿題を終わらせたこと」なので、現在分詞型の形容詞③ surprising「驚くべき」が適する。④ surprisedは「（人が）驚いて」の意味を表す。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.182 Q686"
      },
      {
        "id": "ch19_q687",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The manager didn't look (   ) the performance of the players.",
        "easy_sentence": "The manager didn't look (   ) the performance of the players.",
        "choices": [
          "satisfying",
          "satisfying at",
          "satisfied with",
          "satisfied of"
        ],
        "answer": 2,
        "university": "国士舘大",
        "translation": "",
        "hint": "分詞形容詞",
        "grammar_point": "satisfied with A「（人が）Aに満足している」",
        "explanation": "〈look＋形容詞〉は第2文型(SVC)をとるので、空所に入る形容詞が現在分詞型か過去分詞型かは、be動詞の場合と同様に考えればよい。ここでは主語がThe manager「監督」で（人）なので、過去分詞型のsatisfied「満足している」が適する。「…に満足している」はbe satisfied with ...で表すので、③が正解。現在分詞型のsatisfyingは「満足な」という意味で、〈事・物〉が主語になる。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.182 Q687"
      },
      {
        "id": "ch19_q688",
        "type": "4択",
        "difficulty": 3,
        "sentence": "We apologize that some expressions in our advertisement were (   ) to the readers.",
        "easy_sentence": "We apologize that some expressions in our advertisement were (   ) to the readers.",
        "choices": [
          "confuse",
          "to confuse",
          "confusing",
          "confused"
        ],
        "answer": 2,
        "university": "福岡大",
        "translation": "",
        "hint": "分詞形容詞",
        "grammar_point": "confusing「（人を）混乱させる、わかりにくい」",
        "explanation": "wereの主語であるsome expressions「いくつかの表現」は〈事・物〉で、空所のあとにto the readers「読者を」と〈人〉が続いているので、空所には③ confusing「（人を）混乱させる、わかりにくい」が入る。〈人〉が主語のとき「（人が）混乱した」はconfusedを用いる。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.182 Q688"
      },
      {
        "id": "ch19_q689",
        "type": "4択",
        "difficulty": 3,
        "sentence": "He is the (   ) person we want to talk with about this matter.",
        "easy_sentence": "He is the (   ) person we want to talk with about this matter.",
        "choices": [
          "last",
          "latter",
          "least",
          "most"
        ],
        "answer": 0,
        "university": "宮崎大",
        "translation": "",
        "hint": "意味に注意する形容詞",
        "grammar_point": "the last person＋関係代名詞節 [to do]「最も…しそうにない人」",
        "explanation": "空所の前後にあるthe、personに注目。the last personのあとに関係代名詞節または不定詞句を続けると、「最も…しそうにない人」という意味になる。「話し合いたい最後の人だ」とは「最も話し合いたくない人物だ」ということ。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.183 Q689"
      },
      {
        "id": "ch19_q691",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The population of Yokohama is (   ) than that of Nagoya.",
        "easy_sentence": "The population of Yokohama is (   ) than that of Nagoya.",
        "choices": [
          "many more",
          "more many",
          "larger",
          "farther"
        ],
        "answer": 2,
        "university": "日本大",
        "translation": "",
        "hint": "使い分けに注意する形容詞",
        "grammar_point": "large「（形や数量などが）大きい、多い」",
        "explanation": "population「人口」が「多い」と言うときは、manyではなくlargeを用いるので、③が正解。thatはthe populationのこと。population「人口」が「少ない」はsmallで表す。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.183 Q691"
      },
      {
        "id": "ch19_q692",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Jeff didn't accept the job offer because of the (   ) salary.",
        "easy_sentence": "Jeff didn't accept the job offer because of the (   ) salary.",
        "choices": [
          "cheap",
          "inexpensive",
          "low",
          "weak"
        ],
        "answer": 2,
        "university": "大学入試センター",
        "translation": "",
        "hint": "使い分けに注意する形容詞",
        "grammar_point": "low「（金額が）安い、少ない」",
        "explanation": "because of Aは「Aの理由で」を表す。仕事を断る理由としては給料が「安い」ことが考えられる。salaryが安いことを表す形容詞はlow。「高い」はhighを用いる。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.183 Q692"
      },
      {
        "id": "ch19_q693",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Feel free to call me if you need (   ) information.",
        "easy_sentence": "Feel free to call me if you need (   ) information.",
        "choices": [
          "as far",
          "further",
          "the farthest",
          "the most"
        ],
        "answer": 1,
        "university": "日本大",
        "translation": "",
        "hint": "使い分けに注意する形容詞",
        "grammar_point": "further「さらなる、それ以上の」",
        "explanation": "information「情報」を修飾する形容詞を選ぶ。② furtherには「さらなる、それ以上の」を意味する形容詞の用法があるので、これが正解。farther は距離について「もっと遠い、もっと遠く」、further は程度について「さらに、それ以上の」の意味。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.183 Q693"
      },
      {
        "id": "ch19_q694",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Most (   ) creatures in the sea are affected by pollution.",
        "easy_sentence": "Most (   ) creatures in the sea are affected by pollution.",
        "choices": [
          "lived",
          "alive",
          "livable",
          "living"
        ],
        "answer": 3,
        "university": "東北芸術工科大",
        "translation": "",
        "hint": "使い分けに注意する形容詞",
        "grammar_point": "living「生きている」",
        "explanation": "直後にcreaturesがあることに注目。living creaturesで「生物」。④ livingは名詞を修飾して「生きている」を表す形容詞。② alive「生きて、生存して」→ Q674は補語として用いる形容詞で、名詞の前に置くことはできない。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.184 Q694"
      },
      {
        "id": "ch19_q696",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Thomas is a smart dresser and always wears the (   ) fashions.",
        "easy_sentence": "Thomas is a smart dresser and always wears the (   ) fashions.",
        "choices": [
          "earliest",
          "fastest",
          "latest",
          "most"
        ],
        "answer": 2,
        "university": "学習院大",
        "translation": "",
        "hint": "使い分けに注意する形容詞",
        "grammar_point": "latest「最近の、最新の」",
        "explanation": "「トーマスはおしゃれな人」という意味から、「いつも最新のファッションを身につけている」という意味だと判断する。「最新の」は③ latest。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.184 Q696"
      },
      {
        "id": "ch19_q697",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The (   ) half of the symphony was more beautiful than the former.",
        "easy_sentence": "The (   ) half of the symphony was more beautiful than the former.",
        "choices": [
          "later",
          "late",
          "latter",
          "latest"
        ],
        "answer": 2,
        "university": "関西学院大",
        "translation": "",
        "hint": "使い分けに注意する形容詞",
        "grammar_point": "latter「後者の、後半の」",
        "explanation": "the former half と対になる表現を考える。The（　　）half of the symphonyとthe former (half (of the symphony))が比べられていることに注目。the former half「前半」と対になる表現はthe latter half「後半」。③ latter「後者の、後半の」が正解。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.184 Q697"
      },
      {
        "id": "ch19_q698",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Jack was always kind and (   ) to his servants, and taught his children always to address them with \"please\" and \"thank you.\"",
        "easy_sentence": "Jack was always kind and (   ) to his servants, and taught his children always to address them with \"please\" and \"thank you.\"",
        "choices": [
          "considerate",
          "consider",
          "considering",
          "considerable"
        ],
        "answer": 0,
        "university": "中央大",
        "translation": "",
        "hint": "使い分けに注意する形容詞",
        "grammar_point": "be considerate to[toward/of] …「…に対して思いやりがある」",
        "explanation": "kind and（　　）なので、空所にはkind「親切な」と並列の関係にある形容詞が入る。kindと同じく形容詞で、意味的にもつながるのは、① considerate「思いやりのある、優しい」。be considerate to[toward/of] ...で「…に対して思いやりがある」という意味を表す。④ considerableも形容詞だが、「（数量・大きさなどが）かなりの、相当の」「重要な、考慮すべき」の意味。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.184 Q698"
      },
      {
        "id": "ch19_q699",
        "type": "4択",
        "difficulty": 3,
        "sentence": "These days gasoline prices remain very high, and so (   ) cars are getting more and more popular.",
        "easy_sentence": "These days gasoline prices remain very high, and so (   ) cars are getting more and more popular.",
        "choices": [
          "economic",
          "economical",
          "explosive",
          "expensive"
        ],
        "answer": 1,
        "university": "鎌倉女子大",
        "translation": "",
        "hint": "使い分けに注意する形容詞",
        "grammar_point": "economical「経済的な、徳用の」",
        "explanation": "economicとeconomicalの使い分けに注意。and soは「それで」の意味。その前にある「ガソリン価格が非常に高い」を受けて「それで（　　）な車が人気になってきている」のだから、「経済的な、徳用の」の意味の形容詞② economicalが正解。an economical carで「燃費のよい車」の意味になる。① economicでは「経済の、経済学の」の意味になってしまう。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.184 Q699"
      },
      {
        "id": "ch19_q700",
        "type": "4択",
        "difficulty": 3,
        "sentence": "上の文を参考にして、下の文を完成させなさい。\nNo one has ever come across a unicorn.\nA unicorn is an (   ) animal.",
        "easy_sentence": "上の文を参考にして、下の文を完成させなさい。\nNo one has ever come across a unicorn.\nA unicorn is an (   ) animal.",
        "choices": [
          "imaginable",
          "imaginary",
          "imaginative",
          "image"
        ],
        "answer": 1,
        "university": "駒澤大",
        "translation": "",
        "hint": "使い分けに注意する形容詞",
        "grammar_point": "imaginary「想像上の、架空の」",
        "explanation": "上の文は「ユニコーンに遭遇した人は誰もいない」、下の文は「ユニコーンは（　　）の動物だ」という意味。名詞animalの前には「想像上の、架空の」の意味になる② imaginaryを入れる。① imaginableは「想像できる、考えられる限りの」、③ imaginativeは「想像力に富んだ、独創的な」の意味。④ imageは「像・印象」の意味の名詞。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.184 Q700"
      },
      {
        "id": "ch19_q701",
        "type": "4択",
        "difficulty": 3,
        "sentence": "上の文を参考にして、下の文を完成させなさい。\nHe has spent ten hours a day trying to find a cure for cancer.\nHe is (   ) in finding a cure for cancer.",
        "easy_sentence": "上の文を参考にして、下の文を完成させなさい。\nHe has spent ten hours a day trying to find a cure for cancer.\nHe is (   ) in finding a cure for cancer.",
        "choices": [
          "industrial",
          "indecent",
          "industrious",
          "incredible"
        ],
        "answer": 2,
        "university": "駒澤大",
        "translation": "",
        "hint": "使い分けに注意する形容詞",
        "grammar_point": "industrious「勤勉な」",
        "explanation": "下の文は「彼はガンの治療法を探すことに（　　）だ」の意味。「彼はガンの治療法を探すことに1日10時間費やしている」と上の文にあるのだから、空所には「勤勉な」の意味を表す③ industriousが入る。① industrialは「産業の、工業の」の意味になる。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.184 Q701"
      },
      {
        "id": "ch19_q702",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Although \"Titanic\" was very expensive to make, it is one of the most (   ) films ever made.",
        "easy_sentence": "Although \"Titanic\" was very expensive to make, it is one of the most (   ) films ever made.",
        "choices": [
          "successful",
          "succeeding",
          "successive",
          "successional"
        ],
        "answer": 0,
        "university": "名城大",
        "translation": "",
        "hint": "使い分けに注意する形容詞",
        "grammar_point": "successful「成功した、うまくいった」",
        "explanation": "succeedから派生した形容詞の使い分けに注意。「『タイタニック』は制作にとても費用がかかったが、これまで制作された映画の中で最も（　　）映画の一つだ」という意味。空所には「成功した、うまくいった」の意味の① successfulを入れる。② succeedingは「続いて起こる、次の」、③ successiveは「連続的な、一連の」、④ successionalは「連続的な」の意味。",
        "engage_source": "Engage Ch.19 形容詞の語法 Sec.184 Q702"
      },
      {
        "id": "ch20_q703",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I bought that book three weeks (   ).",
        "easy_sentence": "I bought that book three weeks (   ).",
        "choices": [
          "before",
          "ago",
          "since",
          "previous"
        ],
        "answer": 1,
        "university": "東北芸術工科大",
        "translation": "",
        "hint": "ago/beforeの使い分け",
        "grammar_point": "... ago「（今から）…前に」",
        "explanation": "今からさかのぼって「…前に」は ... agoを使って表す。... agoは過去時制で用いる。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.185 Q703"
      },
      {
        "id": "ch20_q704",
        "type": "4択",
        "difficulty": 1,
        "sentence": "The lady was not really a stranger to me. I had met her once (   ).",
        "easy_sentence": "The lady was not really a stranger to me. I had met her once (   ).",
        "choices": [
          "before",
          "ago",
          "all",
          "again"
        ],
        "answer": 0,
        "university": "明治大",
        "translation": "",
        "hint": "ago/beforeの使い分け",
        "grammar_point": "before「（今よりも）前に、（過去のある時点からも）前に」",
        "explanation": "空所の前にある動詞はhad metと過去完了形になっている。1文目に「その女性は、実は見知らぬ人ではなかった」とある。2文目では、過去完了が用いられ、前文が表す過去の時よりも前のことを表している。過去のある時点よりも前の「前に」は① beforeで表す。beforeは過去完了の文で用いることができる。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.185 Q704"
      },
      {
        "id": "ch20_q705",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I'm afraid I'm not hungry. I've (   ) eaten lunch.",
        "easy_sentence": "I'm afraid I'm not hungry. I've (   ) eaten lunch.",
        "choices": [
          "already",
          "never",
          "often",
          "still"
        ],
        "answer": 0,
        "university": "日本福祉大",
        "translation": "",
        "hint": "already/still/yetの使い分け",
        "grammar_point": "already「もう」",
        "explanation": "1文目に「あいにく私はおなかがすいていません」と言っているので、2文目は「もう昼食を食べてしまった」という内容だと判断できる。現在完了の肯定文で「もう」は、① alreadyで表す。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.186 Q705"
      },
      {
        "id": "ch20_q706",
        "type": "4択",
        "difficulty": 1,
        "sentence": "You're leaving next month. Have you written to your homestay family (   )?",
        "easy_sentence": "You're leaving next month. Have you written to your homestay family (   )?",
        "choices": [
          "yet",
          "right now",
          "so soon",
          "still"
        ],
        "answer": 0,
        "university": "摂南大",
        "translation": "",
        "hint": "already/still/yetの使い分け",
        "grammar_point": "yet「もう」",
        "explanation": "現在完了を使った肯定疑問文なので、「もう…に手紙を書きましたか」という意味になるよう① yet「もう」を入れる。疑問文で用いるyetは「もう…しましたか」の意味。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.186 Q706"
      },
      {
        "id": "ch20_q707",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I'd like to buy my own car, but I don't have enough money (   ).",
        "easy_sentence": "I'd like to buy my own car, but I don't have enough money (   ).",
        "choices": [
          "already",
          "yet",
          "then",
          "although"
        ],
        "answer": 1,
        "university": "南山大",
        "translation": "",
        "hint": "already/still/yetの使い分け",
        "grammar_point": "not ... yet「まだ…ない」",
        "explanation": "I don't have ... と否定文なので、「まだ十分なお金を持っていない」となるよう② yetを入れる。not ... yetで「まだ…ない」の意味。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.186 Q707"
      },
      {
        "id": "ch20_q708",
        "type": "4択",
        "difficulty": 1,
        "sentence": "It's (   ) dark; the sun hasn't risen yet.",
        "easy_sentence": "It's (   ) dark; the sun hasn't risen yet.",
        "choices": [
          "getting",
          "still",
          "already",
          "finally"
        ],
        "answer": 1,
        "university": "東邦大",
        "translation": "",
        "hint": "still/alreadyの使い分け",
        "grammar_point": "still「まだ、今でも」",
        "explanation": "セミコロン以下に「太陽はまだ昇っていない」とあるので、時間帯は日の出の前だとわかる。つまり「暗い」状態がずっと続いているので、空所には② still「まだ」を入れる。stillは「まだ、今でも」という〈継続〉の意味を表す。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.187 Q708"
      },
      {
        "id": "ch20_q709",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I'm sleepy because I could (   ) sleep last night.",
        "easy_sentence": "I'm sleepy because I could (   ) sleep last night.",
        "choices": [
          "always",
          "usually",
          "often",
          "hardly"
        ],
        "answer": 3,
        "university": "目白大",
        "translation": "",
        "hint": "程度を表す副詞",
        "grammar_point": "hardly「ほとんど…ない」（程度）",
        "explanation": "昨夜ほとんど眠れなかったので、私は眠い。④ hardlyは「ほとんど…ない」という否定的な意味を表す副詞。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.187 Q709"
      },
      {
        "id": "ch20_q710",
        "type": "4択",
        "difficulty": 1,
        "sentence": "I don't know anything about him because he (   ) talks about himself.",
        "easy_sentence": "I don't know anything about him because he (   ) talks about himself.",
        "choices": [
          "always",
          "frequently",
          "seldom",
          "usually"
        ],
        "answer": 2,
        "university": "金沢工業大",
        "translation": "",
        "hint": "頻度を表す副詞",
        "grammar_point": "seldom「めったに…ない」（頻度）",
        "explanation": "私は彼のことを何も知らない。それというのも彼は自分のことをめったに話さないからだ。③ seldomは「めったに…ない」という否定的な意味を表す頻度の副詞。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.187 Q710"
      },
      {
        "id": "ch20_q711",
        "type": "4択",
        "difficulty": 1,
        "sentence": "A：I wouldn't say I don't watch TV, but I prefer listening to music.\nB：Me too. I hardly (   ) watch TV these days.",
        "easy_sentence": "A：I wouldn't say I don't watch TV, but I prefer listening to music.\nB：Me too. I hardly (   ) watch TV these days.",
        "choices": [
          "always",
          "ever",
          "often",
          "sometimes"
        ],
        "answer": 1,
        "university": "学習院大",
        "translation": "",
        "hint": "程度・頻度を表す副詞",
        "grammar_point": "hardly ever「ほとんど…ない、めったに…ない」",
        "explanation": "A：テレビを見ないとは言いませんが、私は音楽を聴くほうが好きです。B：私もです。このごろはテレビをほとんど見ません。hardly everは「ほとんど…ない、めったに…ない」の意味。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.187 Q711"
      },
      {
        "id": "ch20_q712",
        "type": "4択",
        "difficulty": 1,
        "sentence": "When we visited the river, it was dry and there was (   ) any water in it.",
        "easy_sentence": "When we visited the river, it was dry and there was (   ) any water in it.",
        "choices": [
          "almost",
          "hardly",
          "little",
          "mostly"
        ],
        "answer": 1,
        "university": "東京経済大",
        "translation": "",
        "hint": "程度を表す副詞",
        "grammar_point": "hardly any「ほとんど…ない」",
        "explanation": "私たちが川を訪れたとき、それは干上がっていて、川に水はほとんどなかった。② hardly any waterで「ほとんど水がない」の意味。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.187 Q712"
      },
      {
        "id": "ch20_q713",
        "type": "4択",
        "difficulty": 2,
        "sentence": "A：I (   ) missed the train.\nB：I am glad you made it.",
        "easy_sentence": "A：I (   ) missed the train.\nB：I am glad you made it.",
        "choices": [
          "finally",
          "most",
          "indeed",
          "almost"
        ],
        "answer": 3,
        "university": "鹿児島大",
        "translation": "",
        "hint": "almostの用法",
        "grammar_point": "almost＋動詞「…しそうになる」",
        "explanation": "Bが you made it「あなたが間に合った」と言っているので、Aは電車に乗り遅れなかったとわかる。〈almost＋動詞〉で「…しそうになる」を表すので、④が正解。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.188 Q713"
      },
      {
        "id": "ch20_q714",
        "type": "4択",
        "difficulty": 2,
        "sentence": "My muscles hurt so much that I could (   ) get out of bed.",
        "easy_sentence": "My muscles hurt so much that I could (   ) get out of bed.",
        "choices": [
          "barely",
          "comfortably",
          "plainly",
          "surely"
        ],
        "answer": 0,
        "university": "立命館大",
        "translation": "",
        "hint": "程度を表す副詞",
        "grammar_point": "barely「かろうじて、ほとんど…ない」（程度）",
        "explanation": "筋肉がひどく痛んだので、私はベッドから出るのがやっとだった。① barelyは「かろうじて、ほとんど…ない」という意味を表す。barelyは、hardlyやscarcelyよりも否定の意味が弱く、この文で言えば、「ほとんどベッドから出られない状態だったが、かろうじて出られた」の意味。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.188 Q714"
      },
      {
        "id": "ch20_q715",
        "type": "4択",
        "difficulty": 2,
        "sentence": "I can't go to the meeting tomorrow. Susan told me you can't (   ).",
        "easy_sentence": "I can't go to the meeting tomorrow. Susan told me you can't (   ).",
        "choices": [
          "too",
          "neither",
          "either",
          "also"
        ],
        "answer": 2,
        "university": "芝浦工業大",
        "translation": "",
        "hint": "also/too/eitherの使い分け",
        "grammar_point": "either「…も（…ない）」",
        "explanation": "否定文で「…もまた」はeitherを使う。can't eitherで「…もまた行けない」の意味。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.188 Q715"
      },
      {
        "id": "ch20_q716",
        "type": "4択",
        "difficulty": 2,
        "sentence": "A：Michael, I don't want to go shopping in this heat.\nB：Me (   ).",
        "easy_sentence": "A：Michael, I don't want to go shopping in this heat.\nB：Me (   ).",
        "choices": [
          "either",
          "neither",
          "too",
          "also"
        ],
        "answer": 1,
        "university": "南山大",
        "translation": "",
        "hint": "neitherの用法",
        "grammar_point": "neither「…も（…ない）」",
        "explanation": "A：マイケル、この暑い中私は買い物に行きたくないわ。B：僕もだよ。Me neitherは「私も（…ない）」の意味を表す口語表現。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.188 Q716"
      },
      {
        "id": "ch20_q717",
        "type": "4択",
        "difficulty": 2,
        "sentence": "As it is old, I can't wear this sweater (   ).",
        "easy_sentence": "As it is old, I can't wear this sweater (   ).",
        "choices": [
          "any more",
          "some more",
          "any",
          "less than"
        ],
        "answer": 0,
        "university": "九州産業大",
        "translation": "",
        "hint": "any moreの用法",
        "grammar_point": "not ... any more「もう…ない」",
        "explanation": "古いので、私はこのセーターをもう着られない。not ... any moreで「もう…ない」の意味。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.188 Q717"
      },
      {
        "id": "ch20_q718",
        "type": "4択",
        "difficulty": 2,
        "sentence": "The service is unique and has no counterpart (   ) in the world.",
        "easy_sentence": "The service is unique and has no counterpart (   ) in the world.",
        "choices": [
          "what",
          "anywhere",
          "everywhere",
          "where"
        ],
        "answer": 1,
        "university": "専修大",
        "translation": "",
        "hint": "副詞の用法",
        "grammar_point": "anywhere「どこにも（…ない）」",
        "explanation": "counterpartは「同等のもの」の意味。has no counterpartなので「同等のものはない」の意味になる。空所のあとのin the worldと組んで「世界のどこにも（…ない）」の意味にするには、② anywhereを用いる。否定的な文脈で「どこにも（…ない）」はanywhereを用いて表す。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.190 Q718"
      },
      {
        "id": "ch20_q720",
        "type": "4択",
        "difficulty": 2,
        "sentence": "He got (   ) from work late at night.",
        "easy_sentence": "He got (   ) from work late at night.",
        "choices": [
          "house",
          "to home",
          "home",
          "to house"
        ],
        "answer": 2,
        "university": "駒澤大",
        "translation": "",
        "hint": "名詞と間違えやすい副詞",
        "grammar_point": "home「家へ」",
        "explanation": "「家へ」はhomeという副詞で表す。前置詞toは不要。③ homeが正解。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.190 Q720"
      },
      {
        "id": "ch20_q722",
        "type": "4択",
        "difficulty": 3,
        "sentence": "The construction of the new shopping mall is (   ) finished.",
        "easy_sentence": "The construction of the new shopping mall is (   ) finished.",
        "choices": [
          "seldom",
          "usually",
          "nearly",
          "near"
        ],
        "answer": 2,
        "university": "大阪大谷大",
        "translation": "",
        "hint": "nearly/near/nearbyの使い分け",
        "grammar_point": "nearly「ほとんど、もう少しで」",
        "explanation": "新しいショッピングモールの建設はほぼ完成している。③ nearlyは「ほとんど、もう少しで」の意味の副詞。④ nearは「近くに」の意味。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.191 Q722"
      },
      {
        "id": "ch20_q723",
        "type": "4択",
        "difficulty": 3,
        "sentence": "My boss has been too busy (   ) to deal with the problem.",
        "easy_sentence": "My boss has been too busy (   ) to deal with the problem.",
        "choices": [
          "lately",
          "later",
          "of lately",
          "late"
        ],
        "answer": 0,
        "university": "東京工芸大",
        "translation": "",
        "hint": "形が似ている副詞の使い分け",
        "grammar_point": "lately / of late / late / later「最近」/「最近」/「遅く」/「あとで」",
        "explanation": "too ... to doは「～するには…すぎる、…すぎて～できない」の構文。「私の上司は、（　　）ずっと忙しすぎて、その問題に対処できていない」の意味。空所に入れて、文意が通るのは① lately「最近」のみ。② laterは「あとで」、③はof lateなら「最近」、④ lateは「遅く」の意味。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.192 Q723"
      },
      {
        "id": "ch20_q724",
        "type": "4択",
        "difficulty": 3,
        "sentence": "His lecture was so difficult that we (   ) understand it.",
        "easy_sentence": "His lecture was so difficult that we (   ) understand it.",
        "choices": [
          "could hard",
          "couldn't hard",
          "could hardly",
          "couldn't hardly"
        ],
        "answer": 2,
        "university": "獨協医科大",
        "translation": "",
        "hint": "形が似ている副詞の使い分け",
        "grammar_point": "hard / hardly「熱心に」/「ほとんど…ない」",
        "explanation": "so ... that ～は「とても…なので～」の構文。「彼の講義はとても難しかったのだから、「私たちは理解できなかった」という内容にする。副詞のhardは「熱心に」、hardlyは「ほとんど…ない」(→ Q709) の意味なので、hardlyを用いる。hardlyはnotとともには用いられないので、③が正解。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.192 Q724"
      },
      {
        "id": "ch20_q725",
        "type": "4択",
        "difficulty": 3,
        "sentence": "(   ), he did not pass the examination in spite of his efforts.",
        "easy_sentence": "(   ), he did not pass the examination in spite of his efforts.",
        "choices": [
          "Uneasily",
          "Unfortunately",
          "Uniquely",
          "Unwillingly"
        ],
        "answer": 1,
        "university": "九州ルーテル学院大",
        "translation": "",
        "hint": "文修飾の副詞",
        "grammar_point": "Unfortunately「不運にも、残念ながら」",
        "explanation": "残念ながら、彼は努力をしたにもかかわらずその試験に合格しなかった。② Unfortunatelyは「不運にも、残念ながら」の意味で、文全体を修飾する副詞。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.192 Q725"
      },
      {
        "id": "ch20_q726",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Kate loves candy. (   ), she was told not to eat any sweets for a while.",
        "easy_sentence": "Kate loves candy. (   ), she was told not to eat any sweets for a while.",
        "choices": [
          "Additionally",
          "Besides",
          "However",
          "Moreover"
        ],
        "answer": 2,
        "university": "武蔵大",
        "translation": "",
        "hint": "文と文をつなぐ副詞（逆接）",
        "grammar_point": "However「しかしながら」",
        "explanation": "ケイトはキャンディーが大好きだ。しかしながら彼女はしばらくの間、甘いものは何も食べないように言われた。③ Howeverは「しかしながら」の意味で、逆接を表す副詞。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.193 Q726"
      },
      {
        "id": "ch20_q727",
        "type": "4択",
        "difficulty": 3,
        "sentence": "I have to charge my mobile phone. (   ), it will go dead in ten minutes.",
        "easy_sentence": "I have to charge my mobile phone. (   ), it will go dead in ten minutes.",
        "choices": [
          "Besides",
          "Consequently",
          "Otherwise",
          "Then"
        ],
        "answer": 2,
        "university": "専修大",
        "translation": "",
        "hint": "文と文をつなぐ副詞",
        "grammar_point": "Otherwise「さもないと」",
        "explanation": "私の携帯電話を充電しなければならない。さもないとあと10分で電池が切れてしまうだろう。③ Otherwiseは「さもないと」の意味。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.193 Q727"
      },
      {
        "id": "ch20_q728",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Don't cling to old-fashioned concepts. (   ), adopt new ideas.",
        "easy_sentence": "Don't cling to old-fashioned concepts. (   ), adopt new ideas.",
        "choices": [
          "Otherwise",
          "Instead",
          "In spite",
          "Except"
        ],
        "answer": 1,
        "university": "福岡大",
        "translation": "",
        "hint": "文と文をつなぐ副詞（代用）",
        "grammar_point": "Instead「その代わりに、そうではなく」",
        "explanation": "1文目には「古めかしい概念に固執してはいけない」とあり、2文目の空所のあとには「新しい考えを採用しなさい」と続くので、空所には「その代わりに、そうではなく」の意味を表す② Insteadを入れる。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.193 Q728"
      },
      {
        "id": "ch20_q730",
        "type": "4択",
        "difficulty": 3,
        "sentence": "Last summer was not very hot. (   ), the number of people visiting the swimming pool decreased.",
        "easy_sentence": "Last summer was not very hot. (   ), the number of people visiting the swimming pool decreased.",
        "choices": [
          "Consequently",
          "In addition",
          "Instead",
          "Nevertheless"
        ],
        "answer": 0,
        "university": "芝浦工業大",
        "translation": "",
        "hint": "文と文をつなぐ副詞（結果）",
        "grammar_point": "Consequently「その結果」",
        "explanation": "空所の前には「この前の夏はそんなに暑くなかった」とあり、空所のあとには「スイミングプールを訪れた人の数は減った」と続くので、空所には「その結果」を表す① Consequentlyを入れる。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.193 Q730"
      },
      {
        "id": "ch20_q731",
        "type": "4択",
        "difficulty": 3,
        "sentence": "What you said was true; (   ), it was unkind.",
        "easy_sentence": "What you said was true; (   ), it was unkind.",
        "choices": [
          "forever",
          "nevertheless",
          "fortunately",
          "instantly"
        ],
        "answer": 1,
        "university": "大阪経済大",
        "translation": "",
        "hint": "文と文をつなぐ副詞（逆接）",
        "grammar_point": "nevertheless「それにもかかわらず、とは言っても」",
        "explanation": "空所の前には「あなたが言ったことは真実だった」とあり、空所のあとには「それは思いやりがなかった」と続くので、空所には「それにもかかわらず、とは言っても」を表す② neverthelessを入れる。",
        "engage_source": "Engage Ch.20 副詞の語法 Sec.193 Q731"
      }
    ]
  }
];
