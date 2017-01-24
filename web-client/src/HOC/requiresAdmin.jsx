import React from 'react'
import {Link} from 'react-router'
const adminHOC = (WrappedComponent, state) => {
    if(state.auth.authenticated && state.auth.user.role === "admin"){
        return class requiresAdmin extends WrappedComponent {
            render(){
                return <WrappedComponent {...this.props}/>
            }
        }
    } else {
        return class requiresAdmin extends  WrappedComponent {
            render(){
                return (
                    <div>
                    <h1>
                        Accès non autorisé
                    </h1>
                    <p className="muted-text">
                        Seuls les utilisateurs autorisés peuvent accéder à cette section
                    </p>
                        <Link to="/">Retour à l'accueil</Link>
                    </div>
                )
            }
        }
    }
}

export default adminHOC
