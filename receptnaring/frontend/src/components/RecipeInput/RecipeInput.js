import React from 'react';
import {
  RecipeWrapper,
  RecipeSearch
} from './StyledRecipeInput';

const RecipeInput = () => {
  return(
    <RecipeWrapper>
      <RecipeSearch placeholder="Sök recept.. t.ex kyckling"/>
    </RecipeWrapper>
  )
}

export default RecipeInput;
