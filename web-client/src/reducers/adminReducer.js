/**
 * Created by antonio on 29/12/16.
 */
import {USER_LIST_SUCCESS} from '../actions'

const initialState = {
    users: [],
    products: [],
    cats: []
}

function admin(state = initialState, action){
    switch(action.type){
        case USER_LIST_SUCCESS:
            return Object.assign({}, state, {
                users: action.users
            })

        default:
            return initialState
    }
}

export default admin
