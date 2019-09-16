import React, { useState, useRef } from 'react';
import {
  StyledH2,
  StyledAddStepContainer,
  StyledInput,
  StyledAddButton,
  StyledImage,
  StyledOrderedList,
  StyledListItem,
  StyledListNumberContainer,
  StyledParagraph
} from './StyledAddStep';

const AddStep = (ctx) => {
  const [get, set] = ctx.s;
  const [steps, setSteps] = useState([]);
  const [step, setStep] = useState('');
  const inputRef = useRef(null);

  const addStep = e => {
    e.preventDefault();
    setSteps([...steps, step]);
    set(prev => ({...prev, 'instructions':[...steps, step]}))
    inputRef.current.focus();
  }

  const handleInput = e => setStep(e.target.value);

  const renderList = () => steps.map((step, i) =>
    <StyledListItem key={i}>
      <StyledListNumberContainer>
        <StyledParagraph primary>
          {i + 1}
        </StyledParagraph>
      </StyledListNumberContainer>
      <StyledParagraph className="text-break">
        {step}
      </StyledParagraph>
    </StyledListItem>
  );

  return (
    <StyledAddStepContainer onSubmit={addStep}>
      <StyledH2>Instruktioner</StyledH2>
      <StyledInput type="text" ref={inputRef} defaultValue={step} onChange={handleInput} />
      <StyledAddButton onClick={addStep}>
        <StyledImage src="/images/plus.svg" alt="Add" />
      </StyledAddButton>
      <StyledOrderedList>
        {renderList()}
      </StyledOrderedList>
    </StyledAddStepContainer>
  )
};

export default AddStep;
