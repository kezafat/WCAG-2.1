import styled from "styled-components";

export const RecipeWrapper = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 150px;

  @media (max-width: 576px) {
    margin-bottom: 80px;
  }

`;

export const RecipeSearch = styled.input`
  background: url(${props => props.icon}) top left no-repeat;
  background-color:${props => props.color};
  padding: 12px 0;
  outline: 0;
  border: 1px solid transparent;
  border-bottom: 1px solid #FFF;
  border-radius: 0;
  background-position: 100% center;
  width: 60%;
  height: 50px;


  padding: 6px 12px;
  /*
  font-size: 14px;
  line-height: 1.42857143;
  color: black;
  border: 1px solid black;
  border-radius: 4px; */
  &::placeholder {
    color: ${props => props.text};;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  
  }

  &:focus {
    background-color:#00000085;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1.5px;

  }
  @media (max-width: 576px) {
    width: 60%;
    font-size: 9px;
    background-size: 10% 50%
  }
  @media (max-width: 380px) {
    width: 60%;
    font-size: 7px;
    background-size: 10% 50%
  }

`;
