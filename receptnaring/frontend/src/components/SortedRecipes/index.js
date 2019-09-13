import React, { useEffect, useState } from 'react'
import { SortedRecipesWrapper, StyledCard, StyledCardBody, StyledCardTitle, StyledCardImg, StyledSpinner } from './StyleSortedRecipes'


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
                setData(slicedData);
                setLoading(false);
            };
            fetchData();
        }, [url]);
        return { data, loading };
    }
    const { data, loading } = useFetch('http://localhost:3001/api/recipes');

    const renderRecipe = (data, index) => <StyledCard key={index} >
        <StyledCardBody>
            <StyledCardImg src={`/images/${data.img}`}></StyledCardImg>
            <StyledCardTitle>{data.title}</StyledCardTitle>
        </StyledCardBody>
    </StyledCard>

    const renderRecipes = () => data.map((simon, index) => renderRecipe(simon, index))

    return (
        <SortedRecipesWrapper>
            { loading ? (<StyledSpinner/>) :
            (renderRecipes(data))
        }
        </SortedRecipesWrapper>
    );
};

export default SortedRecipes