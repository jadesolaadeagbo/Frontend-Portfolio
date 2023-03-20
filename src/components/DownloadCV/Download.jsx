import { useState } from "react";
import "./Download.css"
import CV from "../../assets/Frontend CV.pdf"
import {FiDownload} from "react-icons/fi"
import {BsPersonWorkspace} from "react-icons/bs"
import Github from "../../assets/github.svg"
import Twitter from "../../assets/twitter.svg"
import Linkedin from "../../assets/linkedin.svg" 

const Download = () => {
  return (
    <div className="downloadContainer">

<button className="download">
<a href="jadesolaadeagbo.vercel.app">VIEW PORTFOLIO</a>
  <span><BsPersonWorkspace size="30px"/></span>
</button>
<button className="download">
  <a href={CV} target="_blank">DOWNLOAD CV</a>
  <span><FiDownload size="30px"/></span>
  </button>
  <div className='iconbuttons'>
        <a href="https://github.com/jadesolaadeagbo" className="tooltip"><img src={Github}/>
        <p className="tooltiptext">Check out my github account</p>
        </a>
        <a href="https://twitter.com/jadesolaadeagbo" className="tooltip"><img src={Twitter}/>
        <p className="tooltiptext">Check out my twitter account</p>
        </a>
        <a href="https://www.linkedin.com/in/jadesolaadeagbo" className="tooltip"><img src={Linkedin}/>
        <p className="tooltiptext">Check out my linkedin account</p>
        </a>
      </div>
    </div>
  )
}

export default Download
