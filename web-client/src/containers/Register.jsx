import {connect} from 'react-redux'

import {register} from '../actions/authActions'
import _register from '../components/_register'
const mapStateToProps = ({auth}) => {
	return {
		auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		register: (user) => {
			dispatch(register(user))
		}
	}
}

const Register = connect(mapStateToProps,
	mapDispatchToProps)(_register)

export default Register
