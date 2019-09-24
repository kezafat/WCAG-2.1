import React, { Component } from "react";
import {
  FooterRow,
  IconText,
  StyledCol,
  StyledImage,
  ContactText,
  TommyStyle
} from "./StyledFooter";
import { footerIconList } from "../../staticData";
import { Row } from "reactstrap";
import equal from 'fast-deep-equal'


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color
    };
  }

  renderIcons = () =>
    footerIconList.map(({ name, src, id }) => (
      <StyledCol key={id} lg="4">
        <IconText href="/">
          <StyledImage src={src} />
          <br />
          <TommyStyle text={this.state.color.textcolor}>{name}</TommyStyle>
        </IconText>
      </StyledCol>
    ));


    componentDidUpdate(prevProps) {
      if(!equal(this.props.color, prevProps.color)) 
      {
        this.setState({color:this.props.color})
      }
  
    } 

  render() {
    let {color} = this.state
    return (
      <FooterRow bgcolor={color.divcolor} className="container-fluid">
        <div className="container">
          <Row className="d-flex">{this.renderIcons()}</Row>
          <Row>
            <ContactText
              className="d-block mx-auto mt-3 mb-3 font-weight-bold"
              href="mailto:info@receptnaring.se"
            >
              info@receptnaring.se
            </ContactText>
          </Row>
        </div>
      </FooterRow>
    );
  }
}

export default Footer;
