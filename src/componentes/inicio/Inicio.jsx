import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import "../inicio/inicio.css"; 
import image from "../../imagenes/5252.jpg"; 
import { FcDownload } from "react-icons/fc";


export default function Tarjeta() {
  return (
    <div className="container">
      <div className="tarjetas-container">
        <div className="tarjeta1">
          <div className="imagen-container">
            <CardMedia
              className="imagen"
              component="img"
              alt="Nithiananda"
              image={image} 
            />
          </div>
          <div className="contenido">
            Nithiananda Radarani Piña Hernandez
          </div>
        </div>  
        <div className="tarjeta2">
          <div className="texto">
            <h1>Hola</h1>
            <p>Soy una persona entusiasta, con muchas ganas de aprender y crecer profesionalmente. Me considero responsable, proactiva y con buenas habilidades de comunicación y trabajo en equipo. Estoy motivada para contribuir positivamente y aprender todo lo necesario para desarrollar mis capacidades en un entorno profesional.</p>
          </div>
          {/* Botón de descarga con un tooltip al pasar el cursor */}
          <a href="docs/NITHIA_CV.pdf" download>
            <button className="descarga" title="Descargar CV">
              <FcDownload className="icono-descarga" />    CV
            </button>
          </a>
        </div>
      </div>
    </div>  
  );
}


