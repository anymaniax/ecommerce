import React from 'react'
import { connect } from 'react-redux'

import _ProductDetails from '../components/_productDetails'

import { fetchById } from '../actions/apiActions'

const mapStateToProps = (state) => {
	let {details} = state.api
	return {
		details
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchProduct: (id) => {
			dispatch(fetchById(id))
		}
	}
}

const ProductDetails = connect(
	mapStateToProps, 
	mapDispatchToProps
)(_ProductDetails)

export default ProductDetails