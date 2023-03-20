import { useState } from "react";
import "./Download.css"
import CV from "../../assets/Frontend CV.pdf"
import {FiDownload} from "react-icons/fi"

const Download = () => {


  return (
    <div className="downloadContainer">

<button className="download">
<p>VIEW PORTFOLIO</p>
  <span><FiDownload size="30px"/></span>
</button>
<button className="download">
  <a href={CV} target="_blank">DOWNLOAD CV</a>
  <span><FiDownload size="30px"/></span>
  </button>
    </div>
  )
}

export default Download
