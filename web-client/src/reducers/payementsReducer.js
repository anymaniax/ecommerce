import{PAYEMENTS_RECEIVED} from '../actions'

function payement(state = {}, action){
    switch(action.type){
        case PAYEMENTS_RECEIVED:
            console.log('actions', action)
            return Object.assign({}, state, {
                payements: action.payements
            })

        default:
            return state
    }
}

export default payement
