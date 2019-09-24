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
  TextWrapper,
  WcagDiv,
  Wcagcontrastboxyellow,
  Wcagcontrastboxstandard,
  Wcagcontrastboxwhite
} from "./StyledStartPage";

const StartPage = () => {
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

 
  const [Color, setColor] = useState({bgcolor:"#ffffff25" , textcolor:"white", divcolor:"black", inputbg:"none",searchicon:"/images/searchicon.svg"});
  const ChangeColors = (input)=> {

    if(input==="standard"){
      setColor({bgcolor:"#ffffff25" , textcolor:"white", divcolor:"black", inputbg:"none",searchicon:"/images/searchicon.svg"});
    }

    if(input==="yellow"){
      setColor({bgcolor:"yellow" , textcolor:"black",  divcolor:"yellow", inputbg:"#ffff00",searchicon:"/images/searchiconblack.svg"} );
    }
    
    if(input==="white"){
      setColor({bgcolor:"white" , textcolor:"black", divcolor:"white",inputbg:"#fff",searchicon:"/images/searchiconblack.svg"});
    } 
    }
  

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
    <div>
    <WcagDiv>
    <p>Kontrast: </p>
    <Wcagcontrastboxstandard tabindex="0" onClick={() => ChangeColors('standard')} />
    <Wcagcontrastboxyellow tabindex="0" onClick={() => ChangeColors('yellow')} />
    <Wcagcontrastboxwhite  tabindex="0" onClick={() => ChangeColors('white')}/>
  </WcagDiv>
    <StartPageContainer>
    
      <RecipeInput color={Color} callback={searchRecipe} />
      <TextWrapper >
        <TextBanner color={Color.bgcolor} >
          <TextInfo color={Color.textcolor} >Recept</TextInfo>
        </TextBanner>
      </TextWrapper>
      <RecipeWrapper color={Color.bgcolor} >
        <Row>
          {loading ? <StyledSpinner /> : searchResult || renderAllRecipes()}
        </Row>
      </RecipeWrapper>
      {searchResult === null ? <SortedRecipes /> : null}
    </StartPageContainer>
    </div>
  );
};

export default StartPage;
