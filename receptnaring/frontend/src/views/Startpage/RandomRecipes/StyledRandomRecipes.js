import styled from 'styled-components';
import { Col, Card, CardImg, CardBody, } from 'reactstrap';
import { Link } from 'react-router-dom';

export const StyledCol = styled(Col)`
  margin-top: 30px;
  text-align: center;
  max-width: 100% !important;
  &:nth-child(even) > div > div > a div {
    order: -1;
    background-color: ${props => props.color};
  }
  &:first-child:nth-last-child(1){
    max-width: 100% !important;
    flex: 1 !important;
  }
`

export const StyledCard = styled(Card)`
  margin-bottom: 10px;
  border:none !important;
  a:hover {
        text-decoration: underline !important;
    }
`

export const StyledCardBody = styled(CardBody)`
  padding: 0px !important;
  box-shadow: 0px 0px 5px 0px #000;
`

export const StyledCardImg = styled(CardImg)`
  
`

export const StyledLink = styled(Link)`
display: flex;
  flex-direction: column;
`

export const StyledCardTitle = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  font-family: 'Open Sans', sans-serif;
  font-size: 19px;
  margin-bottom: 0px !important;
  background-color:${props => props.bgcolor};
  font-weight: bold;
  color:${props => props.color};
`

export const StyledDiv = styled.div`
  background-color:${props => props.color};
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  text-align: center;
  display: flex;
  align-items: center;
`