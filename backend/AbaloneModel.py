import joblib
import logging
from sklearn.exceptions import NotFittedError

# configure logging

logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)


class AbaloneAgePredictor:
    """Wrapper class for the Abalone age prediction model."""

    def __init__(self, model_path="models/final_model.pkl"):
        self.model_path = model_path
        self.model = None
        self.load_model()

    def load_model(self):
        """Load model from disk"""
        try:
            logger.info("Loading model from disk...")
            self.model = joblib.load(self.model_path)
            logger.info("Model loaded successfully.")
        except FileNotFoundError:
            logger.error(f"Model file not found at {self.model_path}.")
            raise
        except Exception as e:
            logger.error(f"An error occurred while loading the model: {e}")
            raise

    def add_engineered_features(self, X):
        """Add engineered features to the input DataFrame."""
        X_new = X.copy()

        # Volume approximation
        X_new["Volume"] = X["Length"] * X["Diameter"] * X["Height"]

        # Ratios between measurements
        X_new["Length_to_Diameter"] = X["Length"] / X["Diameter"]
        X_new["Height_to_Diameter"] = X["Height"] / X["Diameter"]
        X_new["Shell_to_Total_Ratio"] = X["Shell weight"] / X["Whole weight"]

        # Density approximation
        X_new["Density"] = X["Whole weight"] / X_new["Volume"]

        return X_new

    def predict(self, X):
        """Make predictions on the new data"""
        if self.model is None:
            logger.error("Model is not loaded. Call load_model() first.")
            raise ValueError("Model is not loaded.")

        try:
            # add engineered features
            X_engineered = self.add_engineered_features(X)

            # make predictions
            predictions = self.model.predict(X_engineered).round(2)
            logger.info("Predictions made successfully.")
            return {'Rings': predictions, 'Age': predictions + 1.5}
        except NotFittedError:
            logger.error("Model is not fitted. Please fit the model before predicting.")
            raise
        except Exception as e:
            logger.error(f"An error occurred during prediction: {e}")
            raise
