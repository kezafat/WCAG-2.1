import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

export const StyledChart = styled(Doughnut)`
`;

export const StyledLabels = styled.div`

`

export const StyledList = styled.ul`
display:flex;
flex-direction:column;
font-size:14px;
`

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