// const { Model, DataTypes } = require('sequelize');

// const sequelize = require('../config/connection.js');

// class Carmodelmake extends Model {}

// Carmodelmake.init({
//     // define columns
//     id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     make_id: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: 'Make',
//             foreignkey: 'id'
//         }
//     },
//     model_id: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: 'Carmodel',
//             foreignkey: 'id'
//         }
//     }
// }, {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'Carmodel',
// });

// module.exports = Carmodelmake;



// INSERT INTO category
// (category_name)
// VALUES
// ("Plain T-Shirt", "14.99", "14", "1");