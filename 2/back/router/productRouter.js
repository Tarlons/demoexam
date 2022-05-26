const Router = require('express')
const productController = require('../controller/productController')
const router = new Router()

router.post('/add',productController.addProduct)
router.get('/:id',productController.getProduct)
router.get('/cat/:id',productController.getProductCat)
router.get('/',productController.getAll)

module.exports =router