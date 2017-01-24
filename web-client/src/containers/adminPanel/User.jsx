import {connect} from 'react-redux'
import React from 'react'

import {deleteUser, makeAdmin, removeAdmin} from '../../actions'

const _user = props => {
    const currentUser = props.users.find(e => e._id === props.params.id)
    return (
        <div>
            {currentUser &&
                <div>
                    <h2>{`${currentUser.firstname} ${currentUser.lastname} (${currentUser.username})`}</h2>
                    <p>
                        <button className="btn btn-danger" onClick={() => props.deleteUser(props.params.id, props.token)}>Supprimer</button>
                        {currentUser.role !== "admin" ?
                        <button className="btn btn-info" onClick={() => props.makeAdmin(props.params.id, props.token)}>Monter au rang d'administrateur</button>
                        :
                        <button className="btn btn-warning" onClick={() => props.removeAdmin(props.params.id, props.token)}>Redescendre au rang d'utilisateur</button>
                        }
                    </p>
                </div>
            }
        </div>
    )
}

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
        deleteUser: (id, token) => {
            dispatch(deleteUser(id, token))
        },
        makeAdmin: (id, token) => {
            dispatch(makeAdmin(id, token))
        },
        removeAdmin: (id, token) => {
            dispatch(removeAdmin(id, token))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(_user)
