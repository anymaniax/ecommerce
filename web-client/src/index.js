import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import {ProductsList, ProductDetails, ProductCreationForm, Cart,
	LoginPage, AdminPanel, UsersHandler, CatsHandler,
	User, Register, Profile, ProductsHandler,
    ProductUpdateForm, Confirmation, SuccessCheckout} from './containers'

import {_checkout, _confirmation, _errorCheckout, _successCheckout} from './components'

import reducers from './reducers'
import {loadState, saveState} from './models/localStorage'

import '../assets/bootstrap-4/css/bootstrap.css'

import requiresAdmin from './HOC/requiresAdmin'

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
				<Route path="search/:search" component={ProductsList}/>
				<Route path="admin" component={requiresAdmin(AdminPanel, store.getState())}>
					<Route path="users" component={UsersHandler}>
						<Route path=":id" component={User} />
					</Route>
					<Route path="categories" component={CatsHandler} />
					<Route path="products" component={ProductsHandler} />
					<Route path="products/create" component={ProductCreationForm} />
					<Route path="products/update/:id" component={ProductUpdateForm} />
				</Route>
				<Route path="profile" component={Profile} />

				<Route path="checkout" component={_checkout}>
					<IndexRoute component={Confirmation}/>
					<Route path="success/:transactionId" component={SuccessCheckout} />
					<Route path="error" component={_errorCheckout} />
				</Route>
			</Route>
			<Route path="/productCreation">
				<IndexRoute component={requiresAdmin(ProductCreationForm, store.getState())} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)
