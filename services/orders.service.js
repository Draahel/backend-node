const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
class OrdersService {

  constructor(){}

  async findOne(id){
    const order = await models.Order.findByPk(id,{
      include: [
        {
          association: 'customer',
          include:['user']
        }
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
}

module.exports = OrdersService;
