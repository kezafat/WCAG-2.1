import styled from 'styled-components';

const StyledIngredientContainer = styled.section`

`;

const StyledInputContainer = styled.section`
  display: grid;
  grid-template-areas: "ingredient ingredient amount unit add";
  column-gap: 0.5rem;
`;

const StyledInput = styled.input`
  width: 100%;
  grid-area: ${props => props.primary ? 'ingredient' : 'amount'};
`;

const StyledSelectUnit = styled.select`
  grid-area: unit;
`;

const StyledAddButton = styled.button`
  grid-area: add;
`;

const StyledIngredientText = styled.p`

`;

export {
  StyledIngredientContainer,
  StyledInputContainer,
  StyledInput,
  StyledSelectUnit,
  StyledAddButton,
  StyledIngredientText
}