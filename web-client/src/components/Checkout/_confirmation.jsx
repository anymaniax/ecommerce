import React, {Component} from 'react'

import {Link} from 'react-router'

import {Loader} from '../_loader'
import {Alert} from '../'

import {formater} from '../../models/priceFormater'

class _confirmation extends Component {
    componentWillReceiveProps(nextProps){
        if(nextProps.checkout && nextProps.checkout.payementUri){
            if(nextProps.checkout.payementUri !== ''){
                window.location = nextProps.checkout.payementUri
            }
        }
    }
    render() {
        const {props} = this
        return (
            <div>
                <h1>Veuillez confirmer votre commande</h1>
                <hr className="my-3" />
                <ul>
                    {props.cart.items.map((e) => {
                        return (
                            <li>{`${e.quantity}x ${e.product.nom} à ${formater(e.product.price.value)}€`}</li>
                        )
                    })}
                </ul>
                <p>Total: {formater(props.cart.price)}€</p>
                {!props.checkout.shouldDisplayLoader ?
                    <div className="btn-group btn-lg btn-block">
                        <button onClick={() => {
                            props.confirm(props.cart, props._id, props.token)
                        }} className="btn btn-success">
                            Confirmer ma commande
                        </button>
                        <Link to='/cart' className="btn btn-warning">
                            Modifier ma commande
                        </Link>
                    </div>
                    :
                    <Loader/>
                }
                {props.checkout.shouldDisplayAlert &&
                <Alert
                    short="Yes!"
                    details="Vous allez être redirigé sur paypal"
                    type="info"
                />
                }
            </div>
        )
    }
}

export default _confirmation
