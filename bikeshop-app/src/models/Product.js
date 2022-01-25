const { Sequelize } = require('sequelize');
const sequelize = require('../database/database');
const Stock = require('./Stock');

const Product = sequelize.define('product', {
    product_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    product_name: {
        type: Sequelize.STRING,
    },
    brand_id: {
        type: Sequelize.INTEGER,
    },
    category_id: {
        type: Sequelize.INTEGER,
    },
    model_year: {
        type: Sequelize.INTEGER,
    },
    list_price: {
        type: Sequelize.FLOAT,
    },
}, {
    timestamps: false,
});

Product.hasOne(Stock, { foreignKey: 'product_id' });
module.exports = Product;