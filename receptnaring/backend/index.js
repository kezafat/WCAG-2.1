const express = require('express');
const bodyParser = require('body-parser');
const connectToDb = require('./config/db');
const config = require('./config/config');
const recipeRoutes = require('./API/recipeRoutes');
const dbIngRoute = require('./API/dbIngRoute');
const cors = require('cors')

connectToDb();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Välkommen till Recept & Närings super server'));

app.use(recipeRoutes);
app.use(dbIngRoute);
app.listen(config.PORT, () => console.log(`Gulligagruppens server is on port ${config.PORT}`));
