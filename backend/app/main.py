from fastapi import FastAPI
from app.api.user_routes import router as user_router

app = FastAPI(
    title="Arcane API",
    version="0.1.0"
)

@app.get("/")
def root():
    return {"message": "Welcome to the Arcane API!"}

@app.get("/health")
def health_check():
    return {"status": "Ok"}

app.include_router(user_router, prefix="/auth", tags=["Auth"]) 
