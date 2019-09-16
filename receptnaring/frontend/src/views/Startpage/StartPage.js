import React from 'react';
import RecipeInput from '../../components/RecipeInput';
import SortedRecipes from '../../components/SortedRecipes'
import { Container } from 'reactstrap';
import {
  RecipeWrapper,
  TextBanner,
  TextInfo
} from './StyledStartPage';


const StartPage = () => {
  return (
    <Container>
      <RecipeInput />
      <RecipeWrapper>
        <TextBanner>
          <TextInfo>
            Recept
          </TextInfo>
        </TextBanner>
        <SortedRecipes />
      </RecipeWrapper>
    </Container>
  )
};

export default StartPage;
