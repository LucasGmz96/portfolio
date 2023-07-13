import React, { useState, useEffect } from 'react';
import styled from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export default function NavBar() {


  const titulo = "<id=Lucas.G/>"


  return (
    <div > 
      <nav className={styled.container}>
        <div className={styled.title}>
          <input type="checkbox" id='check' className={styled.checkbox}/>
          <label htmlFor="check" className={styled.icon}> <FaBars/> </label>
          <h1 className={styled.h1}>{titulo}</h1>
        </div>

    

          <ul className={styled.ul}>
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
