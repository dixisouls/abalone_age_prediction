import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaChartBar, FaInfoCircle } from "react-icons/fa";
import PredictionForm from "../components/PredictionForm";
import ResultDisplay from "../components/ResultDisplay";
import LoadingSpinner from "../components/LoadingSpinner";
import Card from "../components/Card";
import { predictAge, getModelInfo } from "../utils/api";

const PageContainer = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 3rem 1.5rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
  color: ${(props) => props.theme.colors.deepBlue};
  margin-bottom: 1rem;
`;

const PageDescription = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.darkText};
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled(Card)`
  height: fit-content;
  position: sticky;
  top: 100px;

  @media (max-width: 992px) {
    position: static;
  }
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoTitle = styled.h4`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  svg {
    margin-right: 0.5rem;
    color: ${(props) => props.theme.colors.teal};
  }
`;

const InfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;

  th,
  td {
    padding: 0.5rem;
    border-bottom: 1px solid #eaeaea;
    text-align: left;
  }

  th {
    font-weight: 600;
    color: ${(props) => props.theme.colors.deepBlue};
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const NotificationBanner = styled.div`
  background-color: ${(props) => (props.error ? "#fee2e2" : "#ecfdf5")};
  border-left: 4px solid
    ${(props) =>
      props.error ? props.theme.colors.error : props.theme.colors.success};
  color: ${(props) => (props.error ? "#991b1b" : "#065f46")};
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.75rem;
    flex-shrink: 0;
  }
`;

const InferencePage = () => {
  const [loading, setLoading] = useState(false);
  const [predicting, setPredicting] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [modelInfo, setModelInfo] = useState(null);

  // Fetch model info on component mount
  useEffect(() => {
    const fetchModelInfo = async () => {
      try {
        setLoading(true);
        const data = await getModelInfo();
        setModelInfo(data);
        setError(null);
      } catch (err) {
        setError(
          "Failed to fetch model information. The API may be unavailable."
        );
        console.error("Error fetching model info:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchModelInfo();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      setPredicting(true);
      setError(null);

      // Convert keys to match API expectations
      const apiData = {
        Sex: formData.Sex,
        Length: formData.Length,
        Diameter: formData.Diameter,
        Height: formData.Height,
        "Whole weight": formData.Whole_weight,
        "Shucked weight": formData.Shucked_weight,
        "Viscera weight": formData.Viscera_weight,
        "Shell weight": formData.Shell_weight,
      };

      // Make API call
      const predictions = await predictAge(apiData);
      setResult(predictions);

      // Scroll to results
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    } catch (err) {
      setError(`Prediction failed: ${err.message || "Unknown error"}`);
      console.error("Error making prediction:", err);
    } finally {
      setPredicting(false);
    }
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Abalone Age Predictor</PageTitle>
        <PageDescription>
          Enter the physical measurements of your abalone specimen to predict
          its age using our machine learning model.
        </PageDescription>
      </PageHeader>

      {error && (
        <NotificationBanner error>
          <FaInfoCircle />
          <div>{error}</div>
        </NotificationBanner>
      )}

      {loading ? (
        <LoadingSpinner message="Loading model information..." />
      ) : (
        <TwoColumnLayout>
          <div>
            <PredictionForm onSubmit={handleSubmit} isLoading={predicting} />

            {predicting ? (
              <LoadingSpinner message="Analyzing abalone measurements..." />
            ) : (
              result && <ResultDisplay result={result} />
            )}
          </div>

          {modelInfo && (
            <InfoCard title="Model Information">
              <InfoItem>
                <InfoTitle>
                  <FaInfoCircle />
                  About the Model
                </InfoTitle>
                <p>{modelInfo.description}</p>
              </InfoItem>

              <InfoItem>
                <InfoTitle>
                  <FaChartBar />
                  Input Parameters
                </InfoTitle>
                <InfoTable>
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Description</th>
                      <th>Units</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modelInfo.input_parameters.map((param, index) => (
                      <tr key={index}>
                        <td>{param.name}</td>
                        <td>{param.description}</td>
                        <td>{param.units}</td>
                      </tr>
                    ))}
                  </tbody>
                </InfoTable>
              </InfoItem>

              <InfoItem>
                <InfoTitle>
                  <FaChartBar />
                  Output Parameters
                </InfoTitle>
                <InfoTable>
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Description</th>
                      <th>Units</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modelInfo.output_parameters.map((param, index) => (
                      <tr key={index}>
                        <td>{param.name}</td>
                        <td>{param.description}</td>
                        <td>{param.units}</td>
                      </tr>
                    ))}
                  </tbody>
                </InfoTable>
              </InfoItem>
            </InfoCard>
          )}
        </TwoColumnLayout>
      )}
    </PageContainer>
  );
};

export default InferencePage;
