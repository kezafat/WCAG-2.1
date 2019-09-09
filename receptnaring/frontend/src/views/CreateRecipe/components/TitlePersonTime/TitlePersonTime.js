import React from 'react';
import { StyledContainer, StyledInputGroup, StyledH2, StyledTitleInput, StyledH3, StyledDraggableInput, StyledInput } from './StyledTitlePersonTime';

const TitlePersonTime = () => {
  return (
    <StyledContainer>
      <StyledInputGroup>
        <StyledH2>
          Titel
        </StyledH2>
        <StyledTitleInput />
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledH3>
          Personer
        </StyledH3>
        <StyledDraggableInput />
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledH3>
          Timmar
        </StyledH3>
        <StyledDraggableInput />
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledH3>
          Minuter
        </StyledH3>
        <StyledDraggableInput />
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledInput />
        <StyledInput />
      </StyledInputGroup>
    </StyledContainer>
  )
}

export default TitlePersonTime;
