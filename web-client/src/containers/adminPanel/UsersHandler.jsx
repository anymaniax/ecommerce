import {connect} from 'react-redux'

import {fetchUserList} from '../../actions'
import {_usersHandler} from '../../components'

const mapStateToProps = ({admin, auth}) => {
    const {users} = admin
    const {token} = auth

    return {
        users,
        token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: (token) => {
            dispatch(fetchUserList(token))
        }
    }
}

const UsersHandler  = connect(
    mapStateToProps,
    mapDispatchToProps
)(_usersHandler)

export default UsersHandler
