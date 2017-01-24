import { combineReducers } from 'redux'

import cart from './cartReducer'
import api from './apiReducer'
import productCreation from './productCreationReducer'
import auth from './authReducer'
import search from './searchReducer'
import admin from './adminReducer'
import passwordUpdate from './passwordUpdateReducer'
import addressUpdate from './addressUpdateReducer'
import productUpdate from './productUpdateReducer'

const reducers = combineReducers({
	cart,
	api,
	productCreation,
	search,
	auth,
	admin,
	passwordUpdate,
	addressUpdate,
    productUpdate
})

export default reducers
