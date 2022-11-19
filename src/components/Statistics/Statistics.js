import React, {useState} from 'react'
import StatisticBox from '../StatisticBox/StatisticBox'
import { ReactPropTypes } from 'react'
import "./Statistics.css"
import StatisticsChart from '../StatisticsChart/StatisticsChart'
import "../StatisticsChart/StatisticsChart.css"
import percent from "../../assets/percent.svg"

const Statistics = () => {
  return (
    <div className='rating-container'>
      <StatisticBox rating ='20' status='Total Projects'/>
      <div className="pinkBox">
        <img src={percent} alt="" />
        <p className='pink-percent'>20%</p>
        <p className='pink-status'>Completed</p>
      </div>

      {/* <StatisticsChart image={percent} percentage ='20%' status='Completed' className="comp"/> */}
      <StatisticsChart image={percent} percentage ='80%' status='Uncompleted'/>
      <StatisticBox rating ='1200' status='Members'/>

    </div>
  )
}

export default Statistics
