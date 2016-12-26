import React from 'react'
import { Link } from 'react-router'

class _ProductDetails extends React.Component  {

	componentWillMount(){
		if(this.props.params){
			this.props.fetchProduct(this.props.params.id)
		}
	}

	render(){
		let {details} = this.props
		return (
			<div>
				{details ? 
					<div>
						<h2>{details.nom || ''}</h2>
						<img role="presentation" src={details.thumbnail || ''} width="200px" />
						<p>{`Prix: ${details.price.value || ''} ${details.price.currency || ''}`}</p>
						<p>{details.desc || ''}</p>
					</div>
					:
					<span>Loading...</span>
				}
				{this.props.hideLink || <Link to='/'>Retour à tous les produits</Link>}
			</div>
		)
	}
}

export default _ProductDetails
