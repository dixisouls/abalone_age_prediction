import React from "react";
import styled from "styled-components";
import { FaRing, FaHourglass } from "react-icons/fa";
import Card from "./Card";

const ResultContainer = styled.div`
  margin-top: 2rem;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StatCard = styled(Card)`
  flex: 1;
  min-width: 200px;
  text-align: center;
  padding: 1.5rem;
`;

const StatValue = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors[props.color || "deepBlue"]};
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 0.5rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.darkText};
  font-weight: 500;
`;

const StatDescription = styled.p`
  color: ${(props) => props.theme.colors.darkText};
  margin-top: 1rem;
  font-size: 0.9rem;
`;

const ResultTitle = styled.h2`
  color: ${(props) => props.theme.colors.deepBlue};
  margin-bottom: 1rem;
`;

const ResultSubtitle = styled.p`
  color: ${(props) => props.theme.colors.teal};
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #eaeaea;
  margin: 2rem 0;
`;

const ResultExplanation = styled.div`
  margin-top: 2rem;

  h3 {
    color: ${(props) => props.theme.colors.deepBlue};
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme.colors.darkText};
    margin-bottom: 1rem;
  }
`;

const ResultDisplay = ({ result }) => {
  const { Rings, Age } = result;

  // Format values to 1 decimal place
  const formattedRings = Number(Rings).toFixed(1);
  const formattedAge = Number(Age).toFixed(1);

  return (
    <ResultContainer>
      <ResultTitle>Prediction Results</ResultTitle>
      <ResultSubtitle>
        Based on the physical measurements you provided
      </ResultSubtitle>

      <StatsContainer>
        <StatCard>
          <StatLabel>Estimated Rings</StatLabel>
          <StatValue color="deepBlue">
            <FaRing />
            {formattedRings}
          </StatValue>
          <StatDescription>
            The number of rings in the abalone shell, which is the primary
            indicator for age determination
          </StatDescription>
        </StatCard>

        <StatCard>
          <StatLabel>Predicted Age</StatLabel>
          <StatValue color="teal">
            <FaHourglass />
            {formattedAge}
          </StatValue>
          <StatDescription>
            The calculated age in years (rings + 1.5), representing the
            estimated lifespan of the abalone
          </StatDescription>
        </StatCard>
      </StatsContainer>

      <Divider />

      <ResultExplanation>
        <h3>What These Results Mean</h3>
        <p>
          The age of an abalone is determined by counting the number of rings in
          its shell after cutting, staining, and examining under a microscope.
          This process is time-consuming and requires expertise, which is why
          our machine learning model provides a quick and accurate estimate
          based on physical measurements.
        </p>
        <p>
          The standard scientific formula for abalone age is: Age = Rings + 1.5
          (in years). This accounts for the initial development period before
          ring formation begins. The accuracy of our model has been validated
          against lab-verified samples with an average error margin of
          approximately ±1.5 rings.
        </p>
      </ResultExplanation>
    </ResultContainer>
  );
};

export default ResultDisplay;
