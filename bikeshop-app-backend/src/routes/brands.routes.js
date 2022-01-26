const { Router } = require('express');
const { getBrands } = require('../controllers/brands.controllers');

const router = Router();
router.get('/', getBrands);

module.exports = router;