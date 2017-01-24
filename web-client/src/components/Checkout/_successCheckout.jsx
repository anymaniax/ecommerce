import React, {Component} from 'react'

import {formater} from '../../models/priceFormater'

class _successCheckout extends Component {
    componentWillMount(){
        this.props.fetchDetails(this.props.params.transactionId, this.props.token)
    }
    render() {
        console.log(this.props.checkout)
        return (
            this.props.checkout.transactionSuccess ?
                <div>
                    <h1 className="display-4">Payement accepté</h1>
                    <p className="lead">Merci d'avoir passé votre commande chez nous!</p>
                    <p className="">Détails de votre commande:</p>
                    <hr className="my-3" />
                    <ul>
                    {this.props.checkout.cart.map(e => {
                        return (
                            <li>{e.quantity + 'x ' + e.product.nom + ' à ' + formater(e.product.price.value) + '€'}</li>
                        )
                    })}
                    </ul>
                </div>
                :
                <div>

                </div>
        )
    }
}

export default _successCheckout
