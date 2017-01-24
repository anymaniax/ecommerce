import React from 'react'
import Badge from './_badge'
import NameDisplay from './_nameDisplay'
import Address from './_address'
import {PasswordWidget, Payements} from '../../containers'

const _profile = ({user}) => {
    return (
        <div>
            <div className="row jumbotron">
                <div className="col-md-2">
                    <Badge firstname={user.firstname} lastname={user.lastname}/>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-9">
                    <NameDisplay username={user.username} firstname={user.firstname} lastname={user.lastname}/>
                    <Address address={user.address}/>
                </div>
            </div>
            <div className="row jumbotron">
                <div className="col-md-12">
                    <Payements/>
                </div>
            </div>
            <div className="row jumbotron">
                <div className=" col-md-12">
                    <PasswordWidget />
                </div>
            </div>
        </div>
    )
}

export default _profile
