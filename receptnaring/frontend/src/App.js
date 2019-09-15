import React from 'react';
import Footer from './views/Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import CreateRecipe from './views/CreateRecipe';
import StartPage from './views/Startpage';
import Navbar from '../../frontend/src/components/Navbar';
import {
  Header,
  Main
} from './StyledApp';

const App = props => {
  return (
    <Router>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/skapa-recept" component={CreateRecipe} />
        </Switch>
      </Main>
      <Footer>
        Footer här
      </Footer>
    </Router>
  )
};

export default App;
