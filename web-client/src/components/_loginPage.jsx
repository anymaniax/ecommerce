import React, {Component} from 'react'
import {Link, browserHistory} from 'react-router'

import {Loader} from './_loader'
import {Alert} from './'

export default class _loginPage extends Component {

	constructor(props){
		super(props)
		this.state = {
			login: '',
			password: ''
		}
	}

	componentWillMount(){
		if(this.props.authenticated){
			browserHistory.push('/')
		}
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.authenticated){
			browserHistory.push('/')
		}
	}

	handleLogin = (e) => {
		this.setState({
			login: e.target.value
		})
	}

	handlePass = (e) => {
		this.setState({
			password: e.target.value
		})
	}

	login = (e) => {
		e.preventDefault()
		this.props.login(this.state.login, this.state.password)
	}

	logout = (e) => {
		e.preventDefault()
		this.props.logout()
	}

	render(){
		console.log(this.props)
		return (
			<div>
				<form>
				{this.props.token === '' ?
					(
						!this.props.loading ? 
							<div className="form-group">
								<p><input className="form-control" value={this.state.login} onChange={this.handleLogin} type="text" placeholder="login" /></p>
								<p><input className="form-control" value={this.state.password} onChange={this.handlePass} type="password" placeholder="password" /></p>
								<p><button className="span-button form-control" onClick={this.login}>Se connecter{' '}<i className="fa fa-sign-in" aria-hidden="true"></i></button></p>
								{this.props.errorMessage &&
									<Alert
										short="Oops!"
										details={this.props.errorMessage}
										type="danger" />
								}
								<p><Link to='/register'>Pas encore inscrit?</Link></p>
							</div>
							:
							<Loader />
					)
					:
					<div className="form-group">
						<label>You're now logged in as {this.props.user.username}</label>
						<button className="span-button form-control" onClick={this.logout}>Se déconnecter</button>
					</div>
				}
				</form>
			</div>
		)
	}
}
