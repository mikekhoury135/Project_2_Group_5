const { Year } = require('../models');

const yearData = [
  {
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
  },

];

const seedYears = () => Year.bulkCreate(yearData);

module.exports = seedYears;