import React, { useState } from 'react'
import styled from './Portfolio.module.css'
import Card from '../Card/Card.jsx'

import { FaArrowLeft, FaArrowRight} from "react-icons/fa";

function Portfolio() {

  //proyect y map
let proyectos = [{
  nombre: "Vitality Medical",
  url_git: 'https://github.com/LucasGmz96/Vitality-Medical-Group/tree/main',
  url_deploy : 'https://vitality-medical-group.vercel.app/',
  skills: "Javascript, React, Redux, Vite, y mas ",
  imagen: "imagen",
  descripcion: "Diseñar y desarrollar una App médica que incluía: autenticación con Auth0, búsquedas, filtrados combinados, ordenamientos, baneo de usuarios, envío de emails, pago de servicios con api de Mercado Pago, dashboards de paciente, administrador y médico. En este proyecto participé como back-end. Trabaje en la creacion de modelos en sequelize con sus respectivas relaciones para el manejo y almacenamiento de la informacion. Tambien el manejo de la informacion del usuario y las especialidades de la clinica, como tambien participe en armado de la logica de la gestion de los turnos.",
},
{
  nombre: "Dogs",
  url_git: 'https://github.com/LucasGmz96/Pi-Dogs',
  url_deploy : 'https://google.com',
  skills: "Javascript, React, Redux, Vite, y mas ",
  imagen: "imagen",
  descripcion:"Esta fue mi segunda app web, este proyecto es un desarrollo fullstack en javascript, el front-end lo construi utilizando react y redux, y en el back-end utilice express.js, node.js, sequelize y por ultimo postgresSQL para la base de datos."
},
{
  nombre: "Rick & Morty",
  url_git: 'https://github.com/LucasGmz96/Integraci-n-RickAndMorty',
  url_deploy : 'https://google.com',
  skills: "Javascript, React, Redux, Vite, y mas ",
  imagen: "imagen",
  descripcion:"Esta fue mi primera app web, consiste en consumir una api de rick and morty y mostar cartas de los personajes. Tiene formulario controlado, filtros, search y paginado "
}
]

let map =proyectos.map((e)=>(
    <Card
    nombre={e.nombre}
    url_git={e.url_git}
    url_deploy= {e.url_deploy}
    skills={e.skills}
    descripcion={e.descripcion}
    imagen={e.imagen}
    />))


    
  //paginado
  const [currentPage, setCurrentPage] = useState(1)
  const [items, setItems] = useState(1)

  const finalProyect = currentPage * items
  const firstProyect = finalProyect - items
  const pageProyect = proyectos.slice(firstProyect, finalProyect) 
  const cantidadPage = Math.ceil(map.length / items)

  const paginado = (pagina) =>{
      setCurrentPage(pagina)
  }





  return (
    <div className={styled.container}>
      <h3 className={styled.h4}>
        Portafolio
      </h3>
      <div className={styled.paginado}>

      <div onClick={()=>currentPage <= 1 ? paginado(cantidadPage): paginado(currentPage - 1 )}><FaArrowLeft /></div>
        
        <div className={styled.card}> { pageProyect.map((e)=>(
        <Card
        nombre={e.nombre}
        url_git={e.url_git}
        url_deploy= {e.url_deploy}
        skills={e.skills}
        descripcion={e.descripcion}
        imagen={e.imagen}
          />))} </div>

        <div onClick={()=>currentPage >= cantidadPage ? paginado(1): paginado(currentPage + 1 )}><FaArrowRight /></div>
       
      </div>    
    </div>
    
  )
}

export default Portfolio