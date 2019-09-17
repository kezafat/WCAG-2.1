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
  let steps = get['instructions'];
  const [step, setStep] = useState('');
  const inputRef = useRef(null);

  const addStep = e => {
    e.preventDefault();
    // Do not allow blank instructions
    if (step.length === 0) {
      return;
    }
    set(prev => ({ ...prev, 'instructions': [...steps, step] }))
    setStep('')
    inputRef.current.focus();
  }

  const handleInput = e => {
    setStep(e.target.value)
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      if (step.length === 0) {
        return;
      }
      set(prev => ({ ...prev, 'instructions': [...steps, step] }))
      setStep('')
    }
  };

  const handleUpdateInstruction = e => {
    let key = e.target.getAttribute('data-ref');
    let val = e.target.value;
    steps[key] = val;
    set({ 'instructions': [...steps] })
  }

  const renderList = () => steps.map((step, i) =>
    <StyledListItem key={i}>
      <StyledListNumberContainer>
        <StyledParagraph primary>
          {i + 1}
        </StyledParagraph>
      </StyledListNumberContainer>
      <StyledParagraph className="text-break">
        <input type="text" data-ref={i} value={steps[i]} onChange={handleUpdateInstruction}></input>
      </StyledParagraph>
    </StyledListItem>
  );

  return (
    <StyledAddStepContainer>
      <StyledH2>Instruktioner</StyledH2>
      <StyledInput type="text" ref={inputRef} value={step} onChange={handleInput} onKeyPress={handleKeyPress} />
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
