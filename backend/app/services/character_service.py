from fastapi import HTTPException
from app.repositories.character_repo import CharacterRepository
from app.repositories.campaign_repo import CampaignRepository

class CharacterService:
    def __init__(self):
        self.repository = CharacterRepository()
        self.campaign_repository = CampaignRepository()

    def create_character(self, data):
        campaign = self.campaign_repository.find_by_id(data['campaign_id'])
        if not campaign:
            raise HTTPException(status_code=404, detail="Campanha não encontrada.")
        
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