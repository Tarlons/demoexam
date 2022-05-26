const express = require('express')
const cors = require('cors')

const usersRoutes = require('./routes/users')

const app = express()

app.use(express.json())

app.use(
	cors({
		origin: '*',
	})
)

app.use('/users', usersRoutes)

app.listen(8080, () => console.log('Listening on port 8080'))
