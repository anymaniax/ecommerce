import { RECEIVE_PRODUCTS, RECEIVE_DETAILS, RECEIVE_CATEGORIES } from '../actions'

import stub from '../../assets/stub.json'

const initialState = stub

function apiReducer(state = initialState, action){
	switch(action.type){
		case RECEIVE_PRODUCTS: { 
			const products = action.products || []
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
			if(!action.cats.err){
				let newState = Object.assign({}, state, {
					cats: action.cats
				})
				return newState
			}
			break;
		}
		default:
			return state
	}
}

export default apiReducer