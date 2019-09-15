import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

export const RecipeRow = styled(Row)`

  background-color: #F5F5F5;
  padding: 20px;

`;

export const PortionButton = styled.span`
  
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
  
`;

export const List = styled.ul`
`;

export const ListItem = styled.li`

  border-bottom: 1px solid lightgray;
  padding-bottom: 5px;


`;

export const Ingredient = styled(Col)`

  background-color: #FCFAF1;
  padding: 20px;

`;

export const Instructions = styled(Col)`

  background-color: white;
  padding: 20px;

`;

export const RoundCheckbox = styled.div`
  
position: relative;
margin: auto;

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
