import jwtDecode from 'jwt-decode'
import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, 
		START_LOADING, FINISH_LOADING,
		REGISTER_SUCCESS, REGISTER_FAILURE} from '../actions/authActions'

const initialState = {
	authenticated: false,
	errorMessage: '',
	token: '',
	user: {},
	loading: false,
	link: ''
}

function auth(state = initialState, action){
	switch(action.type){
		case LOGIN_SUCCESS:
			return Object.assign({}, state, {
				user: jwtDecode(action.jwt),
				token: action.jwt,
				authenticated: true
			})

		case LOGIN_FAILURE:
			return Object.assign({}, state, {
				authenticated: false,
				errorMessage: action.message
			})

		case REGISTER_SUCCESS:
			return Object.assign({}, state, {
				link: action.link
			})

		case LOGOUT:
			return Object.assign({}, state, {
				authenticated: false,
				token: '',
				user: {}
			})

		case START_LOADING:
			return Object.assign({}, state, {
				loading: true
			})

		case FINISH_LOADING:
			return Object.assign({}, state, {
				loading: false
			})

		default:
			return state
	}
}

export default auth
