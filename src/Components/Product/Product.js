import React from 'react'

export default function Product (props) {

    //no state

    //no methods
    console.log(props)
    return(
        <div>
            <p><img src={props.imageurl}/></p>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
    )
}