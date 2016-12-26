import fetch from 'isomorphic-fetch'

import conf from '../config/conf.json'

export const PRODUCT_CREATION_SUCCESS = 'success product creation'
function productCreationSuccess(link){
	return {
		type: PRODUCT_CREATION_SUCCESS,
		link
	}
}

export const PRODUCT_CREATION_FAILURE = 'error creating product'
function productCreationFailure(error){
	return {
		type: PRODUCT_CREATION_FAILURE,
		error
	}
}

export function createProduct(params, token){
	return function(dispatch){
		return fetch(`${conf.url}products?token=${token}`, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify(params)
		})
		.then(response => response.json())
		.then(message => {
			console.log(message)
			if(message.error){
				return dispatch(productCreationFailure(message.error))
			}
			return dispatch(productCreationSuccess(message))
		})
	}
}

