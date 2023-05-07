import React from 'react';
import NavBar from '../NavBar/NavBar';
import styled from './Home.module.css';

export default function Home() {
  return (
    <div className={styled.Container}>
      <NavBar className={styled.NavBar} />
      <h1>Home</h1>

    </div>
  );
}