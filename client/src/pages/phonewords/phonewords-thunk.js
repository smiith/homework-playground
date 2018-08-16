import {apiConversion} from './phonewords-api'
import {receiveConversion} from './phonewords-actions'

export function submitConversion(payload) {
	return function (dispatch) {
		return apiConversion(payload).then(result => {
			dispatch(receiveConversion(result))
		}).catch(error => {
			throw(error)
		})
	}
}
