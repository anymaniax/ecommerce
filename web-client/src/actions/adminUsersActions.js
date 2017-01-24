import fetch from 'isomorphic-fetch'

import conf from '../config/conf'

export const USER_LIST_SUCCESS = 'user list success'
function userListSuccess(users){
    return {
        type: USER_LIST_SUCCESS,
        users
    }
}

export function fetchUserList(token){
    return function(dispatch){
        return fetch(`${conf.url}users/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-access-token': token
            })
        }).then(response => response.json())
            .then(users => dispatch(userListSuccess(users)))
    }
}

export function deleteUser(id, token){
    return function(dispatch){
        return fetch(`${conf.url}users/${id}?token=${token}`, {
            method: 'delete'
        }).then(response => {
            response.json().then(res => console.log(res))
            dispatch(fetchUserList(token))
        })
    }
}

export function makeAdmin(id, token){
    return function(dispatch){
        return fetch(`${conf.url}users/admins`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-access-token': token
            }),
            body: JSON.stringify({id})
        }).then(response => {
                response.json().then(r => console.log(r))
                dispatch(fetchUserList(token))
            }
        )
    }
}

export function removeAdmin(id, token){
    return function(dispatch){
        return fetch(`${conf.url}users/admins`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-access-token': token
            }),
            body: JSON.stringify({id})
        }).then(response => {
                response.json().then(r => console.log(r))
                dispatch(fetchUserList(token))
            }
        )
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
            method: 'delete',
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-access-token': token
            })
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
                'Content-Type': 'application/json',
                'x-access-token': token
            }),
            body: JSON.stringify({nom})
        }).then(() => dispatch(fetchCategories()))
    }
}