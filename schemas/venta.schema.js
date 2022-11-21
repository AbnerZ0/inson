const Joi = require('joi');

const id = Joi.string().uuid();
const nombre = Joi.string().alphanum().min(3).max(15);
const precio = Joi.number().integer().min(10);
const createVentaSchema = Joi.object({
  nombre: nombre.required(),
  precio: precio
});

const updateVentaSchema = Joi.object({
  nombre: nombre,
  precio: precio
});

const getVentaSchema = Joi.object({
  id: id.required()
});

module.exports = {createVentaSchema, updateVentaSchema, getVentaSchema};
