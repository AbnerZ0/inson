const { rejects } = require('assert');
const crypto1 = require('crypto');
const { resolve } = require('path');
const boom = require('@hapi/boom');

class ventaService {

  constructor(){
    this.ventas = [];
    this.generate(10);
  }

  async generate(limite){
    for (let index = 0; index < limite; index++) {
      this.ventas.push({
        id: crypto1.randomUUID(),
        nombre: 'Venta nro: ' + index,
      });
    }
  }

  async create(data){
    const nuevaVenta = {
      id: crypto1.randomUUID(),
      ...data
    };
    this.ventas.push(nuevaVenta);
    return nuevaVenta;
  }

  async find() {


   /*  setTimeout(() => {
      return this.ventas;
    }, 3000); */


   /*  return new Promise((resolve, rejects) =>{
      setTimeout(() => {
        resolve(this.ventas);
        }, 3000);
        }); */

     return this.ventas;
  }

  async findOne(id){

    const venta = this.ventas.find(venta => {
      return venta.id === id;
    });
    if (!venta ) {
      throw boom.notFound('venta fallida');
    }
    return venta;
  }

  async update(id, changes){
    const index = this.ventas.findIndex(venta => {
      return venta.id === id;
    });
    if (index === -1) {
      throw boom.notFound('venta fallida');
    }
    const venta = this.ventas[index];
    this.ventas [index] = {
      ...venta,
      ...changes
      };
      return this.ventas[index];
    };



    async delete(id){
    const index = this.ventas.findIndex(venta => {
      return venta.id === id;
    });
    if (index === -1) {
      throw boom.notFound('venta fallida');
    }
    this.ventas.splice(index, 1);
    return { id };
  }
}

module.exports = ventaService;
