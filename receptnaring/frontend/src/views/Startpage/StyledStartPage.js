import styled from "styled-components";
import { Spinner, Container } from "reactstrap";


export const StartPageContainer = styled(Container)`
  padding: 40px;
`;

export const StyledSpinner = styled(Spinner)`
  color: #72c554;
  width: 150px !important;
  height: 150px !important;
  justify-content: center;
`;

export const RecipeWrapper = styled.div`
  border-radius: 9px;
  padding: 0px 25px 19px 25px;
  background-color: ${props => props.color};
  height: auto;
  display: flex;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const TextBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
  height: 50px;
  border: none !important;
  width: 200px;
  border-radius: 9px 9px 0 0;
  border: 1px solid #707070;
  @import url('https://fonts.googleapis.com/css?family=Cabin+Sketch:400,700&display=swap" rel="stylesheet');
  font-family: "Cabin Sketch", cursive;
`;

export const TextInfo = styled.h1`
  text-transform: uppercase;
  font-size: 36px;
  text-align: center;
  color: ${props => props.color};
  text-shadow: 2px 2px #000;
`;



export const WcagDiv = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
color:white;
margin:0 auto;
height:50px;
width:20%;
background-color:transparent;
`;


export const Wcagcontrastboxyellow = styled.button`
background-image:url('../images/eyeyellow.svg');
background-size:100% 100%;
align-self:center;
height:20px;
width:40px;
background-color:black;
border-radius:10px;
cursor: pointer;
`;

export const Wcagcontrastboxstandard = styled.button`
background-image:url('../images/eyestandard.svg');
background-size:100% 100%;
align-self:center;
height:20px;
width:40px;
background-color:white;
border-radius:10px;
cursor: pointer;
`;

export const Wcagcontrastboxwhite = styled.button`
background-image:url('../images/eyewhite.svg');
background-size:100% 100%;
align-self:center;
height:20px;
width:40px;
background-color:black;
border-radius:10px;
cursor: pointer;
`;