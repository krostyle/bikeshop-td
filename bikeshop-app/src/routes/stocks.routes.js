const { Router } = require('express');
const { getStocks } = require('../controllers/stocks.controllers');

const router = Router();


router.get('/', getStocks);

module.exports = router;