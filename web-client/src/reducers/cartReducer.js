import { RESET_CART, ADD_TO_CART, REMOVE_FROM_CART } from '../actions'
import v4 from 'uuid/v4'

const initialState = {
	items: [],
	price: 0
} 

export function cartReducer(state = initialState, action){
	switch(action.type){
		case ADD_TO_CART:{
			let newState = [...state.items]
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

			let price = state.price + action.product.price.value
			return Object.assign({}, state, {
				items: newState,
				price
			})
		}

		case REMOVE_FROM_CART: {
			let newState = [...state.items]
			const productPos = newState.map(e => e.cartId).indexOf(action.cartId)
            let price = state.price - newState[productPos].product.price.value * action.quantity
			if(newState[productPos].quantity - action.quantity > 0){
				newState[productPos].quantity -= action.quantity
			} else {
				newState = newState.filter(x => x.cartId !== action.cartId)
			}

			return Object.assign({}, state, {
				items: newState,
				price
			})
		}

		case RESET_CART:
			return initialState

		default:
			return state
	}
}

export default cartReducer
