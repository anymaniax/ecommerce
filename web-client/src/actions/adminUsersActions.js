/**
 * Created by antonio on 28/12/16.
 */
import fetch from 'isomorphic-fetch'

import conf from '../config/conf'

export const USER_LIST_SUCCESS = 'user list success'
function userListSuccess(users){
    console.log(users)
    return {
        type: USER_LIST_SUCCESS,
        users
    }
}

export function fetchUserList(){
    return function(dispatch){
        return fetch(`${conf.url}users/`)
            .then(response => response.json())
            .then(users => dispatch(userListSuccess(users)))
    }
}

export const FETCH_CAT_SUCCESS = 'fetch cat success'
function fetchCatsSuccess(categories){
    return {
        type: FETCH_CAT_SUCCESS,
        categories
    }
}

export function fetchCategories(){
    return function(dispatch){
        return fetch(`${conf.url}cats/details`)
            .then(response => response.json())
            .then(({cats}) => dispatch(fetchCatsSuccess(cats)))
    }
}

export function deleteCategory(id, token){
    console.log(id);
    return function(dispatch){
        return fetch(`${conf.url}cats/${id}?token=${token}`, {
            method: 'delete'
        }).then(response => {
            if(response.status === 204) {
                dispatch(fetchCategories())
            }
        })
    }
}

export function addCategory(nom, token){
    return function(dispatch){
        return fetch(`${conf.url}cats/?token=${token}`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({nom})
        }).then(() => dispatch(fetchCategories()))
    }
}