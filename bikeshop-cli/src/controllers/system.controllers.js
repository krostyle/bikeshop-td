const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../database/customers.json');
const reportsPath = path.join(__dirname, '../reports');

const getCustomer = async(cliente) => {
    const customers = JSON.parse(fs.readFileSync(filePath));
    const customer = customers.find(customer => {
        const customerFullName = customer.fullName
        if (customerFullName.includes(cliente)) {
            return customer;
        }
    });
    return customer;
}

const createMessageForCustomer = (exist, cliente, monto, descuento) => {
    let message
    if (exist) {
        const montoCalculado = parseFloat(monto) - (parseFloat(monto) * (parseFloat(descuento) / 100));
        message = ` Cliente: ${cliente}
        Su compra es de  ${monto} pesos
        porcentaje de descuento ${descuento} da un total de: $ ${montoCalculado};
        `;
    } else {
        message = `Don: ${cliente}
        Actualmente usted no es cliente en la tienda, favor registrarse para poder realizar compras`;
    }
    fs.writeFileSync(path.join(reportsPath, `${cliente}.txt`), message);
}

const getMessageForCustomer = async(cliente) => {
    fs.readFile(path.join(reportsPath, `${cliente}.txt`), 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}


module.exports = {
    getCustomer,
    createMessageForCustomer,
    getMessageForCustomer
}