import React from 'react';
import styled from './NavBar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (

    <div className={styled.NavBar}>

        <li>
          <Link className={styled.Items} to="/">LUCAS.G</Link>
        </li>
        <li>
          <Link className={styled.Items} to="/">SOBRE MI</Link>
        </li>
        <li>
          <Link className={styled.Items} to="/">PORTFOLIO</Link>
        </li>
        <li>
          <Link className={styled.Items} to="/">EDUCACION</Link>
        </li>
        <li>
          <Link className={styled.Items} to="/">SKILLS</Link>
        </li>
        <li>
          <Link className={styled.Items} to="/">CONTACTO</Link>
        </li>
    </div>
   
  )
}