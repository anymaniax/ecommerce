import React from 'react'
import {Link, browserHistory} from 'react-router'

import CartViewer from '../containers/CartViewer'

const _navBar = (props) => {
	function landing(e){
		e.preventDefault()
		props.fetchAll()
		browserHistory.push('/')
	}
	return (
		<nav className="navbar navbar-dark bg-primary navbar-fixed-top">
			<div className="container-fluid">
				<a href="/" className="navbar-brand" onClick={landing}>Ecomm</a>
				<ul className="nav navbar-nav">
					{props.hideDefault ||
					<li className="nav-item">
						<CartViewer className="nav-link"/>
					</li>}

					{props.hideDefault || <li className="nav-item">
						<Link to='/productCreation' className="nav-link">+</Link>
					</li>}
					{props.children}
				</ul>
			</div>
		</nav>
	)
}

export default _navBar
