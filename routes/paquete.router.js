const express = require('express');
const router3 = express.Router();
const validatorHandler = require('./../middlewares/validator.handler');
const { createPaqueteSchema, updatePaqueteSchema, getPaqueteSchema } = require('./../schemas/paquete.schema')
const paqueteService = require('./../services/paquete.service');
const service = new paqueteService();

router3.get('/', async (req, res) => {
  const paquetes = await service.find();
  res.status(200).json(paquetes);
});

//****************PAQUETES*************************

router3.get('/:id',
            validatorHandler(getPaqueteSchema, 'params'),
            async (req, res, next) => {
  try{
    const { id } = req.params;
    const paquete = await service.findOne(id);
    res.status(200).json(paquete);
  }catch(error){
    next(error);
  }
});

//ROUTER ENFOCADOS
//AGREGAR
router3.post('/',
            validatorHandler(createPaqueteSchema, 'body'),
            async (req, res) => {
  const body = req.body;
  const nuevoPaquete = await service.create(body);
  res.status(201).json({
    message: 'nuevo',
    nuevoPaquete
  });
});

router3.patch('/:id',
               validatorHandler(getPaqueteSchema, 'params'),
               validatorHandler(updatePaqueteSchema, 'body'),
               async (req, res, next) => {
  try {
  const {id} = req.params;
  const body = req.body;
  const paquete = await service.update(id, body);
  res.status(200).json({
    message: 'actualizado',
    paquete
  });
  } catch(error) {
    next(error);
  }
});

router3.delete('/:id',
              validatorHandler(getPaqueteSchema, 'params'),
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


module.exports = router3;
