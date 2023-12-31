const express = require('express');
const productsRouter = require('./products.route');
const categoryRouter = require('./category.route');
const usersRouter = require('./users.route');
const customerRouter = require('./customers.route');
const orderRouter = require('./order.route');

const initRoutes = (app) => {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', productsRouter);
  router.use('/categories', categoryRouter);
  router.use('/users', usersRouter);
  router.use('/customers', customerRouter);
  router.use('/orders', orderRouter);
};

module.exports = initRoutes;

