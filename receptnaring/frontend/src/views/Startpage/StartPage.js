import React from 'react';
import RecipeInput from '../../components/RecipeInput';
import {
  StartPageContainer,
} from './StyledStartPage';

const StartPage = () => {
  return (
    <StartPageContainer>
      <RecipeInput />
    </StartPageContainer>
  )
}

export default StartPage;
