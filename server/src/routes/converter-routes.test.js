describe('Converter service handler', () => {
	it('correct request input', () => {
		const req = {body: {input: '23'}}
		const res = {json: jest.fn(), statusCode: ''}
		jest.mock('../services/converter-service', () => jest.fn())
		const converterService = require('../services/converter-service')
		const converterServiceHandler = require('./converter-routes')

		converterServiceHandler(req, res)
		expect(converterService).toBeCalled()
	})

	it('incorrect request input', () => {
		const req = {body: {input: 'AAAAAA'}}
		const res = {json: jest.fn(), statusCode: ''}
		jest.clearAllMocks()
		jest.mock('../services/converter-service', () => jest.fn())
		const converterService = require('../services/converter-service')
		const converterServiceHandler = require('./converter-routes')

		converterServiceHandler(req, res)
		expect(res.statusCode).toBe(400)
		expect(converterService).not.toBeCalled()
		expect(res.json).toHaveBeenCalledWith('input should be only digits')
	})
})

