import json

data_path = r"c:\Users\makoto\Documents\Engage Analysis\14days_app\js\data.js"

with open(data_path, "r", encoding="utf-8") as f:
    content = f.read()

# Count raw strings
print(f"null choices count: {content.count('choices: null') + content.count('\"choices\": null')}")

# Parse JSON
json_start = content.index("[")
json_end = content.rindex("]") + 1
json_str = content[json_start:json_end]

data = json.loads(json_str)
print(f"JSON parse: OK")
print(f"Days: {len(data)}")

total_q = 0
issues = []
for day in data:
    for q in day["questions"]:
        total_q += 1
        qid = q.get("id", "?")
        if q.get("choices") is None:
            issues.append(f"  NULL choices: {qid}")
        elif not isinstance(q["choices"], list) or len(q["choices"]) == 0:
            issues.append(f"  Empty/invalid choices: {qid}")
        if q.get("answer") is None:
            issues.append(f"  NULL answer: {qid}")
        blanks = q.get("sentence", "").count("(   )")
        if blanks > 1:
            issues.append(f"  Multi-blank ({blanks}): {qid}")

print(f"Total questions: {total_q}")
if issues:
    print(f"\n⚠️ Issues found ({len(issues)}):")
    for iss in issues:
        print(iss)
else:
    print("✅ No issues found!")
