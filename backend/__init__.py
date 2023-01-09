from app import run_server
from settings import PORT, DEBUG
from utils.validations import str2bool
import argparse

parser = argparse.ArgumentParser()

parser.add_argument("--port", type=int, required=False)
parser.add_argument("--debug", type=str2bool, required=False)

args = parser.parse_args()

PORT = args.port if args.port is not None else PORT
DEBUG = args.debug if args.debug is not None else DEBUG

if __name__ == '__main__':
    run_server(PORT=PORT, DEBUG=DEBUG)
