const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
<<<<<<< HEAD
class Car extends Model {};



Car.init({
=======
class Color extends Model {}
Color.init({
>>>>>>> feature/mix-routes-login
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
<<<<<<< HEAD
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
=======
    each_make_name: {
>>>>>>> feature/mix-routes-login
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
<<<<<<< HEAD
    modelName: 'car'
});
module.exports = Car;
=======
    modelName: 'color'
})
module.exports = Color;
>>>>>>> feature/mix-routes-login
