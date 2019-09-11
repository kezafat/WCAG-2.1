import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { FooterRow, IconText, StyledCol, StyledImage, ContactText, ContactCol } from './StyledFooter';
import { footerIconList } from '../../staticData';

class Footer extends Component {

  renderIcons = () => footerIconList.map(({ name, src, id }) =>
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