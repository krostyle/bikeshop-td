const { prompt } = require('inquirer');
const { validateNumbers } = require('./helpers/validations');
const { readFile } = require('./controllers/database.controllers');
const { createMessageForCustomer, getCustomer, customerExists } = require('./controllers/system.controllers');

const main = async() => {
    await readFile();
    const answers = await prompt(
        [{
                type: 'input',
                message: 'Ingrese el nombre del Cliente',
                name: 'cliente'
            },
            {
                type: 'input',
                message: 'Ingrese el monto del producto',
                name: 'monto',
                validate: validateNumbers
            },
            {
                type: 'input',
                message: 'Ingrese el porcentaje de descuento',
                name: 'descuento',
                validate: validateNumbers
            }
        ]);
    const { cliente, monto, descuento } = answers;
    const customer = await getCustomer(cliente);
    if (customer) {
        createMessageForCustomer(true, customer.fullName, monto, descuento);
    } else {
        createMessageForCustomer(false, cliente, monto, descuento);
    }
}

main();