import React from 'react';
import { StyledCard, StyledCardBody, StyledCardImg, StyledCardTitle, StyledCol, StyledDiv, StyledLink } from './StyledRandomRecipes';

const RandomRecipes = ({color, title, img, data}) => {


  return (
    <StyledCol lg={4}>
      <StyledCard >
        <StyledCardBody>
          <StyledLink to={"/recept/" + data}>
            <StyledCardImg src={img}></StyledCardImg>
            <StyledDiv color={color.divcolor}>
              <StyledCardTitle color={color.textcolor}>{title}</StyledCardTitle>
            </StyledDiv>
          </StyledLink>
        </StyledCardBody>
      </StyledCard>
    </StyledCol>
  )
}

export default RandomRecipes;