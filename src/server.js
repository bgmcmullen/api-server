'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

const logger = require('./middleware/logger.js');

const notFoundHandler = require('./handlers/404.js'); 
const errorHandler = require('./handlers/500.js');

const dogRoutes = require('./routes/dog.js');
const cityRoutes = require('./routes/city.js');

app.use(cors());
app.use(express.json());

app.use(logger, dogRoutes);
app.use(logger, cityRoutes);

app.use('/broken', (req,res,next) => next("ERROR!!!!!!!!!!!!!"));

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => {
    console.log(`Server is up on ${port}`);
  });
}

module.exports = { app, start };