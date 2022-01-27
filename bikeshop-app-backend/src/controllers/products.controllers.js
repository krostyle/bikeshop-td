const { Product, Brand, Category, Store, Stock } = require('../models/index');
const getProducts = async(req, res) => {
    try {
        const products = await Product.findAll({
            include: [{
                    model: Stock,
                    as: 'stock',
                    include: [{
                        model: Store,
                        as: 'store',
                    }],
                    required: true
                },
                {
                    model: Category,
                    as: 'category',
                },
                {
                    model: Brand,
                    as: 'brand',
                },
            ]
        });
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