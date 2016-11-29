export const ADD_TO_CART = 'add to cart'
export function addToCart(product, quantity = 1){
	return {
		type: ADD_TO_CART,
		product,
		quantity
	}
}

export const REMOVE_FROM_CART = 'remove from cart'
export function removeFromCart(cartId, quantity = 1){
	return {
		type: REMOVE_FROM_CART,
		cartId,
		quantity
	}
}

export const RESET_CART = 'reset cart'
export function resetCart(){
	return {
		type: RESET_CART
	}
}
