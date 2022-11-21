const express = require('express');
const paqueteRouter = require('./paquete.router');

function routerApi3(app){
  const routerV3= express.Router();
  app.use('/api/v3', routerV2);
  routerV3.use('/venta', paqueteRouter);
}

module.exports = routerApi3;
