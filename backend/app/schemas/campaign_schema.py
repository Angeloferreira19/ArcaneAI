from pydantic import BaseModel
from typing import Optional

class CampaignCreate(BaseModel):
    name: str
    description: Optional[str] = None

class CampaignResponse(BaseModel):
    id: str
    name: str
    description: Optional[str] = None
