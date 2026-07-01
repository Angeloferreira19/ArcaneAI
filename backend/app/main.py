import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.user_routes import router as user_router

app = FastAPI(
    title="Arcane API",
    version="0.1.0"
)

configured_origins = os.getenv("CORS_ORIGINS")
allowed_origins = [
    origin.strip()
    for origin in configured_origins.split(",")
    if origin.strip()
] if configured_origins else []

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins or ["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_origin_regex=r"http://(localhost|127\.0\.0\.1)(:\\d+)?",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Welcome to the Arcane API!"}

@app.get("/health")
def health_check():
    return {"status": "Ok"}

app.include_router(user_router, prefix="/auth", tags=["Auth"])

