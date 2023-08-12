const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ProductsService {

  constructor(){}

  async findAll(){
    return await models.Product.findAll();
  };

  async findOne(id){
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    return product;
  }

  async create(data){
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async update(id, data){
    const product = await this.findOne(id);
    const response = await product.update(data);
    return response;
  }

  async delete(id){
    const product = await this.findOne(id);
    const response = await product.destroy();
    return response;
  }

}

module.exports = ProductsService;
