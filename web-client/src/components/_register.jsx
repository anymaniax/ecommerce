import React, {Component} from 'react'
import {browserHistory} from 'react-router'

import {Loader} from './_loader'

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
				street: '',
				number: "",
				town: 'Mons',
				postalCode: '',
				country: 'Belgium'
			},
			errorMessage: [],
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
		let err = []
		if(this.state.password !== this.state.passwordCheck || (this.state.password === '' && this.state.passwordCheck === '')){
			err.push('Les passwords ne correspondent pas')
		}

		if(this.state.username === ''){
			err.push('Username ne peut pas être vide')
		}

		if(this.state.email === ''){
			err.push('Le mail ne peut pas être vide')
		}

		if(err.length === 0){
			this.props.register(this.state)
		}
		this.setState({
			errorMessage: err
		})
	}

	handleInputs = (e, TAG) => {
		e.preventDefault()
		const value = e.target.value
		switch(TAG){
			case 'street': {
                const address = Object.assign({}, this.state.address, {
                    street: value
                })
                this.setState({
                    address
                })
                break;
            }

			case 'street number': {
                const address = Object.assign({}, this.state.address, {
                    number: value
                })
                this.setState({
                    address
                })
                break;
            }

			case 'town': {
                const address = Object.assign({}, this.state.address, {
                    town: value
                })
                this.setState({
                    address
                })
                break;
            }

			case 'postal code': {
                const address = Object.assign({}, this.state.address, {
                    postalCode: value
                })
                this.setState({
                    address
                })
                break;
            }

			case 'country': {
                const address = Object.assign({}, this.state.address, {
                    country: value
                })
                this.setState({
                    address
                })
                break;
            }

			default:
				console.log('Tag inconnu')
				break;
		}
	}

    componentWillReceiveProps(nextProps){
		const {auth} = nextProps
		if(auth.link && auth.link !== ''){
			browserHistory.push('/')
		}

		if(auth.errorMessage && auth.errorMessage !== ''){
			let errors = [...this.state.errorMessage]
			errors.push(auth.errorMessage)
			this.setState({
				errorMessage: errors
			})
		}
	}

	render(){
		return (
			this.props.auth.loading?
				<Loader />
					:
				<form>
					<h2>Parlez nous un peu de vous</h2>
                    {this.state.errorMessage.map((e, i) => <p key={i}>{e}</p>)}
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
							Rue
						</label>
						<input
							className="form-control"
							type="text"
							placeholder="Rue..."
							value={this.state.address.street}
							onChange={(e) => this.handleInputs(e, "street")} />
						<label>
							Numéro de maison
						</label>
						<input
							className="form-control"
							type="text"
							placeholder="Numéro de maison..."
							value={this.state.address.number}
							onChange={(e) => this.handleInputs(e, "street number")} />
						<label>
							Localité
						</label>
						<input
							className="form-control"
							type="text"
							placeholder="Localité..."
							value={this.state.address.town}
							onChange={(e) => this.handleInputs(e, "town")} />
						<label>
							Code postal
						</label>
						<input
							className="form-control"
							type="text"
							placeholder="Code postal..."
							value={this.state.address.postalCode}
							onChange={(e) => this.handleInputs(e, "postal code")} />
						<label>
							Pays
						</label>
						<input
							className="form-control"
							type="text"
							placeholder="Pays..."
							value={this.state.address.country}
							onChange={(e) => this.handleInputs(e, "country")} />
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
				</form>
		)
	}
}

export default _register
