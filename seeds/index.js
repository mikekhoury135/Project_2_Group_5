const sequelize = require('../config/connection');
const seedMakes = require('./make-seeds');
const seedYears = require('./year-seeds');
const seedColors = require('./color-seeds');
// const seedUsers = require('./user-seeds');


const seedAll = async() => {
    await sequelize.sync({ force: true });
    // await seedUsers();
    await seedColors();
    await seedYears();
    // await seedCarModel();
    await seedMakes();


};

seedAll();