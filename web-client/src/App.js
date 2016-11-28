import React from 'react';
import './App.css';

import CatViewer from './containers/CatViewer'
import CartViewer from './containers/CartViewer'
import NavBar from './containers/NavBar'


import { Link } from 'react-router'

const App = ({children}) => {
	return (
		<div>
			<NavBar />
			<div className="container">
				<CatViewer />
				{children}
			</div>
		</div>
	)
}

export default App
