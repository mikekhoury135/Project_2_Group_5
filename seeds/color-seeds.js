:46
const { Color } = require('../models');
const colorData = [
  {
    color_name: 'red',
  },
  {
    color_name: 'white',
  },
  {
    color_name: 'black',
  },
  {
    color_name: 'yellow',
  },
  {
    color_name: 'silver',
  },  
];
const seedColors = () => Color.bulkCreate(colorData);
module.exports = seedColors;