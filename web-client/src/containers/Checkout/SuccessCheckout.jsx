import {connect} from 'react-redux'

import {_successCheckout} from '../../components'

import {getTransactionDetails, resetCart} from '../../actions'

const mapStateToProps = ({auth, checkout}) => {
    const {token} = auth
    return {
        token,
        checkout
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetails: (transactionId, token) => {
            dispatch(getTransactionDetails(transactionId, token))
            dispatch(resetCart())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(_successCheckout)
