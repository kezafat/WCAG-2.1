import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RecipeRow, PortionButton, Ingredient, List, ListItem, Instructions, RoundCheckbox, RecipeTitle, RecipeImage, Text } from './StyledRecipe';



class Recipe extends Component {
  constructor() {
    super();
    this.state = { recipe: {}, apiData: false };
  }


  async componentDidMount() {
    let data = {}
    await fetch('http://localhost:3001/api/recipe/id/5d7762fd5f95393a8c211ae5')
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        data = response
      });

    await this.setState({
      recipe: data,
      apiData: true
    })

    let instructions = document.getElementsByClassName('instructions')

    for(let instruction of instructions){
      instruction.style.color = 'rgb(33, 37, 41)'
    }
  }

  chekedCheckbox(val) {

    let step = document.getElementsByClassName(`step${val}`);

    if (step[0].style.color === 'rgb(33, 37, 41)') {
      step[0].style.color = 'lightgrey'
    } else {
      step[0].style.color = 'rgb(33, 37, 41)'
    }

  }

  renderInstructions = () => this.state.recipe.instruction.map((item, i) =>
    <Row key={i}>
      <Col lg="1">
        <RoundCheckbox className="round">
          <input tabiIndex="0" type="checkbox" id={'checkbox' + i} />
          <label tabIndex="0" for={'checkbox' + i} onClick={() => this.chekedCheckbox(i)}></label>
        </RoundCheckbox>
      </Col>
      <Col lg="11">
        <Text className={`step${i} instructions`}>{item}</Text>
      </Col>
    </Row>
  );

  renderIngredients = () => this.state.recipe.ingredient.map((item, i) =>
    <ListItem key={i}>{item.qty} {item.type} {item.name}</ListItem>
  );


  render() {
    return (
      <Container>
        <RecipeRow>
          <Col lg="5">
            {this.state.apiData ? <RecipeImage src={`/images/${this.state.recipe.img}`} alt={this.state.recipe.title}></RecipeImage> : console.log('data not loaded')}
            <PortionButton>
              +
              </PortionButton>
          </Col>
          <Col lg="7">
            <RecipeTitle>{this.state.recipe.title}</RecipeTitle>
          </Col>
        </RecipeRow>
        <Row>
          <Ingredient lg="4">
            <h2>Ingredienser</h2>
            <List>
              {this.state.apiData ? this.renderIngredients() : console.log('data not loaded')}
            </List>
          </Ingredient>
          <Instructions>
            <h2>Gör så här</h2>
            {this.state.apiData ? this.renderInstructions() : console.log('data not loaded')}
          </Instructions>
        </Row>
      </Container>
    )
  }
};

export default Recipe;