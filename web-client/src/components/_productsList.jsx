import React from 'react'

import ProductListItem from './_productListItem'

class _ProductList extends React.Component {

	addToCartHandler = (id) => {
		console.log(id)
		this.props.addToCart(id)
	}

	componentWillMount(){
		this.props.fetchProducts()
	}

	// componentWillReceiveProps(){
	// 	console.log('props')
	// }

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