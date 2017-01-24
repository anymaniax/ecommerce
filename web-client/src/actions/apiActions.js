import fetch from 'isomorphic-fetch'

import conf from '../config/conf.json'

export const RECEIVE_PRODUCTS = 'receive products'
function receiveProducts(products){
	if(products.err){
		return {
			type: RECEIVE_PRODUCTS,
			products: []
		}
	} else {
        return {
            type: RECEIVE_PRODUCTS,
            products
        }
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


export function deleteProduct(id, token, cat = 'all'){
    return function(dispatch){
        return fetch(`${conf.url}products/${id}?token=${token}`, {
        	method: 'DELETE'
		}).then(response => {
			if(response.status === 204){
				if(cat === 'all'){
					dispatch(fetchAll())
				} else {
					dispatch(fetchProductsByCat(cat))
				}
			}
		})
    }
}

export const PRODUCT_UPDATE_SUCCESS = 'product update success'
function productUpdateSuccess(){
	return {
		type: PRODUCT_UPDATE_SUCCESS
	}
}

export const PRODUCT_UPDATE_FAILURE = 'product update failure'
function productUpdateFailure(){
    return {
        type: PRODUCT_UPDATE_FAILURE
    }
}

export function updateProduct(product, token){
	return function(dispatch){
		return fetch(`${conf.url}products/${product._id}`, {
			method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            }, body: JSON.stringify({
            	product
            })
		}).then(response => {
			if(response.status === 204){
				dispatch(productUpdateSuccess())
			} else {
				dispatch(productUpdateFailure())
			}
		})
	}
}

export function fetchCats(){
	return function(dispatch){
		return fetch(`${conf.url}cats/`)
			.then(response => response.json())
			.then(cats => dispatch(receiveCategories(cats)))
	}
}

export function fetchProductsByCat(cat){
	return function(dispatch){
		return fetch(`${conf.url}cats/${cat}`)
			.then(response => response.json())
			.then(products => dispatch(receiveProducts(products)))
	}
}

export const PAYEMENTS_RECEIVED = 'payements received'
export function receivedPayements(payements){
	return {
		type: PAYEMENTS_RECEIVED,
        payements
	}
}

export function fetchPayements(id, token){
	return function(dispatch){
		return fetch(`${conf.url}pay/payements/user/${id}`, {
			method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            }
		}).then(response => {
			if(response.status === 202){
				response.json().then(json => {
					dispatch(receivedPayements(json))
				})
			}
		})
	}
}
