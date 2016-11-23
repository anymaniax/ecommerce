import React from 'react'
import {connect} from 'react-redux'

import {fetchCats} from '../actions/apiActions'

import _catViewer from '../components/_catViewer'

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
		}
	}
}

const CatViewer = connect(
	mapStateToProps,
	mapDispatchToProps
)(_catViewer)

export default CatViewer
