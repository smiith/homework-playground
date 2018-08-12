const express = require('express')
const router = express.Router()
const converterService = require('../services/converter-service')

router.route('/api/converter')
	.post((req, res) => {
		//TODO validation
		res.json({result: converterService(req.body.input)})
})

module.exports = router;
