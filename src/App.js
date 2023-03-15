import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import Navbar from "./components/Navbar/Navbar.jsx"
import "./fonts/GTWalsheimPro/stylesheet.css";
import "./fonts/PPMonumentExtended/stylesheet.css";
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Technologies from "./components/Technologies/Technologies"


const App = () => {
  return (
      <div className='app-container'>
            <Router>
          <Navbar/>
          <About/>
          <Technologies/>
          <Projects/>
          <Routes>

            
            
          </Routes>
        </Router>  
      </div>

  )
}

export default App
