const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const converterRoutesHandler = require('./routes/converter-routes')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use((err, req, res, next) => {
	if (err) {
		res.statusCode = 400
		res.json('Invalid Request data')
	} else {
		next()
	}
})
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', express.static(path.join(__dirname, '../../app')))
app.post('/api/converter', converterRoutesHandler)

// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, '../../app', 'index.html'))
// })

module.exports = app
