import React, { useEffect, useState } from 'react';
import { StyledCardBody, StyledCardTitle, StyledSpinner, StyledH3, StyledCol, StyledCard, StyledRow } from './StyleSortedRecipes';
import { CardImg } from 'reactstrap'
import { Link } from 'react-router-dom'



function SortedRecipes(color) {
let colors = color.color

  const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        const respons = await fetch(url);
        const data = await respons.json();
        const items = data;
        const slicedData = items.slice(-5);
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
    <StyledCol lg="2" key={index}>
      <StyledCard>
        <StyledCardBody text={colors.textcolor} bgcolor={colors.bgcolor}>
          <Link to={"/recept/" + data.url}>
            <CardImg src={`/images/uploaded/${data.img}`} alt={data.title}></CardImg>
            <StyledCardTitle>{trimString(data.title, 24)}</StyledCardTitle>
          </Link>
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
    <div>
      <StyledH3>Senaste Recept</StyledH3>
      <StyledRow color={colors.bgcolor} >
        {loading ? (<StyledSpinner />) :
          (renderRecipes(data))
        }
      </StyledRow>
    </div>
  );
};

export default SortedRecipes