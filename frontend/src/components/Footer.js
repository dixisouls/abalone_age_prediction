import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.deepBlue};
  color: ${(props) => props.theme.colors.white};
  padding: 3rem 0 2rem;
  margin-top: auto;
`;

const FooterContainer = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const FooterHeading = styled.h3`
  color: ${(props) => props.theme.colors.coral};
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  margin-bottom: 1rem;
  font-size: 0.95rem;
  color: ${(props) => props.theme.colors.lightGrey};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
  transition: ${(props) => props.theme.transition};

  &:hover {
    color: ${(props) => props.theme.colors.coral};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.lightGrey};
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <FooterContainer>
        <FooterContent>
          <FooterSection>
            <FooterHeading>About Abalone Age</FooterHeading>
            <FooterText>
              A cutting-edge application that uses machine learning to predict
              the age of abalone based on physical measurements, providing
              accurate results for research and aquaculture.
            </FooterText>
          </FooterSection>

          <FooterSection>
            <FooterHeading>Quick Links</FooterHeading>
            <FooterText>
              <a href="/">Home</a>
            </FooterText>
            <FooterText>
              <a href="/predict">Age Predictor</a>
            </FooterText>
            <FooterText>
              <a
                href="https://github.com/dixisouls/abalone_age_prediction"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </FooterText>
          </FooterSection>

          <FooterSection>
            <FooterHeading>Connect</FooterHeading>
            <FooterText>
              Have questions or suggestions? Reach out to us on social media or
              check out the code repository.
            </FooterText>
            <SocialLinks>
              <SocialLink
                href="https://github.com/dixisouls"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialLink>
            </SocialLinks>
          </FooterSection>
        </FooterContent>

        <Copyright>
          &copy; {currentYear} Abalone Age Detection System. All rights
          reserved. Made by{" "}
          <a
            href="https://divyapanchal.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Divya Panchal
          </a>
          .
        </Copyright>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
