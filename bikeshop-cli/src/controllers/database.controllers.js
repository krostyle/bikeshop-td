const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../database/customers.json');
const Customer = require('../models/Customer');

const readFile = async() => {
    if (!fs.existsSync(filePath)) {
        await populateFile();
        console.log('Base de datos creada');
    } else {
        console.log('Base de datos ya existe');
    }

}

const populateFile = async() => {
    const customers = await Customer.findAll();
    const fullNameCustomer = customers.map(customer => {
        return {
            fullName: `${customer.first_name} ${customer.last_name}`
        }
    });
    try {
        fs.writeFileSync(filePath, JSON.stringify(fullNameCustomer));
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    readFile
}