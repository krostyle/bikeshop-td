const express = require('express');
const cors = require('cors');
const path = require('path');
const configurations = require('../config/config');

//Routes Imports
const storesRoutes = require('../routes/stores.routes');
const categoriesRoutes = require('../routes/categories.routes');
const brandsRoutes = require('../routes/brands.routes');
const productsRoutes = require('../routes/products.routes');
const stockRoutes = require('../routes/stocks.routes');

//Paths
const paths = {
    brands: '/api/brands',
    categories: '/api/categories',
    products: '/api/products',
    stocks: '/api/stocks',
    stores: '/api/stores',
};

//Initialize app
const app = express();

//Settings
app.set('port', configurations.PORT);


//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Routes
app.use(paths.stores, storesRoutes);
app.use(paths.categories, categoriesRoutes);
app.use(paths.brands, brandsRoutes);
app.use(paths.products, productsRoutes);
app.use(paths.stocks, stockRoutes);

//Static files


module.exports = app;