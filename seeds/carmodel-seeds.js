const { Make, CarModel } = require('../models');
const { getImgAccord, getImgM5, getImgM3, getImgCivic, getImgCorolla, getImgF150, getImgSupra, getImgWindstar } = require('../utils/helpers');



const carmodelData = [{
        model_id: 1,
        model_name: "Supra",
        price: 39000.00,
        stock: 2,
        color: "red",
        year: 1999,
        image: getImgSupra
    }, {
        model_id: 1,
        model_name: "Prius",
        price: 19000.00,
        stock: 20,
        color: "blue",
        year: 2018,
        image: getImgPrius
    },
    {
        model_id: 1,
        model_name: "Collora",
        price: 29000.00,
        stock: 18,
        color: "red",
        year: 2010,
        image: getImgCorolla
    }, {
        model_id: 2,
        model_name: "F150",
        price: 49000.00,
        stock: 9,
        color: "black",
        year: 2012,
        image: getImgF150
    }, {
        model_id: 2,
        model_name: "Windstar",
        price: 29000.00,
        stock: 1,
        color: "light blue",
        year: 1998,
        image: getImgWindstar
    }, {
        model_id: 3,
        model_name: "Accord",
        price: 39000.00,
        stock: 11,
        color: "white",
        year: 2008,
        image: getImgAccord
    }, {
        model_id: 3,
        model_name: "Civic",
        price: 19000.00,
        stock: 29,
        color: "Dark Blue",
        year: 2022,
        image: getImgCivic
    }, {
        model_id: 4,
        model_name: "Beetle",
        price: 19000.00,
        stock: 1,
        color: "yellow",
        year: 1989,
        image: getImgBeetle
    }, {
        model_id: 5,
        model_name: "M5",
        price: 19000.00,
        stock: 5,
        color: "white",
        year: 2022,
        image: getImgM5
    }, {
        model_id: 5,
        model_name: "M3",
        price: 19000.00,
        stock: 9,
        color: "white",
        year: 2020,
        image: getImgM3
    }
];

const seedCarModels = () => CarModel.bulkCreate(carmodelData);

module.exports = seedCarModels;