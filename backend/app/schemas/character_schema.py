from pydantic import BaseModel

class CharacterCreate(BaseModel):
    name: str
    description: str
    campaign_id: str

class CharacterResponse(BaseModel):
    id: str
    name: str
    description: str
    campaign_id: str