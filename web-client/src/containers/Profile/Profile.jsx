import {connect} from 'react-redux'

import _profile from '../../components/Profile/_profile'

const mapStateToProps = ({auth}) => {
    const {user} = auth
    return {
        user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(_profile)
