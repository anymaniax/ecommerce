import React from 'react';
import {CatViewer, NavBar} from './containers'
import './App.css';


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
