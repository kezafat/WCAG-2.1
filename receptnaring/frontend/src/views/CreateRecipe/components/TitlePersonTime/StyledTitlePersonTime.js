import styled from 'styled-components';

export const StyledContainer = styled.section`
  width: 300px;
  margin: 0 auto;
`;

export const StyledInputGroup = styled.section`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
`;

export const StyledH2 = styled.h2`
  font-family: 'Open Sans', sans-serif;
  color: #fff;
  font-size: 1.6rem;
  margin-right: 1rem;
`;

export const StyledTitleInput = styled.input`
  font-family: 'Open Sans', sans-serif;
  border: none;
  border-bottom: 1px solid #707070;
  padding: 5px 0px 5px 5px;
  width: 100%;
`;

export const StyledH3 = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
  color: #fff;
`;

export const StyledSliderInputContainer = styled.div`
  width: 11rem;
  margin-left: auto;
  align-self: flex-end;
`;

export const StyledSliderInput = styled.input`
  font-family: 'Open Sans', sans-serif;
  appearance: none;
  background: #fff;
  padding-left: 5px;
  height: 1rem;
  width: 100%;
  border-radius: 3px;
  &::-webkit-slider-thumb {
    appearance: none;
    width: 1rem;
    height: 1rem;
    background: #000;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const StyledInput = styled.input`
  font-family: 'Open Sans', sans-serif;
  width: 2rem;
  text-align: center;
  margin-left: 0.5rem;
  -moz-appearance:textfield;
  &::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`;