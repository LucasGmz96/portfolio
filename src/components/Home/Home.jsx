import React from 'react';
import NavBar from '../NavBar/NavBar';
import styled from './Home.module.css';
import Lucas from '../Items/Lucas/Lucas';
import About from '../Items/About/About';
import Portfolio from '../Items/Portfolio/Portfolio';
import Educacion from '../Items/Educacion/Educacion';
import Skills from '../Items/Skills/Skills';
import Contacto from '../Items/Contacto/Contacto';

export default function Home() {
  return (
    <div className={styled.Container}>
      <NavBar/>
      
      <h1 className={styled.Home}>
        <Lucas/>
        <About/>
        <Portfolio/>
        <Educacion/>
        <Skills/>
        <Contacto/>
      </h1>

    </div>
  );
}