import React, { useEffect, useState  } from 'react'
import { SortedRecipesWrapper, StyledCard, StyledCardBody, StyledCardTitle, StyledCardImg } from './StyleSortedRecipes'


function SortedRecipes() {

    const useFetch = (url) => {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const fetchData = async () => {
                const respons = await fetch(url);
                const data = await respons.json();
                const [items] = data;
                setData(items);
                setLoading(false);
            };
            fetchData();
        }, [url]);
        return {data, loading};
    }
    const {data, loading} = useFetch('http://localhost:3001/api/recipes');

    return (
        <SortedRecipesWrapper>
            <StyledCard>
                <StyledCardBody>
                    <StyledCardImg></StyledCardImg>
                    <StyledCardTitle></StyledCardTitle>
                </StyledCardBody>
            </StyledCard>
        </SortedRecipesWrapper>
    );
};

export default SortedRecipes