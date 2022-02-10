const sequelize = require('../config/connection');
const seedMakes = require('./make-seeds');
const seedColors = require('./color-seeds');
const seedModel = require('./model-seeds');
const seedYears = require('./year-seeds');
// const seedUsers = require('./user-seeds');


const seedAll = async() => {
    await sequelize.sync({ force: true });
    // await seedUsers();

    await seedMakes();
    await seedModel();
    await seedColors();
    await seedYears();
    // await seedCarModel();

    // process.exit(0);

};

seedAll();