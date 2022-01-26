const Product = require('../models/Product');
const Stock = require('../models/Stock');
const Category = require('../models/Category');
const Brand = require('../models/Brand');
const Store = require('../models/Store');
const getProducts = async(req, res) => {
    try {
        const products = await Product.findAll({
            include: [{
                    model: Stock,
                    as: 'stock',
                },
                {
                    model: Category,
                    as: 'category',
                },
                {
                    model: Brand,
                    as: 'brand',
                },
                {
                    model: Store,
                    as: 'store',
                }
            ]
        });
        console.log(products);
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