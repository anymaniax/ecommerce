import React from 'react'
import { Link } from 'react-router'

import {formater} from '../models/priceFormater'

class ProductListItem extends React.Component {
	render(){
		let {product} = this.props
		return (
			<div className="card" key={product._id}>
				<img role="presentation" className="card-img-top" src={product.thumbnail} height="100px"/> 
				<div className="card-block">
					<h3 className="card-title">{product.nom} - {formater(product.price.value)}€</h3>
					<div className="btn-group">
						<Link className="btn btn-primary" to={`/products/${product._id}`}>Détails</Link>
						<span className="btn btn-success" onClick={() => this.props.addToCart()}>Ajouter au panier</span>
						{this.props.admin && <span className="btn btn-danger" onClick={() => this.props.delete()}>Supprimer</span>}
					</div>
				</div>
			</div>
		)
	}	
}

export default ProductListItem