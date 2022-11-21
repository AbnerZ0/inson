const express = require('express');
const router2 = express.Router();
const validatorHandler = require('./../middlewares/validator.handler');
const {createVentaSchema, updateVentaSchema, getVentaSchema} = require('./../schemas/venta.schema');
const VentaService =require('./../services/venta.service');
const service = new VentaService();



router2.get('/', async (req, res) => {
  const venta = await service.find();
  res.status(200).json(venta);
});

router2.get('/filter', async (req, res) => {
  res.json({
  message: '/ventas/filter'
});
});

router2.get('/:id',
            validatorHandler(getVentaSchema, 'params'),
            async (req, res, next) => {
  try {
  const { id } = req.params;
  const venta = await service.findOne(id);
  res.status(200).json(venta);
  } catch(error) {
    next(error);
  }

});


router2.post('/',
            validatorHandler(createVentaSchema, 'body'),
            async (req, res) => {
  const body = req.body;
  const nuevaVenta = await service.create(body);
  res.status(201).json({
    message: 'NuevaVenta',
    nuevaVenta
  });
});



router2.patch('/:id',
               validatorHandler(getVentaSchema, 'params'),
               validatorHandler(updateVentaSchema, 'body'),
               async (req, res, next) => {
  try {
  const {id} = req.params;
  const body = req.body;
  const venta = await service.update(id, body);
  res.status(200).json({
    message: 'actualziado',
    venta
  });
  } catch(error) {
    next(error);
  }
});

router2.delete('/:id',
              validatorHandler(getVentaSchema, 'params'),
               async (req, res, next) => {
  try {
  const {id} = req.params;
  const eliminar = await service.delete(id);
  res.status(200).json({
    message: 'eliminado',
    eliminar
  });

  } catch(error) {
    next(error);
  }
});














module.exports = router2;
