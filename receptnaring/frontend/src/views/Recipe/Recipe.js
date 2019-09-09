import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RecipeRow, PortionButton, IngredientRow } from './StyledRecipe';
import foodImage from './kottbullar.jpg'

class Recipe extends Component {

  render() {
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
            <h1>Köttbullar & potatismos med lingon</h1>
            <p>Gör ditt eget potatismos, enkelt och gott med potatis, mjölk, smör och kryddor.
              Du smaksätter den mosade potatisen med salt, peppar för att få den där riktigt äkta smaken.
              </p>
          </Col>
        </RecipeRow>
        <IngredientRow>
          <Col>
            <h2>Ingredienser</h2>
            <ul>
              <li>1kg potatis (mjölig sort)</li>
              <li>ca 2 dl mjölk</li>
              <li>25 g smör</li>
              <li>1 tsk salt</li>
              <li>2 krm nymalen vitpeppar</li>
              <li>1 påse djupfrysta kötbullar</li>
              <li>1 msk margarin</li>
            </ul>
          </Col>
        </IngredientRow>
      </Container>
    )
  }
};

export default Recipe;