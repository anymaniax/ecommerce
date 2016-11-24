import React from 'react'
import { Link } from 'react-router'

import conf from '../config/conf.json'

class ProductListItem extends React.Component {
	render(){
		return (
			<div className="card" key={this.props.product._id}>
				<img className="card-img-top" src={this.props.product.thumbnail} height="100px"/> 
				<div className="card-block">
					<h3 className="card-title">{this.props.product.nom}</h3>
					<p><Link className="btn btn-primary" to={`/products/${this.props.product._id}`}>Détails</Link></p>
					<p><a href="#add-to-cart" className="btn btn-primary" onClick={this.props.addToCart}>Ajouter au panier</a></p> 
				</div>
			</div>
		)
	}	
}

export default ProductListItem