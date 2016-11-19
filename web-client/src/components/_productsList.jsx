import React from 'react'

import ProductListItem from './_productListItem'

class _ProductList extends React.Component {

	click = (e, id) => {
		e.preventDefault()
		this.props.onProductClick(id)
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
				<ProductListItem key={e._id} product={e} clickHandler={this.click}/>
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