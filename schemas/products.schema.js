const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(4).max(10);
const description = Joi.string().min(10);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    description: description.required(),
    image: image.required(),
});

const UpdateProductSchema = Joi.object({
    name,
    price,
    description,
    image,
});

const getProductSchema = Joi.object({
    id: id.required(),
});

const deleteProductSchema = Joi.object({
    id: id.required(),
});

module.exports = {
    createProductSchema,
    UpdateProductSchema,
    getProductSchema,
    deleteProductSchema,
}
