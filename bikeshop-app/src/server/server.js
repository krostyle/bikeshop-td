const express = require('express');
const { create } = require('express-handlebars');
const cors = require('cors');
const path = require('path');
const configurations = require('../config/config');

//Routes Imports
const storesRoutes = require('../routes/stores.routes');
const categoriesRoutes = require('../routes/categories.routes');
const brandsRoutes = require('../routes/brands.routes');
const productsRoutes = require('../routes/products.routes');

//Paths
const paths = {
    stores: '/api/stores',
    categories: '/api/categories',
    brands: '/api/brands',
    products: '/',
};

//Initialize app
const app = express();

//Settings
app.set('port', configurations.PORT);
//View engine
app.set('views', path.join(__dirname, '../views'));
const hbs = create({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');


//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Routes
app.use(paths.stores, storesRoutes);
app.use(paths.categories, categoriesRoutes);
app.use(paths.brands, brandsRoutes);
app.use(paths.products, productsRoutes);

//Static files
app.use(express.static(path.join(__dirname, '../public')));
app.use('/bootstrap', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist')));
app.use('/axios', express.static(path.join(__dirname, '../../node_modules/axios/dist')))

module.exports = app;