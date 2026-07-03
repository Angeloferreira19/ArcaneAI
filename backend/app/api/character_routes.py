from fastapi import APIRouter, Depends, Query
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

@router.get("/", response_model=dict)
def list_characters(
    current_user: dict = Depends(get_current_user),
    page: int = Query(1, ge=1),
    page_size: int = Query(10, ge=1, le=100)
):
    return service.get_characters_paginated(current_user['id'], page, page_size)