import React from 'react'

import { connect } from 'react-redux'

import { fetchById, fetchAll } from '../actions/apiActions'

import _ProductList from '../components/_productsList'

// const Landing = () => {
// 	return (
// 		<h2>Bienvenu sur l'accueil</h2>
// 	)
// }

const mapStateToProps = ({products}) => {
	return {
		products
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchProducts: () => {
			dispatch(fetchAll())
		}
	}
}

const ProductsList = connect(
	mapStateToProps,
	mapDispatchToProps
)(_ProductList)

export default ProductsList