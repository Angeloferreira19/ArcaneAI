from fastapi import APIRouter, Depends
from app.services.character_service import CharacterService
from app.schemas.character_schema import CharacterCreate, CharacterResponse
from app.utils.auth import get_current_user

router = APIRouter()
service = CharacterService()

@router.post("/", response_model=CharacterResponse)
def create_character(data: CharacterCreate, current_user: dict = Depends(get_current_user)):
    payload = data.dict()
    payload['owner_id'] = current_user['id']
    return service.create_character(payload)