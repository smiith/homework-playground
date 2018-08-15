import {ACTIONS} from './phonewords-actions'

const initialState = {
	convertedWords: [],
}

export default function (state = initialState, action) {
	switch (action.type) {
		case ACTIONS.SUBMIT_DIGITS:
			return state
	}
	return state
};
