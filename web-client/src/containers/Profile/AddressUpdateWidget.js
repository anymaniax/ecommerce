import {connect} from 'react-redux'
import {_addressWidget} from '../../components'
import {changeAddress, showAlert, hideAlert} from '../../actions'


const mapStateToProps = ({addressUpdate, auth}) => {
    const {user, token} = auth
    return {
        user,
        token,
        addressUpdate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeAddress: (id, street, number, town, postalCode, country, token) => {
            dispatch(changeAddress(id, street, number, town, postalCode, country, token))
        }, showAlert: (short, details) => {
            dispatch(showAlert(short, details))
        }, hideAlert: () => {
            dispatch(hideAlert())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(_addressWidget)
