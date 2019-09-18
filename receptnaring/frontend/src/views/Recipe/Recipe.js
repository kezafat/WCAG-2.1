import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RecipeRow, PortionButton, Ingredient, List, ListItem, Instructions, RoundCheckbox, RecipeTitle, RecipeImage, Text, H2Text, PortionText,Portions } from './StyledRecipe';



class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = { recipe: {}, apiData: false, portions: 2, };
    this.recipeURL = this.props.match.params.url
  }


  async componentDidMount() {
    let data = {}
    await fetch('http://localhost:3001/api/recipes')
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        data = response
      });

      for(let recipe of data){
        if(this.recipeURL === recipe.url){
          await fetch(`http://localhost:3001/api/recipe/id/${recipe._id}`)
          .then(function (response) {
            return response.json();
          })
          .then(function (response) {
            data = response
          });
        }
      }

    await this.setState({
      recipe: data,
      apiData: true,
      portions: data.portion
    })

    console.log(data)

    let instructions = document.getElementsByClassName('instructions')

    for (let instruction of instructions) {
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

  renderInstructions = () => this.state.recipe.instructions.map((item, i) =>
    <Row key={i}>
      <Col sm="1">
        <RoundCheckbox className="round">
          <input tabIndex="0" type="checkbox" id={'checkbox' + i} />
          <label tabIndex="0" for={'checkbox' + i} onClick={() => this.chekedCheckbox(i)}></label>
        </RoundCheckbox>
      </Col>
      <Col sm="11">
        <Text className={`step${i} instructions`}>{item}</Text>
      </Col>
    </Row>
  );

  renderIngredients = () => this.state.recipe.ingredients.map((item, i) =>
    <ListItem key={i}>{item.qty} {item.type} {item.name}</ListItem>
  );


  render() {
    return (
      <Container>
        <RecipeRow>
          <Col lg="5">
            {this.state.apiData ? <RecipeImage src={`/images/uploaded/${this.state.recipe.img}`} alt={this.state.recipe.title}></RecipeImage> : console.log('data not loaded')}
            <Row>
              <Portions>
                <PortionButton>-</PortionButton>
                <PortionText>{this.state.portions}</PortionText>
                <PortionButton>+</PortionButton>
              </Portions>
            </Row>
          </Col>
          <Col lg="7">
            <RecipeTitle>{this.state.recipe.title}</RecipeTitle>
          </Col>
        </RecipeRow>
        <Row>
          <Ingredient lg="4">
            <H2Text>Ingredienser</H2Text>
            <List>
              {this.state.apiData ? this.renderIngredients() : console.log('data not loaded')}
            </List>
          </Ingredient>
          <Instructions>
            <H2Text>Gör så här</H2Text>
            {this.state.apiData ? this.renderInstructions() : console.log('data not loaded')}
          </Instructions>
        </Row>
      </Container>
    )
  }
};

export default Recipe;