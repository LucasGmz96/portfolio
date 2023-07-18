import React from 'react'
import styled from './Lucas.module.css'
import {Link} from "react-router-dom"




function Lucas() {




  return (
    <div className={styled.Container}>

      <div className={styled.Text}>
        <h1 className={styled.name}>LUCAS GOMEZ</h1>
        <span>Bienvenido a Mi Portafolio Como Desarrollador Web </span>
        <p>"Siempre sigo aprendiendo, sumergiéndome en líneas de código, resolviendo desafíos y construyendo."</p>
        <Link to="https://drive.google.com/file/d/10QtH5yh8t8RaOgoqpw0E731McpM5ZG3y/view?usp=sharing"className={styled.Link} >Mira mi CV</Link>


      </div>
    </div>
  )
}

export default Lucas