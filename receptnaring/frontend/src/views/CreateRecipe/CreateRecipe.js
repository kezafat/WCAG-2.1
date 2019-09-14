import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { StyledRow } from './StyledCreateRecipe';
import UploadImage from './components/UploadImage';
import TitlePersonTime from './components/TitlePersonTime';
import IngredientInput from './components/IngredientInput';
import AddStep from './components/AddStep';

class CreateRecipe extends Component {

  render() {
    return (
      <Container>
        <StyledRow className="text-center">
          <Col md="6" sm="12">
            <UploadImage />
          </Col>
          <Col md="6" sm="12">
            <TitlePersonTime />
          </Col>
        </StyledRow>
        <Row className="text-center">
          <Col md="6" sm="12">
            <IngredientInput />
          </Col>
          <Col md="6" sm="12">
            <AddStep />
          </Col>
        </Row>
      </Container>
    )
  }
};

export default CreateRecipe;