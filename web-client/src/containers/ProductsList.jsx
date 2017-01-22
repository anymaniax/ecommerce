import { connect } from 'react-redux'

import { fetchAll, fetchProductsByCat, deleteProduct, addToCart, searchProduct } from '../actions'

import {_productsList} from '../components'

const mapStateToProps = (state) => {
	const {user, token} = state.auth
	let products
	if(state.search.products){
		products = state.search.products
		state.search.products = ""
	} else {
		products = state.api.products
	}
	return {
		products,
		user,
		token
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
		},
		delete: (id, token) => {
			dispatch(deleteProduct(id, token))
		},
		searchProduct:(search) => {
			dispatch(searchProduct(search))
		}
	}
}

const ProductsList = connect(
	mapStateToProps,
	mapDispatchToProps
)(_productsList)

export default ProductsList