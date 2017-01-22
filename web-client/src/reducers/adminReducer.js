/**
 * Created by antonio on 29/12/16.
 */
import {USER_LIST_SUCCESS, FETCH_CAT_SUCCESS} from '../actions'

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

        case FETCH_CAT_SUCCESS:
            console.log('REDUCER', action)
            return Object.assign({}, state, {
                cats: action.categories
            })

        default:
            return initialState
    }
}

export default admin
