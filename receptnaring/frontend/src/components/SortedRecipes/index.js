import React, { useEffect, useState } from 'react';
import { StyledCardBody, StyledCardTitle, StyledSpinner, StyledH3, StyledCol, StyledCard } from './StyleSortedRecipes';
import { Row, CardImg } from 'reactstrap'
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

  const trimString = function (string, length) {
    return string.length > length ?
      string.substring(0, length) + '...' :
      string;
  };

  return (
    <div>
      <StyledH3>Senaste Recept</StyledH3>
      <Row>
        {loading ? (<StyledSpinner />) :
          (renderRecipes(data))
        }
      </Row>
    </div>
  );
};

export default SortedRecipes