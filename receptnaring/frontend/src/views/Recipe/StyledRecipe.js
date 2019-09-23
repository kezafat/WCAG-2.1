import styled from 'styled-components';
import { Row, Col, Container } from 'reactstrap';

export const RecipeContainer = styled(Container)`

  padding: 40px;
  padding-bottom: 60px;
  padding-top: 60px;

`;

export const Image = styled(Col)`

  padding-left: 0px !important;
  padding-right: 0px !important;

`;

export const RecipeRow = styled(Row)`


`;

export const RecipeTitle = styled.h1`

@import url('https://fonts.googleapis.com/css?family=Cabin+Sketch:400,700&display=swap" rel="stylesheet');
font-family: 'Cabin Sketch', cursive;
font-size: 50px;
padding-left: 20px;

`;

export const Time = styled.h3`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');
  font-family: 'Open Sans', sans-serif;
  color: rgba(0, 0, 0, 0.5);
  font-size: 20px;
  padding-left: 20px;

`;

export const RecipeImage = styled.img`

  width: 100%;
  object-fit: cover;

`;

export const Text = styled.p`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');
  font-family: 'Open Sans', sans-serif;
  font-weight: 200;
  font-size: 20px;
  max-width: 600px;
  margin-left: 35px;

`;

export const Portions = styled(Col)`

  padding: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

`;

export const PortionPicker = styled.div`

  background-color: black;
  display: flex;
  padding: 4px;
  border-radius: 25px;


`;

export const PortionButton = styled.button`

  border: 1.2px solid white;
  color: white;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 25px;
  user-select: none;
  position: relative;
  background-color: black;

  p{
    position: absolute;
    top:-7px;
    right: 0px;
    width: 27.7px;
    text-align: center;
  }
  
`;

export const PortionText = styled.h2`

  display: inline-block;
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  display: flex;
  align-items: center;
  padding: 0 10px 0 10px;
  color: white;

`;

export const H2Instructions = styled.h2`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');
  font-family: 'Open Sans', sans-serif;
  padding-top: 20px;

`;

export const H2Ingredients = styled.h2`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');
  font-family: 'Open Sans', sans-serif;
  display: inline-block;

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

export const RoundCheckbox = styled(Col)`

position: relative;
margin: auto;
margin-top: 2px;
display:flex;
padding-left: 0px !important;
padding-right: 0px !important;

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
