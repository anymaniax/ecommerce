import {PASSWORD_UPDATE_FAILURE, PASSWORD_UPDATE_SUCCESSS,
        HIDE_ALERT, SHOW_ALERT,
        START_LOADING, FINISH_LOADING} from '../actions'

const initialState = {
    shouldDisplayAlert: false,
    shouldDisplayLoader: false,
    alertShort: '',
    alertDetails: '',
    alertType: 'warning'
}

function passwordUpdate(state = initialState, action){
    switch(action.type){
        case START_LOADING:
            return Object.assign({}, state, {
                shouldDisplayLoader: true
            })


        case FINISH_LOADING:
            return Object.assign({}, state, {
                shouldDisplayLoader: false
            })

        case SHOW_ALERT:
            const {alertShort, alertDetails, alertType} = action
            return Object.assign({}, state, {
                alertShort,
                alertDetails,
                alertType,
                shouldDisplayAlert: true
            })

        case HIDE_ALERT:
            return Object.assign({}, state, {
                shouldDispalyAlert: false
            })

        case PASSWORD_UPDATE_FAILURE:
            return Object.assign({}, state, {
                shouldDisplayAlert: true,
                alertShort: 'Oops !',
                alertDetails: 'L\'ancien password est incorrect',
                alertType: 'danger'
            })

        case PASSWORD_UPDATE_SUCCESSS:
            return Object.assign({}, state, {
                shouldDisplayAlert: true,
                alertShort: 'Super !',
                alertDetails: 'Le password a été changé avec succès',
                alertType: 'success'
            })

        default:
            return state
    }
}

export default passwordUpdate
