import React from "react";
import styled, { keyframes } from "styled-components";
import { FaWater } from "react-icons/fa";

const wave = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
`;

// Add a background circle to make the wave icon stand out better
const IconBackground = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`;

const WaveIcon = styled(FaWater)`
  color: ${(props) => props.theme.colors.teal};
  font-size: 2rem;
  animation: ${wave} 1.5s ease-in-out infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10; // Ensure it appears on top of the circles
`;

const Circle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-top-color: ${(props) => props.theme.colors.lightBlue};
  border-radius: 50%;
  animation: ${rotate} 1.5s linear infinite;

  &:nth-child(2) {
    border-top-color: ${(props) => props.theme.colors.deepBlue};
    animation-duration: 2s;
  }

  &:nth-child(3) {
    border-top-color: ${(props) => props.theme.colors.coral};
    animation-duration: 2.5s;
  }
`;

const LoadingText = styled.p`
  color: ${(props) => props.theme.colors.deepBlue};
  font-weight: 500;
  font-size: 1.1rem;
  margin: 0;
`;

const SubText = styled.p`
  color: ${(props) => props.theme.colors.teal};
  font-size: 0.9rem;
  margin-top: 0.5rem;
  opacity: 0.8;
`;

const LoadingSpinner = ({
  message = "Processing your data...",
  subMessage,
}) => {
  return (
    <LoadingWrapper>
      <SpinnerContainer>
        <Circle />
        <Circle />
        <Circle />
        <IconBackground />
        <WaveIcon />
      </SpinnerContainer>
      <LoadingText>{message}</LoadingText>
      {subMessage && <SubText>{subMessage}</SubText>}
    </LoadingWrapper>
  );
};

export default LoadingSpinner;
