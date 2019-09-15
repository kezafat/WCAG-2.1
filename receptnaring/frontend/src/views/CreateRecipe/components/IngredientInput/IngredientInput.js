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
import ingredientsList from '../../../../ingredientsList';
import { units } from './staticData';
import plus from '../../../../assets/images/plus.svg';
import remove from '../../../../assets/images/remove.svg';

const IngredientInput = () => {
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState({
    ingredient: '',
    amount: '',
    unit: 'kg'
  });

  const renderIngredients = () => ingredientsList.map(({ Namn }) =>
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
          placeholder="Ingredienser"
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
          placeholder="Antal"
          onChange={handleInput}
        />
        <StyledSelectUnit name="unit" defaultValue={ingredient.unit} onChange={handleInput}>
          {renderUnits()}
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
