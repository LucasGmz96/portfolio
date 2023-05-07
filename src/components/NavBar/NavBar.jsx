import React from 'react';
import styled from './NavBar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className={styled.NavBar}>

        <li>
          <Link to="/">LUCAS G</Link>
        </li>
        <li>
          <Link to="/">SOBRE MI</Link>
        </li>
        <li>
          <Link to="/">PORTFOLIO</Link>
        </li>
        <li>
          <Link to="/">EDUCACION</Link>
        </li>
        <li>
          <Link to="/">SKILLS</Link>
        </li>
        <li>
          <Link to="/">CONTACTO</Link>
        </li>

    </div>
  );
}