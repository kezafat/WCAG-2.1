import React from 'react';

import {
StyledNavbar, 
StyledNavbarBrand, 
StyledLogo,
StyledButton, 
StyledNavItem, 
StyledNav
} from "./StyleNavbar"



const NavbarComponent = () => {
    return (

        <StyledNavbar>
            <StyledNavbarBrand href="/"  >
                <StyledLogo src={'./images/svart_skugga.png'}/>
                </StyledNavbarBrand>
            <StyledNav navbar>
                <StyledNavItem>
                    <a href="path">
                    <StyledButton>Skapa recept</StyledButton></a>
                </StyledNavItem>
            </StyledNav>
        </StyledNavbar>


    );
}


export default NavbarComponent