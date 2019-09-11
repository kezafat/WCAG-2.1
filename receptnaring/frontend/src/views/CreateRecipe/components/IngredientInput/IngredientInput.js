import React from 'react';
import {
  StyledIngredientContainer,
  StyledInputContainer,
  StyledInput,
  StyledSelectUnit,
  StyledAddButton,
  StyledIngredientText
} from './StyledIngredientInput';

const IngredientInput = () => {
  return (
    <StyledIngredientContainer>
      <StyledInputContainer>
        <StyledInput type="text" list="ingredients" placeholder="Ingredienser..." primary />
        <datalist id="ingredients" name="ingredient">
          <option value="Hello" />
        </datalist>
        <StyledInput type="number" placeholder="Antal..." />
        <StyledSelectUnit>
          <option value="Kg">Kg</option>
        </StyledSelectUnit>
        <StyledAddButton>+</StyledAddButton>
      </StyledInputContainer>
      <StyledIngredientText>Ägg X</StyledIngredientText>
    </StyledIngredientContainer>
  )
}

export default IngredientInput;
