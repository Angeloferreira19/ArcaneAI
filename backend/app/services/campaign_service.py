from fastapi import HTTPException
from bson import ObjectId
from app.repositories.campaign_repo import CampaignRepository

class CampaignService:
    def __init__(self):
        self.campaign_repo = CampaignRepository()

    def create_campaign(self, owner_id, data):
        campaign_data = {
            'name': data['name'],
            'description': data.get('description'),
            'owner_id': owner_id,
            'character_ids': []
        }
        campaign = self.campaign_repo.create_campaign(campaign_data)
        if not campaign:
            raise HTTPException(status_code=500, detail="Erro ao criar a campanha.")
        campaign['id'] = str(campaign['_id'])
        campaign.pop('_id', None)
        return campaign

    def get_campaign_by_id(self, campaign_id):
        """Busca campanha por ID com validação."""
        campaign = self.campaign_repo.find_by_id(campaign_id)
        if not campaign:
            raise HTTPException(status_code=404, detail="Campanha não encontrada ou ID inválido.")
        return campaign

    def get_campaigns(self, owner_id):
        campaigns = self.campaign_repo.list_by_owner(owner_id)
        for campaign in campaigns:
            campaign['id'] = str(campaign['_id'])
            campaign.pop('_id', None)
        return campaigns

    def get_campaigns_paginated(self, owner_id, page=1, page_size=10):
        result = self.campaign_repo.list_by_owner_paginated(owner_id, page, page_size)
        
        for campaign in result['items']:
            campaign['id'] = str(campaign['_id'])
            campaign.pop('_id', None)
        
        return {
            "items": result['items'],
            "total": result['total'],
            "pages": result['pages'],
            "current_page": result['current_page'],
            "page_size": result['page_size']
        }