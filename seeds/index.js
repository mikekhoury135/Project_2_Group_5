<<<<<<< HEAD
const sequelize = require('../config/connection');
const seedMakes = require('./make-seeds');
const seedColors = require('./color-seeds');

const seedYears = require('./year-seeds');
// const seedUsers = require('./user-seeds');


const seedAll = async() => {
    await sequelize.sync({ force: true });
    // await seedUsers();

    await seedMakes();

    await seedColors();
    await seedYears();
    // await seedCarModel();

    // process.exit(0);

=======
const seedColors = require('./color-seeds');
const seedMakes = require('./make-seeds');
const seedYears = require('./year-seeds');
const seedMakeYears = require('./make-year-seeds');
const seedCarModels = require('./carmodel-seeds');
const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true, alter: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedColors();
    console.log('\n----- COLORS SEEDED -----\n');

    await seedMakes();
    console.log('\n----- MAKES SEEDED -----\n');

    await seedYears();
    console.log('\n----- YEARS SEEDED -----\n');

    // await seedMakeYears();
    console.log('\n----- MAKE YAERS SEEDED -----\n');

    await seedCarModels();

    process.exit(0);
>>>>>>> feature/mix-routes-login
};

seedAll();