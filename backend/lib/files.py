import json


def get_json(name_file):
    with open(name_file, 'r', encoding='UTF-8') as f:
        return json.load(f)
