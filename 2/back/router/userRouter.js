const Router = require('express')
const userController = require('../controller/userController')
const router = new Router()

router.post('/signin',userController.signin)
router.post('/signup',userController.signup)
module.exports =router