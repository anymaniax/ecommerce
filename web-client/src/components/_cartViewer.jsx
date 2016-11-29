import React from 'react'

import {Link} from 'react-router'

const _cartViewer = (props) => {
	let price = props.price
	return (
		<Link to='/cart'><span className={props.className}><i className="fa fa-shopping-cart" aria-hidden="true"></i>{' '}Total: {price}</span></Link>
	)
}

export default _cartViewer
