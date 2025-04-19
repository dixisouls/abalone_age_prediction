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

const WaveIcon = styled(FaWater)`
  color: ${(props) => props.theme.colors.teal};
  font-size: 2.5rem;
  animation: ${wave} 1.5s ease-in-out infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

const LoadingSpinner = ({ message = "Processing your data..." }) => {
  return (
    <LoadingWrapper>
      <SpinnerContainer>
        <Circle />
        <Circle />
        <Circle />
        <WaveIcon />
      </SpinnerContainer>
      <LoadingText>{message}</LoadingText>
    </LoadingWrapper>
  );
};

export default LoadingSpinner;
