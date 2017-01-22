import React from 'react'

const Empty = ({message, action}) => {
    return (
        <div className="jumbotron">
            <h1 className="display-3">:(</h1>
            <p className="lead">{message}</p>
            <hr className="my-4" />
                <p className="lead">
                    <button className="btn btn-primary btn-lg" role="button" onClick={() => action()}>Tous les produits</button>
                </p>
        </div>
    )
}

export default Empty
