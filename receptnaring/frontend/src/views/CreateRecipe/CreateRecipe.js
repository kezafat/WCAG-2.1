import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

const CreateRecipe = () => {

  const StyledRow = styled(Row)`
    border-bottom: 1px solid #707070;
  `;

  return (
    <Container>
      <StyledRow>
        <Col md="6" sm="12">HELLO</Col>
        <Col md="6" sm="12">HELLO</Col>
      </StyledRow>
      <Row>
        <Col md="6" sm="12">HELLO</Col>
        <Col md="6" sm="12">HELLO</Col>
      </Row>
    </Container>
  )
};

export default CreateRecipe;