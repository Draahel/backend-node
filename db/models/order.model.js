const { Model, DataTypes, Sequelize } = require('sequelize');
const { CUSTOMER_TABLE } = require('./customer.model')

const ORDER_TABLE = 'orders';

const OrderSchema = {
  id:{
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  customerId:{
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'customer_id',
    references: {
        model: CUSTOMER_TABLE,
        key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  }
};

class Order extends Model {
  static associate(models){
    this.belongsTo(models.Customer,{
      as: 'customer'
    })
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false,
    }
  }

}

module.exports = {
  ORDER_TABLE,
  OrderSchema,
  Order
};
