import {connect} from 'react-redux'

import {fetchAll} from '../actions/apiActions'
import _navBar from '../components/_navBar'

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAll: () => {
			dispatch(fetchAll())
		}
	}
}

const NavBar = connect(null, mapDispatchToProps)(_navBar)

export default NavBar
