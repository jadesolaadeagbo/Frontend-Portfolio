import {React, useState} from 'react'
import "./App.css"
import Navbar from "./components/Navbar/Navbar.jsx"
import "./fonts/GTWalsheimPro/stylesheet.css";
import "./fonts/PPMonumentExtended/stylesheet.css";
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Technologies from "./components/Technologies/Technologies"
import Download from './components/DownloadCV/Download';


const App = ({darkMode, toggleMode}) => {
  return (
      <div className="app-container">
          <Download/>
          <About/>
          <Technologies/>
          <Projects/>
          
      </div>

  )
}

export default App
