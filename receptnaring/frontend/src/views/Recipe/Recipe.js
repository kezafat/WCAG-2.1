import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RecipeRow, PortionButton, Ingredient, List, ListItem, Instructions, RoundCheckbox, RecipeTitle, RecipeImage, Text, H2Text, PortionText, Portions, Time, RecipeContainer, PortionPicker } from './StyledRecipe';
import Chart from "../../components/Chart"



class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = { recipe: {}, apiData: false, portions: 2, hours: '', ingredients: [], };
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
          data = recipe;
        }
      }

    await this.setState({
      recipe: data,
      apiData: true,
      portions: data.portion,
      ingredients: data.ingredients,
    })
    
    this.time();

    let instructions = document.getElementsByClassName('instructions')

    for (let instruction of instructions) {
      instruction.style.color = 'rgb(33, 37, 41)'
    }
  }

  time(){
    let time = this.state.recipe.time;

    if(time > 60){
      let hours = (time/60)
      let rhours = Math.floor(hours);
      let minutes = (hours - rhours) * 60
      let rminutes = Math.round(minutes)

      this.setState({
        hours: rhours + " tim",
        minutes: rminutes + " min"
      })
    }else{
      this.setState({
        minutes: time + " min"
      })
    }
  }


  chekedCheckbox(val) {

    let step = document.getElementsByClassName(`step${val}`);

    if (step[0].style.color === 'rgb(33, 37, 41)') {
      step[0].style.color = '#B8B8B8'
    } else {
      step[0].style.color = 'rgb(33, 37, 41)'
    }

  }

  checkBoxOnText(val){

    let box = document.getElementsByClassName(`checkBoxInput${val}`);
    let step = document.getElementsByClassName(`step${val}`);

    if (box[0].checked === false) {
      box[0].checked = true
      step[0].style.color = '#B8B8B8'
    } else {
      box[0].checked = false
      step[0].style.color = 'rgb(33, 37, 41)'
    }

  }

  async addPortion(){
    if(this.state.portions < 12){
      await this.setState({portions: this.state.portions+2})
      let addedIngredients = []

      for(let ingredient of this.state.recipe.ingredients){
        let qty = (ingredient.qty/this.state.recipe.portion) * this.state.portions
        addedIngredients.push({name: ingredient.name, qty: qty, type: ingredient.type})
      }

      this.setState({ingredients: addedIngredients})
    }
  }

  async removePortion(){
    if(this.state.portions > 2){
      await this.setState({portions: this.state.portions-2})
      let removedIngredients = []

      for(let ingredient of this.state.recipe.ingredients){
        let qty = (ingredient.qty/this.state.recipe.portion) * this.state.portions
        removedIngredients.push({name: ingredient.name, qty: qty, type: ingredient.type})
      }

      this.setState({ingredients: removedIngredients})
    }
  }

  renderInstructions = () => this.state.recipe.instructions.map((item, i) =>
    <Row key={i}>
      <Col sm="1">
        <RoundCheckbox className="round">
          <input className={'checkBoxInput' + i} tabIndex="0" type="checkbox" id={'checkbox' + i} />
          <label tabIndex="0" htmlFor={'checkbox' + i} onClick={() => this.chekedCheckbox(i)}></label>
        </RoundCheckbox>
      </Col>
      <Col sm="11">
        <Text className={`step${i} instructions`} onClick={() => this.checkBoxOnText(i)}>{item}</Text>
      </Col>
    </Row>
  );

  renderIngredients = () => this.state.ingredients.map((item, i) =>
    <ListItem key={i}>{item.qty} {item.type} {item.name}</ListItem>
  );


  render() {
    return (
      <RecipeContainer>
        <RecipeRow>
          <Col lg="5">
            {this.state.apiData ? <RecipeImage src={`/images/uploaded/${this.state.recipe.img}`} alt={this.state.recipe.title}></RecipeImage> : console.log('data not loaded')}
            <Row>
              <Portions>
                <PortionPicker>
                  <PortionButton onClick={this.removePortion.bind(this)}>-</PortionButton>
                  <PortionText>{this.state.portions} Portioner</PortionText>
                  <PortionButton onClick={this.addPortion.bind(this)}>+</PortionButton>
                </PortionPicker>
              </Portions>
            </Row>
          </Col>
          <Col lg="7">
            <RecipeTitle>{this.state.recipe.title}</RecipeTitle>
            <Time>{this.state.hours} {this.state.minutes}</Time>
          </Col>
        </RecipeRow>
        <RecipeRow>
          <Ingredient lg="4">
            <H2Text>Ingredienser</H2Text>
            <List>
              {this.state.apiData ? this.renderIngredients() : console.log('data not loaded')}
            </List>
            <Chart/>
          </Ingredient>
          <Instructions>
            <H2Text>Gör så här</H2Text>
            {this.state.apiData ? this.renderInstructions() : console.log('data not loaded')}
          </Instructions>
        </RecipeRow>
      </RecipeContainer>
    )
  }
};

export default Recipe;