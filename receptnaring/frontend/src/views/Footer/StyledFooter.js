import styled from 'styled-components'
import { Row, Col } from 'reactstrap'

export const FooterRow = styled(Row)`
    background-color: #EFE9E6;
    height: 270px;
    align-items: center;
`;

export const IconText = styled.p`
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
`;

export const ContactText = styled.p`
    font-size: 24px;
    margin-bottom: 40px;
`;