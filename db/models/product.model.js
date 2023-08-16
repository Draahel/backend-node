const { DataTypes, Model, Sequelize } = require('sequelize');
const { CATEGORY_TABLE } = require('./category.model');

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
    },
    categoryId:{
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'category_id',
        references: {
            model: CATEGORY_TABLE,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    }
}

class Product extends Model {
    static associate(models){
        this.belongsTo(models.Category,{
            as: 'category',
        })
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