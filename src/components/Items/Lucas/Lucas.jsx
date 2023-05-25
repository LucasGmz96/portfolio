import React from 'react'
import styled from './Lucas.module.css'
import img from '../../../img/FOTOPERFIL.png'

function Lucas() {
  return (
    <div className={styled.Container}>
      <img src={img} className={styled.Img} />
      <div className={styled.Text}>
        <h1>LUCAS GOMEZ</h1>
        <span>BIENVENIDX A MI PORTFOLIO COMO DESARROLLADOR WEB </span>
        <p>"Siempre sigo aprendiendo, sumergiéndome en líneas de código, resolviendo desafíos y construyendo."</p>
      </div>
    </div>
  )
}

export default Lucas