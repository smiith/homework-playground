import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'
import PhoneWordsApp from 'pages/phonewords'
import phoneWords from 'pages/phonewords/phonewords-reducer'

const rootReducer = combineReducers({phoneWords})

const store = createStore(rootReducer)
window.sstore = store // for debug

ReactDOM.render(
	<Provider store={store}>
		<PhoneWordsApp/>
	</Provider>,
	document.getElementById('content')
)
