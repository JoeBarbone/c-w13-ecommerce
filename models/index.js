// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
//const seedProducts = require('../seeds/product-seeds');

//Products belongsTo category
Product.belongsTo(Category, {
  foreignKey: "category.id"
});

// Categories have many Products
// Confirm that category_id is correct
// Category.hasMany(Product, {
//     foreignKey: "category_id"
// });

// Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(ProductTag, {
//   foreignKey: "tag.id"
// });

// Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(ProductTag, {
//   foreignKey: "tag.id"
// })





module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
