import React, { useState, useEffect, useRef } from 'react';
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

const IngredientInput = (ctx) => {
  const inputRef = useRef('inputRef');
  const [get, set] = ctx.s;
  const [ingredientsList, setIngredientsList] = useState({ 'loading': 1, data: [] });
  const [ingredient, setIngredient] = useState({
    name: '',
    qty: '',
    type: 'kg'
  });

  useEffect(() => {
    async function fetchIngredientsWithYourBelovedAxios() {
      let res = await axios.get('http://localhost:3001/api/ingredients').catch(error => {
        //No error handling atm
      });
      setIngredientsList(prev => ({ ...prev, loading: 0, data: res.data }))
    }
    fetchIngredientsWithYourBelovedAxios()
  }, []);

  const renderIngredients = () => ingredientsList.data.map(({ Namn }, i) =>
    <option key={i} value={Namn}></option>
  );

  const renderUnits = () => units.map((unit, i) =>
    <option key={i} value={unit}>{unit}</option>
  );

  const addIngredient = () => {
    if (!ingredient.name || !ingredient.qty) { return };
    set(prev => ({ ...prev, 'ingredients': [...get.ingredients, ingredient] }));
    inputRef.current.focus();
  };

  const removeIngredient = e => {
    const { id } = e.target.parentElement;
    get.ingredients.splice(id, 1);
    // setIngredients([...ingredients]);
    set(prev => ({ ...prev, 'ingredients': [...get.ingredients] }))
  }

  const handleInput = e => {
    setIngredient({ ...ingredient, [e.target.getAttribute('name')]: e.target.value });
  };

  const renderIngredientParagraph = () => get.ingredients.map(({ name, qty, type }, i) =>
    <StyledIngredientText key={i}>
      {`${qty} ${type} ${name}`}
      <StyledRemoveButton id={i} onClick={removeIngredient}>
        <StyledImage src="images/remove.svg" />
      </StyledRemoveButton>
    </StyledIngredientText>
  );

  return (
    <StyledIngredientContainer>
      <StyledH2>Ingredienser</StyledH2>
      <StyledInputContainer>
        <StyledInput
          type="text"
          name="name"
          defaultValue={ingredient.name}
          list="ingredients"
          placeholder={ingredientsList.loading ? '' : 'Ingredienser'}
          primary
          onChange={handleInput}
          className={ingredientsList.loading ? 'spinner-border'  : ''}
          style={ingredientsList.loading ? {backgroundColor: "rgba(0, 0, 0, 0)" } : {backgroundColor: "#fff" }}
          ref={inputRef}
        />
        <datalist id="ingredients">
          {renderIngredients()}
        </datalist>
        <StyledInput
          type="number"
          name="qty"
          defaultValue={ingredient.qty}
          placeholder="Antal"
          onChange={handleInput}
        />
        <StyledSelectUnit name="type" defaultValue={ingredient.type} onChange={handleInput}>
          {renderUnits()}
        </StyledSelectUnit>
        <StyledAddButton onClick={addIngredient}>
          <StyledImage src="images/plus.svg" alt="add" />
        </StyledAddButton>
      </StyledInputContainer>
      {renderIngredientParagraph()}
    </StyledIngredientContainer>
  )
}

export default IngredientInput;
