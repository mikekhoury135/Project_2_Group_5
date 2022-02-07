const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Car extends Model {};



Car.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    car_model_type: {
        type: DataTypes.INTEGER,
        references: {
            model: 'carmodel',
            key: 'id'
        }
    },
    make_type: {
        type: DataTypes.INTEGER,
        references: {
            model: 'make',
            key: 'id'
        }
    },
    color_type: {
        type: DataTypes.INTEGER,
        references: {
            model: 'color',
            key: 'id'
        }
    },
    stock: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'car'
});
module.exports = Car;