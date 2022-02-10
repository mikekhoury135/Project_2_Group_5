const { Year } = require('../models');

const yearData = [{
        manufacturing_year: '2021',
    },
    {
        manufacturing_year: '2020',
    },
    {
        manufacturing_year: '2019',
    },
    {
        manufacturing_year: '2018',
    },
    {
        manufacturing_year: '2017',
    },

];

const seedYears = () => Year.bulkCreate(yearData);

module.exports = seedYears;