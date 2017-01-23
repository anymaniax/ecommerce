import React from 'react'

const _nameDisplay = ({username, firstname, lastname}) => {
    return (
        <div>
            <h3>
                {username}
                <small className="text-muted">{' ' + firstname + ' ' + lastname}</small>
            </h3>
        </div>
    )
}

export default _nameDisplay
