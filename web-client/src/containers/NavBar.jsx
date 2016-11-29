import {connect} from 'react-redux'

import {fetchAll} from '../actions'
import {_navBar} from '../components'

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAll: () => {
			dispatch(fetchAll())
		}
	}
}

const NavBar = connect(null, mapDispatchToProps)(_navBar)

export default NavBar
