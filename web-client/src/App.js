import React from 'react';
import {NavBar} from './containers'
import './App.css';


const App = ({children}) => {
	return (
		<div>
			<NavBar />
			<div className="container">
				{children}
			</div>
		</div>
	)
}

export default App
