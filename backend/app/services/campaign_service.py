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
        campaign = self.repository.create(campaign_data)
        if not campaign:
            raise HTTPException(status_code=500, detail="Erro ao criar a campanha.")
        campaign['_id'] = str(campaign['_id'])
        campaign.pop('_id', None)
        return campaign

    def get_campaigns(self, owner_id):
        campaigns = self.campaign_repo.list_by_owner(owner_id)
        for campaign in campaigns:
            campaign['_id'] = str(campaign['_id'])
            campaign.pop('_id', None)
        return campaigns