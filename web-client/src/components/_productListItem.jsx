import React from 'react'
import { Link } from 'react-router'

import conf from '../config/conf.json'

const ProductListItem = (props) => {
	return (
		<div className="card" key={props.product._id}>
			<img className="card-img-top" src={props.product.thumbnail} height="100px"/> 
			<div className="card-block">
				<h3 className="card-title">{props.product.nom}</h3>
				<p><Link className="btn btn-primary" to={`/products/${props.product._id}`}>Détails</Link></p>
				<p><a href="#add-to-cart" className="btn btn-primary" onClick={props.addToCart}>Ajouter au panier</a></p> 
			</div>
		</div>
	)
}

export default ProductListItem