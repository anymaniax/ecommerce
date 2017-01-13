/**
 * Created by antonio on 13/01/17.
 */
import React from 'react'
import {browserHistory} from 'react-router'
const adminHOC = (WrappedComponent, state) => {
    console.log(state.auth.user)
    if(state.auth.authenticated && state.auth.user.role === "admin"){
        return class adminHOC extends WrappedComponent {
            render(){
                return <WrappedComponent {...this.props}/>
            }
        }
    } else {
        browserHistory.push('/login')
    }
}

export default adminHOC
