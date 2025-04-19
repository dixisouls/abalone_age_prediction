import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
  overflow: hidden;
  transition: ${(props) => props.theme.transition};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: ${(props) => (props.interactive ? "translateY(-5px)" : "none")};
    box-shadow: ${(props) =>
      props.interactive
        ? "0 8px 20px rgba(0, 51, 102, 0.2)"
        : props.theme.boxShadow};
  }
`;

const CardHeader = styled.div`
  padding: ${(props) => (props.compact ? "1rem 1.5rem" : "1.5rem 2rem")};
  border-bottom: ${(props) => (props.divider ? "1px solid #eaeaea" : "none")};
  background-color: ${(props) =>
    props.accent ? props.theme.colors.lightGrey : "transparent"};
`;

const CardTitle = styled.h3`
  margin-bottom: ${(props) => (props.subtitle ? "0.5rem" : "0")};
  font-size: ${(props) => (props.compact ? "1.25rem" : "1.5rem")};
  color: ${(props) => props.theme.colors.deepBlue};
`;

const CardSubtitle = styled.p`
  color: ${(props) => props.theme.colors.teal};
  margin: 0;
  font-size: 0.9rem;
`;

const CardContent = styled.div`
  padding: ${(props) => (props.compact ? "1rem 1.5rem" : "1.5rem 2rem")};
  flex: 1;
`;

const CardFooter = styled.div`
  padding: ${(props) => (props.compact ? "1rem 1.5rem" : "1.5rem 2rem")};
  border-top: 1px solid #eaeaea;
  background-color: ${(props) =>
    props.accent ? props.theme.colors.lightGrey : "transparent"};
`;

const Card = ({
  children,
  title,
  subtitle,
  headerContent,
  footerContent,
  divider = true,
  compact = false,
  interactive = false,
  headerAccent = false,
  footerAccent = false,
  className,
  ...props
}) => {
  return (
    <CardWrapper interactive={interactive} className={className} {...props}>
      {(title || subtitle || headerContent) && (
        <CardHeader divider={divider} compact={compact} accent={headerAccent}>
          {title && (
            <CardTitle compact={compact} subtitle={subtitle}>
              {title}
            </CardTitle>
          )}
          {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
          {headerContent}
        </CardHeader>
      )}
      <CardContent compact={compact}>{children}</CardContent>
      {footerContent && (
        <CardFooter compact={compact} accent={footerAccent}>
          {footerContent}
        </CardFooter>
      )}
    </CardWrapper>
  );
};

export default Card;
