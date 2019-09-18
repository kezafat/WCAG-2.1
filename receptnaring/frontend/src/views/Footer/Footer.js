import React, { Component } from 'react';
import { FooterRow, IconText, StyledCol, StyledImage, ContactText } from './StyledFooter';
import { footerIconList } from '../../staticData';
import { Row } from 'reactstrap'

class Footer extends Component {

  renderIcons = () => footerIconList.map(({ name, src, id }) =>
    <StyledCol key={id} lg="4">
      <IconText href="/">
        <StyledImage src={src} /><br />
        <span className="text-muted">{name}</span>
      </IconText>
    </StyledCol>
  );

  render() {
    return (
      <FooterRow className="container-fluid">
        <div className="container">
          <Row className="d-flex">
            {this.renderIcons()}
          </Row>
          <Row>
            <ContactText className="d-block mx-auto mt-3 mb-3 font-weight-bold" href="mailto:info@receptnaring.se">info@receptnaring.se</ContactText>
          </Row>
        </div>
      </FooterRow>
    )
  }
};

export default Footer;