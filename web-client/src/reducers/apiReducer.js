import { RECEIVE_PRODUCTS, RECEIVE_DETAILS } from '../actions/apiActions'

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

		default:
			return state
	}
}

export default apiReducer