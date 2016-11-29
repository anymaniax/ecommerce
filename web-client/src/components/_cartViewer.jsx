import React from 'react'

const _cartViewer = (props) => {
	let price = props.cart.map(e => e.price.value).reduce((a, b) => a + b, 0)
	return (
		<span className={props.className}><i className="fa fa-shopping-cart" aria-hidden="true"></i>{' '}Total: {price}</span>
	)
}

export default _cartViewer
