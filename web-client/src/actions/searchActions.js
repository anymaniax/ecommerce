import fetch from 'isomorphic-fetch'

import conf from '../config/conf.json'

export const SEARCH_PRODUCTS_SUCCESS = 'success search products'
function searchProductsSuccess(search){
	return {
		type: SEARCH_PRODUCTS_SUCCESS,
		search
	}
}
export const SEARCH_PRODUCTS_FAILURE = 'fail search products'
function searchProductsFailure(errorSearch){
	return {
		type: SEARCH_PRODUCTS_FAILURE,
		errorSearch
	}
}

export const EMPTY_SEARCH = 'empty search'
function emptySearch(){
	return {
		type: EMPTY_SEARCH
	}
}

export function searchProduct(params){
	return function(dispatch){
		return fetch(`${conf.url}products/search/`+params, {
			method: 'GET'
		})
		.then(response => response.json())
		.then(message => {
			if(message.message&& message.message === "No product found"){
				return dispatch(emptySearch())
			}
			if(message.error){
				return dispatch(searchProductsFailure(message.error))
			}
			return dispatch(searchProductsSuccess(message))
		})
	}
}