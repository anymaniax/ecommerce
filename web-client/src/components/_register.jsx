import React, {Component} from 'react'

import Loader from './_loader'

class _register extends Component {

	constructor(props){
		super(props)
		this.state = {
			firstname: '',
			lastname: '',
			username: '',
			password: '',
			passwordCheck: '',
			email: '',
			address: {
				street: 'Rue d\'Olez',
				number: 27,
				town: 'Mons',
				postalCode: 7000,
				country: 'Belgium'
			},
			errorMessage: '',
			sex: 'M',
			phone: 'Test phone number',
			role: 'user'
		}
	}

	handleFirstName = (e) => {
		e.preventDefault()
		this.setState({
			firstname: e.target.value
		})
	}

	handleLastName = (e) => {
		e.preventDefault()
		this.setState({
			lastname: e.target.value
		})
	}

	handleEmail = (e) => {
		e.preventDefault()
		this.setState({
			email: e.target.value
		})
	}

	handleUsername = (e) => {
		e.preventDefault()
		this.setState({
			username: e.target.value
		})
	}

	handlePassword = (e) => {
		e.preventDefault()
		this.setState({
			password: e.target.value
		})
	}

	handlePasswordCheck = (e) => {
		e.preventDefault()
		this.setState({
			passwordCheck: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		let err = ''
		if(this.state.password !== this.state.passwordCheck){
			err += 'Les passwords ne correspondent pas'
		}

		if(!err){
			return this.props.register(this.state)
		}
		this.setState({
			errorMessage: err
		})
	}

	render(){
		return (
				<form>
					<h2>Parlez nous un peu de vous</h2>
					<div className="form-group">
						<label>
							Username
						</label>
						<input 
							className="form-control"
							type="text" 
							placeholder="Username..."
							value={this.state.username}
							onChange={this.handleUsername} />
						<label>
							Mail
						</label>
						<input 
							className="form-control"
							type="text" 
							placeholder="Email..."
							value={this.state.email}
							onChange={this.handleEmail} />
						<label>
							Prénom
						</label>
						<input
							className="form-control"
							type="text" 
							placeholder="Prénom..."
							value={this.state.firstname}
							onChange={this.handleFirstName} />
						<label>
							Nom de famille
						</label>
						<input 
							className="form-control"
							type="text" 
							placeholder="Nom..."
							value={this.state.lastname}
							onChange={this.handleLastName} />
						<label>
							Password
						</label>
						<input 
							className="form-control"
							type="password" 
							placeholder="Password..."
							value={this.state.password}
							onChange={this.handlePassword} />
						<label>
							Vérification du password
						</label>
						<input 
							className="form-control"
							type="Password" 
							placeholder="Vérification du password..."
							value={this.state.passwordCheck}
							onChange={this.handlePasswordCheck} />
					</div>
					<div className="form-group">
						<button
							className="form-control btn btn-success"
							onClick={this.handleSubmit}>
							S'inscrire
						</button>
					</div>
					{this.state.errorMessage}
				</form>
		)
	}
}

export default _register
