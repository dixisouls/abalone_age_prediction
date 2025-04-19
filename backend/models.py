from pydantic import BaseModel, Field, validator
from enum import Enum
from typing import List, Dict, Union, Optional
import numpy as np
import warnings
warnings.filterwarnings("ignore")


class SexEnum(str, Enum):
    """Enum for sex options in abalone dataset."""
    
    MALE = "M"
    FEMALE = "F"
    INFANT = "I"


class AbaloneInput(BaseModel):
    """Pydantic model for abalone input data validation."""
    
    Sex: SexEnum = Field(..., description="Sex of the abalone (M=Male, F=Female, I=Infant)")
    Length: float = Field(..., description="Longest shell measurement (mm)", gt=0)
    Diameter: float = Field(..., description="Perpendicular to length (mm)", gt=0)
    Height: float = Field(..., description="With meat in shell (mm)", gt=0)
    Whole_weight: float = Field(..., description="Whole abalone weight (grams)", gt=0, alias="Whole weight")
    Shucked_weight: float = Field(..., description="Weight of meat (grams)", gt=0, alias="Shucked weight")
    Viscera_weight: float = Field(..., description="Gut weight after bleeding (grams)", gt=0, alias="Viscera weight")
    Shell_weight: float = Field(..., description="Weight after being dried (grams)", gt=0, alias="Shell weight")
    
    class Config:
        schema_extra = {
            "example": {
                "Sex": "I",
                "Length": 0.455,
                "Diameter": 0.365,
                "Height": 0.095,
                "Whole_weight": 0.514,
                "Shucked_weight": 0.2245,
                "Viscera_weight": 0.105,
                "Shell_weight": 0.15
            }
        }
        
        # Allow field aliases to work with the model's expected column names
        allow_population_by_field_name = True


class AbaloneOutput(BaseModel):
    """Pydantic model for abalone prediction output."""
    
    Rings: float = Field(..., description="Predicted number of rings")
    Age: float = Field(..., description="Predicted age (Rings + 1.5)")