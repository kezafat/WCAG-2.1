import React from "react";
import { Link } from 'react-router-dom';
import {
  StyledNavbar,
  StyledButton,
  StyledLogo,
  StyledPositionDiv,
  StyledButtonWrapper
} from "./StyleNavbar";

const NavbarComponent = (color) => {
let colors = color.color

  return (

    <StyledNavbar color={colors.divcolor}>
      <StyledPositionDiv>
        <Link to="/">
          <StyledLogo src={colors.logo} />
        </Link>
      </StyledPositionDiv>
      <StyledButtonWrapper>
        <Link to="/skapa-recept">
          <StyledButton color={colors.divcolor} text={colors.textcolor} border={colors.borderportion}>Skapa recept</StyledButton>
        </Link>
      </StyledButtonWrapper>
    </StyledNavbar>

  );
};

export default NavbarComponent;
