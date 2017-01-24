import {connect} from 'react-redux'

import {confirmAndCreatePaypalCart, showAlert} from '../../actions'

import {_confirmation} from '../../components'

const mapStateToProps = ({cart, auth, checkout}) => {
    const {_id} = auth.user
    const {token} = auth
    return {
        _id,
        cart,
        token,
        checkout
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        confirm: (cart, uid, token) => {
            dispatch(showAlert())
            dispatch(confirmAndCreatePaypalCart(cart, uid, token))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(_confirmation)
