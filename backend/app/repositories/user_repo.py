from app.config.database import db

class UserRepository:
    def __init__(self):
        self.collection = db['users']

    def create(self, user_data):
        result = self.collection.insert_one(user_data)
        return self.collection.find_one({'_id': result.inserted_id})
    
    def find_by_email(self, email):
        return self.collection.find_one(
            {'email': email}
        )
    