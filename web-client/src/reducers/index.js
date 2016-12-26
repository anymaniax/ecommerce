import { combineReducers } from 'redux'

import cart from './cartReducer'
import api from './apiReducer'
import productCreation from './productCreationReducer'
import auth from './authReducer'

const reducers = combineReducers({
	cart,
	api,
	productCreation,
	auth
})

export default reducers
