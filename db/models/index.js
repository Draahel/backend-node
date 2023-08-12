const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Product, ProductSchema } = require('./product.model');

function setupModels(sequelize){
    //Inicializar los modelos
    User.init(UserSchema, User.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));


    //Asociar los modelos
    User.associate(sequelize.models);
    Customer.associate(sequelize.models);
}

module.exports = setupModels;