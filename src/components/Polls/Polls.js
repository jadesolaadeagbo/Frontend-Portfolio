import React from 'react'
import tubeUi from "../../assets/tubeUi.svg"
import tubePm from "../../assets/tubePm.svg"
import tubeDevs from "../../assets/tubeDevs.svg"
import tubeMkt from "../../assets/tubeMkt.svg"
import "./Polls.css"

const Polls = () => {
  return (
    <div className='poll-container'>
        <p id='track'>Track</p>
   
            <div className="element"><img src={tubeUi} alt="" />
            <p>UI/UX</p></div>
            <div className="element"><img src={tubePm} alt="" /><p>PM</p> </div>
            <div className="element"><img src={tubeDevs} alt="" /><p>DEVS</p></div>
            <div className="element"><img src={tubeMkt} alt="" /><p>MKT</p></div>
    
    </div>
  )
}

export default Polls
