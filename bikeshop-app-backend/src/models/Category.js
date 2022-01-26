const { Sequelize } = require('sequelize');
const sequelize = require('../database/database');
const Product = require('./Product');

const Category = sequelize.define('category', {
    category_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    category_name: {
        type: Sequelize.STRING,
    }
}, {
    timestamps: false,
});
Category.hasMany(Product, { foreignKey: 'category_id', sourceKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id', targetKey: 'category_id' });
module.exports = Category;