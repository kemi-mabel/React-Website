// first name and last name
//state of origin
//stack
//description
import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
       <p><b>Name: </b> {props.name}</p> 
       <p><b>State: </b>{props.state}</p> 
       <p><b>Stack: </b>{props.stack}</p> 
       <p><b>Description: </b>{props.Description}</p> 
               
    </div>
  )
}

export default Card


