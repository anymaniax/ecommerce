import React from 'react'
import {Link} from 'react-router'
import FlipMove from 'react-flip-move'

import {formater} from '../models/priceFormater'

class Item extends React.Component {
	render() {
		const {props} = this
        return (
			<div className="card row" key={props.cartId}>
				<div className="col-md-2">
					<p>
						<img role="presentation" width="150px" src={props.picture} className="img-thumbnail"/>
					</p>
				</div>
				<div className="col-md-10">
					<p>
                        {props.nom}
					</p>
					<p>
						<small className="text-muted">Prix unitaire: {formater(props.price)}</small>
					</p>
					<p>
						<small className="text-muted">Quantité: {props.quantity}</small>
					</p>
					<div>
						<div className="btn-group" role="group" aria-label="Basic example">
							<button onClick={() => props.remove(props.cartId)} type="button"
									className="btn btn-secondary">
								<i className="fa fa-minus"></i>
							</button>
							<button onClick={() => props.add(props.product)} type="button"
									className="btn btn-secondary">
								<i className="fa fa-plus"></i>
							</button>
							<button onClick={() => props.remove(props.cartId, props.quantity)} type="button"
									className="btn btn-secondary">
								<i className="fa fa-trash"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
        )
    }
}

const _cart = (props) => {
	let price = formater(props.price)
	let productsMarkup = props.items.map(e =>
		<Item
			key={e.cartId}
			product={e.product}
			price={e.product.price.value}
			picture={e.product.thumbnail}
			quantity={e.quantity}
			cartId={e.cartId}
			nom={e.product.nom}
			remove={props.remove}
			add={props.add}
			trash={props.trash}/>)
	return (
		<div>
			<h2 className="text-xs-right display-4">Total: {price}€</h2>

			<FlipMove
				staggerDurationBy="30"
				duration={250}
				easing="linear">
                {productsMarkup}
			</FlipMove>
            {price != 0 &&
			<div>
				<button onClick={() => props.reset()} className="btn btn-warning btn-lg btn-block">Vider le
					Panier{' '}<i className="fa fa-cart-arrow-down" aria-hidden="true"></i></button>

				<Link to='/checkout' className="btn btn-primary btn-lg btn-block">Procéder au payement{' '}<i
					className="fa fa-credit-card" aria-hidden="true"></i></Link>
			</div>
            }
		</div>
	)
}

export default _cart
