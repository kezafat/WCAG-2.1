import React from 'react';
import {
  StyledUploadContainer,
  StyledUploadInput,
  StyledUploadLabel
} from './StyledUploadImage';
import image from '../../../../assets/images/upload-image.png';

const UploadImage = () => {

  const log = e => {
    console.log(e.target.files);
  }

  return (
    <StyledUploadContainer>
      <img src={image} alt="Bild på en vit kamera med blå bakgrund" />
      <StyledUploadInput onChange={log} type="file" name="upload" id="upload" />
      <StyledUploadLabel htmlFor="upload">
        Lägg upp ett foto
      </StyledUploadLabel>
    </StyledUploadContainer>
  )
}

export default UploadImage;
