const { Make, CarModel } = require('../models');

const carmodelData = [{
        model_id: 1,
        model_name: "Supra",
        price: 39000.00
    }, {
        model_id: 1,
        model_name: "Prius",
        price: 19000.00
    },
    {
        model_id: 1,
        model_name: "Collora",
        price: 29000.00
    }, {
        model_id: 2,
        model_name: "F150",
        price: 49000.00
    }, {
        model_id: 2,
        model_name: "Windstar",
        price: 29000.00
    }, {
        model_id: 3,
        model_name: "Accord",
        price: 39000.00
    }, {
        model_id: 3,
        model_name: "Civic",
        price: 19000.00
    }, {
        model_id: 4,
        model_name: "Beetle",
        price: 19000.00
    }, {
        model_id: 5,
        model_name: "M5",
        price: 19000.00
    }, {
        model_id: 5,
        model_name: "M3",
        price: 19000.00
    }
];

const seedCarModels = () => CarModel.bulkCreate(carmodelData);

module.exports = seedCarModels;