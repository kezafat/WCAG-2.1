const express = require('express');
const bodyParser = require('body-parser');
const connectToDb = require('./config/db');
const config = require('./config/config');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const recipeRoutes = require('./API/recipeRoutes');
const settings = require('./config/settings.json');

connectToDb();

const app = express();

app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Välkommen till Recept & Närings super server'));

app.use(session({
  secret: settings.cookieSecret,
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: global.db
  })
}));

app.use(recipeRoutes);
app.listen(config.PORT, () => console.log(`Gulligagruppens server is on port ${config.PORT}`));
