import { connect } from 'react-redux'

import {_productDetails} from '../components'

import { fetchById } from '../actions'

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
)(_productDetails)

export default ProductDetails
