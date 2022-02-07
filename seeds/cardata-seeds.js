const { Car } = require('../models');

const sequelize = require('../config/connection');

const carData = [{

    stock: "5",
    price: "20000"
}];
const seedCarData = () => Car.bulkCreate(carData);
module.exports = seedCarData;