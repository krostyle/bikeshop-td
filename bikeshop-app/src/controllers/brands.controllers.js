const Brand = require('../models/Brand');

const getBrands = async(req, res) => {
    try {
        const brands = await Brand.findAll();
        res.json(brands);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al obtener las marcas'
        });
    }
}


module.exports = {
    getBrands
};