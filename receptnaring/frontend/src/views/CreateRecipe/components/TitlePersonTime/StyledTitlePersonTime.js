import styled from 'styled-components';

export const StyledContainer = styled.section`
  width: 300px;
  margin: 0 auto;
`;

export const StyledInputGroup = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
`;

export const StyledH2 = styled.h2`
  color: #707070;
  font-size: 1.6rem;
  margin-right: 1rem;
`;

export const StyledTitleInput = styled.input`
  border: none;
  border-bottom: 1px solid #707070;
  padding: 0 0.5rem;
  width: 100%;
`;

export const StyledH3 = styled.h3`
  color: #707070;
  font-size: 1.2rem;
`;

export const StyledSliderInputContainer = styled.div`
  width: 13rem;
`;

export const StyledSliderInput = styled.input`
  appearance: none;
  background: lightgrey;
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
  width: 3rem;
  text-align: center;
  margin: ${props => props.primary ? '0 1rem 0 auto ' : '0 auto 0 0'}; 
`;