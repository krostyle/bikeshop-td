const { Sequelize } = require('sequelize');
const sequelize = require('../database/database');
const Product = require('./Product');
const Stock = sequelize.define('stock', {
    store_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    product_id: {
        type: Sequelize.INTEGER,
    },
    quantity: {
        type: Sequelize.INTEGER,
    },
}, {
    timestamps: false,
});

module.exports = Stock;