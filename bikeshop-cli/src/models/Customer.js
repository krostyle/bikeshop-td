const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');
const Customer = sequelize.define('customer', {
        customer_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        street: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        state: {
            type: Sequelize.STRING
        },
        zip_code: {
            type: Sequelize.STRING
        },

    }, {
        timestamps: false,
    }

)


module.exports = Customer;