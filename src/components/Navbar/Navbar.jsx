import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import Github from "../../assets/github.svg"
import Twitter from "../../assets/twitter.svg"
import Linkedin from "../../assets/linkedin.svg"

const Navbar = () => {
  let activeStyle= {
    fontWeight: '700'
  }
  return (
    <div className="navbar-container">
      <p className='logo'>Jadesola</p>
      <div className='subnav'>
      <ul className='links'>
        <li>
          <NavLink to="/home" style={({isActive})=> isActive ? activeStyle: undefined} className='link'>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" style={({isActive})=> isActive ? activeStyle: undefined} className='link'>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/stack" style={({isActive})=> isActive ? activeStyle: undefined} className='link'>
            Tech Stack
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects" style={({isActive})=> isActive ? activeStyle: undefined} className='link'>
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" style={({isActive})=> isActive ? activeStyle: undefined} className='link'>
            Contact
          </NavLink>
        </li>
      </ul>
      <div className='icons'>
        <a href="https://github.com/jadesolaadeagbo"><img src={Github}/></a>
        <a href="https://twitter.com/jadesolaadeagbo"><img src={Twitter}/></a>
        <a href="https://www.linkedin.com/in/jadesolaadeagbo"><img src={Linkedin}/></a>
      </div>
      </div>
      
      
      
      
    </div>
  )
}

export default Navbar
