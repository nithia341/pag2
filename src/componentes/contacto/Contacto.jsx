import React from "react";
import "../contacto/contacto.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaLinkedinIn } from "react-icons/fa";

export default function Contacto(){
    return(
        <div className="conteiner">
            <div className="tarjetaA">
                <div className="texto">
                    <h1>Contacto</h1>
                    <p><b>Teléfono  -</b>    5649125933</p>
                    <p><b>Email -</b>   nithia341@gmail.com</p>
                    <p><b>Dirección - </b>  Iztapalapa, CDMX</p>
                </div>
                <div className="icons">
                    <a href="https://github.com/nithia341"  target="_blank" rel="noopener noreferrer"> 
                    {/* se utiliza para agregar link,target= para abrir nueva pestaña y rel =medida de seguridad */}
                        <button className="git" >
                            <GitHubIcon/>
                        </button>
                    </a>

                    <a href="https://www.linkedin.com/in/nthia-hez-447001340/" target="_blank" rel="noopener noreferrer">
                        <button className="linke" ><FaLinkedinIn /></button>
                    </a>
                </div>
            </div>            
        </div>
    );
}
