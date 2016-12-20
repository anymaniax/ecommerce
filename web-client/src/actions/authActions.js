import fetch from 'isomorphic-fetch'

import conf from '../config/conf'

export const LOGIN_SUCCESS = 'login success'
function loginSuccess(jwt){
	return {
		type: LOGIN_SUCCESS,
		jwt
	}
}

export const LOGIN_FAILURE = 'login failed'
function loginFailure(error){
	return {
		type: LOGIN_FAILURE,
		error
	}
}

export const REGISTER_SUCCESS = 'register success'
function registerSuccess(link){
	return {
		type: REGISTER_SUCCESS,
		link
	}
}

export const REGISTER_FAILURE = 'register failed'
function registerFailure(error){
	return {
		type: REGISTER_FAILURE,
		error
	}
}

export const START_LOADING = 'start login'
function startLoading(){
	return {
		type: START_LOADING
	}
}

export const FINISH_LOADING = 'finish loading'
function finishLoading(){
	return {
		type: FINISH_LOADING
	}
}

export function fetchToken(username, password){
	return function(dispatch){
		dispatch(startLoading())
		return fetch(`${conf.url}auth/`, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				username,
				password
			})
		}).then(response => response.json())
		.then(json => {
			if(!json.success){
				dispatch(loginFailure(json.message))
				return dispatch(finishLoading())
			}
			dispatch(loginSuccess(json.token))
			dispatch(finishLoading())
		})
	}
}

export const LOGOUT = 'log out'
export function logout(){
	return {
		type: LOGOUT
	}
}

export function register(user){
	return function(dispatch){
		dispatch(startLoading())

		return fetch(`${conf.url}users/`, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(user)
		}).then(response => response.json())
		.then(json => {
			console.log(json)
			if(json.error){
				dispatch(registerFailure(json.error))
				return dispatch(finishLoading())
			}
			dispatch(registerSuccess(json.link))
			dispatch(finishLoading())
		})
	}
}
