import React from 'react';
import CatViewer from './containers/CatViewer'
import NavBar from './containers/NavBar'
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
