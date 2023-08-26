const express = require('express');
const validatorHanlder = require('../middlewares/validatorHandler');
const { createOrderSchema, getOrderSchema, addItemSchema } = require('../schemas/orders.schema');
const OrdersService = require('../services/orders.service');

const ordersService = new OrdersService();

const router = express.Router();

router.get('/',
  async (req, res, next) => {
    try {
      const orders = await ordersService.findAll();
      res.json(orders);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id',
  validatorHanlder(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await ordersService.findOne(id);
      res.json(order);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHanlder(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrder = await ordersService.create(body);
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/add-item',
  validatorHanlder(addItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newItem = await ordersService.addItem(body);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;
