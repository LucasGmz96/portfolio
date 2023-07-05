import React from 'react'
import styled from './About.module.css'
import { Link } from 'react-router-dom'


function About() {
  return (
    <div className={styled.container}>
      <h4 className={styled.h4}>SOBRE MI</h4>
      <p className={styled.description}>
        Desde chico siempre me intereso el mundo de la informática y la programacion. Hasta que al fin decidí estudiar lo que siempre soñé!
        Me gustan los desafíos por que me presentan nuevas formas para crecer tanto en lo profesional como en lo personal
      </p>
      <p className={styled.about}>
        ACTUALMENTE ESTUDIO Y BUSCO AMPLIAR MI CAMPO LABORAL EN EL MUNDO DEL DESARROLLO WEB.
      </p>
      <p className={styled.link}>
        Mira mi experiencia detallada y conéctate conmigo en<a href="https://www.linkedin.com/in/lucas-gomez-5773a0265/" className={styled.href}> LinkedIn.</a> 
      </p>
      <p className={styled.correo}>
        Tambien puedes contactarme por correo electrónico con un click <a href="mailto:lucas.gher96@gmail.com" className={styled.href}>lucas.gher96@gmail.com</a>
      </p>

    </div>
    
  )
}

export default About