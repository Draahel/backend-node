const express = require('express');
const ProductsService = require('../services/products.service');

const router = express.Router();
const productsService = new ProductsService();

router.get('/', (req, res) => {
  const products = productsService.findAll();
  res.status(200).json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = productsService.findOne(id);
  res.status(200).json(product);
});

router.post('/', (req, res) => {
  const { body } = req;
  const newProduct = productsService.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updatedProduct = productsService.update(id, body);
  res.json(updatedProduct);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  response = productsService.delete(id);
  res.json(response);
});

module.exports = router;
