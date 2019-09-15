import styled from 'styled-components';
import { Card, CardImg, CardBody, CardTitle, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom'


export const SortedRecipesWrapper = styled.div`
`
export const StyledCard = styled(Card)`
`

export const StyledCardBody = styled(CardBody)`
padding: 0px !important;
`

export const StyledCardImg = styled(CardImg)`

`

export const StyledCardTitle = styled(CardTitle)`
 position:absolute;
 bottom: 1px;
 left: 4px;
 @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
 font-family: 'Open Sans', sans-serif;
 font-size: 1.7em;
 margin-bottom: 0px !important;
 color:#fff;
 text-shadow: 1px 1px 2px black;
 &:hover{
        text-decoration: underline;
    }
`

export const StyledSpinner = styled(Spinner)`
display:flex !important;
justify-content: center;
color:green;
`
export const StyledLink = styled(Link)`
text-decoration:none;
 &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: underline !important;
    }
`

export const StyledH3 = styled.h3`
font-size: 45px;
letter-spacing: -3px;
padding-bottom: 15px;
font-family: 'Open Sans', sans-serif;

`