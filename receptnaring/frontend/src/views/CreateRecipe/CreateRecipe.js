import React, { useState } from 'react';
import { Redirect } from 'react-router'
import { Container, Row, Col, Button } from 'reactstrap';
import { StyledRow } from './StyledCreateRecipe';
import UploadImage from './components/UploadImage';
import TitlePersonTime from './components/TitlePersonTime';
import IngredientInput from './components/IngredientInput';
import AddStep from './components/AddStep';

const CreateRecipe = () => {
  const initState = { 'img': 'upload-image.png' }
  const [state, setState] = useState(initState)

  const clearForms = () => {
    setState({ ...initState, go: "/" });
  }

  return (
    <Container>
      {state.go && <Redirect to="/"></Redirect>}
      <StyledRow className="text-center">
        <Col md="6" sm="12">
          <UploadImage s={[state, setState]} />
        </Col>
        <Col md="6" sm="12">
          <TitlePersonTime s={[state, setState]} />
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
      <Row className="text-center d-flex justify-content-around mt-4">
        <Button color="danger" size="lg" onClick={clearForms}>Avbryt</Button>
        <Button color="success" size="lg">Spara</Button>
      </Row>
    </Container>
  )
};

export default CreateRecipe;