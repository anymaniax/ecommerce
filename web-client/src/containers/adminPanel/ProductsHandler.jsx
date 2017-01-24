import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {fetchAll, deleteProduct} from '../../actions'

import {formater} from '../../models/priceFormater'

const ProductItem = ({data, deleteP}) => {
    console.log(data)
    return (
        <div className="card col-md-3" style={{margin: "5px"}}>
            <p className="lead">{data.nom}</p>
            <p className="text-muted">Prix: {formater(data.price.value)}€</p>
            <div className="btn-group">
                <Link to={`/admin/products/update/${data._id}`}className="btn btn-secondary"><i className="fa fa-pencil" aria-hidden="true"></i></Link>
                <button
                    onClick={() => deleteP(data._id)}
                    className="btn btn-secondary">
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
                <Link to={`/products/${data._id}`} className="btn btn-secondary"><i className="fa fa-link" aria-hidden="true"></i></Link>
            </div>
        </div>
    )
}

class ProductHandler extends Component {
    componentWillMount(){
        this.props.fetchProducts()
    }
    render() {
        const {products, deleteP, token} = this.props
        return (
            <div className="row">
                <div className="col-md-12">
                    <h2>Liste des produits</h2>
                </div>
                <div className="card col-md-3" style={{margin: "5px"}}>
                    <p className="lead">Ajouter un nouveau produit</p>
                    <Link
                        to="/admin/products/create"
                        className="btn btn-secondary">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </Link>
                </div>
                {products.map(e =>
                    <ProductItem
                        deleteP={(id) => {
                            deleteP(id, token)
                        }}
                        data={e}/>)}
            </div>
        )
    }
}

const mapStateToProps = ({api, auth}) => {
    const {products} = api
    const {token} = auth
    return {
        products,
        token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => {
            dispatch(fetchAll())
        }, deleteP: (id, token) => {
            dispatch(deleteProduct(id, token))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductHandler)
