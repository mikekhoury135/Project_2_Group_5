const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// a make model
class Make extends Model {}
// define table columns and configuration
Make.init({
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
    // define price column
    price: {
        type: DataTypes.DECIMAL(10, 2),
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
        validate: {
            isNumeric: true
        }
    },
    color_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'color',
            key: 'id',
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'make',
});


module.exports = Make;