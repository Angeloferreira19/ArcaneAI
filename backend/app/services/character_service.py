from fastapi import HTTPException
from app.repositories.character_repo import CharacterRepository
from app.repositories.campaign_repo import CampaignRepository
from app.services.campaign_service import CampaignService

class CharacterService:
    def __init__(self):
        self.repository = CharacterRepository()
        self.campaign_service = CampaignService()

    @staticmethod
    def _serialize(character):
        character['id'] = str(character['_id'])
        character.pop('_id', None)
        return character

    def create_character(self, data):
        owner_id = data.get('owner_id')

        # valida que a campanha existe E pertence ao usuário atual
        if data.get('campaign_id'):
            self.campaign_service.get_campaign_detail(owner_id, data['campaign_id'])

        character_data = {
            'name': data['name'],
            'description': data['description'],
            'campaign_id': data['campaign_id'],
            'owner_id': owner_id
        }
        character = self.repository.create(character_data)
        if not character:
            raise HTTPException(status_code=500, detail="Erro ao criar personagem.")
        return self._serialize(character)

    def get_characters(self, owner_id):
        characters = self.repository.list_by_owner(owner_id)
        return [self._serialize(c) for c in characters]

    def get_characters_paginated(self, owner_id, page=1, page_size=10):
        result = self.repository.list_by_owner_paginated(owner_id, page, page_size)
        return {
            "items": [self._serialize(c) for c in result['items']],
            "total": result['total'],
            "pages": result['pages'],
            "current_page": result['current_page'],
            "page_size": result['page_size']
        }

    def update_character(self, owner_id, character_id, data):
        character = self.repository.find_by_id(character_id)
        if not character:
            raise HTTPException(status_code=404, detail="Personagem não encontrado.")
        if character.get('owner_id') != owner_id:
            raise HTTPException(status_code=403, detail="Você não tem permissão para editar este personagem.")

        if data.get('campaign_id'):
            self.campaign_service.get_campaign_detail(owner_id, data['campaign_id'])

        update_data = {
            key: value
            for key, value in data.items()
            if value is not None or key == 'campaign_id'
        }
        if not update_data:
            return self._serialize(character)

        updated = self.repository.update(character_id, update_data)
        return self._serialize(updated)

    def delete_character(self, owner_id, character_id):
        character = self.repository.find_by_id(character_id)
        if not character:
            raise HTTPException(status_code=404, detail="Personagem não encontrado.")
            
        if character.get('owner_id') != owner_id:
            raise HTTPException(status_code=403, detail="Você não tem permissão para deletar este personagem.")

        deleted = self.repository.delete(character_id)
        if not deleted:
            raise HTTPException(status_code=500, detail="Erro ao deletar personagem.")
        return {"message": "Personagem deletado com sucesso."}

    def get_characters_by_campaign_paginated(self, owner_id, campaign_id, page=1, page_size=10):
        self.campaign_service.get_campaign_detail(owner_id, campaign_id)  # valida dono + existência

        result = self.repository.list_by_owner_and_campaign_paginated(owner_id, campaign_id, page, page_size)
        return {
            "items": [self._serialize(c) for c in result['items']],
            "total": result['total'],
            "pages": result['pages'],
            "current_page": result['current_page'],
            "page_size": result['page_size']
        }