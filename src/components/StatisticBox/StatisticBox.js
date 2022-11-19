import React, {useState} from 'react'
import PropType from 'prop-types'
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

//Prop type checking
StatisticBox.propTypes ={
  rating : PropType.string,
  status: PropType.string,
}
