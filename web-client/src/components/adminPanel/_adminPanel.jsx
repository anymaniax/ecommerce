import React, {Component} from 'react'
import {Link} from 'react-router'

class _adminPanel extends Component {
    render(){
        return (
            <div>
                <h1>Admin panel</h1>
                <ul>
                    <li><Link to="/admin/users">Gestion des utilisateurs</Link></li>
                    <li><Link to="/admin/categories">Gestion des catégories</Link></li>
                    <li><Link to="/admin/products">Gestion des produits</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default _adminPanel
