const validateNumbers = (input) => {
    if (!isNaN(input) && input.length > 0) {
        const number = parseFloat(input);
        if (number > 0) {
            return true;
        } else {
            return 'El valor debe ser mayor a 0';
        }
    } else {
        return 'Ingrese un numero, por favor';
    }
};


module.exports = {
    validateNumbers
}