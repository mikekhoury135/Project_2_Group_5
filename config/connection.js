require('dotenv').config();

// const Sequelize = require('sequelize');

// const sequelize = process.env.JAWSDB_URL ?
//     new Sequelize(process.env.JAWSDB_URL) :
//     new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//         host: 'localhost',
//         dialect: 'mysql',
//         dialectOptions: {
//             decimalNumbers: true,
//         },
//     });

// module.exports = sequelize;

const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;