import React from "react";
import styled, { css } from "styled-components";

const ButtonVariants = {
  primary: css`
    background-color: ${(props) => props.theme.colors.teal};
    color: white;

    &:hover:not(:disabled) {
      background-color: ${(props) =>
        props.disabled ? props.theme.colors.teal : props.theme.colors.deepBlue};
    }
  `,
  secondary: css`
    background-color: transparent;
    color: ${(props) => props.theme.colors.teal};
    border: 2px solid ${(props) => props.theme.colors.teal};

    &:hover:not(:disabled) {
      background-color: ${(props) => props.theme.colors.teal};
      color: white;
    }
  `,
  accent: css`
    background-color: ${(props) => props.theme.colors.coral};
    color: white;

    &:hover:not(:disabled) {
      background-color: ${(props) =>
        props.disabled ? props.theme.colors.coral : "#ff6b3d"};
    }
  `,
};

const ButtonSizes = {
  small: css`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  `,
  medium: css`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  `,
  large: css`
    padding: 1rem 2rem;
    font-size: 1.125rem;
  `,
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.borderRadius};
  font-weight: 500;
  transition: ${(props) => props.theme.transition};
  border: none;
  cursor: pointer;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};

  ${(props) => ButtonVariants[props.variant || "primary"]}
  ${(props) => ButtonSizes[props.size || "medium"]}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    margin-right: ${(props) =>
      props.iconPosition === "right" ? "0" : "0.5rem"};
    margin-left: ${(props) =>
      props.iconPosition === "right" ? "0.5rem" : "0"};
  }

  ${(props) =>
    props.loading &&
    css`
      position: relative;
      color: transparent;

      &:after {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: white;
        animation: spin 0.8s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `}
`;

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  type = "button",
  disabled = false,
  loading = false,
  fullWidth = false,
  icon = null,
  iconPosition = "left",
  onClick,
  ...rest
}) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      disabled={disabled || loading}
      loading={loading}
      fullWidth={fullWidth}
      iconPosition={iconPosition}
      onClick={onClick}
      {...rest}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </StyledButton>
  );
};

export default Button;
