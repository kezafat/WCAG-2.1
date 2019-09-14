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
`;

const StyledAddButton = styled.button`
  grid-area: add;
`;

const StyledOrderedList = styled.ol`

`;

const StyledListItem = styled.li`
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
  StyledOrderedList,
  StyledListItem,
  StyledParagraph
}