const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Year extends Model {}
Year.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
      },
      make_year: {
      type: DataTypes.INTEGER,
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'year',
  }
);
module.exports = Year;