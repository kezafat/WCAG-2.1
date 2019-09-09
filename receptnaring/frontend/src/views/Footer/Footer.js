import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { FooterRow, IconText, StyledCol, StyledImage, ContactText, ContactCol } from './StyledFooter';

class Footer extends Component {

  render() {
    return (
      <Container>
        <FooterRow>
          <StyledCol lg="4">
            <StyledImage src="./images/facebook.svg" />
            <IconText>
              Facebook
              </IconText>
          </StyledCol>
          <StyledCol lg="4">
            <StyledImage src="./images/instagram-logo.svg" />
            <IconText>
              Instagram
              </IconText>
          </StyledCol>
          <StyledCol lg="4">
            <StyledImage src="./images/twitter-logo-button.svg" />
            <IconText>
              Twitter
              </IconText>
          </StyledCol>
          <ContactCol lg="12">
            <ContactText>
              <a href="mailto:info@receptnaring.se">info@receptnaring.se</a>
            </ContactText>
          </ContactCol>
        </FooterRow>
      </Container>
    )
  }
};

export default Footer;