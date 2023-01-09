from flask import Blueprint, jsonify
from lib.files import get_json

user__data = Blueprint("user__data", __name__)


@user__data.route('/', methods=['GET'])
def getInfo():
    content = get_json("./db/user__data.json")

    response = {
        "msg": "Succefull",
        "body": content
    }

    return jsonify(response)
