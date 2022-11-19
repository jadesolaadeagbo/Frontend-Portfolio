import React from 'react'
import PropTypes from 'prop-types'
import "./Card.css"

const Card = (props) => {
  return (
    <div className="total-container">
        <div className='card-container'>
            <p id='title'>Project Name: {props.title}</p>
            <p>Project Brief:</p>
            <p>{props.body}</p>

            <button>Team Chisel</button>

            <p>Team Lead: {props.lead}</p>
        </div>
    </div>
    
  )
}

export default Card
