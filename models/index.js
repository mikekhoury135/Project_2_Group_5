const Category = require('../models/Category');
const Product = require('./Product');
const ProductTag = require('../models/productTag');


// linking the Category and Product model
Product.belongsTo(Category, {
    foreignkey: 'category_id'
})

Category.hasMany(Product, { foreignKey: 'category_id' });