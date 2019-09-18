import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

export const RecipeRow = styled(Row)`

  background-color: #F5F5F5;
  padding: 20px;

`;

export const RecipeTitle = styled.h1`

@import url('https://fonts.googleapis.com/css?family=Cabin+Sketch:400,700&display=swap" rel="stylesheet');
font-family: 'Cabin Sketch', cursive;

`;

export const RecipeImage = styled.img`

  width: 400px;
  height: 300px;
  object-fit: cover;

`;

export const Text = styled.p`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');
  font-family: 'Open Sans', sans-serif;
  font-weight: 200;
  font-size: 20px;
  max-width: 600px;

`;

export const Portions = styled(Col)`

`;

export const PortionButton = styled.span`
  
  background-color: #5CB85C;
  padding: 7px;
  border-radius: 50%;
  cursor: pointer;
  
`;

export const PortionText = styled.h2`

  display: inline-block;

`;

export const H2Text = styled.h2`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');
  font-family: 'Open Sans', sans-serif;
  padding-bottom: 20px;

`;

export const List = styled.ul`
`;

export const ListItem = styled.li`

  border-bottom: 1px solid lightgray;
  padding-bottom: 5px;
  padding: 7px;
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');
  font-family: 'Open Sans', sans-serif;
  font-weight: 200;
  font-size: 20px;

`;

export const Ingredient = styled(Col)`

  background-color: #FCFAF1;
  padding: 20px;

`;

export const Instructions = styled(Col)`

  background-color: white;
  padding: 20px;
  
  .row{
    padding: 15px;
  }

`;

export const RoundCheckbox = styled.div`
  
position: relative;
margin: auto;
margin-top: 2px;

label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
  -webkit-transition: border 0.02s;
  transition: border 0.02s;
  &:hover{
    border: 2px solid #5CB85C;
  }
}

label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 7px;
  opacity: 0;
  position: absolute;
  top: 8px;
  transform: rotate(-45deg);
  width: 12px;
}

input[type="checkbox"] {
  visibility: hidden;
}

input[type="checkbox"]:checked + label {
  background-color: #5CB85C;
  border-color: #5CB85C;
}

input[type="checkbox"]:checked + label:after {
  opacity: 1;
}

input[type="checkbox"]:focus + label.checkbox:before {    
    border: 1px solid #66afe9;
}

`;
