const { Make } = require('../models');

const makeData = [
  {
    make_name: 'TOYOTA',
    color_id: 4,
    price: 34000.00,
    stock: 31,
  },
  {
    make_name: 'FORD',
    color_id: 3,
    price: 24000.00,
    stock: 11,
  },
  {
    make_name: 'HONDA',
    color_id: 1,
    price: 37000.00,
    stock: 9,
  },
  {
    make_name: 'VOLKSWAGEN',
    color_id: 2,
    price: 22000.00,
    stock: 5,
  },
  {
    make_name: 'BMW',
    color_id: 5,
    price: 44000.00,
    stock: 21,
  },
  {
    make_name: 'JEEP',
    color_id: 6,
    price: 54000.00,
    stock: 8,
    
  },
  {
    make_name: 'BUICK',
    color_id: 9,
    price: 58000.00,
    stock: 22,
    
  },
  {
    make_name: 'LEXUS',
    color_id: 11,
    price: 49000.00,
    stock: 14,
    
  },
  {
    make_name: 'GMC',
    color_id: 7,
    price: 48000.00,
    stock: 7,
    
  },
  {
    make_name: 'BUICK',
    color_id: 8,
    price: 57000.00,
    stock: 24,
    
  },
  {
    make_name: 'ACURA',
    collor_id: 10,
    price: 74000.00,
    stock: 5,
    
  },
];

const seedMakes = () => Make.bulkCreate(makeData);

module.exports = seedMakes;
