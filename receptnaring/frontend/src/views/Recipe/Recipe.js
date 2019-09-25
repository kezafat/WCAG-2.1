import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { RecipeRow, LeftColContent, StyledSpinner, Header, PortionButton, Ingredient, List, ListItem, Instructions, RoundCheckbox, RecipeTitle, RecipeImage, Text, H2Ingredients, H2Instructions, PortionText, Portions, Time, RecipeContainer, PortionPicker, BackButton } from './StyledRecipe';
import Chart from "../../components/Chart"
import equal from 'fast-deep-equal'



class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = { recipe: {}, apiData: false, portions: 2, hours: '', ingredients: [], colors:props.color };
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

    for (let recipe of data) {
      if (this.recipeURL === recipe.url) {
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

  
  }


  componentDidUpdate(prevProps) {
    if(!equal(this.props.color, prevProps.color)) 
    {
      this.setState({colors:this.props.color})
    }

  

    let instructions = document.getElementsByClassName('instructions')

    for (let instruction of instructions) {
      if(instruction.style.color != 'rgb(127, 127, 127)')
      instruction.style.color = `${this.state.colors.checkedinstruction}`
    }


  } 

  time() {
    let time = this.state.recipe.time;

    if (time > 60) {
      let hours = (time / 60)
      let rhours = Math.floor(hours);
      let minutes = (hours - rhours) * 60
      let rminutes = Math.round(minutes)

      this.setState({
        hours: rhours + " tim",
        minutes: rminutes + " min"
      })
    } else {
      this.setState({
        minutes: time + " min"
      })
    }
  }


  chekedCheckbox(val) {
    let step = document.getElementsByClassName(`step${val}`);

    if (step[0].style.color === this.state.colors.checkedinstruction) {
      step[0].style.color = 'rgb(127, 127, 127)'
    } else {
      step[0].style.color = this.state.colors.checkedinstruction
    }

  }

  checkBoxOnText(val) {

    let box = document.getElementsByClassName(`checkBoxInput${val}`);
    let step = document.getElementsByClassName(`step${val}`);

    if (box[0].checked === false) {
      box[0].checked = true
      step[0].style.color = 'rgb(127, 127, 127)'
    } else {
      box[0].checked = false
      step[0].style.color = this.state.colors.checkedinstruction
    }

  }

  async addPortion() {
    if (this.state.portions < 12) {
      await this.setState({ portions: this.state.portions + 2 })
      let addedIngredients = []

      for (let ingredient of this.state.recipe.ingredients) {
        let qty = (ingredient.qty / this.state.recipe.portion) * this.state.portions
        addedIngredients.push({ name: ingredient.name, qty: qty, type: ingredient.type })
      }

      this.setState({ ingredients: addedIngredients })
    }
  }

  async removePortion() {
    if (this.state.portions > 2) {
      await this.setState({ portions: this.state.portions - 2 })
      let removedIngredients = []

      for (let ingredient of this.state.recipe.ingredients) {
        let qty = (ingredient.qty / this.state.recipe.portion) * this.state.portions
        removedIngredients.push({ name: ingredient.name, qty: qty, type: ingredient.type })
      }

      this.setState({ ingredients: removedIngredients })
    }
  }

  renderInstructions = () => this.state.recipe.instructions.map((item, i) =>
    <Row key={i}text={this.state.colors.textcolor} >
      <RoundCheckbox border={this.state.colors.border} className="round">
        <input className={'checkBoxInput' + i} tabIndex="0" type="checkbox" id={'checkbox' + i} />
        <label tabIndex="0" htmlFor={'checkbox' + i} onClick={() => this.chekedCheckbox(i)}></label>
        <Text text={this.state.colors.textcolor} className={`step${i} instructions`} onClick={() => this.checkBoxOnText(i)}>{item}</Text>
      </RoundCheckbox>
    </Row>
  );

  renderIngredients = () => this.state.ingredients.map((item, i) =>
    <ListItem border={this.state.colors.border} text={this.state.colors.textcolor} key={i}>{item.qty} {item.type} {item.name}</ListItem>
  );


  render() {
     let {colors}=this.state
    return (
      <RecipeContainer>
        <Header>
          <Link to="/">
            <BackButton tabIndex="0" src="/images/backButton.svg" alt="Tillbaka knapp"/>
          </Link>
          <RecipeTitle text={colors.title} >{this.state.recipe.title}</RecipeTitle>
        </Header>
        <Time softbg={colors.softbg} text={colors.textcolor}>{this.state.hours} {this.state.minutes}</Time>
        <RecipeRow bgcolor={colors.softbg} >
            <Col lg="4">
              <LeftColContent>
                {this.state.apiData ? <RecipeImage src={`/images/uploaded/${this.state.recipe.img}`} alt={this.state.recipe.title}></RecipeImage> : (<StyledSpinner />)}

                <Ingredient bgcolor={colors.divcolor}>
                  <H2Ingredients text={colors.textcolor}>Ingredienser</H2Ingredients>
                  <Row>
                    <Portions >
                      <PortionPicker text={colors.textcolor} border={colors.borderportion}>
                        <PortionButton border={colors.borderportion} bgcolor={colors.divcolor} text={colors.textcolor} tabIndex="0" onClick={this.removePortion.bind(this)}><p>-</p></PortionButton>
                        <PortionText text={colors.textcolor}>{this.state.portions} Portioner</PortionText>
                        <PortionButton border={colors.borderportion} bgcolor={colors.divcolor} text={colors.textcolor}tabIndex="0" onClick={this.addPortion.bind(this)}><p>+</p></PortionButton>
                      </PortionPicker>
                    </Portions>
                  </Row>
                  <List>
                    {this.state.apiData ? this.renderIngredients() : (<StyledSpinner />)}
                  </List>
                  <Chart />
                </Ingredient>
              </LeftColContent>
            </Col>

            <Col lg="7">

              <Instructions>
                <H2Instructions text={colors.textcolor} >Gör så här</H2Instructions>
                {this.state.apiData ? this.renderInstructions() : (<StyledSpinner />)}
              </Instructions>
            </Col>
        </RecipeRow>
      </RecipeContainer>
    )
  }
};

export default Recipe;