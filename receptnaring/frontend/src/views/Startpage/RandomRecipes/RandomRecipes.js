import React from 'react';
import { StyledCard, StyledCardBody, StyledCardImg, StyledCardTitle, StyledCol, StyledDiv, StyledLink } from './StyledRandomRecipes';

const RandomRecipes = ({ title, img, data }) => {

  return (
    <StyledCol lg={3}>
      <StyledCard >
        <StyledCardBody>
          <StyledLink to={"/recept/" + data}>
            <StyledCardImg src={img}></StyledCardImg>
            <StyledDiv>
              <StyledCardTitle>{title}</StyledCardTitle>
            </StyledDiv>
          </StyledLink>
        </StyledCardBody>
      </StyledCard>
    </StyledCol>
  )
}

export default RandomRecipes;