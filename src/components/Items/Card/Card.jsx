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
    

        /* <img src={imagen} className={styled.img}/> */
    return(
        <div className={styled.container}>
            
            <h3 className={styled.nombre}>{nombre}</h3>

            <h3 className={styled.skills}>Skills:{skills}</h3>

         
            <div className={styled.buton}>
                <div>
                    <Link to={`${url_git}`}><BsGit/></Link>
                    <Link to={`${url_deploy}`}><AiOutlineGlobal/></Link>
                </div>
        
                <button id="butonM" style={{display:"block"}} onClick={mostrar} className={styled.mostrar}>Mostrar Mas</button>

                <div id="mostrar" style={{display:"none"}} className={styled.divOcultar} >
                    <h3 className={styled.descripcion}>{descripcion}</h3>
                    <>
                    <button id="butonO" onClick={ocultar} className={styled.ocultar}>Mostrar Menos</button>
                    </>
                </div>
            </div>


        </div>
)
}

export default Card