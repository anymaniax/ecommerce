import {connect} from 'react-redux'

import {updateProduct, fetchCats, fetchById, hideAlert} from '../../actions'

import {_productCreationForm} from '../../components'

const mapStateToProps = ({auth, api, productUpdate}) => {
    const {token} = auth
    const {cats} = api
    const {current, shouldDisplayAlert, alertShort, alertDetails, alertType} = productUpdate
    return {
        token,
        cats,
        current,
        shouldDisplayAlert,
        alertShort,
        alertDetails,
        alertType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (product, token) => {
            dispatch(updateProduct(product, token))
        }, fetchCats: () => {
            dispatch(fetchCats())
        }, fetchCurrent: (id) => {
            dispatch(fetchById(id))
        }, hideAlert: () => {
            dispatch(hideAlert())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(_productCreationForm)
