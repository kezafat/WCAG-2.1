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
  background-color: #ffffff25;
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
  background-color: #ffffff25;
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
  color: white;
  text-shadow: 2px 2px #000;
`;
