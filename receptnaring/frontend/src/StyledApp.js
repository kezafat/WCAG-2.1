import styled from 'styled-components';

export const Header = styled.header`

`
export const Main = styled.main`
  background-image:url('/images/bg1.jpg');
  background-size:cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color:black;

    background-color: white;

`


export const WcagDiv = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
color:white;
margin:0 auto;
height:50px;
width:20%;
@media (max-width: 650px) {
    width: 100%;
  }


`;


export const Wcagcontrastboxyellow = styled.button`
background-image:url('../images/eyeyellow.svg');
background-size:100% 100%;
align-self:center;
height:20px;
width:40px;
background-color:black;
border-radius:10px;
cursor: pointer;
`;

export const Wcagcontrastboxstandard = styled.button`
background-image:url('../images/eyestandard.svg');
background-size:100% 100%;
align-self:center;
height:20px;
width:40px;
background-color:white;
border-radius:10px;
cursor: pointer;
`;

export const Wcagcontrastboxwhite = styled.button`
background-image:url('../images/eyewhite.svg');
background-size:100% 100%;
align-self:center;
height:20px;
width:40px;
background-color:black;
border-radius:10px;
cursor: pointer;
`;