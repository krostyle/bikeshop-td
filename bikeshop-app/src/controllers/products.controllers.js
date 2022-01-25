const Product = require('../models/Product');
const getProducts = async(req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al obtener los productos'
        });
    }
}


module.exports = {
    getProducts
}