const Color = require('./color');
const Year = require('./year');
const User = require('./users');
const Make = require('./make');
const MakeYear = require('./makeYear');
const Carmodel = require('./model');





// make belongToMany year
Make.belongsToMany(Year, {
    through: MakeYear,
    foreignKey: 'make_id',
    // onDelete: 'CASCADE'
});

// Tags belongToMany Products
Year.belongsToMany(Make, {
    through: MakeYear,
    foreignKey: 'year_id',
    // onDelete: 'CASCADE'
});
// make  belongsTo color
Make.belongsTo(Color, {
    foreignKey: 'color_id'
});

// color have many make
Color.hasMany(Make, {
    foreignKey: 'color_id',
});














module.exports = { Make, Color, Year, MakeYear, Carmodel, User };