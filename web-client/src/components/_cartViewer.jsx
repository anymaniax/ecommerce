import React from 'react'

const _cartViewer = (props) => {
	console.log('cart', props.cart)
	let price = props.cart.map(e => e.price.value).reduce((a, b) => a + b, 0)
	console.log('prix', price)
	return (
		<span>Total: {price}</span>
	)
}

export default _cartViewer
