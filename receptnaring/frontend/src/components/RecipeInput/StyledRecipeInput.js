import styled from "styled-components";

export const RecipeWrapper = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 150px;
`;

export const RecipeSearch = styled.input`
  background: url("/images/searchicon.svg") top left no-repeat;
  background-color: #fff;
  padding: 12px 0;
  outline: 0;
  border: 1px solid transparent;
  border-bottom: 2px solid #575756;
  border-radius: 0;
  background-position: 100% center;
  width: 60%;
  height: 50px;
  box-shadow: 0 0 10px 5px #fff;

  padding: 6px 12px;
  /*
  font-size: 14px;
  line-height: 1.42857143;
  color: black;
  border: 1px solid black;
  border-radius: 4px; */
  &::placeholder {
    color: color(#fff a(0.8));
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  @media (max-width: 576px) {
    width: 60%;
    font-size: 9px;
  }
`;
