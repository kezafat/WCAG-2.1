import React, { useState } from 'react';
import { Redirect } from 'react-router'
import { Container, Row, Col, Button } from 'reactstrap';
import { StyledRow } from './StyledCreateRecipe';
import UploadImage from './components/UploadImage';
import TitlePersonTime from './components/TitlePersonTime';
const axios = require("axios");

const CreateRecipe = () => {
  const initState = { 'img': 'upload-image.png' }
  const [state, setState] = useState(initState)
  const [formstate, setFormstate] = useState({ 'status': false })

  const clearForms = () => {
    setState({ ...initState, go: "/" });
  }

  const sendForms = () => {
    axios.post("http://localhost:3001/api/recipe", state)
      .then((res) => {
        console.log("res", res)
        if (res.data.name == "ValidationError") {
          console.log(res.data.message)
          return;
        }
        setFormstate({ 'status': true })
      }).catch((error) => {
        //No need for errorhandling at the moment
      });
  }

  return (
    <Container>
      {state.go && <Redirect to="/"></Redirect>}
      {formstate.status ? "formOK" : "formBAD"}
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
      <Row className="text-center d-flex justify-content-around mt-4">
        <Button color="danger" size="lg" onClick={clearForms}>Avbryt</Button>
        <Button color="success" size="lg" onClick={sendForms}>Spara</Button>
      </Row>
    </Container>
  )
};

export default CreateRecipe;