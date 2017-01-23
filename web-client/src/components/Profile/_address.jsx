import React from 'react'

const _address = ({address}) => {
    console.log(address)
    return (
        <div style={{
            padding: "10px"
        }}>
            <h6 className="display-4">Adresse:</h6>
            <p className="lead">
                {`${address.number} ${address.street}, ${address.postalCode} ${address.town}, ${address.country}`}
            </p>
        </div>
    )
}

export default _address
