import React, { useEffect, useState } from 'react';
import { StyledCardBody, StyledCardTitle, StyledSpinner, StyledH3, StyledCol, StyledCard, StyledRow } from './StyleSortedRecipes';
import { CardImg } from 'reactstrap'
import { Link } from 'react-router-dom'



function SortedRecipes() {

  const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        const respons = await fetch(url);
        const data = await respons.json();
        const items = data;
        //slicing fetched data to get the correct amount and getting only the newest from the data array
        const slicedData = items.slice(-5);
        //reversing the data to get the last array item first.
        const reverseData = slicedData.reverse();
        //declaring the useState.
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
        <StyledCardBody>
          <Link to={"/recept/" + data.url}>
            <CardImg src={`/images/uploaded/${data.img}`} alt={data.title}></CardImg>
            <StyledCardTitle>{trimString(data.title, 24)}</StyledCardTitle>
          </Link>
        </StyledCardBody>
      </StyledCard>
    </StyledCol>

  const renderRecipes = () => data.map((item, index) => renderRecipe(item, index));

  //If the string is longer then (length) it will cut down the string to the value you set and add ... to the end.
  // If it's not longer it will just return the string.

  const trimString = function (string, length) {
    return string.length > length ?
      string.substring(0, length) + '...' :
      string;
  };

  return (
    <div>
      <StyledH3>Senaste Recept</StyledH3>
      <StyledRow>
        {loading ? (<StyledSpinner />) :
          (renderRecipes(data))
        }
      </StyledRow>
    </div>
  );
};

export default SortedRecipes