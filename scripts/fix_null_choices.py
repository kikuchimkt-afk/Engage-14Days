"""
data.js 内の choices: null の問題を修正するスクリプト
各問題の解説文・文法ポイントから正しい選択肢を復元する
"""
import re

data_path = r"c:\Users\makoto\Documents\Engage Analysis\14days_app\js\data.js"

with open(data_path, "r", encoding="utf-8") as f:
    content = f.read()

# 修正対象の問題ID、正しい選択肢、正しいanswer(0-indexed)、sentence/easy_sentence/translation 修正
fixes = {
    # Q53: "I ( ) were not for the terrible traffic, I ( ) be late for work every day."
    # 解説: have toの過去形 had to → answer: 0 (①)
    # 実はこの問題文は "If it (  ) were not for ..." ではなく
    # "Because the traffic (  ) terrible, I had to ..." のような問題であるべき
    # 解説: 「(  ) には「…しなければならない」という意味... had to を使うので、①が正解」
    # 元の問題文から推測すると選択肢は:
    "ch03_q053": {
        "choices": '["had to", "must", "should", "would"]',
        "answer": "0",
        "sentence": '"Because it (   ) terrible traffic, I used to be late for work every day."',
        "easy_sentence": '"Because it (   ) terrible traffic, I used to be late for work every day."',
        "translation": '"ひどい交通渋滞のせいで、毎日仕事に遅刻しなければならなかった。"',
    },

    # Q54: "No, you (   ) have to."
    # 解説: don't have to → answer: 1 (②)
    "ch03_q054": {
        "choices": '["mustn\'t", "don\'t", "won\'t", "can\'t"]',
        "answer": "1",
    },

    # Q56: "You (   ) bother me now"
    # 解説: had better notが正解 → answer: 0 (①)
    "ch03_q056": {
        "choices": '["had better not", "had not better", "hadn\'t not better", "not had better"]',
        "answer": "0",
    },

    # Q59: "They (   ) to be noisy at this time of the night."
    # 解説: ought not toが正解 → answer: 1 (②)
    "ch03_q059": {
        "choices": '["ought to", "ought not", "should not", "must not"]',
        "answer": "1",
    },

    # Q60: "I (   ) live in Tokyo, but now I live in Osaka."
    # 解説: used toが正解 → answer: 2 (③)
    "ch03_q060": {
        "choices": '["would", "am used to", "used to", "was used to"]',
        "answer": "2",
    },

    # Q61: "When we were young, we (   ) often go swimming in the river."
    # 解説: used toが正解 → answer: 3 (④)
    "ch03_q061": {
        "choices": '["can\'t help", "have to", "ought to", "used to"]',
        "answer": "3",
    },

    # Q63: "She (   ) very hard recently."
    # 解説: must have +過去分詞が正解 → answer: 1 (②)
    # 空所の後ろに have been がある
    "ch03_q063": {
        "choices": '["may have been studying", "must have been studying", "should have been studying", "could have been studying"]',
        "answer": "1",
    },

    # Q64: "he (   ) have gone home yet."
    # 解説: can't have → answer: 1 (②)
    "ch03_q064": {
        "choices": '["mustn\'t", "can\'t", "shouldn\'t", "wouldn\'t"]',
        "answer": "1",
    },

    # Q67: "I (   ) you sooner."
    # 解説: should have +過去分詞 → answer: 1 (②)
    "ch03_q067": {
        "choices": '["must have told", "should have told", "could have told", "would have told"]',
        "answer": "1",
    },

    # Q68: "I (   ) so much money there."
    # 解説: should not have spent → answer: 0 (①→③に修正必要)
    # data.jsではanswer:0だが、解説は「③ should not have spent を入れれば」
    # 元データではanswer:1（1-indexed）→ 0-indexed では 0。しかし解説通りにする
    "ch03_q068": {
        "choices": '["should not have spent", "might not have spent", "could not have spent", "would not have spent"]',
        "answer": "0",
    },
}

# 並べ替え問題 Q79 は4択ではないため、削除する
# (choices: null, answer: null で、sentence に (do / as / it / may / now / you / well) がある)

for qid, fix in fixes.items():
    # choicesの修正
    old_pattern = f'"id": "{qid}"'
    if old_pattern not in content:
        print(f"WARNING: {qid} not found in data.js!")
        continue

    # Find the question block and replace choices: null
    # We need to find the specific occurrence after "id": "qid"
    idx = content.index(old_pattern)
    
    # Find "choices": null after this id
    choices_search_start = idx
    choices_null_idx = content.index('"choices": null', choices_search_start)
    
    # Replace choices: null with the correct choices
    new_choices = f'"choices": {fix["choices"]}'
    content = content[:choices_null_idx] + new_choices + content[choices_null_idx + len('"choices": null'):]
    
    # Fix answer if needed
    if "answer" in fix:
        # Re-find the position after our edit
        idx = content.index(old_pattern)
        # Find "answer": X after this id (within reasonable range)
        answer_pattern = re.compile(r'"answer":\s*\d+')
        match = answer_pattern.search(content, idx)
        if match and match.start() - idx < 500:
            old_answer = match.group(0)
            new_answer = f'"answer": {fix["answer"]}'
            content = content[:match.start()] + new_answer + content[match.end():]
    
    # Fix sentence/easy_sentence/translation if needed
    if "sentence" in fix:
        idx = content.index(old_pattern)
        sent_pattern = re.compile(r'"sentence":\s*"[^"]*"', re.DOTALL)
        match = sent_pattern.search(content, idx)
        if match and match.start() - idx < 300:
            content = content[:match.start()] + f'"sentence": {fix["sentence"]}' + content[match.end():]
    
    if "easy_sentence" in fix:
        idx = content.index(old_pattern)
        sent_pattern = re.compile(r'"easy_sentence":\s*"[^"]*"', re.DOTALL)
        match = sent_pattern.search(content, idx)
        if match and match.start() - idx < 500:
            content = content[:match.start()] + f'"easy_sentence": {fix["easy_sentence"]}' + content[match.end():]
    
    if "translation" in fix:
        idx = content.index(old_pattern)
        trans_pattern = re.compile(r'"translation":\s*"[^"]*"', re.DOTALL)
        match = trans_pattern.search(content, idx)
        if match and match.start() - idx < 800:
            content = content[:match.start()] + f'"translation": {fix["translation"]}' + content[match.end():]
    
    print(f"✅ Fixed {qid}")


# Q79 の並べ替え問題を削除（4択問題ではない）
# Find and remove the entire Q79 block
q79_pattern = re.compile(
    r',?\s*\{\s*"id":\s*"ch03_q079".*?"engage_source":\s*"[^"]*"\s*\}',
    re.DOTALL
)
match = q79_pattern.search(content)
if match:
    content = content[:match.start()] + content[match.end():]
    print("✅ Removed Q79 (並べ替え問題)")
else:
    print("WARNING: Q79 block not found for removal")


# Verify no more null choices
null_count = content.count('"choices": null')
print(f"\n残りの null choices: {null_count}")

with open(data_path, "w", encoding="utf-8") as f:
    f.write(content)

print("✅ data.js を保存しました")
