import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import PhoneWordsApp from 'pages/phonewords'
import phoneWords from 'pages/phonewords/phonewords-reducer'

const rootReducer = combineReducers({phoneWords})

const store = createStore(rootReducer, applyMiddleware(thunk))
window.sstore = store // for debug

ReactDOM.render(
	<Provider store={store}>
		<PhoneWordsApp/>
	</Provider>,
	document.getElementById('content')
)
