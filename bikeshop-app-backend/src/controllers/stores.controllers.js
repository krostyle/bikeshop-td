const Store = require('../models/Store');

const getStores = async(req, res) => {
    try {
        const stores = await Store.findAll();
        res.json(stores);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al obtener las tiendas'
        });
    }
}


module.exports = {
    getStores
};