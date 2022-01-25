const Stock = require('../models/Stock');
const getStocks = async(req, res) => {
    try {
        const stocks = await Stock.findAll();
        res.json(stocks);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al obtener el stock'
        });
    }
}


module.exports = {
    getStocks
}