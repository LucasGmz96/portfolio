// import React, { useState, useEffect } from 'react';
// import styled from './NavBar.module.css';
// import { Link } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';

// export default function NavBar() {
//   const [isChecked, setIsChecked] = useState(false);
//   const titulo = "<id=Lucas.G/>"

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

  // function scrollToMiddle(num) {
  //   const middlePosition = window.innerHeight / num; // Obtiene la mitad de la altura de la ventana
  //   window.scrollTo({
  //     top: middlePosition,
  //     behavior: "smooth", // Permite un desplazamiento suave hacia la posición especificada
  //   });
  // }

  // const handlerClickButtonSM = () => {
  //   scrollToMiddle(0.8);
  // };

  // const handlerClickButtonP = () => {
  //   scrollToMiddle();
  // };

  // const handlerClickButtonS = () => {
  //   scrollToMiddle();
  // };

  // const handlerClickButtonE = () => {
  //   scrollToMiddle();
  // };

  // const handlerClickButtonC = () => {
  //   scrollToMiddle();
  // };

  
//   function scrollToPosition(position) {
//     window.scrollTo({
//       top: position,
//       behavior: "smooth",
//     });
//   }
  
//   const targetComponentL = document.getElementById("lucas"); // Reemplaza con el ID de tu componente
//   const scrollToComponentL = () => {
//     const componentPosition = targetComponentL.getBoundingClientRect().top + window.scrollY;
//     scrollToPosition(componentPosition);
// };
// const targetComponentA = document.getElementById("about"); // Reemplaza con el ID de tu componente
// const scrollToComponentA = () => {
//   const componentPosition = targetComponentA.getBoundingClientRect().top + window.scrollY;
//   scrollToPosition(componentPosition);
// };
//   const targetComponentP = document.getElementById("portfolio"); // Reemplaza con el ID de tu componente
//   const scrollToComponentP = () => {
//     const componentPosition = targetComponentP.getBoundingClientRect().top + window.scrollY;
//     scrollToPosition(componentPosition);
// };
//   const targetComponentE = document.getElementById("educacion"); // Reemplaza con el ID de tu componente
//   const scrollToComponentE = () => {
//     const componentPosition = targetComponentE.getBoundingClientRect().top + window.scrollY;
//     scrollToPosition(componentPosition);
// };
//   const targetComponentS = document.getElementById("skills"); // Reemplaza con el ID de tu componente
//   const scrollToComponentS = () => {
//     const componentPosition = targetComponentS.getBoundingClientRect().top + window.scrollY;
//     scrollToPosition(componentPosition);
// };
//   const targetComponentC = document.getElementById("contacto"); // Reemplaza con el ID de tu componente
//   const scrollToComponentC = () => {
//     const componentPosition = targetComponentC.getBoundingClientRect().top + window.scrollY;
//     scrollToPosition(componentPosition);
// };

// Luego puedes llamar a scrollToComponent() en respuesta a eventos

import React, { useState } from 'react';
import styled from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export default function NavBar() {
  const [isChecked, setIsChecked] = useState(false);
  const titulo = "<id=Lucas.G/>";

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  function scrollToPosition(position) {
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  }

  const scrollToComponent = (componentId) => {
    console.log(componentId)
    const targetComponent = document.getElementById(componentId);
    if (targetComponent) {
      const componentPosition =
        targetComponent.getBoundingClientRect().top + window.scrollY;
      scrollToPosition(componentPosition - 90 );
    }
  };


  return (
    <div > 
      <nav className={styled.container}>
        <div className={styled.title}>
        <input
            type="checkbox"
            id="check"
            className={styled.checkbox}
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="check" className={styled.icon}> <FaBars/> </label>
          <h1 className={styled.h1} onClick={() =>scrollToComponent('lucas')}>{titulo}</h1>
        </div>

    

        <ul className={`${styled.ul} ${isChecked ? styled.checkedUl : ''}`}>
              <li>
              <Link className={styled.Items} to="/" onClick={() => scrollToComponent('about')}> SOBRE MI</Link>

              </li>
              <li>
                <Link className={styled.Items} to="/" onClick={() =>scrollToComponent('portfolio')} >PORTFOLIO</Link>
              </li>
              <li>
                <Link className={styled.Items} to="/" onClick={() =>scrollToComponent('educacion')} >EDUCACION</Link>
              </li>
              <li>
                <Link className={styled.Items} to="/" onClick={() =>scrollToComponent('skills')} >SKILLS</Link>
              </li>
              <li>
                <Link className={styled.Items} to="/" onClick={() =>scrollToComponent('contacto')} >CONTACTO</Link>
              </li>
          </ul>
          
      </nav>
    </div>
  );
}



// import React, { useState, useEffect } from 'react';
// import styled from './NavBar.module.css';
// import { Link } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';

// export default function NavBar() {

//   const titulo = "<id=Lucas.G/>"

//   return (
//     <div>
//       <nav className={styled.container}>
//         <div className={styled.title}>
//           <input type="checkbox" id='check' className={styled.checkbox}/>
//           <label htmlFor="check" className={styled.icon}> <FaBars/> </label>
//           <h1 className={styled.h1}>{titulo}</h1>
//         </div>

//         <ul className={styled.ul}>
//           <li>
//             <Link className={styled.Items} to="/">SOBRE MI</Link>
//           </li>
//           <li>
//             <Link className={styled.Items} to="/">PORTFOLIO</Link>
//           </li>
//           <li>
//             <Link className={styled.Items} to="/">EDUCACION</Link>
//           </li>
//           <li>
//             <Link className={styled.Items} to="/">SKILLS</Link>
//           </li>
//           <li>
//             <Link className={styled.Items} to="/">CONTACTO</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }





// import React, { useState, useEffect } from 'react';
// import styled from './NavBar.module.css';
// import { Link } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';

// export default function NavBar() {
//   const [progress, setProgress] = useState(0);

//   const titulo = "<id=Lucas.G/>"

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//       const scrolled = (scrollTop / scrollHeight) * 100;

//       setProgress(scrolled);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div > 
//       <nav className={styled.container}>
//         <div className={styled.title}>
//           <input type="checkbox" id='check' className={styled.checkbox}/>
//           <label htmlFor="check" className={styled.icon}> <FaBars/> </label>
//           <h1 className={styled.h1}>{titulo}</h1>
//         </div>

    

//           <ul className={styled.ul}>
//               <li>
//                 <Link className={styled.Items} to="/">SOBRE MI</Link>
//               </li>
//               <li>
//                 <Link className={styled.Items} to="/">PORTFOLIO</Link>
//               </li>
//               <li>
//                 <Link className={styled.Items} to="/">EDUCACION</Link>
//               </li>
//               <li>
//                 <Link className={styled.Items} to="/">SKILLS</Link>
//               </li>
//               <li>
//                 <Link className={styled.Items} to="/">CONTACTO</Link>
//               </li>
//           </ul>
//       </nav>
//     </div>
//   );
// }
