import React, { useState } from 'react';
import { StyledContainer, StyledInputGroup, StyledH2, StyledTitleInput, StyledH3, StyledSliderInputContainer, StyledSliderInput, StyledInput } from './StyledTitlePersonTime';
import { sliderInputsData } from '../../../../staticData';

const TitlePersonTime = () => {
  const [sliderValues, setSliderValues] = useState({
    people: 0,
    hours: 0,
    minutes: 0
  });
  /* const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0); */

  const renderSliders = () => sliderInputsData.map(({ title, name, min, max, id }) =>
    <StyledInputGroup key={id}>
      <StyledH3>
        {title}
      </StyledH3>
      <StyledSliderInputContainer>
        <StyledSliderInput type="range" name={name} min={min} max={max} defaultValue={sliderValues[name]} onChange={onSliderChange} />
      </StyledSliderInputContainer>
    </StyledInputGroup>
  );

  // const onSliderChange = e => this.setState({ [e.target.name]: e.target.value });

  const onSliderChange = e => {
    e.persist();
    console.log(e.target.getAttribute('name'));
    console.log(e.target.value);
    setSliderValues(sliderValues => ({ ...sliderValues, [e.target.getAttribute('name')]: e.target.value }));
  }

  return (
    <StyledContainer>
      <StyledInputGroup>
        <StyledH2>
          Titel
        </StyledH2>
        <StyledTitleInput />
      </StyledInputGroup>
      {renderSliders()}
      <StyledInputGroup>
        <StyledInput type="number" placeholder="h" min="0" value={sliderValues.hours} readOnly primary />
        <StyledInput type="number" placeholder="min" min="0" />
      </StyledInputGroup>
    </StyledContainer>
  )
}

export default TitlePersonTime;
