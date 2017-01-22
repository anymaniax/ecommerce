import {connect} from 'react-redux'

import {fetchUserList} from '../../actions'
import {_adminPanel} from '../../components'

const mapStateToProps = ({auth}) => {
    return {
        auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => {
            dispatch(fetchUserList())
        }
    }
}

const AdminPanel = connect(
    mapStateToProps,
    mapDispatchToProps
)(_adminPanel)

export default AdminPanel
