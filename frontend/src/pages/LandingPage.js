import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FaChartLine,
  FaSearch,
  FaMicroscope,
  FaDatabase,
} from "react-icons/fa";
import Button from "../components/Button";
import Card from "../components/Card";

const HeroSection = styled.section`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.deepBlue} 0%,
    ${(props) => props.theme.colors.teal} 100%
  );
  color: white;
  padding: 5rem 0;
  margin-bottom: 4rem;
`;

const HeroContainer = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  min-width: 300px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;

  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroImage = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;

  img {
    width: 100%;
    height: auto;
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 992px) {
    margin: 0 auto;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 576px) {
    flex-direction: column;

    a,
    button {
      width: 100%;
    }
  }
`;

const Section = styled.section`
  padding: 4rem 0;
`;

const SectionContainer = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.deepBlue};
`;

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.darkText};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled(Card)`
  height: 100%;
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${(props) => `${props.theme.colors[props.color]}10`};
  color: ${(props) => props.theme.colors[props.color]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.deepBlue};
`;

const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 3rem 0;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: ${(props) =>
      props.imageRight ? "column-reverse" : "column"};
  }
`;

const InfoContent = styled.div`
  flex: 1;
  min-width: 300px;

  @media (max-width: 992px) {
    text-align: center;
  }
`;

const InfoImage = styled.div`
  flex: 1;
  min-width: 300px;

  img {
    width: 100%;
    height: auto;
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.theme.boxShadow};
  }

  @media (max-width: 992px) {
    margin: 0 auto;
    max-width: 500px;
  }
`;

const TextHighlight = styled.span`
  color: ${(props) => props.theme.colors.teal};
  font-weight: 600;
`;

const CTASection = styled.section`
  background-color: ${(props) => props.theme.colors.teal};
  color: white;
  padding: 5rem 0;
  text-align: center;
  margin-top: 4rem;
`;

const CTAContainer = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const CTATitle = styled.h2`
  color: white;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTAText = styled.p`
  max-width: 800px;
  margin: 0 auto 2rem;
  font-size: 1.1rem;
  opacity: 0.9;
`;

const LandingPage = () => {
  return (
    <>
      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <HeroTitle>Abalone Age Detection System</HeroTitle>
            <HeroSubtitle>
              Accurately predict the age of abalone using advanced machine
              learning techniques based on physical measurements, replacing
              time-consuming manual counting processes.
            </HeroSubtitle>
            <HeroButtons>
              <Button as={Link} to="/predict" variant="accent" size="large">
                Try It Now
              </Button>
              <Button
                as="a"
                href="https://github.com/dixisouls/abalone_age_prediction"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="large"
              >
                View on GitHub
              </Button>
            </HeroButtons>
          </HeroContent>
          <HeroImage>
            <img
              src="abalone-hero.jpeg"
              alt="Abalone shells on beach"
            />
          </HeroImage>
        </HeroContainer>
      </HeroSection>

      <Section>
        <SectionContainer>
          <SectionTitle>What is Abalone?</SectionTitle>
          <SectionSubtitle>
            Learn about these fascinating marine mollusks and how our system
            predicts their age
          </SectionSubtitle>

          <InfoRow>
            <InfoContent>
              <h3>About Abalone</h3>
              <p>
                Abalone are marine snails belonging to the family Haliotidae and
                the genus Haliotis. They have an ear-shaped shell with a row of
                respiratory pores along the outer edge. The inside of the shell
                is lined with mother-of-pearl (nacre), which is used in jewelry
                and decorative items.
              </p>
              <p>
                These mollusks are found in coastal waters worldwide and are
                considered a delicacy in many cuisines. They are also important
                for ecological research and commercial aquaculture.
              </p>
              <p>
                <TextHighlight>Did you know?</TextHighlight> Abalone shells have
                been used for thousands of years as decorative items, and their
                meat is considered a delicacy in many countries, particularly in
                East Asia.
              </p>
            </InfoContent>
            <InfoImage>
              <img
                src="abalone-shell.jpg"
                alt="Abalone shell"
              />
            </InfoImage>
          </InfoRow>

          <InfoRow imageRight>
            <InfoImage>
              <img
                src="abalone-measurement.webp"
                alt="Measurement tools"
              />
            </InfoImage>
            <InfoContent>
              <h3>Age Determination</h3>
              <p>
                Traditionally, determining the age of abalone involves cutting
                the shell, staining it, and counting the number of rings under a
                microscope - a process that is time-consuming and requires
                expertise.
              </p>
              <p>
                Scientists have established that abalone age can be calculated
                using the formula:{" "}
                <TextHighlight>Age = Rings + 1.5</TextHighlight> (in years).
                This accounts for the initial development period before ring
                formation begins.
              </p>
              <p>
                Our machine learning model uses physical measurements like
                length, diameter, height, and various weight measurements to
                predict the number of rings, which is then used to calculate the
                age.
              </p>
            </InfoContent>
          </InfoRow>
        </SectionContainer>
      </Section>

      <Section style={{ backgroundColor: "#f8f9fa" }}>
        <SectionContainer>
          <SectionTitle>How It Works</SectionTitle>
          <SectionSubtitle>
            Our system uses advanced machine learning to predict abalone age
            based on physical measurements
          </SectionSubtitle>

          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon color="deepBlue">
                <FaDatabase />
              </FeatureIcon>
              <FeatureTitle>Data Collection</FeatureTitle>
              <p>
                Input key physical measurements including length, diameter,
                height, weight, and sex classification. These measurements serve
                as the foundation for accurate age prediction.
              </p>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon color="teal">
                <FaChartLine />
              </FeatureIcon>
              <FeatureTitle>ML Processing</FeatureTitle>
              <p>
                Our Multi-Layer Perceptron (MLP) Regressor model processes the
                input data, calculating engineered features like volume,
                density, and ratios to improve prediction accuracy.
              </p>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon color="coral">
                <FaMicroscope />
              </FeatureIcon>
              <FeatureTitle>Ring Prediction</FeatureTitle>
              <p>
                The model predicts the number of rings in the abalone shell,
                which is the primary indicator used by marine biologists to
                determine age.
              </p>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon color="lightBlue">
                <FaSearch />
              </FeatureIcon>
              <FeatureTitle>Age Calculation</FeatureTitle>
              <p>
                Using the scientific formula (Age = Rings + 1.5), the system
                calculates the estimated age of the abalone in years with high
                precision.
              </p>
            </FeatureCard>
          </FeaturesGrid>
        </SectionContainer>
      </Section>

      <CTASection>
        <CTAContainer>
          <CTATitle>Ready to Try It Yourself?</CTATitle>
          <CTAText>
            Experience the power of our Abalone Age Detection System. Simply
            enter the physical measurements of your abalone specimen to get an
            accurate age estimation in seconds.
          </CTAText>
          <Button as={Link} to="/predict" variant="accent" size="large">
            Get Started
          </Button>
        </CTAContainer>
      </CTASection>
    </>
  );
};

export default LandingPage;
