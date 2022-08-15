const path = require('path');

const express = require('express');

const prodctsControllers = require('../controllers/products')


const router = express.Router();

router.get('/', prodctsControllers.getProducts);

module.exports = router;
