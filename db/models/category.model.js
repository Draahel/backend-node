const { DataTypes, Model, Sequelize } = require('sequelize');

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
    id:{
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
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

class Category extends Model{
    static associate(){
        //asocciations here
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: CATEGORY_TABLE,
            modelName: 'Category',
            timestamps: false
        }
    }
}

module.exports = {
    CATEGORY_TABLE,
    CategorySchema,
    Category
}

