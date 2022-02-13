<<<<<<< HEAD
const { Model, DataTypes } = require('sequelize');

=======
const {Model, DataTypes } = require('sequelize');
>>>>>>> feature/mix-routes-login
const sequelize = require('../config/connection');
class Color extends Model {}
<<<<<<< HEAD

Color.init({
=======
Color.init(
  {
>>>>>>> feature/mix-routes-login
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    color_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
<<<<<<< HEAD
}, {
=======
  },
  {
>>>>>>> feature/mix-routes-login
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'color'
})
module.exports = Color;