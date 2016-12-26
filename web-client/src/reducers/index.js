import { combineReducers } from 'redux'

import cart from './cartReducer'
import api from './apiReducer'
import productCreation from './productCreationReducer'
import auth from './authReducer'
import search from './searchReducer'

const reducers = combineReducers({
	cart,
	api,
	productCreation,
	search,
	auth

})

export default reducers
