import React from 'react'
import "./Technologies.css"
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import bootstrap from "../../assets/bootstrap.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github icon.svg";
import vscode from "../../assets/vscode.svg";

const Technologies = () => {
  return (
    <section>
      <h1 className='topic'>My Tech Stack</h1>
      <p className='paragraph'>Technologies I've been working with recently</p>
      <div className='stack'>
        <div className="line1">
        <img src={html} className="tech" width="120px" height="120px"/>
        <img src={css} className="tech" width="120px" height="120px"/>
        <img src={js} className="tech" width="120px" height="120px"/>
        <img src={react} className="tech"width="120px" height="120px"/>
        </div>
        
        <div className="line2">
          <img src={bootstrap} className="tech" width="120px" height="120px"/>
        <img src={git} className="tech"  width="120px" height="120px"/>
        <img src={github} className="tech" width="120px" height="120px"/>
        <img src={vscode} className="tech" width="120px" height="120px"/>
        </div>
        
      </div>
    </section>
  )
}

export default Technologies
