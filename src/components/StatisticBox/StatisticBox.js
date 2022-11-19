import React, {useState} from 'react'
import PropTypes from 'prop-types'
import "./StatisticBox.css"

const StatisticBox = (props) => {
  return (
    <div>
      <div className="box">
        <p className='rating'>{props.rating}</p>
        <p className='status'>{props.status}</p>
      </div>
    </div>
  )
}

export default StatisticBox
