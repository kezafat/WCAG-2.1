import React, { useEffect, useState } from 'react';
import { SortedRecipesWrapper, StyledCard, StyledCardBody, StyledCardTitle, StyledCardImg, StyledSpinner, StyledH3, StyledLink, StyledCol } from './StyleSortedRecipes';
import { Row } from 'reactstrap'


function SortedRecipes() {

  const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        const respons = await fetch(url);
        const data = await respons.json();
        const items = data;
        const slicedData = items.slice(-3);
        const reverseData = slicedData.reverse();
        setData(reverseData);
        setLoading(false);
      };
      fetchData();
    }, [url]);
    return { data, loading };
  }
  const { data, loading } = useFetch('http://localhost:3001/api/recipes');

  const renderRecipe = (data, index) =>
    <StyledCol lg="4" key={index}>
      <StyledCard >
        <StyledCardBody>
          <StyledLink to={"/recept/" + data._id}>
            <StyledCardImg src={`/images/${data.img}`}></StyledCardImg>
            <StyledCardTitle>{trimString(data.title, 24)}</StyledCardTitle>
          </StyledLink>
        </StyledCardBody>
      </StyledCard>
    </StyledCol>

  const renderRecipes = () => data.map((item, index) => renderRecipe(item, index));

  const trimString = function (string, length) {
    return string.length > length ?
      string.substring(0, length) + '...' :
      string;
  };

  return (
    <SortedRecipesWrapper>
      <StyledH3>Senaste Recept</StyledH3>
      <Row>
        {loading ? (<StyledSpinner />) :
          (renderRecipes(data))
        }
      </Row>
    </SortedRecipesWrapper>
  );
};

export default SortedRecipes