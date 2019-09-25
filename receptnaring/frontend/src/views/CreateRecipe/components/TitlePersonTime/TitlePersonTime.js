import React, { useState } from 'react';
import { sliderInputsData } from './staticData';
import {
  StyledContainer,
  StyledInputGroup,
  StyledH2,
  StyledTitleInput,
  StyledH3,
  StyledSliderInputContainer,
  StyledSliderInput,
  StyledInput
} from './StyledTitlePersonTime';



const TitlePersonTime = (ctx) => {
  const [get, set] = ctx.s;
  const [inputValues, setInputValues] = useState({
    title: get.title,
    portion: 2,
    time: 0
  });


  const renderSliders = () => sliderInputsData.map(({ title, name, min, max, id }) =>
    <StyledInputGroup key={id}>
      <StyledH3>
        {title}
      </StyledH3>
      <StyledSliderInputContainer>
        <StyledSliderInput
          type="range"
          name={name}
          min={min}
          max={max}
          defaultValue={inputValues[name]}
          onChange={onSliderChange}

        />
      </StyledSliderInputContainer>
      <StyledInput
        type="number"
        min={min}
        value={inputValues[name]}
        tabIndex="-1"
        readOnly
      />
    </StyledInputGroup>
  );

  const onSliderChange = e => {
    e.persist();
    setInputValues(inputValues => ({ ...inputValues, [e.target.getAttribute('name')]: e.target.value }));
    set(prev => ({ ...prev, [e.target.getAttribute('name')]: e.target.value }))
  }

  const onInputChange = e => {
    e.persist();
    set(prev => ({ ...prev, 'title': e.target.value }))
  }
  
  return (
    <StyledContainer>
      <StyledInputGroup>
        <StyledH2>
          Titel
        </StyledH2>
        <StyledTitleInput
          type="text"
          name="title"
          placeholder="Skriv titel här..."
          value={get.title}
          onChange={onInputChange}
        />
      </StyledInputGroup>
      {renderSliders()}
    </StyledContainer>
  )
}

export default TitlePersonTime;
