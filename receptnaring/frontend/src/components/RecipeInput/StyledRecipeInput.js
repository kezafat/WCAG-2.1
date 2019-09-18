import styled from 'styled-components';

export const RecipeWrapper = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const RecipeSearch = styled.input`
  width: 40%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  &::placeholder {
    color: black;
  }
  @media (max-width: 576px){
    width: 60%;
  }
`
