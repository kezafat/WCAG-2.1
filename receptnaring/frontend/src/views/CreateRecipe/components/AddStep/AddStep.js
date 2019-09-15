import React, { useState } from 'react';
import {
  StyledH2,
  StyledAddStepContainer,
  StyledInput,
  StyledAddButton,
  StyledImage,
  StyledOrderedList,
  StyledListItem,
  StyledParagraph
} from './StyledAddStep';

const AddStep = () => {
  const [steps, setSteps] = useState([]);
  const [step, setStep] = useState('');

  const addStep = () => {
    setSteps([...steps, step]);
  }

  const handleInput = e => setStep(e.target.value);

  const renderList = () => steps.map((step, i) =>
    <StyledListItem key={i}>
      <StyledParagraph primary>
        1
      </StyledParagraph>
      <StyledParagraph>
        {step}
      </StyledParagraph>
    </StyledListItem>
  );

  return (
    <StyledAddStepContainer>
      <StyledH2>Instruktioner</StyledH2>
      <StyledInput type="text" defaultValue={step} onChange={handleInput} />
      <StyledAddButton onClick={addStep}>
        <StyledImage src="/images/uploaded/plus.svg" alt="Add" />
      </StyledAddButton>
      <StyledOrderedList>
        {renderList()}
      </StyledOrderedList>
    </StyledAddStepContainer>
  )
};

export default AddStep;
