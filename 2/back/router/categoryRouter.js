const Router = require('express')
const categoryController = require('../controller/categoryController')
const router = new Router()

router.post('/add',categoryController.addCategody)
router.get('/',categoryController.getAll)

module.exports =router