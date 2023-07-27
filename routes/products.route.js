const express = require('express');
const ProductsService = require('../services/products.service');

const router = express.Router();
const productsService = new ProductsService();

router.get('/', async(req, res) => {
  try {
    const products = await productsService.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async(req, res) => {
  const { id } = req.params;
  const product = await productsService.findOne(id);
  res.status(200).json(product);
});

router.post('/', async(req, res) => {
  const { body } = req;
  const newProduct = await productsService.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedProduct = await productsService.update(id, body);
    res.json(updatedProduct);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
});

router.delete('/:id', async(req, res) => {
  try {
    const { id } = req.params;
    response = await productsService.delete(id);
    res.json(response);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
});

module.exports = router;
