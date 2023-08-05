const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
class UsersService {

  constructor(){}

  async findAll(){
    return await models.User.findAll({
      include: ['customer']
    })
  };

  async findOne(id){
    const user = models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }

  async create(data){
    const user = await models.User.create(data);
    return user;
  }

  async update(id, data){
    const user = await this.findOne(id);
    const response = await user.update(data);
    return response;
  }

  async delete(id){
    const user = await this.findOne(id);
    const response = await user.destroy();
    return response;
  }
}

module.exports = UsersService;
