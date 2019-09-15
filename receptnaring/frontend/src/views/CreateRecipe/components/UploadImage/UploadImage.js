import React, { useState, useContext } from 'react';
import { StyledUploadContainer, StyledUploadInput, StyledUploadLabel } from './StyledUploadImage';

const axios = require("axios");
const uniqid = require('uniqid');



const UploadImage = (ctx) => {
  const [get, set] = ctx.s;
  const imgPath = `/images/uploaded/${get.img}`;
  const imgName = uniqid();

  const addImage = async e => {
    let file = e.target.files[0];
    const formData = new FormData();
    formData.append(imgName, file);

    axios.post("http://localhost:3001/api/uploadimg", formData, {
      'content-type': 'multipart/form-data'
    })
      .then((response) => {
        set(prev => ({ ...prev, img: response.data.filename }))
      }).catch((error) => {
        //No need for errorhandling at the moment
      });
  };


  return (
    <StyledUploadContainer>
      <form>
        <img src={(imgPath)} alt="Bild på en vit kamera med blå bakgrund" />
        <StyledUploadInput onChange={addImage} type="file" name="upload" id="upload" />
        <StyledUploadLabel htmlFor="upload">
          Välj bild för maträtt
      </StyledUploadLabel>
      </form>
    </StyledUploadContainer>
  )
}

export default UploadImage;
