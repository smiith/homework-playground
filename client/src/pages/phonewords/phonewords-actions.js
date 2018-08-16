import apiConversion from './phonewords-api'

export const ACTIONS = {
	RECEIVE_CONVERSION: 'phonewords/receive_conversion'
};

export const receiveConversion = (payload) => ({type: ACTIONS.RECEIVE_CONVERSION, payload});
