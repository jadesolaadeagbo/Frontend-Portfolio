import React, {useState} from 'react'
import PropType from 'prop-types'
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

//Prop type checking
StatisticsChart.propTypes ={
  image : PropType.any.isRequired,
  percentage : PropType.string,
  status : PropType.string,

}