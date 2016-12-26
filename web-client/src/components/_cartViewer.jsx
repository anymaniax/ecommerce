import React from 'react'

import {Link} from 'react-router'

let i = 0
const _cartViewer = (props) => {
	let price = props.price
	return (
		<Link to='/cart'><span key={i++} className={props.className}><i className="fa fa-shopping-cart" aria-hidden="true"></i>{' '}Total: {price}€</span></Link>
	)
}

export default _cartViewer
