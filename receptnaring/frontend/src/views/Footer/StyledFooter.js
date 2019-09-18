import styled from 'styled-components'
import { Col } from 'reactstrap'


export const FooterRow = styled.footer`
    background-color: #000;
    padding-top: 30px;
    border-top: 1px solid #eadad2;
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
`;

export const ContactText = styled.a`
  font-size: 24px;
`;