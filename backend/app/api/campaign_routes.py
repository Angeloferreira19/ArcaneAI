from fastapi import APIRouter, Depends, Query
from app.services.campaign_service import CampaignService
from app.schemas.campaign_schema import CampaignCreate, CampaignResponse
from app.utils.auth import get_current_user

router = APIRouter()
service = CampaignService()

@router.post("", response_model=CampaignResponse)
@router.post("/", response_model=CampaignResponse)
def create_campaign(data: CampaignCreate, current_user: dict = Depends(get_current_user)):
    return service.create_campaign(current_user["id"], data.dict())


@router.get("", response_model=dict)
@router.get("/", response_model=dict)
def list_campaigns(
    current_user: dict = Depends(get_current_user),
    page: int = Query(1, ge=1),
    page_size: int = Query(6, ge=1, le=100),
):
    return service.get_campaigns_paginated(current_user["id"], page, page_size)

