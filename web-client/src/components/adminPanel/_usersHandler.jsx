import React from 'react'
import {Link} from 'react-router'

const UserItem = ({user}) =>
    <li key={user._id}>
        <Link to={`/admin/users/${user._id}`}>{user.username}</Link>
    </li>


class _usersHandler extends React.Component {
    componentWillMount(){
        this.props.fetchUsers(this.props.token)
    }
    render() {
        const userList = this.props.users.map(e => <UserItem key={e._id} user={e}/>)
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <h2>Liste des users</h2>
                        <ul>
                            {userList}
                        </ul>
                    </div>
                    <div className="col-md-8">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default _usersHandler
