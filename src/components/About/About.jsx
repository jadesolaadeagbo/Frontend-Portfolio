import React from 'react'
import "./About.css";
import Picture from "../../assets/codeing-removebg-preview.png"


const About = () => {
  return (
    <main>
      
     <p className='introduction'>Hi, I am Jadesola Adeagbo, a frontend developer with 3 years of software development experience</p> 
     <div>
        <img src={Picture}  className='image' />
        </div>
     
    </main>

  )
}

export default About
