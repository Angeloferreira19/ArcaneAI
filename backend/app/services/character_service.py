from fastapi import HTTPException
from app.repositories.character_repo import CharacterRepository
from app.repositories.campaign_repo import CampaignRepository
from app.services.campaign_service import CampaignService

class CharacterService:
    def __init__(self):
        self.repository = CharacterRepository()
        self.campaign_service = CampaignService()

    def create_character(self, data):
        # Validação de campaign_id
        if not data.get('campaign_id'):
            raise HTTPException(status_code=400, detail="campaign_id é obrigatório")
        
        # Valida se campanha existe
        self.campaign_service.get_campaign_by_id(data['campaign_id'])
        
        character_data = {
            'name': data['name'],
            'description': data['description'],
            'campaign_id': data['campaign_id'],
            'owner_id': data.get('owner_id')
        }
        character = self.repository.create(character_data)
        if not character:
            raise HTTPException(status_code=500, detail="Erro ao criar personagem.")

        character['id'] = str(character['_id'])
        character.pop('_id', None)
        return character

    def get_characters(self, owner_id):
        characters = self.repository.list_by_owner(owner_id)
        for character in characters:
            character['id'] = str(character['_id'])
            character.pop('_id', None)
        return characters

    def get_characters_paginated(self, owner_id, page=1, page_size=10):
        result = self.repository.list_by_owner_paginated(owner_id, page, page_size)
        
        for character in result['items']:
            character['id'] = str(character['_id'])
            character.pop('_id', None)
        
        return {
            "items": result['items'],
            "total": result['total'],
            "pages": result['pages'],
            "current_page": result['current_page'],
            "page_size": result['page_size']
        }