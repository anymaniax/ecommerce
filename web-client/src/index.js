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
//import apiReducer from './reducers/apiReducer'
import reducers from './reducers'

import { fetchAll, fetchCats } from './actions/apiActions'
import { addToCart, removeFromCart, resetCart } from './actions/cartActions'

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
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
