import styled from 'styled-components';

export const RecipeWrapper = styled.div`
  height: auto;
`

export const TextBanner = styled.div`
  width: 250px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFAE2;
  border-radius: 4px;
  border: 1px solid #707070;
  @import url('https://fonts.googleapis.com/css?family=Cabin+Sketch:400,700&display=swap" rel="stylesheet');
  font-family: 'Cabin Sketch', cursive;
  margin-left: 30px;
  margin-top: -69px;
  @media (max-width: 380px){
    width: 100px;
    height: 80px;
    margin-top: -45px;
  }
  @media (max-width: 576px){
    width: 150px;
    height: 80px;
    margin-top: -45px;
  }
`

export const TextInfo = styled.h1`
  text-transform: uppercase;
  @media (max-width: 380px){
    font-size: 20px;
  }
  @media (max-width: 576px){
    font-size: 20px;
  }

`