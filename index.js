const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Welcome to my application');
})

app.get('/home', (req, res) => {
  res.send('Welcome to my home');
});

app.get('/products', (req, res) => {
  const { limit } = req.query;
  const queryLimit = limit || 10;
  let products = [];
  for (let index = 0; index < queryLimit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: 'Banana', price: 1000})
});

app.get('/category/:categoryId/product/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({ categoryId, productId});
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({ limit, offset });
  }else{
    res.send('No enviaste parametros.');
  }
});

app.listen(port, () =>{
  console.log('listening on port ',port);
});
