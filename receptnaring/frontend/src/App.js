import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import CreateRecipe from './views/CreateRecipe';
import StartPage from './views/Startpage';
import Navbar from '../../frontend/src/components/Navbar';

const App = props => {
  return (
    <Router>
      <header>
      <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/skapa-recept" component={CreateRecipe} />
        </Switch>
      </main>
      <footer>
        Footer här
      </footer>
    </Router>
  )
};

export default App;
