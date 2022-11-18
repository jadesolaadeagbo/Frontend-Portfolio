import React from 'react'
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Statistics from './components/Statistics/Statistics'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="menu">
        <ul className='menu-options'>
          <li><a href="#">All</a></li>
          <li><a href="#">Teams</a></li>
          <li><a href="#" style={{color: 'black'}}>Projects</a></li>
        </ul>
      </div>

      <div className="navigation-direction">
        <ul className="direction">
          <li> <a href="#">Home</a></li>
          <li><i class="fa fa-angle-right fa-2x"></i></li>
          <li> <a href="#">Team</a></li>
          <i class="fa fa-angle-right fa-2x"></i>
          <li> <a href="#" style={{color: 'black'}}>Project</a></li>

        </ul> 

        <form className='sort'>
          <label for="filter">Sort By</label>
          <select name="filter" id="filter">
          <option value="teamLaed">Team Lead</option>
          <option value="mentor">Mentor</option>
          </select>
        </form>

        </div>
      
      </div>

  )
}

export default App
