import React, { useState, useContext } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { StyledRow } from './StyledCreateRecipe';
import UploadImage from './components/UploadImage';
import TitlePersonTime from './components/TitlePersonTime';

const CreateRecipe = () => {

  const [state, setState] = useState({
    'img': 'upload-image.png'
  })

  return (
    <Container>
      <StyledRow className="text-center">
        <Col md="6" sm="12">
          <UploadImage s={[state, setState]} />
        </Col>
        <Col md="6" sm="12">
          <TitlePersonTime s={[state, setState]} />
        </Col>
      </StyledRow>
      <Row className="text-center">
        <Col md="6" sm="12">HELLO</Col>
        <Col md="6" sm="12">HELLO</Col>
      </Row>
    </Container>
  )
};

export default CreateRecipe;