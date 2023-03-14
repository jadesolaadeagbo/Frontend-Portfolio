import React from 'react'
import "./Projects.css"
import first from "../../assets/1.png"
import link from "../../assets/link.svg"
import github from "../../assets/github.svg"
const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <p>Things I've built so far</p>

      <div className="card">
        <img src={first} alt=""/>
        <h1>Project Title goes here</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, veniam! Explicabo quo sint ab repellat ducimus sunt error accusantium, praesentium porro natus, quis aut corrupti delectus, aliquid molestiae harum eius?</p>
        <div>
         <a href=""></a><img src={link}/>
         <img src={github}/> 
        </div>
      </div>
      
    </div>
  )
}

export default Projects
