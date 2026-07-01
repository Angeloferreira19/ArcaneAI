from app.config.database import db
from bson import ObjectId

class CharacterRepository:
    def __init__(self):
        self.collection = db['characters']

    def create(self, character_data):
        result = self.collection.insert_one(character_data)
        return self.collection.find_one({"_id": result.inserted_id})

    def list_by_campaign(self, campaign_id):
        return list(self.collection.find({"campaign_id": campaign_id}))

    def find_by_id(self, character_id):
        return self.collection.find_one({"_id": ObjectId(character_id)})
