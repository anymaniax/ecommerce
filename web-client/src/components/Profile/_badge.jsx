import React from 'react'

const style = {
    textTransform: "uppercase",
    fontFamily: "Arial, Verdana",
    background: "red",
    fontSize: "5em",
    width: "160px",
    height: "160px",
    textAlign: "center",
    padding: "10px",
    paddingTop: "15px",
    color: "white",
    borderRadius: "50%"
}

const _badge = ({firstname, lastname}) => {
    return (
        <div style={style}>
            <span>{`${firstname.substring(0, 1)} ${lastname.substring(0, 1)}`}</span>
        </div>
    )
}

export default _badge
