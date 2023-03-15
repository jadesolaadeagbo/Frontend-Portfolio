import React from 'react'
import "./Projects.css"
import first from "../../assets/1.png"
import second from "../../assets/2.png"
import third from "../../assets/3.png"
import fourth from "../../assets/4.png"
import fifth from "../../assets/5.png"
import sixth from "../../assets/6.png"
import link from "../../assets/link.svg"
import github from "../../assets/github.svg"

const data = [
  {
    image: first,
    title: "My Portfolio",
    details:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, veniam! Explicabo quo sint ab repellat ducimus sunt error accusantium, praesentium porro natus, quis aut corrupti delectus, aliquid molestiae harum eius?",
    stack:"Tech stack: HTML, React, CSS",
    livePreview: "https://frontend-port.vercel.app/",
    code: "https://github.com/jadesolaadeagbo/Frontend-Portfolio.git"

  },
  {
    image: second,
    title: "Frontend Bootcamp",
    details:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, veniam! Explicabo quo sint ab repellat ducimus sunt error accusantium, praesentium porro natus, quis aut corrupti delectus, aliquid molestiae harum eius?",
    stack:"Tech stack: HTML, React, CSS",
    livePreview: "https://gumdrop-bay.vercel.app/",
    code: "https://github.com/jadesolaadeagbo/Bootstrap-project-repo"

  },  {
    image: third,
    title: "Afriverse Project",
    details:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, veniam! Explicabo quo sint ab repellat ducimus sunt error accusantium, praesentium porro natus, quis aut corrupti delectus, aliquid molestiae harum eius?",
    stack:"Tech stack: HTML, React, CSS",
    livePreview:"https://afriverse-project.vercel.app/",
    code:"https://github.com/jadesolaadeagbo/Afriverse-project"

  },  {
    image: fourth,
    title: "Portfolio Project",
    details:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, veniam! Explicabo quo sint ab repellat ducimus sunt error accusantium, praesentium porro natus, quis aut corrupti delectus, aliquid molestiae harum eius?",
    stack:"Tech stack: HTML, React, CSS",
    livePreview:"https://portfolio-rubies21.vercel.app/",
    code:"https://github.com/jadesolaadeagbo/port/"

  },  {
    image: fifth,
    title: "Loruki Website",
    details:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, veniam! Explicabo quo sint ab repellat ducimus sunt error accusantium, praesentium porro natus, quis aut corrupti delectus, aliquid molestiae harum eius?",
    stack:"Tech stack: HTML, React, CSS",
    livePreview:"https://loruki-murex.vercel.app/",
    code:"https://github.com/jadesolaadeagbo/Loruki--"

  },  {
    image: sixth,
    title: "Concertz",
    details:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, veniam! Explicabo quo sint ab repellat ducimus sunt error accusantium, praesentium porro natus, quis aut corrupti delectus, aliquid molestiae harum eius?",
    stack:"Tech stack: HTML, React, CSS",
    livePreview:"https://warm-gumdrop-f92185.netlify.app/",
    code:"https://github.com/jadesolaadeagbo/Front-end-project/"
    

  },
]
const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className='heading'>Projects</h1>
      <p className='para'>Things I've built so far</p>

      <div className="cards">
        {
          data.map(project =>(
            <div className="card">
          <img src={project.image} alt="" width="100%" className='theImage'/>

          <div className="information">
          <h1 className="title">{project.title}</h1>
          <p className='details'>{project.details} <br />
          {project.stack}
          </p>
          
            <div className="view">
              <div className='left'><a href={project.livePreview}><img src={link}/><span>Live Preview</span></a></div>
              <div className="right"><a href={project.code}><img src={github}/> <span>View Code</span></a>  </div>
            </div>          
          </div>
        </div>
          ))}
        
      </div>
        
      
    </div>
  )
}

export default Projects
