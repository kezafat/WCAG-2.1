import React from "react";
import {Container} from "reactstrap"
import {
  StyledNavbar,
  StyledNavbarBrand,
  StyledLogo,
  StyledButton,
  StyledNavItem,
  StyledNav,
  StyledContainer
} from "./StyleNavbar";

const NavbarComponent = () => {
  return (
    <Container>
      <StyledNavbar>
        <StyledNavbarBrand href="/">
          <StyledLogo src={"./images/LogoRN.png"} />
        </StyledNavbarBrand>
        <StyledNav navbar>
          <StyledNavItem>
            <a href="path">
              <StyledButton>Skapa recept</StyledButton>
            </a>
          </StyledNavItem>
        </StyledNav>
      </StyledNavbar>
    </Container>
  );
};

export default NavbarComponent;
