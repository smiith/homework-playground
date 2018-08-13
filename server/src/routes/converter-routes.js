const converterService = require('../services/converter-service')

const converterServiceHandler = (req, res) => {
	const digitalString = req.body.input
	if (!/^\d+$/.test(digitalString)) {
		res.statusCode = 400
		res.json('input should be only digits')
	} else {
		res.json({result: converterService(digitalString)})
	}
}

module.exports = converterServiceHandler
