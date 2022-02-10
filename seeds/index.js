const seedColors = require('./color-seeds');
const seedMakes = require('./make-seeds');
const seedYears = require('./year-seeds');
const seedMakeYears = require('./make-year-seeds');
const seedModels = require('./model-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedColors();
    console.log('\n----- COLORS SEEDED -----\n');

    await seedMakes();
    console.log('\n----- MAKES SEEDED -----\n');

    await seedYears();
    console.log('\n----- YEARS SEEDED -----\n');

    await seedMakeYears();
    console.log('\n----- MAKE YAERS SEEDED -----\n');

    await seedModels();


};

seedAll();