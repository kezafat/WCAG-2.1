import styled from 'styled-components';

const StyledIngredientContainer = styled.section`
  max-width: 300px;
  margin: 0 auto;
`;

const StyledH2 = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-weight: 200;
  margin: 2rem 0;
`;

const StyledInputContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-template-areas: 
    "ingredient ingredient ingredient" 
    "amount unit add";
  gap: 0.5rem;
`;

const StyledInput = styled.input`
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  border: 1px solid #DDDDDD;
  grid-area: ${props => props.primary ? 'ingredient' : 'amount'};
  height: 2rem;
  padding: 0 0.25rem;
`;

const StyledSelectUnit = styled.select`
  font-family: 'Open Sans', sans-serif;
  border: 1px solid #DDDDDD;
  grid-area: unit;
`;

const StyledAddButton = styled.button`
  font-family: 'Open Sans', sans-serif;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #72C554;
  width: 2rem;
  border: none;
  border-radius: 50%;
  grid-area: add;
`;

const StyledImage = styled.img`
  width: 1rem;
  height: auto;
`;

const StyledIngredientText = styled.p`
  font-family: 'Open Sans', sans-serif;
  text-align: left;
  margin-top: 0.5rem;
`;

const StyledRemoveButton = styled.button`
  font-family: 'Open Sans', sans-serif;
  display: inline-flex;
  background: transparent;
  border: none;
`;

export {
  StyledIngredientContainer,
  StyledH2,
  StyledInputContainer,
  StyledInput,
  StyledSelectUnit,
  StyledAddButton,
  StyledImage,
  StyledIngredientText,
  StyledRemoveButton
}