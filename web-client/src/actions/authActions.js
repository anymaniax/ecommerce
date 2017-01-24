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
function registerSuccess(json){
	const {link, token} = json
	return {
		type: REGISTER_SUCCESS,
		link,
		token
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
			console.log(json)
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
			dispatch(registerSuccess(json))
			dispatch(finishLoading())
		})
	}
}

export const PASSWORD_UPDATE_SUCCESSS = 'passwd update success'
export function passwordUpdateSuccess(){
	return {
		type: PASSWORD_UPDATE_SUCCESSS
	}
}

export const PASSWORD_UPDATE_FAILURE = 'passwd update failure'
export function passwordUpdateFailure(){
	return {
		type: PASSWORD_UPDATE_FAILURE
	}
}

export function changePassword(id, password, newPassword, token){
	return function(dispatch){
		dispatch(startLoading())
		return fetch(`${conf.url}users/pass/${id}`, {
			method: 'POST',
			headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
				'x-access-token': token
            }, body: JSON.stringify({
            	password,
				newPassword
			})
		}).then(response => {
			if(response.status === 204){
				dispatch(passwordUpdateSuccess())
				dispatch(finishLoading())
			} else {
				dispatch(passwordUpdateFailure())
                dispatch(finishLoading())
			}
		})
	}
}

export const ADDRESS_UPDATE_SUCCESSS = 'address update success'
export function addressUpdateSuccess(){
	return {
		type: ADDRESS_UPDATE_SUCCESSS
	}
}

export const ADDRESS_UPDATE_FAILURE = 'address update failure'
export function addressUpdateFailure(){
	return {
		type: ADDRESS_UPDATE_FAILURE
	}
}

export function changeAddress(user, state, token){
	return function(dispatch){
		dispatch(startLoading())
		const newUser = Object.assign({}, user, {
			address: state
		})
		return fetch(`${conf.url}users/${user._id}`, {
			method: 'PUT',
			headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
				'x-access-token': token
            }, body: JSON.stringify(newUser)
		}).then(response => {
			if(response.status === 200){
				dispatch(addressUpdateSuccess())
				dispatch(finishLoading())
			} else {
				dispatch(addressUpdateFailure())
                dispatch(finishLoading())
			}
		})
	}
}

export const HIDE_ALERT = 'hide alert'
export function hideAlert(){
	return {
		type: HIDE_ALERT
	}
}

export const SHOW_ALERT = 'show alert'
export function showAlert(alertShort, alertDetails, alertType){
    return {
        type: SHOW_ALERT,
        alertShort,
		alertDetails,
		alertType
    }
}

