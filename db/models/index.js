const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');

function setupModels(sequelize){
    //Inicializar los modelos
    User.init(UserSchema, User.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));


    //Asociar los modelos
    Customer.associate(sequelize.models)
}

module.exports = setupModels;