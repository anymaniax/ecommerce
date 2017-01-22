import React, {Component} from 'react'
import {Link, browserHistory} from 'react-router'

import {NavBar} from '../containers'
import {_productDetails as ProductDetails} from '../components'

class _productCreationForm extends Component {

	constructor(props){
		super(props)
		this.state = {
			id: '0',
			nom: 'Mon produit',
			desc: 'Super produit',
			price: {
				value: 10,
				currency: 'eur'
			},
			cat: [],
			tags: [],
			stock: 42,
			thumbnail: 'http://lorempixel.com/g/200/200/'
		}
	}

	handleName = (e) => {
		this.setState({
			nom: e.target.value
		})
	}

	handleDesc = (e) => {
		this.setState({
			desc: e.target.value
		})
	}

	handleThumb = (e) => {
		this.setState({
			thumbnail: e.target.value
		})
	}

	handleStock = (e) => {
		this.setState({
			stock: e.target.value
		})
	}

	handlePrice = (e) => {
		this.setState({
			price: {
				value: e.target.value,
				currency: 'eur'
			}
		})
	}

	handleCats = (e) => {
		const options = [...e.target.options]
		const cat = options.filter(option => option.selected).map(options => options.text)
		this.setState({
			cat
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.postData()
	}

	postData = () => {
		this.props.create(this.state, this.props.token)
	}

	render(){
		let errorMarkup
		if(this.props.error){
			switch(this.props.error){
				case 'Product already use.': {
                    errorMarkup = <p>Un produit porte déjà ce nom</p>
					break
				}
				default:
					errorMarkup = <p>Une erreur s'est produite</p>
			}
		}
		let linkMarkup
		if(this.props.id){
			linkMarkup = <Link to={'/products/' + this.props.id}>{'http://localhost:3000/products/' + this.props.id}</Link>
		}
		return (
			<div>
				<NavBar hideDefault={true}>
					<li className="nav-item">
						<Link to='/' className="nav-link">Liste des produits</Link>
					</li>
				</NavBar>
				<div className="container container-fluid">
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.handleSubmit}>
								<h2>Création d'un produit</h2>
								{errorMarkup}
								<div className="form-group">
									<label htmlFor="productName">Nom</label>
									<input 
										type="text" 
										className="form-control" 
										id="productName" 
										placeholder="Nom"
										value={this.state.nom}
										onChange={this.handleName} />
								</div>

								<div className="form-group">
									<label htmlFor="productDescription">Description</label>
									<input 
										type="text" 
										className="form-control" 
										id="productDescription" 
										placeholder="Description"
										value={this.state.desc}
										onChange={this.handleDesc} />
								</div>

								<div className="form-group">
									<label htmlFor="productImage">Product image</label>
									<input 
										type="text" 
										className="form-control" 
										id="productImage" 
										placeholder="url"
										value={this.state.thumbnail}
										onChange={this.handleThumb} />
								</div>

								<div className="form-group">
									<label>Prix</label>
									<div className="input-group">
										<div className="input-group-addon">€</div>
										<input 
											type="number" 
											className="form-control"
											placeholder="Prix"
											value={this.state.price.value || 0}
											onChange={this.handlePrice}
											/>
										<div className="input-group-addon">.00</div>
									</div>
								</div>

								<div className="form-group">
									<label>Catégories</label>
									<select multiple className="form-control" onChange={this.handleCats}>
										{this.props.cats && this.props.cats.map((e) => {
											return (
												<option key={e}>{e}</option>
											)
										})}
									</select>
								</div>

								<div className="form-group">
 									 <button type="submit" className="btn btn-primary">Ajouter</button>
								</div>
							</form>
						</div>
						<div className="col-md-6">
							<h2>Preview</h2>
							<ProductDetails 
								details={this.state}
								hideLink={true}/>
						</div>
					</div>
					<div className="row">
						{linkMarkup}
					</div>
				</div>
			</div>
		)
	}
}

export default _productCreationForm
