import React, { useState, useEffect } from 'react';
import RecipeInput from '../../components/RecipeInput';
import RandomRecipes from './RandomRecipes/RandomRecipes'
import { Row } from 'reactstrap';
import {
  RecipeWrapper,
  TextBanner,
  TextInfo,
  StyledSpinner,
  StartPageContainer
} from './StyledStartPage';

const StartPage = () => {

  const useFetch = (url) => {
    const [allRecipes, setAllRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchData = async () => {
        const respons = await fetch(url);
        const allRecipes = await respons.json();
        const items = allRecipes;
        setAllRecipes(items);
        setLoading(false);
      };
      fetchData();
    }, [url]);
    return { allRecipes, loading };
  }

  const { allRecipes, loading } = useFetch('http://localhost:3001/api/recipes/six');
  
  const renderRecipe = (allRecipes, index) => <RandomRecipes key={index} img={`/images/${allRecipes.img} `} title={allRecipes.title} />

  const renderAllFuckingRecipes = () =>
    allRecipes ? allRecipes.map((randomRecipes, index) => renderRecipe(randomRecipes, index))
      : null;


  return (
    <StartPageContainer>
      <RecipeInput />
      <TextBanner>
        <TextInfo>
          Recept
          </TextInfo>
      </TextBanner>
      <RecipeWrapper>
        <Row>
          {loading ? (<StyledSpinner />) :
            (renderAllFuckingRecipes(allRecipes))
          }
        </Row>
      </RecipeWrapper>
    </StartPageContainer>
  )
};

export default StartPage;
