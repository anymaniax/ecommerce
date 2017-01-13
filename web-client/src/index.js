import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import {ProductsList, ProductDetails, ProductCreationForm, Cart, LoginPage, AdminPanel, UsersHandler} from './containers'
import reducers from './reducers'
import {fetchCats} from './actions'
import {loadState, saveState} from './models/localStorage'

import '../assets/bootstrap-4/css/bootstrap.css'

import _register from './components/_register.jsx'
import {_adminPanel} from './components'
import requiresAdmin from './containers/adminPanel/requiresAdmin'
import Register from './containers/Register'

console.log(requiresAdmin);

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
	const {cart, auth} = store.getState()
	saveState({
		cart,
		auth: {
			token: auth.token,
			authenticated: auth.authenticated,
			user: auth.user
		}
	})
})

store.dispatch(fetchCats())


console.log('User Handler', UsersHandler)

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={ProductsList} />
				<Route path="products/:id" component={ProductDetails} />
				<Route path="cats/:catName" component={ProductsList} />
				<Route path="cart" component={Cart} />
				<Route path="login" component={LoginPage} />
				<Route path="register" component={Register} />
				<Route path="admin" component={requiresAdmin(AdminPanel, store.getState())}>
					<Route path="users" component={UsersHandler} />
				</Route>
			</Route>
			<Route path="/productCreation">
				<IndexRoute component={requiresAdmin(ProductCreationForm, store.getState())} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)
