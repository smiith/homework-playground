import {ACTIONS} from './phonewords-actions'

const initialState = {
	convertedWords: [],
}

export default function (state = initialState, action) {
	switch (action.type) {
		case ACTIONS.RECEIVE_CONVERSION:
			return{ ...state, convertedWords: action.payload.result}
	}
	return state
};
