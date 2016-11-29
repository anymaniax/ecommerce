import { connect } from 'react-redux'

import { fetchAll, fetchProductsByCat } from '../actions/apiActions'
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
)(_ProductList)

export default ProductsList