import React from 'react';
import {
  StyledUploadContainer,
  StyledUploadInput,
  StyledUploadLabel
} from './StyledUploadImage';
import image from '../../../../assets/images/upload-image.png';

const UploadImage = () => {
  return (
    <StyledUploadContainer>
      <img src={image} alt="Bild på en vit kamera med blå bakgrund" />
      <StyledUploadInput type="file" name="upload" id="upload" />
      <StyledUploadLabel htmlFor="upload">
        Lägg upp ett foto
      </StyledUploadLabel>
    </StyledUploadContainer>
  )
}

export default UploadImage;
