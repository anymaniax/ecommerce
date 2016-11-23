import React from 'react'

import ProductListItem from './_productListItem'

class _ProductList extends React.Component {

	addToCartHandler = (id) => {
		this.props.addToCart(id)
	}

	componentWillMount(){
		let {catName} = this.props.params
		if(catName){
			this.props.fetchProductsFromCat(catName)
		} else {
			this.props.fetchProducts()
		}
	}

	componentWillReceiveProps(nextProps){
		if(this.props.params.catName !== nextProps.params.catName){
			this.props.fetchProductsFromCat(nextProps.params.catName)
		}
	}

	render(){
		let productMarkup = this.props.products.map((e) => {
			return (
				<ProductListItem key={e._id} product={e} addToCart={() => this.addToCartHandler(e._id)}/>
			)
		})

		return (
			<div>
				{productMarkup}
			</div>
		)
	}

}

export default _ProductList
