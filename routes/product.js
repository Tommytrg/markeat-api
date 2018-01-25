var express = require('express')
var router = express.Router()
const product = require('./../controllers/product')

router.get('/', product.getAllProducts)
router.post('/', product.saveProduct)
module.exports = router
