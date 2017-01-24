import React from 'react'

const _checkout = ({children}) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <h1>
                        Checkout
                    </h1>
                    <hr className="my-3" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    {children}
                </div>
                <div className="col-md-1"></div>
            </div>
            <div className="row">
                <hr className="my-3" />
            </div>
        </div>
    )
}

export default _checkout
