import styled from 'styled-components';
import { Container, Row } from 'reactstrap';

export const StyledRow = styled(Row)`
  padding-top: 2rem;
  border-bottom: 1px solid #707070;
`;

export const StyledContainer = styled(Container)`
  padding-top: 60px;
  padding-bottom: 60px;
  color: ${props=>props.text};

`;

export const Wrapper = styled.div`
background-color: ${props=>props.softbg};
border-radius: 9px;
padding: 25px;
`;

export const BackButton = styled.img`
  width: 40px;
  cursor: pointer;
  padding-bottom:30px;
`;