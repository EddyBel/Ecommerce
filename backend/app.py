# from settings import PORT, DEBUG
from flask import Flask
from flask_cors import CORS
from routes.products import products
from routes.user import user__data

app = Flask(__name__)
CORS(app)

app.register_blueprint(products, url_prefix='/products')
app.register_blueprint(user__data, url_prefix='/user')


def run_server(PORT, DEBUG):
    print("Run server")
    app.run(port=PORT, debug=DEBUG)
