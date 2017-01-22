import {SEARCH_PRODUCTS_SUCCESS, SEARCH_PRODUCTS_FAILURE, EMPTY_SEARCH} from '../actions'

const initialState = {}

function searchProducts(state = initialState, action){
	switch(action.type){
		case SEARCH_PRODUCTS_SUCCESS:
			let { products } = action.search
			let newState = Object.assign({}, state, {
				products
			})
			return newState

		case EMPTY_SEARCH:
			return Object.assign({}, state, {
				products: []
			})

		case SEARCH_PRODUCTS_FAILURE:
			const {errorSearch} = action
			return {
				errorSearch
			}

		default:
			return state
	}
}

export default searchProducts
