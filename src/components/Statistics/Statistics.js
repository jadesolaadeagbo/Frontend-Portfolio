import React, {useState} from 'react'
import StatisticBox from '../StatisticBox/StatisticBox'
import { ReactPropTypes } from 'react'
import "./Statistics.css"
import StatisticsChart from '../StatisticsChart/StatisticsChart'
import percent from "../../assets/percent.svg"

const Statistics = () => {
  return (
    <div className='rating-container'>
      <StatisticBox rating ='20' status='Total Projects'/>
      <StatisticsChart image={percent} percentage ='20%' status='Completed'/>
      <StatisticsChart image={percent} percentage ='80%' status='Uncompleted'/>
      <StatisticBox rating ='1200' status='Members'/>

    </div>
  )
}

export default Statistics
