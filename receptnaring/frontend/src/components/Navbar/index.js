import React from "react";
import { Link } from 'react-router-dom';
import {
  StyledNavbar,
  StyledButton,
  StyledLogo,
  StyledPositionDiv,
  StyledButtonWrapper
} from "./StyleNavbar";

const NavbarComponent = () => {
  return (

    <StyledNavbar>
      <StyledPositionDiv>
        <StyledLogo src="/images/HAMIDSLOGO.svg"></StyledLogo>
      </StyledPositionDiv>
      <StyledButtonWrapper>
      <Link to="/skapa-recept">
        <StyledButton>Skapa recept</StyledButton>
      </Link>
      </StyledButtonWrapper>
    </StyledNavbar>

  );
};

export default NavbarComponent;
