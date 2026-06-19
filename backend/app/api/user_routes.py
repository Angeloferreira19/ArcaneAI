from fastapi import APIRouter, Depends, HTTPException
from app.services.user_service import UserService
from app.schemas.user_schema import UserCreate, LoginSchema, TokenResponse, UserResponse
from app.utils.auth import get_current_user

router = APIRouter()
service = UserService()

@router.post('/test-user')
def create_test_user():
    user = {
        'username': 'angelo',
        'email': 'angelo@email.com',
        'password': '123456'
    }
    
    service.create_user(user)
    return {'message': 'Usuário de teste criado com sucesso!'}

@router.post('/register', response_model=UserResponse)
def register(data: UserCreate):
    return service.create_user(data.dict())

@router.post("/login", response_model=TokenResponse)
def login(data: LoginSchema):
    return service.login(
        data.email,
        data.password
    )

@router.get("/me")
def read_me(current_user: dict = Depends(get_current_user)):
    return {'user_id': current_user['id']}