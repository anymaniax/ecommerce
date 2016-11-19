let mongoose = require('mongoose')
let config   = require('../config/db')

mongoose.Promise = global.Promise;

mongoose.connect(config.uri)

mongoose.connection.on('connected', () => {
	console.log(`[Mongoose] connected to ${config.uri}`)
})

mongoose.connection.on('error', (err) => {
	console.log(`[Mongoose] error: ${err}`)
})

shutdown = (callback) => {
	mongoose.connection.close(() => {
		console.log(`[Mongoose] disconnected from ${config.uri}`)
		callback()
	})
}

process.once('SIGUSR2', () => {
	shutdown(() => {
		process.kill(process.pid, 'SIGUSR2')
	})
})

process.on('SIGINT', () => {
	shutdown(() => {
		process.exit(0)
	})
})

process.on('SIGTERM', () => {
	shutdown(() => {
		process.exit(0)
	})
})

//Schemas
Product = require('./product')
Cat     = require('./cat')
