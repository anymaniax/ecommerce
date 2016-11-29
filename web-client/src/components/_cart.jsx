import React from 'react'

const Item = (props) => {
	return (
		<p>{props.nom} - {props.quantity} - <button onClick={() => props.delete(props.cartId)}className="btn btn-danger"><i className="fa fa-trash-o" aria-hidden="true"></i></button></p>
	)
}

const _cart = (props) => {
	let price = props.cart.map(e => e.product.price.value * e.quantity).reduce((a, b) => a + b, 0)
	let productsMarkup = props.cart.map(e => <Item quantity={e.quantity} cartId={e.cartId} nom={e.product.nom} delete={props.remove} />)
	return (
		<div>
			<p>Prix total: {price + ' eur'}</p>
			{productsMarkup}
			<button onClick={() => props.reset()} className="btn btn-primary"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>{' '}Remise à 0 du Cart</button>
		</div>
	)
}

export default _cart
