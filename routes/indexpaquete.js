const express = require('express');
const paqueteRouter = require('./paquete.router');

function routerApi3(app){
  const routerV3= express.Router();
  app.use('/api/v3',routerV3);
  routerV3.use('/paquete', paqueteRouter);
}

module.exports = routerApi3;

