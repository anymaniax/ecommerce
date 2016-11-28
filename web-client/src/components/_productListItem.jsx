import React from 'react'
import { Link } from 'react-router'

import conf from '../config/conf.json'

class ProductListItem extends React.Component {
	render(){
		let {product} = this.props
		return (
			<div className="card" key={product._id}>
				<img className="card-img-top" src={product.thumbnail} height="100px"/> 
				<div className="card-block">
					<h3 className="card-title">{product.nom}</h3>
					<p>
						<Link className="btn btn-primary" to={`/products/${product._id}`}>Détails</Link>
						<span className="btn btn-primary" onClick={() => this.props.addToCart()}>Ajouter au panier</span>
					</p> 
				</div>
			</div>
		)
	}	
}

export default ProductListItem