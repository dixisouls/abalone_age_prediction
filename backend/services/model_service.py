import pandas as pd
import logging
from AbaloneModel import AbaloneAgePredictor
from models import AbaloneInput, AbaloneOutput

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

class ModelService:
    """Service for handling abalone model predictions."""
    
    def __init__(self, model_path="models/final_model.pkl"):
        """Initialize the model service with the abalone predictor."""
        logger.info("Initializing ModelService")
        self.predictor = AbaloneAgePredictor(model_path)
        
    def predict(self, abalone_input: AbaloneInput) -> AbaloneOutput:
        """
        Convert the input model to DataFrame and make a prediction.
        
        Args:
            abalone_input: Validated input data
            
        Returns:
            AbaloneOutput: Prediction results
        """
        logger.info(f"Making prediction for input: {abalone_input}")
        
        # Convert pydantic model to dict and then to DataFrame
        input_dict = abalone_input.dict(by_alias=True)
        input_df = pd.DataFrame([input_dict])
        
        # Make prediction
        try:
            predictions = self.predictor.predict(input_df)
            
            # Extract the first prediction (since we're predicting for a single sample)
            rings = float(predictions['Rings'][0])
            age = float(predictions['Age'][0])
            
            logger.info(f"Prediction successful: Rings={rings}, Age={age}")
            
            return AbaloneOutput(Rings=rings, Age=age)
        except Exception as e:
            logger.error(f"Prediction error: {e}")
            raise