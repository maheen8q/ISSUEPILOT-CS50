from fastapi import APIRouter

router = APIRouter()


@router.get("/dashboard")
def dashboard():
    return {
        "total_predictions": 248,
        "high_priority": 71,
        "medium_priority": 112,
        "low_priority": 65,
        "most_common_component": "API",
        "model_accuracy": 89.7
    }