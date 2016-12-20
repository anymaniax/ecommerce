import {connect} from 'react-redux'

import {fetchAll, logout} from '../actions'
import {_navBar} from '../components'

const mapStateToProps = ({auth}) => {
	let {authenticated, user} = auth
	return {
		authenticated,
		user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAll: () => {
			dispatch(fetchAll())
		},
		logout: () => {
			dispatch(logout())
		}
	}
}

const NavBar = connect(mapStateToProps, mapDispatchToProps)(_navBar)

export default NavBar
