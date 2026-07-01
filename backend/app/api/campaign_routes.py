from fastapi import APIRouter, Depends
from app.services.campaign_service import CampaignService
from app.schemas.campaign_schema import CampaignCreate, CampaignResponse
from app.utils.auth import get_current_user

router = APIRouter()
service = CampaignService()

@router.post("/", response_model=CampaignResponse)
def create_campaign(data: CampaignCreate, current_user: dict = Depends(get_current_user)):
    return service.create_campaign(data.dict(), current_user['id'])

@router.get("/", response_model=list[CampaignResponse])
def list_campaigns(current_user: dict = Depends(get_current_user)):
    return service.list_campaigns(current_user['id'])