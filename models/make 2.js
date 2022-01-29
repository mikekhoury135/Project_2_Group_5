const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// a product model
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
      manufacture_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      model_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'model',
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
      // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))
  
      //sequelize connection (the direct connection to our database)
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'make',
    }
  );
  
  module.exports = Make;