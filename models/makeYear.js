const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class MakeYear extends Model {}
MakeYear.init(
  {
    id :
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    make_id:
    {
      type: DataTypes.INTEGER,
      references:
      {
        model:'make',
        key:'id'
      }
    },
    year_id:
    {
      type: DataTypes.INTEGER,
      references:
      {
        model:'year',
        key:'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'make_year',
  }
);
module.exports = MakeYear;