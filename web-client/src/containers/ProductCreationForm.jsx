import {connect} from 'react-redux'

import {_productCreationForm} from '../components'

import {createProduct, fetchCats} from '../actions'

const mapStateToProps = ({api, productCreation, auth}) => {
	const {cats} = api
	const {error, link, id} = productCreation
	const {authenticated, user, token} = auth
	return {
		cats,
		error,
		link,
		id,
		authenticated,
		user,
        token
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		create: (product, token) => {
			dispatch(createProduct(product, token))
		}, fetchCats: () => {
			dispatch(fetchCats())
		}
	}
}

const ProductCreationForm = connect(mapStateToProps, mapDispatchToProps)(_productCreationForm)

export default ProductCreationForm
