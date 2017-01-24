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
				errorMessage: "Une erreur est survenue durant l'authentification"
			})

		case REGISTER_SUCCESS:
			return Object.assign({}, state, {
				authenticated: true,
                user: jwtDecode(action.token),
                token: action.token,
				link: action.link
			})

		case REGISTER_FAILURE:
			return Object.assign({}, state, {
				errorMessage: action.error
			})

		case LOGOUT:
			return initialState

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
