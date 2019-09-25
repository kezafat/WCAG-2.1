import React, { useState, useEffect } from "react";
import RecipeInput from "../../components/RecipeInput";
import RandomRecipes from "./RandomRecipes/RandomRecipes";
import SortedRecipes from "../../components/SortedRecipes";
import { Row } from "reactstrap";
import {
  RecipeWrapper,
  TextBanner,
  TextInfo,
  StyledSpinner,
  StartPageContainer,
  TextWrapper
} from "./StyledStartPage";

const StartPage = (Color) => {
Color = Color.color
  const [searchResult, setSearchResult] = useState(null);
  const useFetch = url => {
    const [allRecipes, setAllRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchData = async () => {
        const respons = await fetch(url);
        setAllRecipes(await respons.json());
        setLoading(false);
      };
      fetchData();
    }, [url]);
    return { allRecipes, loading };
  };

  const { allRecipes, loading } = useFetch("http://localhost:3001/api/recipes");

 
  

  const searchRecipe = searchTerm => {
    const resultOfSearch = allRecipes.filter(recipe => {
      return recipe.title.toLowerCase().includes(searchTerm);
    });
    if (searchTerm === "") {
      setSearchResult(null);
    } else {
      setSearchResult(renderAllRecipes(resultOfSearch));
    }
  };
  const renderRecipe = (allRecipes, index) => (
    <RandomRecipes 
      key={index}
      img={`/images/uploaded/${allRecipes.img} `}
      title={allRecipes.title}
      data={allRecipes.url}
      color={Color}
    />
  );

  const renderAllRecipes = (recipes = allRecipes) =>
    recipes
      ? recipes
          .slice(0, 6)
          .map((randomRecipes, index) => renderRecipe(randomRecipes, index))
      : null;

  return (

    <StartPageContainer>
    
      <RecipeInput color={Color} callback={searchRecipe} />
      <TextWrapper >
        <TextBanner color={Color.divcolor} >
          <TextInfo color={Color.textcolor} >Recept</TextInfo>
        </TextBanner>
      </TextWrapper>
      <RecipeWrapper color={Color.bgcolor} >
        <Row>
          {loading ? <StyledSpinner /> : searchResult || renderAllRecipes()}
        </Row>
      </RecipeWrapper>
      {searchResult === null ? <SortedRecipes color={Color} /> : null}
    </StartPageContainer>
 
  );
};

export default StartPage;
