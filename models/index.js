const Make = require('./Make');
const Color = require('./Color');
const Year = require('./Year');
const MakeYear = require('./MakeYear');
const User = require('./User');


  // make belongToMany year
  Make.belongsToMany(Year,{
    through: MakeYear,
    foreignKey: 'make_id',
    // onDelete: 'CASCADE'
  });
  
  // Tags belongToMany Products
  Year.belongsToMany(Make,{
    through: MakeYear,
    foreignKey: 'year_id',
    // onDelete: 'CASCADE'
  });
// make  belongsTo color
Make.belongsTo(Color,{
    foreignKey: 'color_id'
  });
  
  // color have many make
  Color.hasMany(Make,{
    foreignKey: 'color_id',
  });
  


module.exports = {Make, Color, Year, MakeYear, User};

