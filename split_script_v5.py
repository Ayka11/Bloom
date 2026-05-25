import re

with open('full_script.js', 'r') as f:
    script_content = f.read()

# Define constants
const_names = ['SVGS', 'flowers', 'cats', 'seasonMeta', 'glossary']
data_content = ""
app_content = script_content

for name in const_names:
    if name == 'SVGS':
        pattern = rf'const {name}\s*=\s*{{.*?}};'
    else:
        pattern = rf'const {name}\s*=\s*\[.*?\];'

    match = re.search(pattern, app_content, re.DOTALL)
    if match:
        matched = match.group(0)
        data_content += matched + "\n\n"
        app_content = app_content.replace(matched, "")

# Cleanup tags
app_content = app_content.replace('<script>', '').replace('</script>', '')

with open('bloom-data.js', 'w') as f:
    f.write(data_content.strip())

with open('bloom-app.js', 'w') as f:
    f.write(app_content.strip())
