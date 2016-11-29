import { RESET_CART, ADD_TO_CART, REMOVE_FROM_CART } from '../actions'
import v4 from 'uuid/v4'

export function cartReducer(state = [], action){
	switch(action.type){
		case ADD_TO_CART:{
			let newState = [...state]
			const currentPos = newState.map(e => e.product._id).indexOf(action.product._id)
			if(currentPos > -1){
				newState[currentPos].quantity += action.quantity
			} else {
				newState = [...newState, {
					cartId: v4(),
					product: action.product,
					quantity: action.quantity
				}]
			}

			return newState
		}

		case REMOVE_FROM_CART: {
			let newState = [...state]
			const productPos = newState.map(e => e.cartId).indexOf(action.cartId)
			if(newState[productPos].quantity - action.quantity > 0){
				newState[productPos].quantity -= action.quantity
			} else {
				newState = newState.filter(x => x.cartId !== action.cartId)
			}
			return newState
		}

		case RESET_CART:
			return []

		default:
			return state
	}
}

export default cartReducer
