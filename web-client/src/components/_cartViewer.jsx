import React from 'react'
import {formater} from '../models/priceFormater'

import {Link} from 'react-router'

let i = 0
const _cartViewer = (props) => {
	let price = props.price
	return (
		<Link to='/cart'><span key={i++} className={props.className}><i className="fa fa-shopping-cart" aria-hidden="true"></i>{' '}Total: {formater(price)}€</span></Link>
	)
}

export default _cartViewer
