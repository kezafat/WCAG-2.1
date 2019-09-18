import React, { useState, useEffect } from 'react';
import RecipeInput from '../../components/RecipeInput';
import RandomRecipes from './RandomRecipes/RandomRecipes'
import SortedRecipes from '../../components/SortedRecipes'
import { Container, Row } from 'reactstrap';
import {
  RecipeWrapper,
  TextBanner,
  TextInfo,
  StyledSpinner,
  StartPageContainer
} from './StyledStartPage';

const StartPage = () => {

  const [searchResult, setSearchResult] = useState(null);
  const useFetch = (url) => {
    const [allRecipes, setAllRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchData = async () => {
        const respons = await fetch(url);
        setAllRecipes(await respons.json())
        setLoading(false);
      };
      fetchData();
    }, [url]);
    return { allRecipes, loading };
  }
  
  const { allRecipes, loading } = useFetch('http://localhost:3001/api/recipes');

  const searchRecipe = (searchTerm) => {
    const resultOfSearch = allRecipes.filter(recipe => {
      return recipe.title.toLowerCase().includes(searchTerm)
    })
    setSearchResult(renderAllRecipes(resultOfSearch))
  }
  const renderRecipe = (allRecipes, index) => <RandomRecipes key={index} img={`/images/${allRecipes.img} `} title={allRecipes.title} data={allRecipes.url} />

  const renderAllRecipes = (recipes = allRecipes) =>
    recipes ? recipes.map((randomRecipes, index) => renderRecipe(randomRecipes, index))
      : null;

  return (
    <StartPageContainer>
      <RecipeInput callback={searchRecipe} />
      <TextBanner>
        <TextInfo>
          Recept
          </TextInfo>
      </TextBanner>
      <RecipeWrapper>
        <Row>
          {loading ? (<StyledSpinner />) : (searchResult ||  renderAllRecipes())}
        </Row>
      </RecipeWrapper>
      <SortedRecipes />
    </StartPageContainer>
  )
};

export default StartPage;