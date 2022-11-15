const express = require('express');
const routerApi = require('./routes');
const routerApi1 = require('./routes/indexventas');
const app = express();
const port = 3100;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('HOLLAAA');
});

routerApi(app);
routerApi1(app);

/* app.get('/products', (req, res) => {
  res.json([
    {
      id: 001,
      nombre:'producto 1',
      precio: 12132,
    },
    {
      id: 002,
      nombre:'producto 2',
      precio: 132332,
    },
    {
      id: 001,
      nombre:'producto1',
      precio: 12132,
    },
    {
      id: 003,
      nombre:'producto 3',
      precio: 33333,
    },
    {
      id: 004,
      nombre:'producto 4',
      precio: 3344444,
    },
  ]);
});


app.get('/products/filter', (req, res) => {
    res.json({
    message: '/products/filter'
  });
});

app.get('/products/:id', (req, res) => {
  const {id} = req.params;
    res.json({
    message: 'soy un id',
    id
  });
});

app.get('/categorias/:catId/products/:prodId', (req, res) => {
  const {catId, prodId} = req.params;
  res.json({
    catId,
    prodId
  });
});

app.get('/users', (req, res) => {
  const {limit, offset } = req.query;
    if (limit && offset){
      res.json({
        limit,
        offset
      });
    } else {
      res.json({
        message: 'no estan los dos query params'
      });
    }
  }); */


app.listen(port, () => {
    console.log("express server activo: " +port )
});
