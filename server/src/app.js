const express = require('express')
const logger = require('morgan')
const path = require('path')
const converterRoutes = require('./routes/converter-routes')

const app = express()

app.use(logger('dev'))
app.use(express.static('../../app'))
app.use(converterRoutes);

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../../app', 'index.html'))
})

module.exports = app
