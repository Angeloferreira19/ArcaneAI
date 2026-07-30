from fastapi import HTTPException
from bson import ObjectId
from app.repositories.campaign_repo import CampaignRepository

class CampaignService:
    def __init__(self):
        self.campaign_repo = CampaignRepository()

    @staticmethod
    def _serialize(campaign):
        campaign['id'] = str(campaign['_id'])
        campaign.pop('_id', None)
        return campaign

    def create_campaign(self, owner_id, data):
        campaign_data = {
            'name': data['name'],
            'description': data.get('description'),
            'owner_id': owner_id,
        }
        campaign = self.campaign_repo.create_campaign(campaign_data)
        if not campaign:
            raise HTTPException(status_code=500, detail="Erro ao criar a campanha.")
        return self._serialize(campaign)

    def get_campaign_by_id(self, campaign_id):
        """Busca campanha por ID com validação. Retorna doc cru (com _id)."""
        campaign = self.campaign_repo.find_by_id(campaign_id)
        if not campaign:
            raise HTTPException(status_code=404, detail="Campanha não encontrada ou ID inválido.")
        return campaign

    def get_campaigns(self, owner_id):
        campaigns = self.campaign_repo.list_by_owner(owner_id)
        return [self._serialize(c) for c in campaigns]

    def get_campaigns_paginated(self, owner_id, page=1, page_size=10):
        result = self.campaign_repo.list_by_owner_paginated(owner_id, page, page_size)
        return {
            "items": [self._serialize(c) for c in result['items']],
            "total": result['total'],
            "pages": result['pages'],
            "current_page": result['current_page'],
            "page_size": result['page_size']
        }

    def get_campaign_detail(self, owner_id, campaign_id):
        campaign = self.get_campaign_by_id(campaign_id)
        if campaign['owner_id'] != owner_id:
            raise HTTPException(status_code=403, detail="Você não tem permissão para ver esta campanha.")
        return self._serialize(campaign)

    def update_campaign(self, owner_id, campaign_id, data):
        campaign = self.get_campaign_by_id(campaign_id)
        if campaign['owner_id'] != owner_id:
            raise HTTPException(status_code=403, detail="Você não tem permissão para editar esta campanha.")

        update_data = {k: v for k, v in data.items() if v is not None}
        if not update_data:
            return self._serialize(campaign)  # sem 2ª query — reaproveita o doc já buscado

        updated = self.campaign_repo.update_campaign(campaign_id, update_data)
        return self._serialize(updated)

    def delete_campaign(self, owner_id, campaign_id):
        campaign = self.get_campaign_by_id(campaign_id)
        if campaign['owner_id'] != owner_id:
            raise HTTPException(status_code=403, detail="Você não tem permissão para deletar esta campanha.")

        # cascade: remove os personagens vinculados antes de remover a campanha,
        # evitando registros órfãos apontando pra um campaign_id inexistente
        self.character_repo.delete_by_campaign(campaign_id)
        
        deleted = self.campaign_repo.delete_campaign(campaign_id)
        if not deleted:
            raise HTTPException(status_code=500, detail="Erro ao deletar a campanha.")
        return {"message": "Campanha e personagens associados foram deletados com sucesso."}