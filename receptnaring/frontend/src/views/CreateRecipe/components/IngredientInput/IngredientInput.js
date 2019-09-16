import React, { useState, useEffect } from 'react';
import axios from "axios";
import {
  StyledIngredientContainer,
  StyledH2,
  StyledInputContainer,
  StyledInput,
  StyledSelectUnit,
  StyledAddButton,
  StyledImage,
  StyledIngredientText,
  StyledRemoveButton
} from './StyledIngredientInput';
import { units } from './staticData';

const IngredientInput = () => {
  const [ingredientsList, setIngredientsList] = useState({ 'loading': 1, data: [] });
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState({
    ingredient: '',
    amount: '',
    unit: 'kg'
  });

  useEffect(() => {
    async function fetchIngredientsWithYourBelovedAxios() {
      let res = await axios.get('http://localhost:3001/api/ingredients');
      setIngredientsList(prev => ({ ...prev, loading: 0, data: res.data }))
    }

    fetchIngredientsWithYourBelovedAxios()
  }, []);

  const renderIngredients = () => ingredientsList.data.map(({ Namn }) =>
    <option key={Namn} value={Namn}></option>
  );

  const renderUnits = () => units.map((unit, i) =>
    <option key={i} value={unit}>{unit}</option>
  );

  const addIngredient = () => {
    if (!ingredient.ingredient || !ingredient.amount) { return };
    setIngredients([...ingredients, ingredient]);
  };

  const removeIngredient = e => {
    const { id } = e.target.parentElement;
    ingredients.splice(id, 1);
    setIngredients([...ingredients]);
  }

  const handleInput = e => {
    setIngredient({ ...ingredient, [e.target.getAttribute('name')]: e.target.value });
  };

  const renderIngredientParagraph = () => ingredients.map(({ ingredient, amount, unit }, i) =>
    <StyledIngredientText key={i}>
      {`${amount} ${unit} ${ingredient}`}
      <StyledRemoveButton onClick={removeIngredient}>
        <StyledImage src="images/uploaded/remove.svg" />
      </StyledRemoveButton>
    </StyledIngredientText>
  );

  return (
    <StyledIngredientContainer>
      <StyledH2>Ingredienser</StyledH2>
      <StyledInputContainer>
        <StyledInput
          type="text"
          name="ingredient"
          defaultValue={ingredient.ingredient}
          list="ingredients"
          placeholder={ingredientsList.loading ? '' : 'Ingredienser'}
          primary
          onChange={handleInput}
          className={ingredientsList.loading ? 'spinner-border' : ''}
        />
        <datalist id="ingredients">
          {renderIngredients()}
        </datalist>
        <StyledInput
          type="number"
          name="amount"
          defaultValue={ingredient.amount}
          placeholder="Antal"
          onChange={handleInput}
        />
        <StyledSelectUnit name="unit" defaultValue={ingredient.unit} onChange={handleInput}>
          {renderUnits()}
        </StyledSelectUnit>
        <StyledAddButton onClick={addIngredient}>
          <StyledImage src="images/uploaded/plus.svg" alt="add" />
        </StyledAddButton>
      </StyledInputContainer>
      {renderIngredientParagraph()}
    </StyledIngredientContainer>
  )
}

export default IngredientInput;
