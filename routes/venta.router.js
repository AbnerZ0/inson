const express = require('express');
const router2 = express.Router();
const VentaService =require('./../services/venta.service');
const service = new VentaService();


router2.get('/', (req, res) => {
  const venta = service.find();
  res.status(200).json(venta);
});

router2.get('/filter', (req, res) => {
  res.json({
  message: '/ventas/filter'
});
});

router2.get('/:id', (req, res) => {
  const { id } = req.params;
  const venta = service.findOne(id);
  if (venta === undefined) {
    res.status(404).json({
      message: 'No hay ventas'
    });
  }
  res.status(200).json(venta);
});


router2.post('/', (req, res) => {
  const body = req.body;

  const nuevaVenta = service.create(body);
  res.status(201).json({

    message: 'NuevaVenta',
    nuevaVenta
  });
});

router2.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  const venta = service.update(id, body);
  res.status(200).json({
    message: 'actualziado',
    venta
  });
});

router2.delete('/:id', (req, res) => {
  const {id} = req.params;
  const eliminar = service.delete(id);
  res.status(200).json({
    message: 'eliminado',
    eliminar
  });
});














module.exports = router2;
