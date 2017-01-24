import {ADDRESS_UPDATE_SUCCESSS, ADDRESS_UPDATE_FAILURE,
        HIDE_ALERT, SHOW_ALERT,
        START_LOADING, FINISH_LOADING} from '../actions'

const initialState = {
    shouldDisplayAlert: false,
    shouldDisplayLoader: false,
    alertShort: '',
    alertDetails: '',
    alertType: 'warning'
}

function addressUpdate(state = initialState, action){
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

        case ADDRESS_UPDATE_FAILURE:
            return Object.assign({}, state, {
                shouldDisplayAlert: true,
                alertShort: 'Oops !',
                alertDetails: 'Un soucis est survenu',
                alertType: 'danger'
            })

        case ADDRESS_UPDATE_SUCCESSS:
            return Object.assign({}, state, {
                shouldDisplayAlert: true,
                alertShort: 'Super !',
                alertDetails: 'L address a été changé avec succès',
                alertType: 'success'
            })

        default:
            return state
    }
}

export default addressUpdate
