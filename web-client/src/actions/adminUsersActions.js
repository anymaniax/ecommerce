/**
 * Created by antonio on 28/12/16.
 */
import fetch from 'isomorphic-fetch'

import conf from '../config/conf'

export const USER_LIST_SUCCESS = 'user list success'
function userListSuccess(users){
    console.log(users)
    return {
        type: USER_LIST_SUCCESS,
        users
    }
}

export function fetchUserList(){
    return function(dispatch){
        return fetch(`${conf.url}users/`)
            .then(response => response.json())
            .then(users => dispatch(userListSuccess(users)))
    }
}
