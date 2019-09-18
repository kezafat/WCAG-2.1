import React from "react";
import { Link } from 'react-router-dom';
import {
  StyledNavbar,
  StyledLogo,
  StyledButton,
  StyledNavItem,
  StyledNav,
  NavbarContainer
} from "./StyleNavbar";

const NavbarComponent = () => {
  return (
    <NavbarContainer>
      <StyledNavbar>
        <StyledNav>
          <a href="/">
            <StyledLogo src={"./images/LogoRN.png"} />
          </a>
        </StyledNav>
        <StyledNav navbar>
          <StyledNavItem>
            <Link to="/skapa-recept">
              <StyledButton>Skapa recept</StyledButton>
            </Link>
          </StyledNavItem>
        </StyledNav>
      </StyledNavbar>
    </NavbarContainer>
  );
};

export default NavbarComponent;
