const { Year } = require('../models');

const yearData = [{
<<<<<<< HEAD
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
=======
        make_year: '2022',
    },
    {
        make_year: '2021',
    },
    {
        make_year: '2020',
    },
    {
        make_year: '2019',
    },
    {
        manke_year: '2018',
    },
    {
        make_year: '2017',
>>>>>>> feature/mix-routes-login
    },

];

const seedYears = () => Year.bulkCreate(yearData);

module.exports = seedYears;