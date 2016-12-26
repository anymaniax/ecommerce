import { combineReducers } from 'redux'

<<<<<<< Updated upstream
import cart from './cartReducer'
import api from './apiReducer'
import productCreation from './productCreationReducer'
import auth from './authReducer'

const reducers = combineReducers({
=======
<<<<<<< HEAD
import cartReducer from './cartReducer'
import apiReducer from './apiReducer'
import productCreationReducer from './productCreationReducer'
import searchReducer from './searchReducer'

const reducers = combineReducers({
	cart: cartReducer,
	api: apiReducer,
	productCreation: productCreationReducer,
	searchReducer: searchReducer
=======
import cart from './cartReducer'
import api from './apiReducer'
import productCreation from './productCreationReducer'
import auth from './authReducer'

const reducers = combineReducers({
>>>>>>> Stashed changes
	cart,
	api,
	productCreation,
	auth
<<<<<<< Updated upstream
=======
>>>>>>> origin/master
>>>>>>> Stashed changes
})

export default reducers
