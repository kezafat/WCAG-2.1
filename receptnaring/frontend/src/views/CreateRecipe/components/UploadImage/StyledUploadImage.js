import styled from 'styled-components';

export const StyledUploadContainer = styled.section`
  margin: 0 auto;
  max-width: 200px;
`;

export const StyledUploadInput = styled.input`
  width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;

export const StyledUploadLabel = styled.label`
  font-family: 'Open Sans', sans-serif;
  min-width: 100%;
  margin-top: 1rem;
  padding: 0.2rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  
  &:hover {
    cursor: pointer;
  }
`;