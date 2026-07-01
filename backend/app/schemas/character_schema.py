from pydantic import BaseModel
from typing import Optional

class CharacterCreate(BaseModel):
    name: str
    description: str
    campaign_id: str
    owner_id: Optional[str] = None

class CharacterResponse(BaseModel):
    id: str
    name: str
    description: str
    campaign_id: str
    owner_id: Optional[str] = None