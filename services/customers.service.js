const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
class CustomersService {

  constructor(){}

  async findAll(){
    return await models.Customer.findAll()
  };

  async findOne(id){
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('Customer not found');
    }
    return customer;
  }

  async create(data){
    const customer = await models.Customer.create(data);
    return customer;
  }

  async update(id, data){
    const customer = await this.findOne(id);
    const response = await customer.update(data);
    return response;
  }

  async delete(id){
    const customer = await this.findOne(id);
    const response = await customer.destroy();
    return response;
  }
}

module.exports = CustomersService;
