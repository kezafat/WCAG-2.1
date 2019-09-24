import React, { useState} from 'react';
import Footer from './views/Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import CreateRecipe from './views/CreateRecipe';
import StartPage from './views/Startpage';
import Recipe from './views/Recipe';
import Navbar from '../../frontend/src/components/Navbar';

import {
  Header,
  Main,
  WcagDiv,
Wcagcontrastboxyellow,
Wcagcontrastboxstandard,
Wcagcontrastboxwhite
} from './StyledApp';




const App = (props) => {

  const [Color, setColor] = useState({bgcolor:"#ffffff25" , textcolor:"white", divcolor:"black", inputbg:"none",searchicon:"/images/searchicon.svg"});
const ChangeColors = (input)=> {

  if(input==="standard"){
    setColor({bgcolor:"#ffffff25" , textcolor:"white", divcolor:"black", inputbg:"none",searchicon:"/images/searchicon.svg"});
  }

  if(input==="yellow"){
    setColor({bgcolor:"yellow" , textcolor:"black",  divcolor:"yellow", inputbg:"#ffff00",searchicon:"/images/searchiconblack.svg"} );
  }
  
  if(input==="white"){
    setColor({bgcolor:"white" , textcolor:"black", divcolor:"white",inputbg:"#fff",searchicon:"/images/searchiconblack.svg"});
  } 
  }

  return (
    <Router>
      <Header>
        <Navbar />
      </Header>
      <Main>
      <WcagDiv>
    <p>Kontrast: </p>
    <Wcagcontrastboxstandard tabindex="0" onClick={() => ChangeColors('standard')} />
    <Wcagcontrastboxyellow tabindex="0" onClick={() => ChangeColors('yellow')} />
    <Wcagcontrastboxwhite  tabindex="0" onClick={() => ChangeColors('white')}/>
  </WcagDiv>
        <Switch>
          <Route exact path="/"  render={() =>  <StartPage color={Color} />}/>
          <Route exact path="/skapa-recept" component={CreateRecipe} />
          <Route exact path="/recept/:url" component={Recipe} />
        </Switch>
      </Main>
      <Footer>
        Footer här
      </Footer>
    </Router>
  )
};

export default App;
