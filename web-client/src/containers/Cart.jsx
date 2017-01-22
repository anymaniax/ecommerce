import {connect} from 'react-redux'

import {_cart} from '../components'

import {resetCart,removeFromCart, addToCart} from '../actions'

const mapStateToProps = ({cart}) => {
	let {items,price} = cart
	return {
		items,
		price
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		reset: () => {
			dispatch(resetCart())
		},
		remove: (cartId, quantity = 1) => {
			dispatch(removeFromCart(cartId, quantity))
		},
		add: (product) => {
			dispatch(addToCart(product))
		}
	}
}

const Cart = connect(
	mapStateToProps,
	mapDispatchToProps)(_cart)

export default Cart
