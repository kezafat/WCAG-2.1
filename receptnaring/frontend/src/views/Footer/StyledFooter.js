import styled from 'styled-components'
import { Col } from 'reactstrap'

export const TommyStyle = styled.span`
  color: ${props => props.text};
`
export const FooterRow = styled.footer`
    background-color: ${props => props.bgcolor};
    padding-top: 30px;
    
`;

export const IconText = styled.a`
  font-size: 26px;
  display: inline-block;
  margin: 0;
  margin-left: 10px;
  vertical-align: middle;
  font-family: 'Open Sans', sans-serif;
`;

export const StyledCol = styled(Col)`
  text-align: center;
`;

export const StyledImage = styled.img`
  height: 36px;
  background-color:black;
  border-radius:50%;
`;

export const ContactText = styled.a`
  font-size: 24px;
`;