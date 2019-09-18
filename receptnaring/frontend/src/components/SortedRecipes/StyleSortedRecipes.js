import styled from 'styled-components';
import { Col, CardBody, Spinner } from 'reactstrap';

export const StyledCol = styled(Col)`
  &:hover > div > div > a > p{
    text-decoration: underline !important;
  }
`

export const StyledCardBody = styled(CardBody)`
  padding: 0px !important;
  display:flex;
`

export const StyledCardTitle = styled.p`
  padding-bottom: 1px;
  padding-left: 4px;
  height: 45px;
  margin-top: -45px;
  position: relative;
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  font-family: 'Open Sans', sans-serif;
  font-size: 1.7em;
  margin-bottom: 0px !important;
  color:#fff;
  text-shadow: 1px 1px 2px black;
  background-color:#00000082;
  width:100%;
`

export const StyledSpinner = styled(Spinner)`
  display:flex !important;
  justify-content: center;
  color:green;
`

export const StyledH3 = styled.h3`
  font-size: 45px;
  letter-spacing: -3px;
  padding-bottom: 15px;
  font-family: 'Open Sans', sans-serif;

`