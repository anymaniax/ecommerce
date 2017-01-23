import {RECEIVE_DETAILS, PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_FAILURE, HIDE_ALERT} from '../actions'

const initialState = {
    shouldDisplayAlert: false,
    alertShort: '',
    alertDetails: '',
    alertType: 'success'
}

function productUpdate(state = initialState, action){
    switch(action.type){
        case RECEIVE_DETAILS:
            return Object.assign({}, state, {
                current: action.details
            })

        case HIDE_ALERT:
            return Object.assign({}, state, {
                shouldDisplayAlert: false
            })

        case PRODUCT_UPDATE_SUCCESS:
            return Object.assign({}, state, {
                shouldDisplayAlert: true,
                alertShort: 'Super!',
                alertDetails: 'Produit modifié avec succès',
                alertType: 'success'
            })

        case PRODUCT_UPDATE_FAILURE:
            return Object.assign({}, state, {
                shouldDisplayAlert: true,
                alertShort: 'Oops!',
                alertDetails: 'Une erreur s\'est produite',
                alertType: 'danger'
            })
        default:
            return state
    }
}

export default productUpdate
