# Abalone Age Predictor API

A FastAPI backend for predicting the age of abalone based on physical measurements.

## Project Structure

```
backend/
├── AbaloneModel.py        # Core model wrapper
├── main.py                # FastAPI application entry point
├── models.py              # Pydantic models for validation
├── models/                # Directory for the model file
│   └── final_model.pkl    # The trained model file
├── requirements.txt       # Python dependencies
├── routers/               # API route handlers
│   ├── __init__.py
│   └── inference.py       # Inference endpoints
├── services/              # Business logic
│   ├── __init__.py
│   └── model_service.py   # Service for the Abalone model
└── training_scripts/      # Model training scripts
    └── train.ipynb        # Training notebook
```

## Model Details

The model predicts:

- **Rings**: The number of rings in the abalone shell
- **Age**: The age of the abalone (Rings + 1.5)

The core of the prediction system is a Multi-Layer Perceptron (MLP) Regressor from scikit-learn, which has been trained on the UCI Machine Learning Repository Abalone Dataset.

### Feature Engineering

The model incorporates several engineered features to improve prediction accuracy:

- **Volume**: Length × Diameter × Height
- **Length to Diameter Ratio**: Length / Diameter
- **Height to Diameter Ratio**: Height / Diameter
- **Shell to Total Weight Ratio**: Shell weight / Whole weight
- **Density**: Whole weight / Volume

## API Endpoints

### GET `/health`

Health check endpoint to verify the API is running.

**Response:**
```json
{
  "status": "healthy"
}
```

### GET `/api/info`

Information about the model and input parameters.

**Response:**
```json
{
  "name": "Abalone Age Predictor",
  "description": "Predicts the number of rings and age of abalone based on physical measurements",
  "version": "1.0.0",
  "input_parameters": [...],
  "output_parameters": [...]
}
```

### POST `/api/predict`

Predict the rings and age of an abalone based on physical measurements.

**Request Body:**
```json
{
  "Sex": "I",
  "Length": 0.455,
  "Diameter": 0.365,
  "Height": 0.095,
  "Whole_weight": 0.514,
  "Shucked_weight": 0.2245,
  "Viscera_weight": 0.105,
  "Shell_weight": 0.15
}
```

**Response:**
```json
{
  "Rings": 8.5,
  "Age": 10.0
}
```

## Getting Started

### Prerequisites

- Python 3.9+
- pip
- Virtual environment (recommended)

### Installation

1. Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install the required packages:

```bash
pip install -r requirements.txt
```

3. Ensure the trained model file (`final_model.pkl`) is in the `models/` directory

### Running the Application

```bash
python main.py
```

The API will be available at `http://localhost:8000`.

### API Documentation

- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Development

### Training the Model

The model training process is documented in the `training_scripts/train.ipynb` Jupyter notebook. To retrain the model:

1. Open the notebook in Jupyter:
```bash
jupyter notebook training_scripts/train.ipynb
```

2. Follow the steps in the notebook to train and save the model

3. Place the new model in the `models/` directory as `final_model.pkl`

## Frontend Integration

This API is designed to work with a React frontend. The API includes CORS middleware to allow cross-origin requests from the frontend application.

## Author

Created by [Divya Panchal](https://github.com/dixisouls)