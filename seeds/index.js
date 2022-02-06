const sequelize = require('../config/connection');

const seedColors = require('./color-seeds');
const seedYears = require('./year-seeds');

const seedMakes = require('./make-seeds');

const seedMakeYear = require('./make-year-seeds');
// const CarModel = require('../models/model');

// const seedUsers = require('./user-seeds');


const seedAll = async() => {
    await sequelize.sync({ force: true });
    // await seedUsers();


    await seedMakeYear();
    await seedMakes();

    await seedYears();
    await seedColors();

    await seedCarModel();



    // await seedCarModel();

    process.exit(0);

};

seedAll();