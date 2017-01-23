import React from 'react'
import { Link } from 'react-router'
import {formater} from '../models/priceFormater'

import {Loader} from './_loader'

class _ProductDetails extends React.Component  {

	componentWillMount(){
		if(this.props.params){
			this.props.fetchProduct(this.props.params.id)
		}
	}

	render(){
		let {details} = this.props
		console.log(details)
		return (
			<div>
				{details ? 
					<div className="jumbotron">
						<div className="row">
							<div className={this.props.hideLink ? "col-md-12" : "col-md-3"}>
								<img role="presentation" src={details.thumbnail || ''} width="200px" />
							</div>
							<div className="col-md-9">
								<h2 className="display-3">{details.nom || ''}</h2>
								<p className="text-muted">Catégorie: {details.cat ? details.cat[0] : 'non répertorié'}</p>
							</div>
						</div>
						<div className={this.props.hideLink ? "row" : ""}>
							<hr className="my-4" />
							<p><strong>{`Prix: ${formater(details.price.value) || ''} ${details.price.currency || ''}`}</strong></p>
							<p>{details.desc || ''}</p>
							{!this.props.hideLink && <div className="btn-group">
								<button className="btn btn-secondary">Ajouter au panier</button>
								{this.props.role === 'admin' &&
									<button className="btn btn-secondary">
										supprimer
									</button>
								}
							</div>}
						</div>
					</div>
					:
					<Loader />
				}
				{this.props.hideLink || <Link to='/'>{'<-'} Retour à tous les produits</Link>}
			</div>
		)
	}
}

export default _ProductDetails
