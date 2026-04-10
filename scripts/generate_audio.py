"""
MP3音声一括生成スクリプト
data.js から全問題の完成英文を抽出し、edge-tts で MP3 を生成する。
出力先: ../audio/ 以下に ch01_q001.mp3 のような命名で保存。
"""

import asyncio
import json
import os
import re
import sys

# edge-tts
import edge_tts

# 設定
VOICE = "en-US-AriaNeural"  # 高品質な女性の英語音声
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "audio")
DATA_JS_PATH = os.path.join(os.path.dirname(__file__), "..", "js", "data.js")

def extract_questions_from_data_js():
    """data.js から MOCK_DATA を読み込み、問題IDと完成英文のリストを返す"""
    with open(DATA_JS_PATH, "r", encoding="utf-8") as f:
        content = f.read()
    
    # "const MOCK_DATA = " の後のJSONを抽出
    match = re.search(r'const MOCK_DATA\s*=\s*(\[.*\]);', content, re.DOTALL)
    if not match:
        print("ERROR: MOCK_DATA が見つかりません")
        sys.exit(1)
    
    data = json.loads(match.group(1))
    
    questions = []
    for day in data:
        for q in day["questions"]:
            # choices が無い問題はスキップ
            if not q.get("choices") or q["answer"] is None:
                continue
            
            # 完成英文を作成: (   ) を正解で置換
            sentence = q["sentence"]
            correct_answer = q["choices"][q["answer"]]
            
            # (   ) や ( ... ) のパターンを正解で置換
            completed = re.sub(r'\(\s+\)', correct_answer, sentence)
            # "\\n" を空白に
            completed = completed.replace("\\n", " ").replace('\\"', '"')
            # 余分な空白を整理
            completed = re.sub(r'\s+', ' ', completed).strip()
            
            questions.append({
                "id": q["id"],
                "sentence": completed
            })
    
    return questions


async def generate_audio(question_id, text, semaphore):
    """1つの問題に対してMP3を生成"""
    output_path = os.path.join(OUTPUT_DIR, f"{question_id}.mp3")
    
    # 既に存在する場合はスキップ
    if os.path.exists(output_path):
        return f"SKIP: {question_id}"
    
    async with semaphore:
        try:
            communicate = edge_tts.Communicate(text, VOICE, rate="-10%")
            await communicate.save(output_path)
            return f"OK: {question_id}"
        except Exception as e:
            return f"ERROR: {question_id} - {str(e)}"


async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    questions = extract_questions_from_data_js()
    print(f"合計 {len(questions)} 問の音声を生成します...")
    print(f"出力先: {os.path.abspath(OUTPUT_DIR)}")
    print(f"音声: {VOICE}")
    print()
    
    # 同時接続数を制限（10並列）
    semaphore = asyncio.Semaphore(10)
    
    tasks = [generate_audio(q["id"], q["sentence"], semaphore) for q in questions]
    
    results = await asyncio.gather(*tasks)
    
    ok_count = sum(1 for r in results if r.startswith("OK"))
    skip_count = sum(1 for r in results if r.startswith("SKIP"))
    error_count = sum(1 for r in results if r.startswith("ERROR"))
    
    print(f"\n=== 完了 ===")
    print(f"生成: {ok_count}, スキップ: {skip_count}, エラー: {error_count}")
    
    # エラーがあれば表示
    for r in results:
        if r.startswith("ERROR"):
            print(r)


if __name__ == "__main__":
    asyncio.run(main())
