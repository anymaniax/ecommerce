import React from 'react'
import FlipMove from 'react-flip-move'

import ProductListItem from './_productListItem'

class _ProductList extends React.Component {

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
				<ProductListItem key={e._id} product={e} addToCart={() => this.props.addToCart(e._id)}/>
			)
		})

		return (
			<div>
				<FlipMove easing="linear">
					{productMarkup}
				</FlipMove>
			</div>
		)
	}

}

export default _ProductList
