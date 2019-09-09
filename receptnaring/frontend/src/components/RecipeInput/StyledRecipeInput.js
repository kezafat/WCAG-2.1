import styled from 'styled-components';

export const RecipeWrapper = styled.div`
  display: flex;
  height: 35vh;
  justify-content: center;
  align-items: center;
  background-image: url(/images/sallad0.jpg);
  background-size: cover;
  background-position: center;
  width: 80%;
`

export const RecipeSearch = styled.input`
  width: 25%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 576px){
    width: 60%;
  }
`
