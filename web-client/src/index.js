import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProductsList from './containers/ProductsList'
import ProductDetails from './containers/ProductDetails'
import ProductCreationForm from './containers/ProductCreationForm'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import '../assets/bootstrap-4/css/bootstrap.css'


import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducers'

import {fetchCats} from './actions/apiActions'

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(
		thunkMiddleware
	)
)

store.dispatch(fetchCats())


ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={ProductsList} />
				<Route path="products/:id" component={ProductDetails} />
				<Route path="cats/:catName" component={ProductsList} />
			</Route>
			<Route path="/productCreation">
				<IndexRoute component={ProductCreationForm} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
