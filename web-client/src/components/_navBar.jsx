import React from 'react'
import { Link, browserHistory } from 'react-router'

import CartViewer from '../containers/CartViewer'
import SearchBar from '../containers/SearchBar'

import './_navbar.css'

const _navBar = (props) => {
	function landing(e) {
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
							<CartViewer className="nav-link" />
						</li>}

					{props.user.role === 'admin' && (
						<span>
							<li className="nav-item">
								<Link to='/productCreation' className="nav-link">| Ajouter un produit +</Link>
							</li>
							<li className="nav-item">
								<Link to='/cats' className="nav-link"> | Catégories +  |  </Link>
							</li>
						</span>
					)}
					{!props.authenticated ? 
						<li className="nav-item">
							<Link to='/login' className="nav-link">Se connecter</Link> 
						</li>
						:
						<li className="nav-item">
							<span className="nav-link">Bienvenu {props.user.username} <span className="span-button" onClick={() => props.logout()}><i className="fa fa-sign-out" aria-hidden="true"></i></span></span>
						</li>
					}
					{props.hideDefault ||<li>
						<SearchBar/>
					</li>}
					{props.children}
				</ul>
			</div>
		</nav>
			)
}

export default _navBar
