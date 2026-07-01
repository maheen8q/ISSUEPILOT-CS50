from fastapi import APIRouter

from app.schemas import (
    AnalyzeRequest,
    AnalyzeResponse,
    SimilarIssue
)

from app.services.predictor import predict_issue
from app.services.similarity import find_similar_issues

router = APIRouter()


@router.post("/analyze", response_model=AnalyzeResponse)
def analyze_issue(request: AnalyzeRequest):

    prediction = predict_issue(
        request.title,
        request.description
    )

    similar = find_similar_issues(
        request.title,
        request.description,
        top_k=3
    )

    issues = [
        SimilarIssue(**issue)
        for issue in similar
    ]

    return AnalyzeResponse(
        priority=prediction["priority"],
        component=prediction["component"],
        similar_issues=issues
    )