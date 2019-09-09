import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { FooterRow, IconText, StyledCol, StyledImage } from './StyledFooter';

class Footer extends Component {

  render() {
    return (
      <Container>
        <FooterRow>
          <StyledCol lg="3">
            <StyledImage src="./images/facebook.svg" />
            <IconText>
              Facebook
              </IconText>
          </StyledCol>
          <StyledCol lg="3">
            <StyledImage src="./images/instagram-logo.svg" />
            <IconText>
              Instagram
              </IconText>
          </StyledCol>
          <StyledCol lg="3">
            <StyledImage src="./images/twitter-logo-button.svg"/>
            <IconText>
              Twitter
              </IconText>
          </StyledCol>
        </FooterRow>
      </Container>
    )
  }
};

export default Footer;