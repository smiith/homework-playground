import {apiConversion} from './phonewords-api'
import {receiveConversion} from './phonewords-actions'
import englishWords from 'an-array-of-english-words'
import fp from 'lodash/fp'

const filterEnglishWords = fp.filter(fp.includes(fp, englishWords))

export function submitConversion(payload) {
	return function (dispatch) {
		return apiConversion(payload).then(r => {
			dispatch(receiveConversion({result: filterEnglishWords(r.result)}))
		}).catch(error => {
			throw(error)
		})
	}
}
