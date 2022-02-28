const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Color extends Model {}
allCarData.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    each_make_name: {
        type: DataTypes.STRING,
        allowNull: false
    },




}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'color'
})
module.exports = Color;