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
        <Link to="/">
          <StyledLogo src="/images/HAMIDSLOGO.svg" />
        </Link>
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
