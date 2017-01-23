import {connect} from 'react-redux'
import {_passwordWidget} from '../../components'
import {changePassword, showAlert, hideAlert} from '../../actions'


const mapStateToProps = ({passwordUpdate, auth}) => {
    const {user, token} = auth
    return {
        user,
        token,
        passwordUpdate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePassword: (id, password, newPassword, token) => {
            dispatch(changePassword(id, password, newPassword, token))
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
)(_passwordWidget)
