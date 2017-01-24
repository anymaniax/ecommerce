import React from 'react'
import Badge from './_badge'
import NameDisplay from './_nameDisplay'
import Address from './_address'
import {PasswordWidget} from '../../containers'



// TODO: utiliser ça autre part pour vérifier la validité do token
/**function timeToDate(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}**/


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
                <div className=" col-md-12">
                    <PasswordWidget />
                </div>
            </div>
        </div>
    )
}

export default _profile
