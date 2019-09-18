import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

export const StyledChart = styled(Doughnut)`
display:flex;
justify-content:center;
`;




export const StyledSpan = styled.div`
margin-right:5px;
display:flex;
flex-direction:row;
border-radius:50%;
  width:20px;
  height:20px;
  background-color: ${props => props.color};
`;

export const StyledLi = styled.li`
margin:5px;
display:flex;
flex-direction:row;
align-items:center;
`