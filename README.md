# Abalone Age Detection System

## Overview

This project provides a web application for predicting the age of abalone based on physical measurements. It consists of:

- **Backend**: FastAPI server hosting an MLP (Multi-Layer Perceptron) Regressor model
- **Frontend**: React application with an intuitive interface for data submission and visualization
- **ML Model**: Trained scikit-learn MLP Regressor that predicts abalone age based on physical characteristics

## About Abalone Age Prediction

Abalone age prediction is typically done by counting rings on the shell. This system automates the process using machine learning by analyzing physical measurements like weight, diameter, height, etc.

## Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│    React    │     │   FastAPI   │     │ MLP Model   │
│  Frontend   │────▶│   Backend   │────▶│ (sklearn)   │
└─────────────┘     └─────────────┘     └─────────────┘
```

## Project Structure

```
abalone/
├── backend/                # FastAPI application
│   ├── app/
│   │   ├── main.py         # Application entry point
│   │   ├── api/            # API endpoints
│   │   ├── core/           # Configuration
│   │   └── models/         # ML model interfaces
│   ├── models/             # Saved ML models
│   ├── tests/              # Backend tests
│   ├── requirements.txt    # Python dependencies
│   └── Dockerfile          # Backend container definition
├── frontend/               # React application
│   ├── src/                # React source code
│   ├── public/             # Static assets
│   ├── package.json        # JS dependencies
│   └── Dockerfile          # Frontend container definition
├── data/                   # Training data (if included)
├── notebooks/              # Jupyter notebooks for model development
└── docker-compose.yml      # Container orchestration
```

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js 16+ (for local frontend development)
- Python 3.9+ (for local backend development)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/abalone.git
cd abalone
```

2. Start the application using Docker:

```bash
docker-compose up
```

3. Access the application at http://localhost:3000

### Manual Setup (Development)

#### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

#### Frontend

```bash
cd frontend
npm install
npm start
```

## Usage

1. Open the web application in your browser
2. Enter the physical measurements of the abalone:
   - Length
   - Diameter
   - Height
   - Whole weight
   - Shucked weight
   - Viscera weight
   - Shell weight
   - Sex (M, F, I)
3. Submit the form to receive the predicted age

## API Documentation

The API documentation is available at http://localhost:8000/docs when the backend is running.

### Endpoints

- `POST /api/predict`: Submit abalone measurements and get age prediction
- `GET /api/model/info`: Get information about the current model

## Model Information

- **Type**: Multi-Layer Perceptron (MLP) Regressor
- **Framework**: scikit-learn
- **Input Features**: Physical measurements (length, diameter, height, weights) and sex
- **Output**: Predicted age (in years)
- **Performance Metrics**: RMSE, MAE, R² (available in the model info endpoint)

## Development

### Training the Model

The model training process is documented in the `notebooks/model_training.ipynb` Jupyter notebook.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- UCI Machine Learning Repository for the [Abalone Dataset](https://archive.ics.uci.edu/ml/datasets/abalone)
- FastAPI, React, and scikit-learn communities for their excellent tools and documentation