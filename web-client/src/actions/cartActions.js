export const ADD_TO_CART = 'add to cart'
export function addToCart(product){
	return {
		type: ADD_TO_CART,
		product
	}
}

export const REMOVE_FROM_CART = 'remove from cart'
export function removeFromCart(id){
	return {
		type: REMOVE_FROM_CART,
		id
	}
}

export const RESET_CART = 'reset cart'
export function resetCart(){
	return {
		type: RESET_CART
	}
}
