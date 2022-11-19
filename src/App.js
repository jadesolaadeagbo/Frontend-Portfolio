import React from 'react'
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Statistics from './components/Statistics/Statistics'
import Polls from './components/Polls/Polls'
import Card from './components/Card/Card'

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

        <div className="user-ratings">
          <Statistics/>
          <Polls></Polls>
        </div>
        
        <div className="heading">
        <ul className='menu-options'>
          <li><a href="#" style={{color: 'black'}}>Projects</a></li>
        </ul>
      </div>

      <Card title=" Coverletter Generator"
            body="Cover Letter Generator. It takes your CV, a few bullet points, name of the company, and it generates cover letter for you using AI. A mobile app and a website. Uses GPT-3"
            lead = "Hoo-uhI"
      
      
      />
      
      </div>

  )
}

export default App
