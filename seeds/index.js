const sequelize = require('../config/connection');
const seedMakes = require('./make-seeds');
const seedYears = require('./year-seeds');
const seedColors = require('./color-seeds');

const seedAll = async() => {
    await sequelize.sync({ force: true });

    await seedYears();
    await seedColors();
    // await seedCarModel();
    await seedMakes();


};

seedAll();