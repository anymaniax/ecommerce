import {PRODUCT_CREATION_SUCCESS, PRODUCT_CREATION_FAILURE} from '../actions'

const initialState = {}

function productCreation(state = initialState, action){
	switch(action.type){
		case PRODUCT_CREATION_SUCCESS:
			const {link} = action
			const {id} = link
			return {
				id
			}

		case PRODUCT_CREATION_FAILURE:
			const {error} = action
			return {
				error
			}

		default:
			return state
	}
}

export default productCreation
