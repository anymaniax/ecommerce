import {connect} from 'react-redux'

import {removeFromCart, resetCart} from '../actions/cartActions'

import _cartViewer from '../components/_cartViewer'

const mapStateToProps = ({cart}) => {
	return {
		cart
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		remove: (id) => {
			dispatch(removeFromCart(id))
		}, reset: () => {
			dispatch(resetCart)
		}
	}
}

const CartViewer = connect(
	mapStateToProps,
	mapDispatchToProps
)(_cartViewer)

export default CartViewer
