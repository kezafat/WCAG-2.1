import React from 'react';
import RecipeInput from '../../components/RecipeInput';
import { Container } from 'reactstrap';
import {
  RecipeWrapper,
  TextBanner
} from './StyledStartPage';


const StartPage = () => {
  return (
    <Container>
      <RecipeInput />
      <RecipeWrapper>
        <TextBanner>
          
        </TextBanner>
      </RecipeWrapper>
    </Container>
  )
};

export default StartPage;
