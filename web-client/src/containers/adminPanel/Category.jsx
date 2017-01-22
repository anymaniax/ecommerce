/**
 * Created by antonio on 13/01/17.
 */
import {connect} from 'react-redux'
import React from 'react'

const _category = props => {
    const currentUser = props.users.find(e => e._id === props.params.id)
    console.log('CURRENT USER', currentUser)
    return (
        <div>
            {currentUser &&
            <div>
                <h2>{`${currentUser.firstname} ${currentUser.lastname} (${currentUser.username})`}</h2>
                <p>
                    <button className="btn btn-danger" onClick={() => props.deleteUser(props.params.id)}>Supprimer</button>
                    {currentUser.role !== "admin" ?
                        <button className="btn btn-info" onClick={() => props.makeAdmin(props.params.id)}>Monter au rang d'administrateur</button>
                        :
                        <button className="btn btn-warning" onClick={() => props.removeAdmin(props.params.id)}>Redescendre au rang d'utilisateur</button>
                    }
                </p>
            </div>
            }
        </div>
    )
}

const mapStateToProps = ({admin}) => {
    const {} = admin
    return {
        users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: id => {
            dispatch({type: 'delete user', id})
        },
        makeAdmin: id => {
            dispatch({type: 'make admin', id})
        },
        removeAdmin: id => {
            dispatch({type: 'remove admin', id})
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(_category)
