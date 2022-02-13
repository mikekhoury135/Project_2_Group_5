const { Make, CarModel } = require('../models');

const carmodelData = [{
        model_id: 1,
        model_name: "Supra"

    }, {
        model_id: 1,
        model_name: "Prius"
    },
    {
        model_id: 1,
        model_name: "Collora"
    }, {
        model_id: 2,
        model_name: "F150"
    }, {
        model_id: 2,
        model_name: "Windstar"
    }, {
        model_id: 3,
        model_name: "Accord"
    }, {
        model_id: 3,
        model_name: "Civic"
    }, {
        model_id: 4,
        model_name: "Beetle"
    }, {
        model_id: 5,
        model_name: "M5"
    }, {
        model_id: 5,
        model_name: "M3"
    }
];

const seedCarModels = () => CarModel.bulkCreate(carmodelData);

module.exports = seedCarModels;