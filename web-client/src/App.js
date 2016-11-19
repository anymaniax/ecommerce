import React from 'react';
import './App.css';

import { Link } from 'react-router'

const App = ({children}) => {
	return (
		<div>
			<nav className="navbar navbar-light bg-faded navbar-fixed-top">
				<div className="container-fluid">
					<Link to='/' className="navbar-brand">Ecomm</Link>
				</div>
			</nav>
			<div className="container">
				{children}
			</div>
		</div>
	)
}

export default App
