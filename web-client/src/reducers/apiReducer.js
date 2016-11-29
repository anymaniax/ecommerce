import { RECEIVE_PRODUCTS, RECEIVE_DETAILS, RECEIVE_CATEGORIES } from '../actions'

import stub from '../../assets/stub.json'

const initialState = stub

function apiReducer(state = initialState, action){
	switch(action.type){
		case RECEIVE_PRODUCTS: { 
			let { products } = action
			let newState = Object.assign({}, state, {
				products
			})
			return newState
		}

		case RECEIVE_DETAILS: {
			let newState = Object.assign({}, state, {
				details: action.details
			})
			return newState
		}

		case RECEIVE_CATEGORIES: {
			let newState = Object.assign({}, state, {
				cats: action.cats
			})
			return newState
		}
		default:
			return state
	}
}

export default apiReducer