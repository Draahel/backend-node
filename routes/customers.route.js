const express = require('express');
const validatorHandler = require('../middlewares/validatorHandler');
const { createCustomerSchema, updateCustomerSchema, getCustomerSchema } = require('../schemas/customers.schema');
const CustomerService = require('../services/customers.service');

const customerService = new CustomerService();
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const customers = await customerService.findAll();
        res.json(customers);
    } catch (error) {
        next(error);
    }
});

router.get('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = await customerService.findOne(id);
      res.json(customer);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createCustomerSchema, 'body'),
  async ( req, res, next ) => {
    try {
        const body = req.body;
        const newCustomer = await customerService.create(body);
        res.status(201).json(newCustomer);
    } catch (error) {
        next(error)
    }
  }
)

router.patch('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async ( req, res, next ) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const updatedCustomer = await customerService.update(id, body);
        res.json(updatedCustomer);
    } catch (error) {
        next(error)
    }
  }
)

router.delete('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await customersService.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;