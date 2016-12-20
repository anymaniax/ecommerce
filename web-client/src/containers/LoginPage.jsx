import {connect} from 'react-redux'

import {_loginPage} from '../components'
import {fetchToken, logout} from '../actions'

const mapStateToProps = ({auth}) => {
	return auth
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: (username, password) => {
			dispatch(fetchToken(username, password))
		},
		logout: () => {
			dispatch(logout())
		}
	}
}

const LoginPage = connect(mapStateToProps, mapDispatchToProps)(_loginPage)

export default LoginPage
