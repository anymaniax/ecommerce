import React from 'react'

import { connect } from 'react-redux'

import { fetchById, fetchAll } from '../actions/apiActions'
import { addToCart } from '../actions/cartActions'

import _ProductList from '../components/_productsList'

// const Landing = () => {
// 	return (
// 		<h2>Bienvenu sur l'accueil</h2>
// 	)
// }

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
		addToCart: (id) => {
			dispatch(addToCart(id))
		}
	}
}

const ProductsList = connect(
	mapStateToProps,
	mapDispatchToProps
)(_ProductList)

export default ProductsList