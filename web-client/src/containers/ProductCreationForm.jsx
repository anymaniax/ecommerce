import {connect} from 'react-redux'

import {_productCreationForm} from '../components'

import {createProduct} from '../actions'

const mapStateToProps = ({api, productCreation}) => {
	const {cats} = api
	const {error, link, id} = productCreation
	return {
		cats,
		error,
		link,
		id
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		create: (product) => {
			dispatch(createProduct(product))
		}
	}
}

const ProductCreationForm = connect(mapStateToProps, mapDispatchToProps)(_productCreationForm)

export default ProductCreationForm
