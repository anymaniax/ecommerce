import { combineReducers } from 'redux'

import cart from './cartReducer'
import api from './apiReducer'
import productCreation from './productCreationReducer'
import auth from './authReducer'
import search from './searchReducer'
import admin from './adminReducer'
import passwordUpdate from './passwordUpdateReducer'
import productUpdate from './productUpdateReducer'

const reducers = combineReducers({
	cart,
	api,
	productCreation,
	search,
	auth,
	admin,
	passwordUpdate,
    productUpdate
})

export default reducers
