const { Model, DataTypes, Sequelize } = require('sequelize');
const { ORDER_TABLE } = require('./order.model');
const { PRODUCT_TABLE } = require('./product.model');

const ORDER_PRODUCT_TABLE = 'orders_products';

const OrderProductSchema = {
    id:{
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    amount:{
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    orderId:{
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'order_id',
        references: {
            model: ORDER_TABLE,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    productId:{
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'product_id',
        references: {
            model: PRODUCT_TABLE,
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

class OrderProduct extends Model {
    static associate(models){
        this.belongsToMany()
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: ORDER_PRODUCT_TABLE,
            modelName: 'OrderProduct',
            timestamps: false,
        }
    }
}

module.exports = {
    ORDER_PRODUCT_TABLE,
    OrderProductSchema,
    OrderProduct
};
