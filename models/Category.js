// 1. Import Sequelize Model and DataTypes Methods/Functions
const { Model, DataTypes } = require('sequelize');
const { Sequelize } = require('../config/connection');
// 2. Import the connection


// 3. Create a class category and extend it to a Model

class Category extends Model {}


//4. Create the table

Category.init({

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        categoryName: {
            type: DataTypes.STRING,
            allowNull: false,

        }


    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',


    }
    // sequelize hooks

)

module.exports = Category;