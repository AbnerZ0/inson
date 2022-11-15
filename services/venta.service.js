const crypto1 = require('crypto');

class ventaService {

  constructor(){
    this.ventas = [];
    this.generate(10);
  }

  generate(limite){
    for (let index = 0; index < limite; index++) {
      this.ventas.push({
        id: crypto1.randomUUID(),
        nombre: 'Venta nro: ' + index,
      });
    }
  }

  create(data){
    const nuevaVenta = {
      id: crypto1.randomUUID(),
      ...data
    };
    this.ventas.push(nuevaVenta);
    return nuevaVenta;
  }

  find() {
    return this.ventas;
  }

  findOne(id){
    return this.ventas.find(venta => {
      return venta.id === id;
    })
  }

  update(id, changes){
    const index = this.ventas.findIndex(venta => {
      return venta.id === id;
    });
    if (index === -1) {
      throw new Error('Producto no encontrado');
    }
    const venta = this.ventas[index];
    this.ventas [index] = {
      ...venta,
      ...changes
      };
      return this.ventas[index];
    };



  delete(id){
    const index = this.ventas.findIndex(venta => {
      return venta.id === id;
    });
    if (index === -1) {
      throw new Error('Producto no encontrado');
    }
    this.ventas.splice(index, 1);
    return { id };
  }
}

module.exports = ventaService;
