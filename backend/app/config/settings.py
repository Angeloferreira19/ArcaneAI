from dotenv import load_dotenv
import os

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
MONGO_URL = os.getenv("MONGO_URL")
DB_NAME = os.getenv("DB_NAME")

if not SECRET_KEY:
    raise ValueError("SECRET_KEY não está definido no ambiente")

if not MONGO_URL:
    raise ValueError("MONGO_URL não está definido no ambiente")

if not DB_NAME:
    raise ValueError("DB_NAME não está definido no ambiente")