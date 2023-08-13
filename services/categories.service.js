
const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class CategoriesService{
    constructor(){}

    async findAll(){
        return await models.Category.findAll();
    }

    async findOne(id){
        const category = await models.Category.findByPk(id);
        if(!category){
            throw boom.notFound('Customer not found');
        }
        return category;
    }

    async create(data){
        const newCategory = await models.Category.create(data);
        return newCategory;
    }

    async update(id, data){
        const category = await this.findOne(id);
        const response = await category.update(data);
        return response;
    }

    async delete(id){
        const category = await this.findOne(id);
        const response = await category.destroy();
        return response;
    }
}

module.exports = CategoriesService;