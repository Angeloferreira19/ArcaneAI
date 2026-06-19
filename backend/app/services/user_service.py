from fastapi import HTTPException
from app.repositories.user_repo import UserRepository
from app.utils.security import hash_password, verify_password
from app.utils.jwt import create_access_token

class UserService:
    def __init__(self):
        self.repository = UserRepository()

    def create_user(self, user_data):
        existing_user = self.repository.find_by_email(user_data['email'])
        if existing_user:
            raise HTTPException(status_code=400, detail="Usuário já existe")

        user_data['password'] = hash_password(user_data['password'])
        user = self.repository.create(user_data)

        if not user:
            raise HTTPException(status_code=500, detail="Erro ao criar usuário")

        user.pop('password', None)
        user['id'] = str(user['_id'])
        user.pop('_id', None)
        return user
    
    def login(self, email: str, password: str):
        user = self.repository.find_by_email(email)

        if not user:
            raise HTTPException(status_code=404, detail="Usuário não encontrado")

        if not verify_password(password, user['password']):
            raise HTTPException(status_code=401, detail="Senha incorreta")
        
        token = create_access_token(
            str(user['_id'])
        )

        return {
            "user": {
                "id": str(user['_id']),
                "username": user['username'],
                "email": user['email']
            },
            "access_token": token,
            "token_type": "bearer"
        }