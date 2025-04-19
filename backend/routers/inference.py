from fastapi import APIRouter, Depends, HTTPException
from typing import Dict, Any
import logging
from models import AbaloneInput, AbaloneOutput
from services.model_service import ModelService

# Set up logging
logger = logging.getLogger(__name__)

# Create router
router = APIRouter(
    prefix="/api",
    tags=["inference"],
    responses={404: {"description": "Not found"}},
)

# Model service instance
model_service = None


def get_model_service() -> ModelService:
    """
    Dependency for getting the model service.
    Ensures the model is loaded only once.
    """
    global model_service
    if model_service is None:
        logger.info("Initializing model service")
        model_service = ModelService()
    return model_service


@router.post("/predict", response_model=AbaloneOutput)
async def predict(
    abalone_input: AbaloneInput,
    service: ModelService = Depends(get_model_service)
) -> AbaloneOutput:
    """
    Predict the rings and age of an abalone based on physical measurements.
    
    Args:
        abalone_input: Validated input data
        service: Model service dependency
        
    Returns:
        AbaloneOutput: Prediction results with rings and age
        
    Raises:
        HTTPException: If prediction fails
    """
    try:
        logger.info(f"Received prediction request: {abalone_input}")
        result = service.predict(abalone_input)
        return result
    except Exception as e:
        logger.error(f"Error during prediction: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")


@router.get("/info")
async def model_info() -> Dict[str, Any]:
    """
    Get information about the model and input parameters.
    
    Returns:
        Dict: Model information and parameter descriptions
    """
    return {
        "name": "Abalone Age Predictor",
        "description": "Predicts the number of rings and age of abalone based on physical measurements",
        "version": "1.0.0",
        "input_parameters": [
            {"name": "Sex", "type": "categorical", "description": "M, F, and I (infant)", "units": ""},
            {"name": "Length", "type": "continuous", "description": "Longest shell measurement", "units": "mm"},
            {"name": "Diameter", "type": "continuous", "description": "Perpendicular to length", "units": "mm"},
            {"name": "Height", "type": "continuous", "description": "With meat in shell", "units": "mm"},
            {"name": "Whole_weight", "type": "continuous", "description": "Whole abalone", "units": "grams"},
            {"name": "Shucked_weight", "type": "continuous", "description": "Weight of meat", "units": "grams"},
            {"name": "Viscera_weight", "type": "continuous", "description": "Gut weight (after bleeding)", "units": "grams"},
            {"name": "Shell_weight", "type": "continuous", "description": "After being dried", "units": "grams"}
        ],
        "output_parameters": [
            {"name": "Rings", "description": "Predicted number of rings", "units": "count"},
            {"name": "Age", "description": "Predicted age (Rings + 1.5)", "units": "years"}
        ]
    }