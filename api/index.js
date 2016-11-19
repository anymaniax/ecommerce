let express    = require('express')
let logger     = require('morgan')
let bodyParser = require('body-parser')

let app = express()

let apiV1  = require('./routes/apiV1')
let err404 = require('./routes/err404')
let cats   = require('./routes/cats')
const PORT = process.env.PORT || 5000
const NAME = process.env.NAME || "e-commerce API"

app.use(logger('dev'))
app.use(bodyParser.json())
app.disable('x-powered-by')
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next()
})

app.use('/api/v1/products', apiV1)
app.use('/api/v1/cats', cats)
app.use('*', err404)

app.listen(PORT, () => {
	console.log(`${NAME} up and running on port ${PORT} 🎉`)
})
