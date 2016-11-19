import React from 'react'
import { Link } from 'react-router'

class _ProductDetails extends React.Component  {

	componentWillMount(){
		this.props.fetchProduct(this.props.params.id)
	}

	render(){
		let {details} = this.props

		return (
			<div>
				{details ? 
					<div>
						<h2>{details.nom}</h2>
						<img src={details.thumbnail} width="200px" />
						<p>{`Prix: ${details.price.value} ${details.price.currency}`}</p>
						<p>{details.desc}</p>
					</div>
					:
					<span>Loading...</span>
				}
				<img src={this.props.url} />
				<Link to='/'>Retour à tous les produits</Link>
			</div>
		)
	}
}

export default _ProductDetails
