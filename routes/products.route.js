const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: 'Banana', price: 1000})
});

router.post('/', (req, res) => {
  const { body } = req;
  res.json({
    message:'success',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  res.json({
    message:'success',
    data: body,
    id
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message:'deleted success',
    id
  });
});

module.exports = router;
