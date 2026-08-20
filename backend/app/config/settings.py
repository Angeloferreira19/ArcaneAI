from pathlib import Path
from dotenv import load_dotenv
import os

backend_root = Path(__file__).resolve().parents[2]
load_dotenv(backend_root / ".env")

SECRET_KEY = os.getenv("SECRET_KEY")
MONGO_URL = os.getenv("MONGO_URL")
DB_NAME = os.getenv("DB_NAME")

if not SECRET_KEY:
    raise ValueError("SECRET_KEY não está definido no ambiente. Crie o arquivo backend/.env a partir do backend/.env.example")

if not MONGO_URL:
    raise ValueError("MONGO_URL não está definido no ambiente. Crie o arquivo backend/.env a partir do backend/.env.example")

if not DB_NAME:
    raise ValueError("DB_NAME não está definido no ambiente. Crie o arquivo backend/.env a partir do backend/.env.example")