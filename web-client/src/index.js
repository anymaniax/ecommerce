import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import {ProductsList, ProductDetails, ProductCreationForm, Cart} from './containers'
import reducers from './reducers'
import {fetchCats} from './actions'
import {loadState, saveState} from './models/localStorage'

import '../assets/bootstrap-4/css/bootstrap.css'

const persistedstate = loadState()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	reducers,
	persistedstate,
	composeEnhancers(
		applyMiddleware(
			thunkMiddleware
		)
	)
)

store.subscribe(() => {
	saveState({
		cart: store.getState().cart
	})
})

store.dispatch(fetchCats())


ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={ProductsList} />
				<Route path="products/:id" component={ProductDetails} />
				<Route path="cats/:catName" component={ProductsList} />
				<Route path="cart" component={Cart} />
			</Route>
			<Route path="/productCreation">
				<IndexRoute component={ProductCreationForm} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
