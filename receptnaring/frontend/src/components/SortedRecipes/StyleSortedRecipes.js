import styled from "styled-components";
import { Col, Row, CardBody, Spinner, Card } from "reactstrap";

export const StyledCol = styled(Col)`
  &:hover > div > div > a > p {
    text-decoration: underline !important;
  }
  @media (max-width: 1199.98px) {
    padding-bottom:25px;
   }
`;
export const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff25;
  border-radius: 9px;
  margin: 0 !important;
  padding: 15px;
`;

export const StyledCard = styled(Card)`
  border: none !important;
`;

export const StyledCardBody = styled(CardBody)`
  padding: 0px !important;
  display: flex;

`;

export const StyledCardTitle = styled.p`
  height: 65px;
  padding-top: 15px;
  font-weight: bold;
  @import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
  font-family: "Open Sans", sans-serif;
  font-size: 13px;
  color: black;
  text-align: center;
`;

export const StyledSpinner = styled(Spinner)`
  display: flex !important;
  justify-content: center;
  color: green;
`;

export const StyledH3 = styled.h3`
  text-shadow: 2px 2px #000;
  color: white;
  text-align: center;
  font-size: 3rem;
  margin-top: 30px;
  letter-spacing: -3px;
  padding-bottom: 15px;
  @import url('https://fonts.googleapis.com/css?family=Cabin+Sketch:400,700&display=swap" rel="stylesheet');
  font-family: "Cabin Sketch", cursive;
`;
