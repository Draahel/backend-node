const express = require('express');
const ProductsService = require('../services/products.service');
const validatorHandler = require('../middlewares/validatorHandler');
const { UpdateProductSchema, createProductSchema, getProductSchema, deleteProductSchema } = require('../schemas/products.schema');

const router = express.Router();
const productsService = new ProductsService();

router.get('/', async(req, res, next) => {
  try {
    const products = await productsService.findAll();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', 
  validatorHandler(getProductSchema, 'params'),
  async(req, res, next) => {
    try {
      const { id } = req.params;
      const product = await productsService.findOne(id);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async(req, res, next) => {
    try {
      const { body } = req;
      const newProduct = await productsService.create(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id', 
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(UpdateProductSchema, 'body'),
  async(req, res, next) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const updatedProduct = await productsService.update(id, body);
      res.json(updatedProduct);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', 
  validatorHandler(deleteProductSchema, 'params'),
  async(req, res, next) => {
    try {
      const { id } = req.params;
      response = await productsService.delete(id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
