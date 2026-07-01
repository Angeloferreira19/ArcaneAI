from app.config.database import db
from bson import ObjectId

class CampaignRepository:
    def __init__(self):
        self.collection = db['campaigns']

    def create_campaign(self, campaign_data):
        result = self.collection.insert_one(campaign_data)
        return self.collection.find_one({"_id": result.inserted_id})

    def list_by_owner(self, owner_id):
        return list(self.collection.find({"owner_id": owner_id}))

    def find_by_id(self, campaign_id):
        return self.collection.find_one({"_id": ObjectId(campaign_id)})
