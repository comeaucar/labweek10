import React from 'react'

export default function Output(props) {
    return (
        <div>
            <h3>Email: {props.email}</h3>
            <h3>Full Name: {props.fullname}</h3>
            <h3>Address: {props.address} {props.address2}</h3>
            <h3>City: {props.city}</h3>
            <h3>Province: {props.province}</h3>
            <h3>Postal Code: {props.postal}</h3>
        </div>
    )
}
