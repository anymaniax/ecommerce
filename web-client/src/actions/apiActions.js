import fetch from 'isomorphic-fetch'

import conf from '../config/conf.json'

export const RECEIVE_PRODUCTS = 'receive products'
function receiveProducts(products){
	return {
		type: RECEIVE_PRODUCTS,
		products
	}
}

export const RECEIVE_DETAILS = 'receive details'
function receiveDetails(details){
	return {
		type: RECEIVE_DETAILS,
		details
	}
}

export const RECEIVE_CATEGORIES = 'receive categories'
function receiveCategories(cats){
	return {
		type: RECEIVE_CATEGORIES,
		cats
	}
}

export function fetchAll(){
	return function(dispatch){
		return fetch(`${conf.url}products`)
			.then(response => response.json())
			.then(products => dispatch(receiveProducts(products)))
	}
}

export function fetchById(id){
	return function(dispatch){
		return fetch(`${conf.url}products/${id}`)
			.then(response => response.json())
			.then(details => dispatch(receiveDetails(details)))
	}
}

export function fetchCats(){
	return function(dispatch){
		return fetch(`${conf.url}cats/`)
			.then(response => response.json())
			.then(cats => dispatch(receiveCategories(cats)))
	}
}
