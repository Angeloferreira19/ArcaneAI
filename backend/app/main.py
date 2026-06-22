from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.user_routes import router as user_router

app = FastAPI(
    title="Arcane API",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
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

