import { combineReducers } from 'redux'

import cart from './cartReducer'
import api from './apiReducer'
import productCreation from './productCreationReducer'
import auth from './authReducer'
import search from './searchReducer'
import admin from './adminReducer'

const reducers = combineReducers({
	cart,
	api,
	productCreation,
	search,
	auth,
	admin
})

export default reducers
