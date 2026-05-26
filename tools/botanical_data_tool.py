import json
import csv
import sys
import os

def import_csv(csv_path, json_path):
    if not os.path.exists(csv_path):
        print(f"Error: {csv_path} not found")
        return

    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        new_species = list(reader)

    # Process nested fields
    for s in new_species:
        if 'tags' in s:
            s['tags'] = [t.strip() for t in s['tags'].split(',')]
        if 'care_water' in s:
            s['care'] = {
                'water': s.pop('care_water'),
                'sun': s.pop('care_sun', 'Full sun'),
                'soil': s.pop('care_soil', 'Well-drained'),
                'diff': s.pop('care_diff', 'Medium')
            }

    current_data = []
    if os.path.exists(json_path):
        with open(json_path, 'r', encoding='utf-8') as f:
            current_data = json.load(f)

    # Merge
    ids = {s['id'] for s in current_data}
    for s in new_species:
        if s['id'] not in ids:
            current_data.append(s)
            ids.add(s['id'])

    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(current_data, f, indent=2)
    print(f"Imported {len(new_species)} species into {json_path}")

def optimize_json(json_path):
    if not os.path.exists(json_path): return
    with open(json_path, 'r') as f:
        data = json.load(f)
    data.sort(key=lambda x: x['id'])
    with open(json_path, 'w') as f:
        json.dump(data, f, indent=2)
    print(f"Optimized {json_path}")

if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else ""
    if cmd == "import-csv":
        import_csv(sys.argv[2], sys.argv[3])
    elif cmd == "optimize":
        optimize_json(sys.argv[2])
    else:
        print("Usage: botanical_data_tool.py [import-csv|optimize] ...")
