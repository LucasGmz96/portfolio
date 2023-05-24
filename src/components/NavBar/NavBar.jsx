import React, { useState, useEffect } from 'react';
import styled from './NavBar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;

      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
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
      <div id="progress-bar" className={styled.progressbar} style={{ width: `${progress}%` }}></div>
    </div>
  );
}
