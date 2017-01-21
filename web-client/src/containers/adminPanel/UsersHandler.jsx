import {connect} from 'react-redux'

import {fetchUserList} from '../../actions'
import {_usersHandler} from '../../components'

const mapStateToProps = ({admin}) => {
    const {users} = admin
    return {
        users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => {
            dispatch(fetchUserList())
        }
    }
}

const UsersHandler  = connect(
    mapStateToProps,
    mapDispatchToProps
)(_usersHandler)

export default UsersHandler
