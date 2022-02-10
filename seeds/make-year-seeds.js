const { MakeYear } = require('../models');
const makeYearData = [{
        make_id: 1,
        year_id: 6,
    },
    {
        make_id: 1,
        year_id: 7,
    },
    {
        make_id: 1,
        year_id: 8,
    },
    {
        make_id: 2,
        year_id: 6,
    },
    {
        make_id: 3,
        year_id: 1,
    },
    {
        make_id: 5,
        year_id: 3,
    },
    {
        make_id: 3,
        year_id: 4,
    },
    {
        make_id: 3,
        year_id: 5,
    },
    {
        make_id: 4,
        year_id: 1,
    },
    {
        make_id: 4,
        year_id: 2,
    },
    {
        make_id: 4,
        year_id: 8,
    },
    {
        make_id: 5,
        year_id: 3,
    },
];
const seedMakeYear = () => MakeYear.bulkCreate(makeYearData);
module.exports = seedMakeYear;