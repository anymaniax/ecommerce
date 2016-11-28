import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'

import {fetchAll} from '../actions/apiActions'

import CartViewer from '../containers/CartViewer'

const _navBar = (props) => {
	console.log(props)
	return (
		<nav className="navbar navbar-light bg-faded navbar-fixed-top">
			<div className="container-fluid">
				<a href='/' className="navbar-brand" onClick={() => props.dispatch(fetchAll())}>Ecomm</a>
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<CartViewer />
					</li>
				</ul>
			</div>
		</nav>
	)
}

const NavBar = connect()(_navBar)

export default NavBar
