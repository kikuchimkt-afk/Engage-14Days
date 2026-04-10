import re

path = 'c:/Users/makoto/Documents/Engage Analysis/14days_app/js/app.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# playAudio('${completedSentencePlain.replace(...)}') を playAudio('${qData.id}') に置換
old_pattern = r"playAudio\('\$\{completedSentencePlain\.replace\([^)]+\)\}'\)"
new_text = "playAudio('${qData.id}')"

content_new = re.sub(old_pattern, new_text, content)

count = len(re.findall(old_pattern, content)) 
print(f"Found {count} occurrences")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content_new)

print("Done")
