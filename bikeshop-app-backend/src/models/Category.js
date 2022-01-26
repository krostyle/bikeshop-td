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



module.exports = Category;