const { Router } = require('express');
const { getStores } = require('../controllers/stores.controllers');

const router = Router();


router.get('/', getStores);

module.exports = router;