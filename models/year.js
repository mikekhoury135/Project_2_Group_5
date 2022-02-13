const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Year extends Model {}
<<<<<<< HEAD

Year.init({
    // define columns
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    manufacturing_year: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
=======
Year.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
      },
      make_year: {
      type: DataTypes.INTEGER,
      }
  },
  {
>>>>>>> feature/mix-routes-login
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'year',
<<<<<<< HEAD
});

module.exports = Year;



// INSERT INTO category
// (category_name)
// VALUES
// ("Plain T-Shirt", "14.99", "14", "1");
=======
  }
);
module.exports = Year;
>>>>>>> feature/mix-routes-login
