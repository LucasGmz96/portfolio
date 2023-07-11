import React from 'react'
import styled from './Portfolio.module.css'
import Card from '../Card/Card.jsx'

function Portfolio() {

let proyectos = [{
  nombre: "Vitality Medical",
  url_git: 'https://github.com/LucasGmz96/Vitality-Medical-Group/tree/main',
  url_deploy : 'https://vitality-medical-group.vercel.app/',
  skills: "Javascript, React, Redux, Vite, y mas ",
  imagen: "imagen",
  descripcion: "Diseñar y desarrollar una App médica que incluía: autenticación con Auth0, búsquedas, filtrados combinados, ordenamientos, baneo de usuarios, envío de emails, pago de servicios con api de Mercado Pago, dashboards de paciente, administrador y médico. En este proyecto participé como back-end. Trabaje en la creacion de modelos en sequelize con sus respectivas relaciones para el manejo y almacenamiento de la informacion. Tambien el manejo de la informacion del usuario y las especialidades de la clinica, como tambien participe en armado de la logica de la gestion de los turnos.",
},
/*{
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
}*/
]




  return (
    <div className={styled.container}>
      <h3 className={styled.h4}>
        Portafolio
      </h3>
      <div className={styled.card}>
      {
        proyectos.map((e)=>(
          <Card
            nombre={e.nombre}
            url_git={e.url_git}
            url_deploy= {e.url_deploy}
            skills={e.skills}
            imagen={e.imagen}
            descripcion={e.descripcion}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio