const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class CarModel extends Model {}

CarModel.init({
    // define columns
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    model_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: false,
    },
    model_name: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isDecimal: true
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    color: {
        type: DataTypes.STRING
    },
    year: {
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.STRING
    }

}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'CarModel',
});

module.exports = CarModel;



// INSERT INTO category
// (category_name)
// VALUES
// ("Plain T-Shirt", "14.99", "14", "1");