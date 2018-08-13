const converterService = require('./converter-service')

describe('Converter Service', () => {
 it('23', () => {
		expect(converterService('23')).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
	});
})
