import {connect} from 'react-redux'

import {_payements} from '../../components'

import {fetchPayements} from '../../actions'

const mapStateToProps = ({auth, payements}) => {
    const {_id} = auth.user
    const {token} = auth
    const commandes = payements.payements || []
    return {
        _id,
        token,
        commandes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPayements: (id, token) => {
            dispatch(fetchPayements(id, token))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(_payements)
