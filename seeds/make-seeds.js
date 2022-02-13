<<<<<<< HEAD
const { Make, CarModel } = require('../models');

const makeData = [{
        manufacture_name: 'TOYOTA',
        model_id: 14,
=======
const { Make } = require('../models');
const makeData = [{
        make_name: 'TOYOTA',
        color_id: 4,
>>>>>>> feature/mix-routes-login
        price: 34000.00,
        stock: 31,
    },
    {
<<<<<<< HEAD
        manufacture_name: 'FORD',
        model_id: 4,
=======
        make_name: 'FORD',
        color_id: 3,
>>>>>>> feature/mix-routes-login
        price: 24000.00,
        stock: 11,
    },
    {
<<<<<<< HEAD
        manufacture_name: 'HONDA',
        model_id: 1,
=======
        make_name: 'HONDA',
        color_id: 1,
>>>>>>> feature/mix-routes-login
        price: 37000.00,
        stock: 9,
    },
    {
<<<<<<< HEAD
        manufacture_name: 'VOLKSWAGEN',
        model_id: 3,
=======
        make_name: 'VOLKSWAGEN',
        color_id: 2,
>>>>>>> feature/mix-routes-login
        price: 22000.00,
        stock: 5,
    },
    {
<<<<<<< HEAD
        manufacture_name: 'BMW',
        model_id: 5,
        price: 44000.00,
        stock: 21,
    },
    {
        manufacture_name: 'JEEP',
        model_id: 6,
        price: 54000.00,
        stock: 8,

    },
    {
        manufacture_name: 'BUICK',
        model_id: 9,
        price: 58000.00,
        stock: 22,

    },
    {
        manufacture_name: 'LEXUS',
        model_id: 2,
        price: 49000.00,
        stock: 14,

    },
    {
        manufacture_name: 'GMC',
        model_id: 7,
        price: 48000.00,
        stock: 7,

    },
    {
        manufacture_name: 'BUICK',
        model_id: 8,
        price: 57000.00,
        stock: 24,

    },
    {
        manufacture_name: 'ACURA',
        model_id: 10,
        price: 74000.00,
        stock: 5,

    },
=======
        make_name: 'BMW',
        color_id: 5,
        price: 44000.00,
        stock: 21,
    },
    // {
    //   make_name: 'ACURA',
    //   color_id: 7,
    //   price: 54000.00,
    //   stock: 11,
    // },
>>>>>>> feature/mix-routes-login
];
const seedMakes = () => Make.bulkCreate(makeData);
<<<<<<< HEAD

=======
>>>>>>> feature/mix-routes-login
module.exports = seedMakes;