const express = require('express')
const logger = require('morgan')
const path = require('path')

const app = express()

app.use(logger('dev'))
app.use(express.static('../../app'))
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../../app', 'index.html'))
})
module.exports = app
