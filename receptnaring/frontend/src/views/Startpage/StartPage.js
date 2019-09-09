import React from 'react';
import RecipeInput from '../../components/RecipeInput';
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
      </RecipeWrapper>
    </Container>
  )
};

export default StartPage;
