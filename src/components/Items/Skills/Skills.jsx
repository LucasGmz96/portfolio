import React from 'react'
import styled from './Skills.module.css'

function Skills() {
  return (
    <div className={styled.container} id='skills'>
      <h4>Skills</h4>
      <ul>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>React</li>
        <li>Redux</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>Git</li>
        <li>Github</li>
      </ul>
    </div>
  )
}

export default Skills