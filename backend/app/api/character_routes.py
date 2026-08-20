from typing import Optional
from fastapi import APIRouter, Depends, Query
from app.services.character_service import CharacterService
from app.schemas.character_schema import CharacterCreate, CharacterUpdate, CharacterResponse
from app.utils.auth import get_current_user

router = APIRouter()
service = CharacterService()

@router.post("", response_model=CharacterResponse)
@router.post("/", response_model=CharacterResponse)
def create_character(data: CharacterCreate, current_user: dict = Depends(get_current_user)):
    payload = data.dict()
    payload["owner_id"] = current_user["id"]
    return service.create_character(payload)

@router.get("", response_model=dict)
@router.get("/", response_model=dict)
def list_characters(
    current_user: dict = Depends(get_current_user),
    page: int = Query(1, ge=1),
    page_size: int = Query(6, ge=1, le=100),
    campaign_id: Optional[str] = Query(None),
):
    if campaign_id:
        return service.get_characters_by_campaign_paginated(current_user["id"], campaign_id, page, page_size)
    return service.get_characters_paginated(current_user["id"], page, page_size)

@router.put("/{character_id}", response_model=CharacterResponse)
def update_character(character_id: str, data: CharacterUpdate, current_user: dict = Depends(get_current_user)):
    return service.update_character(current_user["id"], character_id, data.dict(exclude_unset=True))

@router.delete("/{character_id}")
def delete_character(character_id: str, current_user: dict = Depends(get_current_user)):
    return service.delete_character(current_user["id"], character_id)
