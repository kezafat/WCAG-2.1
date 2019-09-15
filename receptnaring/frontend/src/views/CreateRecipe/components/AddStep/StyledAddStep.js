import styled from 'styled-components';

const StyledAddStepContainer = styled.section`
  display: grid;
  grid-template-areas: 
  "title title"
  "input add";
  max-width: 300px;
  margin: 0 auto;
`;

const StyledH2 = styled.h2`
  grid-area: title;
  margin: 2rem 0;
`;

const StyledInput = styled.input`
  grid-area: input;
  height: 2rem;
  padding: 0 0.25rem;
  border: 1px solid #DDDDDD;
`;

const StyledAddButton = styled.button`
  grid-area: add;
  display: flex;
  justify-content: center;
  background: #72C554;
  border: 1px solid #DDDDDD;
`;

const StyledImage = styled.img`
  width: 1.1rem;
  height: auto;
`;

const StyledOrderedList = styled.ol`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
`;

const StyledListItem = styled.li`
  width: 100%;
  margin-top: 1rem;
`;

const StyledParagraph = styled.p`
  display: inline-block;
  background: ${props => props.primary ? '#ECEEEF' : '#fff'};
  padding: 0.5rem;
`;

export {
  StyledH2,
  StyledAddStepContainer,
  StyledInput,
  StyledAddButton,
  StyledImage,
  StyledOrderedList,
  StyledListItem,
  StyledParagraph
}