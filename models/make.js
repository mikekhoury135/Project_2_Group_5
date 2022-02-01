const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// a make model
class Make extends Model {}


// define table columns and configuration
Make.init(
    {
      // TABLE COLUMN DEFINITIONS GO HERE
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      // define product_name column
      make_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      year_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'year',
          key: 'id',
          unique: false
        }
      
    },
      // define price column
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          isDecimal: true
        }
      },
       // define stock column
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
       
      }
      },
   
    {
     
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'make',
    }
  );
  
  module.exports = Make;

  // ALTER TABLE [make] NOCHECK CONSTRAINT [FK_make_id]