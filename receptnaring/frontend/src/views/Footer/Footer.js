import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { FooterRow, IconText, StyledCol, StyledImage, ContactText, ContactCol } from './StyledFooter';

class Footer extends Component {

  footerIconList = [
    {
      name: 'Facebook',
      src: './images/facebook.svg',
      id: 0
    },
    {
      name: 'Instagram',
      src: './images/instagram-logo.svg',
      id: 1
    },
    {
      name: 'Twitter',
      src: './images/twitter-logo-button.svg',
      id: 2
    }
  ];

  renderIcons = () => this.footerIconList.map(({ name, src, id }) =>
    <StyledCol key={id} lg="4">
      <StyledImage src= {src} />
      <IconText>
        {name}
    </IconText>
    </StyledCol>
  );

  render() {
    return (
      <Container>
        <FooterRow>
          {this.renderIcons()}
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