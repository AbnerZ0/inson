// const { rejects } = require('asserts');
const crypto = require('crypto');
const boom = require('@hapi/boom');

class paqueteService {

  constructor(){
    this.paquete = [];
    this.generate(10);
  }

  generate(limite){
    for (let index = 0; index < limite; index++) {
      this.paquetes.push({
        id: crypto.randomUUID(),
        nombre: 'producto ' + index,
        precio: 10 + Math.floor(Math.random()*190),
        estaBloqueado: Math.random() < 0.25
      });
    }
  }

  create(data){
    const nuevoPaquete = {
      id: crypto.randomUUID(),
      ...data
    };
    this.paquetes.push(nuevoPaquete);
    return nuevoPaquete;
  }

  async find() {
    return this.paquetes;
    // setTimeout(()=>{
    //   return this.productos;
    // },3000);
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(this.productos);
    //   },3000);
    // });
  }

  async findOne(id){
    const paquet = this.paquetes.find((paquete) => {
      return paquete.id === id;
    });
    if(!paquet) {
      throw boom.notFound('Producto no encontrado');
    }
    return paquet;
  }

  async update(id, changes){
    const index = this.paquetes.findIndex(paquete => {
      return paquete.id === id;
    });
    if (index === -1) {
      throw boom.notFound('Producto no encontrado');
    }
    const paquete = this.paquetes[index];
    this.paquetes [index] = {
      ...paquete,
      ...changes
      };
      return this.paquetes[index];
    };


  async delete(id){
    const index = this.paquetes.findIndex(paquete => {
      return paquete.id === id;
    });
    if (index === -1) {
      throw boom.notFound('Producto no encontrado');
    }
    this.paquetes.splice(index, 1);
    return { id };
  }
}

module.exports = paqueteService;
