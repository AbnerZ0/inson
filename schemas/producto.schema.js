const joi = require('joi');

const id = joi.string()
               .uuid();

const nombre = joi.string()
                  .alphanum()
                  .min(3)
                  .max(15);

const precio = joi.number()
                  .integer()
                  .min(10);

const createProductoSchema = joi.object({
  nombre: nombre.required(),
  precio: precio.required()
});

const updateProductoSchema = joi.object({
  nombre: nombre,
  precio: precio
});

const getProductoSchema = joi.object({
  id: id.required()
});

module.exports = { createProductoSchema, updateProductoSchema, getProductoSchema };
