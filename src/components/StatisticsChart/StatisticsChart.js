import React, {useState} from 'react'
import PropTypes from 'prop-types'
import "./StatisticsChart.css"


const StatisticsChart = (props) => {
  return (
    <div>
      <div className="box">
        <img src={props.image} alt="" />
        <p className='percentage'>{props.percentage}</p>
        <p className='percentage-status'>{props.status}</p>
      </div>
    </div>
  )
}

export default StatisticsChart
