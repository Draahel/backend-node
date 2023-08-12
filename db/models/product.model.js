const { DataTypes, Model, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
    id:{
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING
    },
    price:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    description:{
        allowNull: false,
        type: DataTypes.STRING
    },
    image:{
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    }
}

class Product extends Model {
    static associate(models){
        //asociaciones
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: false
        }
    }
}

module.exports = {
    PRODUCT_TABLE,
    ProductSchema,
    Product
}