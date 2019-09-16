import React from 'react';
import {
  RecipeWrapper,
  RecipeSearch
} from './StyledRecipeInput';

const RecipeInput = ({ callback, searchTerm }) => {
  const getSearchValue = e => callback(e.target.value);
  return(
    <RecipeWrapper>
      <RecipeSearch placeholder="Sök recept.. t.ex kyckling" onChange={getSearchValue} value={searchTerm} />
    </RecipeWrapper>
  )
}

export default RecipeInput;
