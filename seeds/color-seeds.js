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
  {
    color_name: 'gold/beige',    
  },
  {
    color_name: 'brown',
  },
  {
    color_name: 'gray',
  },
  {
    color_name: 'orange',
  },
  {
    color_name: 'blue',    
  },
  {
    color_name: 'green',
  },
];

const seedColors = () => Color.bulkCreate(colorData);

module.exports = seedColors;