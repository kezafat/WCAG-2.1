import styled from 'styled-components';
import { Button, Navbar, Nav, NavbarBrand,  NavItem , Container} from 'reactstrap';

export const StyledLogo = styled.img`
width:300px;
`

export const StyledNavbar = styled(Navbar)`
  display:flex;
  background-color: white;
  height:80px;
  padding: 0px 15px 0px 15px;
`;

export const StyledNavbarBrand = styled(NavbarBrand)`
display:flex;
flex:1;
`;


export const StyledNav = styled(Nav)`
justify-content: flex-end;
color: black;
flex:1;
display: flex;

  
`;


export const StyledNavItem = styled(NavItem)`
list-style-type:none;
margin:0;
align-self:center;

`;

export const StyledContainer = styled(Container)`
`

export const StyledButton = styled(Button)`

font-family: Oswald;
 background-color:#72C554;
 font-size:1.5rem;
 color:white;
 text-decoration:none;
 width:auto;
 border-radius:10px;
 cursor:pointer;

 @media (max-width: 380px){
  font-size:0.85rem;
}

`;