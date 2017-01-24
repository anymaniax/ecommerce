import React, {Component} from 'react'
import Input from './_input'
import {Alert} from '../'
import {Loader} from '../_loader'

function testText(input){
    return (!input || input === '')
}

class _passwordUpdateWidget extends Component {

    constructor(props){
        super(props)
        this.state = {
            oldPass: '',
            newPass: '',
            newPass2: '',
            errorShort: '',
            errorDetails: '',
            error: false
        }
    }

    handleChanges = (input, value) => {
        this.props.hideAlert()
        switch(input){
            case 'Password actuel':
                this.setState({
                    oldPass: value
                })
                break

            case 'Nouveau password':
                this.setState({
                    newPass: value
                })
                break

            case 'Répeter le nouveau password':
                this.setState({
                    newPass2: value
                })
                break

            default:
                return
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {oldPass, newPass, newPass2} = this.state
        const {_id} = this.props.user
        const {token} = this.props
        if(oldPass === '' || newPass === '' || newPass2 === ''){
            return this.props.showAlert('Oops !', 'Tous les champs doivent être remplis!', 'warning')
        }

        if(newPass !== newPass2){
            return this.props.showAlert('Oops !', 'Les passwords ne correspondent pas!', 'warning')
        }

        return this.props.changePassword(_id, oldPass, newPass, token)
    }

    render() {
        const {oldPass, newPass, newPass2} = this.state
        const {shouldDisplayAlert, shouldDisplayLoader, alertShort, alertDetails, alertType} = this.props.passwordUpdate
        return (
            <div>
                <p className="lead">Changer mon mot de passe</p>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        label="Password actuel"
                        placeholder="Password actuel"
                        type="password"
                        test={testText}
                        value={oldPass}
                        onChange={this.handleChanges}/>
                    <Input
                        label="Nouveau password"
                        placeholder="Nouveau password"
                        type="password"
                        test={testText}
                        value={newPass}
                        onChange={this.handleChanges}/>
                    <Input
                        label="Répeter le nouveau password"
                        placeholder="Répeter le nouveau password"
                        type="password"
                        test={testText}
                        value={newPass2}
                        onChange={this.handleChanges}/>

                    {shouldDisplayLoader ?
                        <Loader/>
                            :
                        <button className="btn btn-success btn-lg btn-block">
                            Confirmer
                        </button>
                    }
                    {shouldDisplayAlert &&
                        <Alert
                            type={alertType}
                            short={alertShort}
                            details={alertDetails}
                        />
                    }
                </form>
            </div>
        )
    }
}

export default _passwordUpdateWidget
