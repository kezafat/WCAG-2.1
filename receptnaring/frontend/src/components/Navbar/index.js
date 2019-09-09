import React from "react";
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import {
  StyledNavbar,
  StyledLogo,
  StyledButton,
  StyledNavItem,
  StyledNav,
} from "./StyleNavbar";

const NavbarComponent = () => {
  return (
    <Container>
      <StyledNavbar>
        <StyledNav>
          <StyledLogo src={"./images/LogoRN.png"} />
        </StyledNav>
        <StyledNav navbar>
          <StyledNavItem>
            <Link to="/skapa-recept">
              <StyledButton>Skapa recept</StyledButton>
            </Link>
          </StyledNavItem>
        </StyledNav>
      </StyledNavbar>
    </Container>
  );
};

export default NavbarComponent;
