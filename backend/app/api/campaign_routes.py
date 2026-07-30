from fastapi import APIRouter, Depends, Query
from app.services.campaign_service import CampaignService
from app.schemas.campaign_schema import CampaignCreate, CampaignUpdate, CampaignResponse
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


@router.get("/{campaign_id}", response_model=CampaignResponse)
def get_campaign(campaign_id: str, current_user: dict = Depends(get_current_user)):
    return service.get_campaign_detail(current_user["id"], campaign_id)


@router.put("/{campaign_id}", response_model=CampaignResponse)
def update_campaign(campaign_id: str, data: CampaignUpdate, current_user: dict = Depends(get_current_user)):
    return service.update_campaign(current_user["id"], campaign_id, data.dict())


@router.delete("/{campaign_id}")
def delete_campaign(campaign_id: str, current_user: dict = Depends(get_current_user)):
    return service.delete_campaign(current_user["id"], campaign_id)
