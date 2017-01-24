import fetch from 'isomorphic-fetch'
import conf from '../config/conf.json'
import {startLoading, finishLoading} from './'

export const RECEIVED_PAYEMENT_URI = 'received payement uri'
function receivedPayementUri(uri){
    return {
        type: RECEIVED_PAYEMENT_URI,
        uri
    }
}

export const RECEIVED_PAYEMENT_DETAILS = 'received payement details'
function receivedPayementDetails(cart){
    return {
        type: RECEIVED_PAYEMENT_DETAILS,
        cart
    }
}

export const PAYEMENT_ERROR = 'an error happened during the payement'
function payementError(){
    return {
        type: PAYEMENT_ERROR
    }
}

export function confirmAndCreatePaypalCart(cart, uid, token){
    console.log('---------CART---------\n', cart)
    console.log('---------UID---------\n', uid)
    console.log('---------TOKEN---------\n', token)

    let paypalCart = []
    for(let item of cart.items){
        paypalCart.push({
            id: item.product._id,
            quantity: item.quantity
        })
    }
    return getPayementURI(paypalCart, uid, token)
}

export function getPayementURI(cart, uid, token){
    return function(dispatch){
        dispatch(startLoading())
        return fetch(`${conf.url}pay/${uid}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            }, body: JSON.stringify({
                cart
            })
        }).then(response => {
            if(response.status === 200){
                response.json().then(json => {
                    dispatch(receivedPayementUri(json.url))
                    dispatch(finishLoading())
                })
            } else {
                dispatch(payementError())
                dispatch(finishLoading())
            }
        })
    }
}

export function getTransactionDetails(transactionId, token){
    return function(dispatch){
        dispatch(startLoading())
        return fetch(`${conf.url}pay/payements/${transactionId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        }).then(response => {
            console.log('STATUS', response.status)
            if(response.status === 202){
                response.json().then(json => {
                    dispatch(receivedPayementDetails(json.cart))
                })
            } else {
                dispatch(payementError())
            }

            dispatch(finishLoading())
        })
    }
}
