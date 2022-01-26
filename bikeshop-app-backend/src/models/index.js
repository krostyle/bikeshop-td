const Product = require('./Product');
const Brand = require('./Brand');
const Category = require('./Category');
const Store = require('./Store');
const Stock = require('./Stock');


Product.belongsTo(Brand, { foreignKey: 'brand_id' });
Brand.hasMany(Product, { foreignKey: 'brand_id' });

Product.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Product, { foreignKey: 'category_id' });

Product.hasOne(Stock, { foreignKey: 'product_id' });
Stock.belongsTo(Product, { foreignKey: 'product_id' });

Store.hasOne(Stock, { foreignKey: 'store_id' });
Stock.belongsTo(Store, { foreignKey: 'store_id' });


module.exports = {
    Product,
    Brand,
    Category,
    Store,
    Stock
}