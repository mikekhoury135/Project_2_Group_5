const { Model, DataTypes } = require('sequelize');
const { Sequelize } = require('../config/connection');
// 2. Import the connection


// 3. Create a class category and extend it to a Model

class Products extends Model {}


//4. Create the table

Products.init({

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Product_Name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        value: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        current_stock_level: {
            type: DataTypes.NUMBER,
            allowNull: false,

        },
        amount_ordered: {
            type: DataTypes.NUMBER,
            allowNull: false,

        },
        amount_sold: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        variance: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        unit_of_measurement: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        total_value: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,

        },
        profit: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }


    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',

    }
    // sequelize hooks

)

module.exports = Products;