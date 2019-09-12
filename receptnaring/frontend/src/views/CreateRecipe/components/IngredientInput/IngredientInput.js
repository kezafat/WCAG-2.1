import React, { useState } from 'react';
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
import plus from '../../../../assets/images/plus.svg';
import remove from '../../../../assets/images/remove.svg';

const IngredientInput = () => {
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState({
    ingredient: '',
    amount: '',
    unit: 'kg'
  });

  /**
   * Both of these are for testing purpose only
     Data should ofc come from an API call
     Which we loop over to create the <option>
   */
  const ingredientList = ['ägg', 'mjölk', 'mjöl'];
  const renderIngredients = () => ingredientList.map(ingredient =>
    <option key={ingredient} value={ingredient}></option>
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
        <StyledImage src={remove} />
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
          placeholder="Ingredienser..."
          primary
          onChange={handleInput}
        />
        <datalist id="ingredients">
          {renderIngredients()}
        </datalist>
        <StyledInput
          type="number"
          name="amount"
          defaultValue={ingredient.amount}
          placeholder="Antal..."
          onChange={handleInput}
        />
        <StyledSelectUnit name="unit" defaultValue={ingredient.unit} onChange={handleInput}>
          <option value="kg">kg</option>
          <option value="dl">dl</option>
          <option value="st">st</option>
        </StyledSelectUnit>
        <StyledAddButton onClick={addIngredient}>
          <StyledImage src={plus} alt="add" />
        </StyledAddButton>
      </StyledInputContainer>
      {renderIngredientParagraph()}
    </StyledIngredientContainer>
  )
}

export default IngredientInput;
