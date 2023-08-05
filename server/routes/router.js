const express = require('express');
const route = express.Router();

const services= require('../services/render');
// const controller = require('../controller/controller');


route.get('/',services.HomeRoute);

route.get('/add_person',services.add_person);

module.exports = route;
