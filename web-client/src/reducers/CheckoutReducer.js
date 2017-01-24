import {RECEIVED_PAYEMENT_URI, START_LOADING, FINISH_LOADING, RECEIVED_PAYEMENT_DETAILS, SHOW_ALERT, HIDE_ALERT} from '../actions'

const initialState = {
    shouldDisplayLoader: false,
    shouldDisplayAlert: false,
    short: '',
    details: '',
    type: 'info',
    initialState: false,
    step: 1,
    transactionSuccess: false,
    cart: []
}

function checkout(state = initialState, action){
    switch(action.type){

        case SHOW_ALERT:
            return Object.assign({}, state, {
                shouldDisplayAlert: true,
                short: action.alertShort,
                details: action.alertDetails
            })

        case START_LOADING:
            return Object.assign({}, state, {
                shouldDisplayLoader: true
            })

        case FINISH_LOADING:
            return Object.assign({}, state, {
                shouldDisplayLoader: false
            })


        case RECEIVED_PAYEMENT_DETAILS:
            return Object.assign({}, state, {
                cart: action.cart,
                transactionSuccess: true
            })
            return state

        case RECEIVED_PAYEMENT_URI:
            console.log(action)
            return Object.assign({}, state, {
                payementUri: action.uri
            })

        default:
            return {}
    }
}

export default checkout
