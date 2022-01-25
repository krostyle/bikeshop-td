const { Router } = require('express');
const { renderIndex } = require('../controllers/products.controllers');
const router = Router();


router.get('/', renderIndex);
module.exports = router;