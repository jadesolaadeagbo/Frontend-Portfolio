import React from 'react'
import "./About.css"
import MyPic from "../../assets/jade.JPG"

const About = () => {
  return (
    <main>
     <p className='introduction'>Hi, I'm Jadesola Adeagbo, a frontend developer with 3 years of software development experience</p> 
     <div className="image">
      <img src={MyPic} width="249px" height="249px" className='image' /></div>
     
    </main>

  )
}

export default About
