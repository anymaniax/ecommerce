import React from 'react'

const _input = ({type, label, placeholder, value, onChange}) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input
                onChange={(event) => {
                    onChange(label, event.target.value)
                }}
                value={value}
                type={type}
                className="form-control"
                placeholder={placeholder} />
        </div>
    )
}

export default _input
