import { connect } from 'react-redux'

import { fetchAll, fetchProductsByCat } from '../actions'
import { addToCart } from '../actions'

import {_productsList} from '../components'

const mapStateToProps = (state) => {
	let { products } = state.api
	return {
		products
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchProducts: () => {
			dispatch(fetchAll())
		},
		fetchProductsFromCat: (cat) => {
			dispatch(fetchProductsByCat(cat))	
		},
		addToCart: (product) => {
			dispatch(addToCart(product))
		}
	}
}

const ProductsList = connect(
	mapStateToProps,
	mapDispatchToProps
)(_productsList)

export default ProductsList