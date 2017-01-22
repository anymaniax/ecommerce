import {connect} from 'react-redux'

import {fetchCats, fetchAll} from '../actions'

import {_catViewer} from '../components'

const mapStateToProps = (state) => {
	const {cats} = state.api
	return {
		cats
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCats: () => {
			dispatch(fetchCats())
		}, fetchAll: () => {
			dispatch(fetchAll())
		}
	}
}

const CatViewer = connect(
	mapStateToProps,
	mapDispatchToProps
)(_catViewer)

export default CatViewer
