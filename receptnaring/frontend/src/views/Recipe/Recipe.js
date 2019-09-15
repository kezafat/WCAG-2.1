import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RecipeRow, PortionButton, Ingredient, List, ListItem, Instructions, RoundCheckbox } from './StyledRecipe';
import foodImage from './kottbullar.jpg'

let recipe = {};

class Recipe extends Component {

  test() {
    fetch('http://localhost:3001/api/recipe/id/5d7761435f95393a8c211ad3')
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        console.log(res)
        this.recipe = res
      });
  }

  render() {
    this.test();
    console.log(this.recipe)
    return (
      <Container>
        <RecipeRow>
          <Col>
            <img src={foodImage} style={{ width: 400 }}></img>
            <PortionButton>
              +
              </PortionButton>
          </Col>
          <Col>
            <h1>{}</h1>
            <p>Gör ditt eget potatismos, enkelt och gott med potatis, mjölk, smör och kryddor.
              Du smaksätter den mosade potatisen med salt, peppar för att få den där riktigt äkta smaken.
              </p>
          </Col>
        </RecipeRow>
        <Row>
          <Ingredient lg="4">
            <h2>Ingredienser</h2>
            <List>
              <ListItem>1kg potatis (mjölig sort)</ListItem>
              <ListItem>ca 2 dl mjölk</ListItem>
              <ListItem>25 g smör</ListItem>
              <ListItem>1 tsk salt</ListItem>
              <ListItem>2 krm nymalen vitpeppar</ListItem>
              <ListItem>1 påse djupfrysta kötbullar</ListItem>
              <ListItem>1 msk margarin</ListItem>
            </List>
          </Ingredient>
          <Instructions>
            <h2>Gör så här</h2>
            <Row>
              <Col lg="1">
                <RoundCheckbox className="round">
                  <input type="checkbox" id="checkbox1" />
                  <label for="checkbox1"></label>
                </RoundCheckbox>
              </Col>
              <Col lg="11">
                <p>Koka upp vatten i en kastrull. Skala potatisen och dela den i jämnstora mindre bitar. Lägg i potatisen och låt småkoka under lock till potatisen är precis mjuk. Häll av vattnet och låt potatisen ånga av utan lock.</p>
              </Col>
            </Row>
            <Row>
              <Col lg="1">
                <RoundCheckbox className="round">
                  <input type="checkbox" id="checkbox2" />
                  <label for="checkbox2"></label>
                </RoundCheckbox>
              </Col>
              <Col lg="11">
                <p>Koka upp mjölk och smör i en kastrull.</p>
              </Col>
            </Row>
          </Instructions>
        </Row>
      </Container>
    )
  }
};

export default Recipe;