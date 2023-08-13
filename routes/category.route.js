const express = require('express');
const validatorHanlder = require('../middlewares/validatorHandler');
const { getCategorySchema, updateCategorySchema, createCategorySchema } = require('../schemas/categories.schema');
const CategoriesService = require('../services/categories.service');

const categoriesService = new CategoriesService();

const router = express.Router();

router.get('/', async (req, res, next)=>{
  try {
    const categories = await categoriesService.findAll();
    res.json(categories);
  } catch (error) {
    next(error);
  }
})

router.get('/:id',
  validatorHanlder(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await categoriesService.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/', 
  validatorHanlder(createCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await categoriesService.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHanlder(getCategorySchema, 'params'),
  validatorHanlder(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updatedCategory = await categoriesService.update(id, body);
      res.json(updatedCategory);
    } catch (error) {
      next(error);
    }
  }
)

router.delete('/:id',
  validatorHanlder(getCategorySchema, 'params'),
  async ( req, res, next ) => {
    try {
      const { id } = req.params;
      await categoriesService.delete(id);
      res.json({id});
    } catch (error) {
      next(error);
    }
  }
)


module.exports = router;
