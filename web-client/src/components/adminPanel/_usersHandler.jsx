import React from 'react'
import {Link} from 'react-router'

const _userItem = ({user}) =>
    <li>
        <Link to={`/admin/users/${user._id}`}>{user.username}</Link>
    </li>


class _usersHandler extends React.Component {
    componentWillMount(){
        this.props.fetchUsers()
    }
    render() {
        const userList = this.props.users.map(e => <_userItem user={e}/>)
        return (
            <div>
                <h2>Liste des users</h2>
                <ul>
                    {userList}
                </ul>
            </div>
        )
    }
}

export default _usersHandler
