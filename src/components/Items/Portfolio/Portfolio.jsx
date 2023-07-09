import React from 'react'
import styled from './Portfolio.module.css'


function Portfolio() {

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
  descripcion
}]




  return (
    <div className={styled.container}>
      Portfolio
    </div>
  )
}

export default Portfolio