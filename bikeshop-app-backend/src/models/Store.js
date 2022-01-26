const { Sequelize } = require('sequelize');
const sequelize = require('../database/database');
const Stock = require('./Stock');

const Store = sequelize.define('store', {
    store_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    store_name: {
        type: Sequelize.STRING,
    },
    phone: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    street: {
        type: Sequelize.STRING,
    },
    city: {
        type: Sequelize.STRING,
    },
    state: {
        type: Sequelize.STRING,
    },
    zip_code: {
        type: Sequelize.STRING,
    },
}, {
    timestamps: false,
});


module.exports = Store;