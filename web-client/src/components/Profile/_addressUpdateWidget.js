import React, {Component} from 'react'
import Input from './_input'
import {Alert} from '../'
import {Loader} from '../_loader'

function testText(input){
    return (!input || input === '')
}

class _addressUpdateWidget extends Component {

    constructor(props){
        super(props)
        this.state = {
            street: this.props.user.address.street,
            number: this.props.user.address.number,
            town: this.props.user.address.town,
            postalCode:this.props.user.address.postalCode,
            country:this.props.user.address.country,
            errorShort: '',
            errorDetails: '',
            error: false
        }
    }

    handleChanges = (input, value) => {
        this.props.hideAlert()
        switch(input){
            case 'Rue':
                this.setState({
                    street: value
                })
                break

            case 'Numéro de maison':
                this.setState({
                    number: value
                })
                break

            case 'Localité':
                this.setState({
                    town: value
                })
                break
            case 'Code postal':
                this.setState({
                    postalCode: value
                })
                break
            case 'Pays':
                this.setState({
                    country: value
                })
                break
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {street, number, town, postalCode, country} = this.state
        const {_id} = this.props.user
        const {token} = this.props
        if(street === '' || number === '' || town === '' || postalCode === '' || country === ''){
            return this.props.showAlert('Oops !', 'Tous les champs doivent être remplis!', 'warning')
        }

        return this.props.changeAddress(_id, this.props.user.lastname, this.props.user.firstname ,street, number, town, postalCode, country, this.props.user.sex, this.props.user.phone, token)
    }

    render() {
        console.log(this);
        const {street, number, town, postalCode, country} = this.state
        const {shouldDisplayAlert, shouldDisplayLoader, alertShort, alertDetails, alertType} = this.props.addressUpdate
        return (
            <div>
                <p className="lead">Changer adresse</p>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        label="Rue"
                        placeholder="Rue..."
                        type="text"
                        test={testText}
                        value={street}
                        onChange={this.handleChanges}/>
                    <Input
                        label="Numéro de maison"
                        placeholder="Numéro de maison..."
                        type="text"
                        test={testText}
                        value={number}
                        onChange={this.handleChanges}/>
                    <Input
                        label="Localité"
                        placeholder="Localité..."
                        type="text"
                        test={testText}
                        value={town}
                        onChange={this.handleChanges}/>
                    <Input
                        label="Code postal"
                        placeholder="Code postal..."
                        type="text"
                        test={testText}
                        value={postalCode}
                        onChange={this.handleChanges}/>
                    <Input
                        label="Pays"
                        placeholder="Pays..."
                        type="text"
                        test={testText}
                        value={country}
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

export default _addressUpdateWidget
