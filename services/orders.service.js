const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
class OrdersService {

  constructor(){}

  async findAll() {
    return await models.Order.findAll();
  }

  async findOne(id){
    const order = await models.Order.findByPk(id,{
      include: [
        {
          association: 'customer',
          include:['user']
        },
        'items'
      ]
    });
    if (!order) {
      throw boom.notFound('Order not found');
    }
    return order;
  }

  async create(data){
    const order = await models.Order.create(data);
    return order;
  }

  async addItem(data){
    const item = await models.OrderProduct.create(data);
    return item;
  }
}

module.exports = OrdersService;
