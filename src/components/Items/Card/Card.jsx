import React from "react"
import styled from "./Card.module.css"
import { Link } from "react-router-dom"
import { BsGit } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';







const Card = ({nombre, url_git, url_deploy, skills, imagen, descripcion})=>{


    function mostrar() {
     document.getElementById("mostrar").style.display = "block";
     document.getElementById("butonM").style.display = "none";

    }
    function ocultar() {
     document.getElementById("mostrar").style.display = "none";
     document.getElementById("butonM").style.display = "block";
    }
    

      
    return(
        <div className={styled.container}>
            
            <h3 className={styled.nombre}>{nombre}</h3>
            <h3 className={styled.skills}>Skills:{skills}</h3>
            <img src={imagen} className={styled.img}/>
            <Link to={`${url_git}`}><BsGit/></Link>
            <Link to={`${url_deploy}`}><AiOutlineGlobal/></Link>



            <button id="butonM" style={{display:"block"}} onClick={mostrar}>Mostrar Mas</button>
            <div id="mostrar" style={{display:"none"}} className={styled.mostrar}>
                <h3 className={styled.descripcion}>{descripcion}</h3>
                <button id="butonO" onClick={ocultar}>Mostrar Menos</button>
            </div>


        </div>
)
}

export default Card