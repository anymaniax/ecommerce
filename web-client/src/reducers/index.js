import { combineReducers } from 'redux'

import cartReducer from './cartReducer'
import apiReducer from './apiReducer'

const reducers = combineReducers({
	cart: cartReducer,
	api: apiReducer
})

export default reducers
