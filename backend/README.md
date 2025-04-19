# Abalone Age Predictor API

A FastAPI backend for predicting the age of abalone based on physical
measurements.

## Project Structure

```
├── AbaloneModel.py        # Core model wrapper (provided)
├── Dockerfile             # Container definition
├── README.md              # This file
├── main.py                # FastAPI application entry point
├── models.py              # Pydantic models for validation
├── models/                # Directory for the model file
│   └── final_model.pkl    # The trained model file (needs to be provided)
├── requirements.txt       # Python dependencies
├── routers/               # API route handlers
│   ├── __init__.py
│   └── inference.py       # Inference endpoints
├── services/              # Business logic
│   ├── __init__.py
│   └── model_service.py   # Service for the Abalone model
└── templates/             # HTML templates
    └── index.html         # Landing page
```

## Getting Started

### Prerequisites

- Python 3.9+
- Required Python packages (see `requirements.txt`)
- Trained model file (`final_model.pkl`) placed in the `models/` directory

### Installation

1. Clone this repository
2. Install the required packages:

```bash
pip install -r requirements.txt
```

3. Make sure the trained model file is in the `models/` directory

### Running the Application

```bash
python main.py
```

The API will be available at `http://localhost:8000`.

### API Documentation

API documentation is available at:

- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## API Endpoints

### GET `/`

- Landing page with information about the API

### GET `/health`

- Health check endpoint

### GET `/api/info`

- Information about the model and input parameters

### POST `/api/predict`

- Predict the rings and age of an abalone
- Request body example:

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

## Docker Support

Build the Docker image:

```bash
docker build -t abalone-predictor .
```

Run the Docker container:

```bash
docker run -p 8000:8000 abalone-predictor
```

## Frontend Integration

This API is designed to work with a React frontend. The API includes CORS
middleware to allow cross-origin requests from the frontend application.

## Model Details

The model predicts:

- **Rings**: The number of rings in the abalone shell
- **Age**: The age of the abalone (Rings + 1.5)

## Input Features

| Feature        | Type        | Description                 | Units |
| -------------- | ----------- | --------------------------- | ----- |
| Sex            | Categorical | M, F, and I (infant)        |       |
| Length         | Continuous  | Longest shell measurement   | mm    |
| Diameter       | Continuous  | Perpendicular to length     | mm    |
| Height         | Continuous  | With meat in shell          | mm    |
| Whole_weight   | Continuous  | Whole abalone               | grams |
| Shucked_weight | Continuous  | Weight of meat              | grams |
| Viscera_weight | Continuous  | Gut weight (after bleeding) | grams |
| Shell_weight   | Continuous  | After being dried           | grams |
