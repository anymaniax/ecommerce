import React from 'react'
import {connect} from 'react-redux'
import {Link, browserHistory} from 'react-router'

import {fetchAll} from '../actions/apiActions'

import CartViewer from '../containers/CartViewer'

const _navBar = (props) => {
	console.log('props')
	function landing(e){
		e.preventDefault()
		props.fetchAll()
		browserHistory.push('/')
	}
	return (
		<nav className="navbar navbar-light bg-faded navbar-fixed-top">
			<div className="container-fluid">
				<a href="/" className="navbar-brand" onClick={landing}>Ecomm</a>
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<CartViewer />
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default _navBar
