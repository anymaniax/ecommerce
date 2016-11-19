import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProductsList from './containers/ProductsList'
import ProductDetails from './containers/ProductDetails'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//import './index.css';
import '../assets/bootstrap-4/css/bootstrap.css'


import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import apiReducer from './reducers/apiReducer'

import { fetchAll } from './actions/apiActions'

const store = createStore(
	apiReducer,
	applyMiddleware(
		thunkMiddleware
	)
)

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={ProductsList} />
				<Route path="products/:id" component={ProductDetails} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
