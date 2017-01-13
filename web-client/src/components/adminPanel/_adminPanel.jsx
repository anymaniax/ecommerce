import React, {Component} from 'react'
import {Link} from 'react-router'

class _adminPanel extends Component {
    render(){
        console.log(this.props)
        return (
            <div>
                <h1>Admin panel</h1>
                <ul>
                    <li><Link to="/admin/users">Gestion des utilisateurs</Link></li>
                    <li><Link to="/admin/products">Gestion des produits</Link></li>
                    <li><Link to="/admin/cats">Gestion des catégories</Link></li>
                    <button onClick={() => this.props.fetchUsers()}>Fetch user list</button>

                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default _adminPanel
