const express = require('express');
const routes = require('../routes/routes.js');
const bodyParser = require('body-parser');

require('marko/node-require').install();
require('marko/express');

app = express()

app.use(bodyParser.urlencoded({
  extended:  true
}));

routes(app);

module.exports = (app) => {};