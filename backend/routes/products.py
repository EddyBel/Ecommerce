from flask import Blueprint, request, jsonify
from lib.files import get_json
import random

products = Blueprint('products', __name__)


@products.route('/all', methods=['GET'])
def getAllProducts():
    content = get_json('db/data__set.json')

    response = {
        "msg": "Sussefull", "body": {
            "products": content['products'],
            "counter": len(content['products'])
        }
    }

    return jsonify(response)


@products.route('/random/<int:products_number>', methods=['GET'])
def getRandomProducts(products_number):
    content = get_json('db/data__set.json')
    max_products = len(content['products'])
    products = []

    if products_number <= max_products:
        for i in range(0, products_number):
            product_index = random.randint(0, max_products)
            products.append(content['products'][product_index])
    else:
        products = "There are no more products"

    response = {
        "msg": "Sussefull",
        "body": {
            "products": products,
            "counter": products_number
        }
    }

    return jsonify(response)


@products.route('/random', methods=['GET'])
def getRandomAllProducts():
    content = get_json('db/data__set.json')
    len_products = len(content['products'])
    products = []

    for i in range(0, len_products):
        product_index = random.randint(0, len_products)
        products.append(content['products'][product_index])

    response = {
        "msg": "Sussefull",
        "body": {
            "products": products,
            "counter": len_products
        }
    }

    return jsonify(response)
