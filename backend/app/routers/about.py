from fastapi import APIRouter

router = APIRouter(
    prefix="/about",
    tags=["About"]
)


@router.get("")
def get_about():
    return {
        "project": "IssuePilot",
        "version": "1.0.0",
        "backend": "FastAPI",
        "frontend": "React",
        "ml": "Scikit-learn",
        "dataset_size": 4515,
        "features": [
            "Priority Prediction",
            "Component Prediction",
            "Similar Issue Retrieval"
        ]
    }