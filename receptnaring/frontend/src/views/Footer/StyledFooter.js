import styled from 'styled-components'
import { Row, Col } from 'reactstrap'

export const FooterRow = styled(Row)`
    background-color: #EFE9E6;
    align-items: center;
    padding-top: 30px;
    margin-top: 30px;
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

export const ContactCol = styled(Col)`
    text-align: center;
`;

export const StyledImage = styled.img`
    height: 36px;
    padding-right: 15px;
`;

export const ContactText = styled.p`
    font-size: 24px;
    margin: 20px 20px;
`;