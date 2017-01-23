import { connect } from 'react-redux'

import {_productDetails} from '../components'

import { fetchById } from '../actions'

const mapStateToProps = ({api, auth}) => {
	let {details} = api
	let {role} = auth.user
	return {
		details,
		role
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
