const { Make, CarModel } = require('../models');

const carmodelData = [{
        model_id: 1,
        model_name: "Supra",
        price: 39000.00,
        stock: 2,
        color: "red",
        year: 1999
    }, {
        model_id: 1,
        model_name: "Prius",
        price: 19000.00,
        stock: 20,
        color: "blue",
        year: 2018
    },
    {
        model_id: 1,
        model_name: "Collora",
        price: 29000.00,
        stock: 18,
        color: "red",
        year: 2010
    }, {
        model_id: 2,
        model_name: "F150",
        price: 49000.00,
        stock: 9,
        color: "black",
        year: 2012
    }, {
        model_id: 2,
        model_name: "Windstar",
        price: 29000.00,
        stock: 1,
        color: "light blue",
        year: 1998
    }, {
        model_id: 3,
        model_name: "Accord",
        price: 39000.00,
        stock: 11,
        color: "white",
        year: 2008
    }, {
        model_id: 3,
        model_name: "Civic",
        price: 19000.00,
        stock: 29,
        color: "Dark Blue",
        year: 2022
    }, {
        model_id: 4,
        model_name: "Beetle",
        price: 19000.00,
        stock: 1,
        color: "yellow",
        year: 1989
    }, {
        model_id: 5,
        model_name: "M5",
        price: 19000.00,
        stock: 5,
        color: "white",
        year: 2022

    }, {
        model_id: 5,
        model_name: "M3",
        price: 19000.00,
        stock: 9,
        color: "white",
        year: 2020
    }
];

const seedCarModels = () => CarModel.bulkCreate(carmodelData);

module.exports = seedCarModels;