import React, { useState, useEffect } from "react";
import {
  RecipeWrapper,
  RecipeSearch
} from './StyledRecipeInput';

const RecipeInput = ({ color, callback, searchTerm }) => {

  const getSearchValue = e => callback(e.target.value);
  return (
    <RecipeWrapper >
      <RecipeSearch color={color.inputbg} text={color.textcolor} icon={color.searchicon} softbg={color.softbg} placeholder="Sök recept.. t.ex kyckling" onChange={getSearchValue} value={searchTerm} />
    </RecipeWrapper>
  )
}

export default RecipeInput;
