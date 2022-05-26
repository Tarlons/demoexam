const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')
const cors = require('cors')

const userRouter = require('./router/userRouter')
const categoryRouter = require('./router/categoryRouter')
const productRouter = require('./router/productRouter')
const adminRouter = require('./router/adminRouter')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(fileUpload())

app.use('/',express.static('./upload'))
app.use('/admin',adminRouter)
app.use('/user',userRouter)
app.use('/product',productRouter)
app.use('/category',categoryRouter)
// app.use('/order',orderRouter)

app.listen(8080,()=>console.log('serv start'))