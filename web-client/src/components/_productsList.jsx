import React from 'react'
import FlipMove from 'react-flip-move'

import ProductListItem from './_productListItem'
import { CatViewer } from '../containers'

class _ProductList extends React.Component {

	componentWillMount() {
		let {catName} = this.props.params
		let {search} = this.props.params
		console.log(this.props);
		if (catName) {
			this.props.fetchProductsFromCat(catName)
		} else if (search) {
			this.props.searchProduct(search)
		} else {
			this.props.fetchProducts()
		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.params.catName !== nextProps.params.catName) {
			if (nextProps.params.catName) {
				this.props.fetchProductsFromCat(nextProps.params.catName)
			}
		}
	}

	render() {
		const admin = this.props.user.role === 'admin' ? true : false
		let productMarkup = this.props.products.map((e) => {
			if(e === null){
				return
			}
			return (
				<ProductListItem
					admin={admin}
					key={e._id}
					product={e}
					addToCart={() => this.props.addToCart(e)}
					delete={() => this.props.delete(e._id, this.props.token)} />
			)
		})

		return (
			<div>
				<CatViewer />
				<FlipMove
					staggerDurationBy="30"
					duration={250}
					easing="linear">
					{productMarkup}
				</FlipMove>
			</div>
		)
	}

}

export default _ProductList
