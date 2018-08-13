const express = require('express')
const router = express.Router()
const converterService = require('../services/converter-service')

router.route('/api/converter')
	.post((req, res) => {
		const digitalString = req.body.input
		if (!/^\d+$/.test(digitalString)) {
			res.statusCode = 400
			res.json('input should be only digits')
		} else {
			res.json({result: converterService(digitalString)})
		}
	})

module.exports = router
