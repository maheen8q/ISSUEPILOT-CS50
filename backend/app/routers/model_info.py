from fastapi import APIRouter

router = APIRouter(
    prefix="/model-info",
    tags=["Model Information"]
)


@router.get("")
def model_info():
    return {
        "project": "IssuePilot",
        "priority_model": "Logistic Regression",
        "component_model": "Logistic Regression",
        "vectorizer": "TF-IDF",
        "similarity_method": "Cosine Similarity",
        "dataset_size": 4515,
        "priority_accuracy": 0.85,
        "component_accuracy": 0.72
    }