import React from 'react'

import {Link} from 'react-router'

class _payements extends React.Component {
    componentWillMount(){
        console.log(this.props._id)
        this.props.fetchPayements(this.props._id, this.props.token)
    }
    render() {
        return (
            <div>
                <h1 className="display-4">Mes transactions</h1>
                <ul>
                {this.props.commandes && this.props.commandes.map(e => {

                    return (
                        <li><Link to={`/checkout/success/${e._id}`}>{e._id}</Link></li>
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default _payements
