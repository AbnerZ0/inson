const express = require('express');
const ventaRouter = require('./venta.router');

function routerApi1(app){
  const routerV2 = express.Router();
  app.use('/api/v2', routerV2);
  routerV2.use('/venta', ventaRouter);
}

module.exports = routerApi1;
