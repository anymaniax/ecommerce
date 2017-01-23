import React from 'react'

const alert = ({type, short, details}) => {
    return (
        <div className={`alert alert-${type || "danger"}`} role="alert">
            <strong>{short}</strong> {details}
        </div>
    )
}

export default alert