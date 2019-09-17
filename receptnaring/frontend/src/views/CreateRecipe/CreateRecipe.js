import React, { useState } from 'react';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap';
import { StyledRow } from './StyledCreateRecipe';
import UploadImage from './components/UploadImage';
import TitlePersonTime from './components/TitlePersonTime';
import IngredientInput from './components/IngredientInput';
import AddStep from './components/AddStep';
import axios from "axios";

const CreateRecipe = () => {
  const initState = {
    'img': 'upload-image.png',
    'instructions': [],
    'ingredients': [],
    'time': 0,
    'title': '',
    'portion': 2
  }
  const initFormState = { 'status': null, 'sending': 0 };

  const [state, setState] = useState(initState);
  const [formStatus, setFormStatus] = useState(initFormState);

  const clearForms = () => {
    setState({ ...initState, });
    setFormStatus(initFormState);
  }

  const sendForms = async () => {
    // Fulvalidation
    let valMess = [];
    if (!state.title) {
      valMess.push('Receptet måste ha en titel')
    }
    if (state.time === 0) {
      valMess.push('Det måste ta mer än 0 minuter att göra receptet')
    }
    if (state.ingredients.length < 1) {
      valMess.push('Det måste finnas minst en ingrediens')
    }
    if (state.instructions.length < 1) {
      valMess.push('Det måste finnas minst en instruktion')
    }
    if (valMess.length !== 0) {
      setFormStatus(prev => ({ ...prev, validate: valMess, 'status': 0 }))
      return;
    }

    setFormStatus(prev => ({ ...prev, 'sending': 1 }))
    let res = await axios.post('http://localhost:3001/api/recipe', state);
    let qryStatus = res.data._id;

    if (qryStatus) {
      setFormStatus({ 'status': 1 })
      setState({ ...initState, 'link': `/${res.data.url}` })
    }
    setFormStatus(prev => ({ ...prev, 'sending': 0 }))
  }

  const CrudeFormValidationMessage = () => {
    return (
      formStatus.status ?
        <React.Fragment>
          <div className="alert alert-success" role="alert">
            <p>Ditt recept är nu publicerat!</p>
            {state.link && <Link to={state.link}>Se ditt recept här</Link>}
          </div>
        </React.Fragment>
        :
        <React.Fragment>
          <div className="alert alert-danger" role="alert">
            {formStatus.validate.map((entry, i) => {
              return <p key={i}>&bull; {entry}</p>
            })}
          </div>
        </React.Fragment>
    )
  }
  const Spinner = () => {
    return (<div className="spinner-border">&nbsp;&nbsp;</div>)
  }

  return (
    <Container>
      {state.go === "/" && <Redirect to="/"></Redirect>}
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
          <IngredientInput s={[state, setState]} />
        </Col>
        <Col md="6" sm="12">
          <AddStep s={[state, setState]} />
        </Col>
      </Row>
      <Row>
        <div className={`mx-auto col-6 text-center m-2`}>
          {formStatus.status != null ? <CrudeFormValidationMessage /> : ''}
        </div>
      </Row>
      <Row className="text-center d-flex justify-content-around mt-4">
        <Button color="danger" size="lg" onClick={clearForms}>Avbryt</Button>
        <Button color="success" size="lg" onClick={sendForms}> {formStatus.sending ? <Spinner /> : 'Spara'}</Button>
      </Row>
    </Container>
  )
};

export default CreateRecipe;