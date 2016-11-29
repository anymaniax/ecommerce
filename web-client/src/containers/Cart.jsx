import {connect} from 'react-redux'

import {_cart} from '../components'

import {resetCart,removeFromCart} from '../actions'

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
		remove: (cartId) => {
			dispatch(removeFromCart(cartId))
		}
	}
}

const Cart = connect(
	mapStateToProps,
	mapDispatchToProps)(_cart)

export default Cart
