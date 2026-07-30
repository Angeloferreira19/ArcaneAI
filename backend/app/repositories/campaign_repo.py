from app.config.database import db
from bson import ObjectId
from bson.errors import InvalidId
import math

class CampaignRepository:
    def __init__(self):
        self.collection = db['campaigns']

    def create_campaign(self, campaign_data):
        result = self.collection.insert_one(campaign_data)
        return self.collection.find_one({"_id": result.inserted_id})

    def list_by_owner(self, owner_id):
        return list(self.collection.find({"owner_id": owner_id}))

    def list_by_owner_paginated(self, owner_id, page=1, page_size=10):
        skip = (page - 1) * page_size
        total = self.collection.count_documents({"owner_id": owner_id})
        items = list(self.collection.find({"owner_id": owner_id}).skip(skip).limit(page_size))
        pages = math.ceil(total / page_size) if total > 0 else 0
        
        return {
            "items": items,
            "total": total,
            "pages": pages,
            "current_page": page,
            "page_size": page_size
        }

    def find_by_id(self, campaign_id):
        try:
            return self.collection.find_one({"_id": ObjectId(campaign_id)})
        except InvalidId:
            return None

    def update_campaign(self, campaign_id, update_data):
        try:
            object_id = ObjectId(campaign_id)
        except InvalidId:
            return None
        self.collection.update_one({"_id": object_id}, {"$set": update_data})
        return self.collection.find_one({"_id": object_id})

    def delete_campaign(self, campaign_id):
        try:
            object_id = ObjectId(campaign_id)
        except InvalidId:
            return False
        result = self.collection.delete_one({"_id": object_id})
        return result.deleted_count > 0