import styled from 'styled-components';
import {
  Button,
  Navbar,
  Nav,
  NavItem
} from 'reactstrap';

export const StyledLogo = styled.img`
  width: 300px;
`

export const StyledNavbar = styled(Navbar)`
  display: flex;
  background-color: white;
  height: auto;
  padding: 0px 15px 0px 15px;
  background: #fff;
`;

export const StyledNav = styled(Nav)`
  color: black;
  flex:1;
  display: flex;
  background: #fff;
`;


export const StyledNavItem = styled(NavItem)`
  list-style-type:none;
  margin:0;
  align-self: flex-end;
`;

export const StyledButton = styled(Button)`
 font-family: 'Oswald', sans-serif;
 background-color: #72C554 !important;
 font-size:1.5rem;
 color:white;
 text-decoration:none;
 width:auto;
 border-radius:10px;
 cursor:pointer;
 border: none;
 @import url('https://fonts.googleapis.com/css?family=Oswald:400,500,700&display=swap');
 @media (max-width: 380px){
  font-size:0.85rem;
}

`;