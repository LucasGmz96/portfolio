import React from "react"
import styled from "./Card.module.css"
import { Link } from "react-router-dom"






const Card = ({nombre, url_git, url_deploy, skills, imagen, descripcion})=>{

    

      
    return(
        <div className={styled.cardDiv}>
            
            <h3 className={styled.nombre}>{nombre}</h3>
            <Link to={`${url_git}`}>Git</Link>
            <Link to={`${url_deploy}`}>Deploy</Link>
            <h3 className={styled.skills}>{skills}</h3>
            <h3 className={styled.descripcion}>{descripcion}</h3>
            <img src={imagen} className={styled.img}/>
        </div>
)
}

export default Card