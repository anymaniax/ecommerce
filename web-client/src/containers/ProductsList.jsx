import { connect } from 'react-redux'

import { fetchAll, fetchProductsByCat, addToCart, searchProduct } from '../actions'

import {_productsList} from '../components'

const mapStateToProps = (state) => {
	let products
	if(state.search.products){
		products = state.search.products
		state.search.products = ""
	} else {
		products = state.api.products
	}
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