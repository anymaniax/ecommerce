import { combineReducers } from 'redux'

import cartReducer from './cartReducer'
import apiReducer from './apiReducer'
import productCreationReducer from './productCreationReducer'

const reducers = combineReducers({
	cart: cartReducer,
	api: apiReducer,
	productCreation: productCreationReducer
})

export default reducers
