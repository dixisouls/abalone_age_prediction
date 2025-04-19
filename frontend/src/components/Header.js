import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaWater } from "react-icons/fa";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.deepBlue};
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.coral};
    }
  }

  svg {
    margin-right: 0.5rem;
    color: ${(props) => props.theme.colors.coral};
  }
`;

const Nav = styled.nav`
  display: flex;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.deepBlue};
    padding: 1rem;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  text-decoration: none;
  padding: 0.5rem 0;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${(props) => props.theme.colors.coral};
    transition: width 0.3s ease;
  }

  &:hover,
  &.active {
    color: ${(props) => props.theme.colors.coral};

    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    display: block;
    padding: 0.75rem;

    &:after {
      display: none;
    }
  }
`;

const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Hamburger = styled.div`
  width: 30px;
  height: 20px;
  position: relative;

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 3px;
    transition: all 0.3s ease;

    &:nth-child(1) {
      top: ${(props) => (props.isOpen ? "9px" : "0")};
      transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      top: 9px;
      opacity: ${(props) => (props.isOpen ? "0" : "1")};
    }

    &:nth-child(3) {
      top: ${(props) => (props.isOpen ? "9px" : "18px")};
      transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo>
          <NavLink to="/">
            <FaWater />
            <span>Abalone Age</span>
          </NavLink>
        </Logo>

        <MobileMenuToggle
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <Hamburger isOpen={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </MobileMenuToggle>

        <Nav isOpen={isMenuOpen}>
          <NavMenu>
            <NavItem>
              <StyledNavLink to="/" end>
                Home
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/predict">Age Predictor</StyledNavLink>
            </NavItem>
          </NavMenu>
        </Nav>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
