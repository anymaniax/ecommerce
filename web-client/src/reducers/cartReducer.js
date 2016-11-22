import { RESET_CART, ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions.js'

export function cartReducer(state = [], action){
	switch(action.type){
		case ADD_TO_CART:
			return [...state, action.id]

		case REMOVE_FROM_CART:
			return state.filter(e => e.id !== action.id)

		case RESET_CART:
			return []

		default:
			return state
	}
}

export default cartReducer