const { Sequelize } = require('sequelize');
const sequelize = require('../database/database');
const Product = require('./Product');

const Brand = sequelize.define('brand', {
    brand_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    brand_name: {
        type: Sequelize.STRING,
    }
}, {
    timestamps: false,
});

Brand.hasMany(Product, { foreignKey: 'brand_id' });
Product.belongsTo(Brand, { foreignKey: 'brand_id', targetKey: 'brand_id' });
module.exports = Brand;