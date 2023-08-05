const express = require('express');
const productsRouter = require('./products.route');
const categoryRouter = require('./category.route');
const usersRouter = require('./users.route');
const customerRouter = require('./customers.route');

const initRoutes = (app) => {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', productsRouter);
  router.use('/category', categoryRouter);
  router.use('/users', usersRouter);
  router.use('/customers', customerRouter);
};

module.exports = initRoutes;

