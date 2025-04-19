import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaRuler, FaWeightHanging, FaVenusMars } from "react-icons/fa";
import Button from "./Button";
import Card from "./Card";

const FormContainer = styled(Card)`
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormSection = styled.div`
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.deepBlue};

  svg {
    margin-right: 0.75rem;
    color: ${(props) => props.theme.colors.teal};
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FormGroup = styled.div`
  flex: 1;
  min-width: 200px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.darkText};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid #d1d5db;
  font-family: inherit;
  font-size: 1rem;
  transition: ${(props) => props.theme.transition};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.teal};
    box-shadow: 0 0 0 3px rgba(0, 128, 128, 0.1);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid #d1d5db;
  font-family: inherit;
  font-size: 1rem;
  background-color: white;
  transition: ${(props) => props.theme.transition};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.teal};
    box-shadow: 0 0 0 3px rgba(0, 128, 128, 0.1);
  }
`;

const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.error};
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const HelpText = styled.div`
  color: #6b7280;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

const PredictionForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    Sex: "I",
    Length: "",
    Diameter: "",
    Height: "",
    Whole_weight: "",
    Shucked_weight: "",
    Viscera_weight: "",
    Shell_weight: "",
  });

  const [errors, setErrors] = useState({});

  // Reset errors when input changes
  useEffect(() => {
    setErrors({});
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Check for required fields
    for (const [key, value] of Object.entries(formData)) {
      if (value === "") {
        newErrors[key] = "This field is required";
      }
    }

    // Check for positive numbers
    const numericFields = [
      "Length",
      "Diameter",
      "Height",
      "Whole_weight",
      "Shucked_weight",
      "Viscera_weight",
      "Shell_weight",
    ];
    numericFields.forEach((field) => {
      if (formData[field] !== "" && parseFloat(formData[field]) <= 0) {
        newErrors[field] = "Value must be greater than 0";
      }
    });

    // Check logical constraints
    if (
      parseFloat(formData.Height) >= parseFloat(formData.Diameter) &&
      formData.Height !== "" &&
      formData.Diameter !== ""
    ) {
      newErrors.Height = "Height should be less than diameter for abalone";
    }

    if (
      parseFloat(formData.Shucked_weight) >=
        parseFloat(formData.Whole_weight) &&
      formData.Shucked_weight !== "" &&
      formData.Whole_weight !== ""
    ) {
      newErrors.Shucked_weight =
        "Shucked weight should be less than whole weight";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Convert string values to numbers for numeric fields
      const numericFields = [
        "Length",
        "Diameter",
        "Height",
        "Whole_weight",
        "Shucked_weight",
        "Viscera_weight",
        "Shell_weight",
      ];
      const processedData = { ...formData };

      numericFields.forEach((field) => {
        processedData[field] = parseFloat(processedData[field]);
      });

      onSubmit(processedData);
    }
  };

  const handleReset = () => {
    setFormData({
      Sex: "I",
      Length: "",
      Diameter: "",
      Height: "",
      Whole_weight: "",
      Shucked_weight: "",
      Viscera_weight: "",
      Shell_weight: "",
    });
    setErrors({});
  };

  return (
    <FormContainer title="Abalone Measurements">
      <Form onSubmit={handleSubmit}>
        <FormSection>
          <SectionTitle>
            <FaVenusMars />
            Biological Information
          </SectionTitle>
          <FormRow>
            <FormGroup>
              <Label htmlFor="Sex">Sex</Label>
              <Select
                id="Sex"
                name="Sex"
                value={formData.Sex}
                onChange={handleChange}
                disabled={isLoading}
              >
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="I">Infant</option>
              </Select>
              <HelpText>M=Male, F=Female, I=Infant/Immature</HelpText>
              {errors.Sex && <ErrorMessage>{errors.Sex}</ErrorMessage>}
            </FormGroup>
          </FormRow>
        </FormSection>

        <FormSection>
          <SectionTitle>
            <FaRuler />
            Physical Dimensions
          </SectionTitle>
          <FormRow>
            <FormGroup>
              <Label htmlFor="Length">Length (mm)</Label>
              <Input
                type="number"
                step="0.001"
                id="Length"
                name="Length"
                placeholder="e.g., 0.455"
                value={formData.Length}
                onChange={handleChange}
                disabled={isLoading}
              />
              <HelpText>Longest shell measurement</HelpText>
              {errors.Length && <ErrorMessage>{errors.Length}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="Diameter">Diameter (mm)</Label>
              <Input
                type="number"
                step="0.001"
                id="Diameter"
                name="Diameter"
                placeholder="e.g., 0.365"
                value={formData.Diameter}
                onChange={handleChange}
                disabled={isLoading}
              />
              <HelpText>Perpendicular to length</HelpText>
              {errors.Diameter && (
                <ErrorMessage>{errors.Diameter}</ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="Height">Height (mm)</Label>
              <Input
                type="number"
                step="0.001"
                id="Height"
                name="Height"
                placeholder="e.g., 0.095"
                value={formData.Height}
                onChange={handleChange}
                disabled={isLoading}
              />
              <HelpText>With meat in shell</HelpText>
              {errors.Height && <ErrorMessage>{errors.Height}</ErrorMessage>}
            </FormGroup>
          </FormRow>
        </FormSection>

        <FormSection>
          <SectionTitle>
            <FaWeightHanging />
            Weight Measurements
          </SectionTitle>
          <FormRow>
            <FormGroup>
              <Label htmlFor="Whole_weight">Whole Weight (g)</Label>
              <Input
                type="number"
                step="0.001"
                id="Whole_weight"
                name="Whole_weight"
                placeholder="e.g., 0.514"
                value={formData.Whole_weight}
                onChange={handleChange}
                disabled={isLoading}
              />
              <HelpText>Entire abalone</HelpText>
              {errors.Whole_weight && (
                <ErrorMessage>{errors.Whole_weight}</ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="Shucked_weight">Shucked Weight (g)</Label>
              <Input
                type="number"
                step="0.001"
                id="Shucked_weight"
                name="Shucked_weight"
                placeholder="e.g., 0.2245"
                value={formData.Shucked_weight}
                onChange={handleChange}
                disabled={isLoading}
              />
              <HelpText>Weight of meat only</HelpText>
              {errors.Shucked_weight && (
                <ErrorMessage>{errors.Shucked_weight}</ErrorMessage>
              )}
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <Label htmlFor="Viscera_weight">Viscera Weight (g)</Label>
              <Input
                type="number"
                step="0.001"
                id="Viscera_weight"
                name="Viscera_weight"
                placeholder="e.g., 0.105"
                value={formData.Viscera_weight}
                onChange={handleChange}
                disabled={isLoading}
              />
              <HelpText>Gut weight after bleeding</HelpText>
              {errors.Viscera_weight && (
                <ErrorMessage>{errors.Viscera_weight}</ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="Shell_weight">Shell Weight (g)</Label>
              <Input
                type="number"
                step="0.001"
                id="Shell_weight"
                name="Shell_weight"
                placeholder="e.g., 0.15"
                value={formData.Shell_weight}
                onChange={handleChange}
                disabled={isLoading}
              />
              <HelpText>After being dried</HelpText>
              {errors.Shell_weight && (
                <ErrorMessage>{errors.Shell_weight}</ErrorMessage>
              )}
            </FormGroup>
          </FormRow>
        </FormSection>

        <ButtonsContainer>
          <Button
            type="button"
            variant="secondary"
            onClick={handleReset}
            disabled={isLoading}
          >
            Reset
          </Button>
          <Button
            type="submit"
            variant="primary"
            loading={isLoading}
            disabled={isLoading}
          >
            Predict Age
          </Button>
        </ButtonsContainer>
      </Form>
    </FormContainer>
  );
};

export default PredictionForm;
