import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import "../inicio/inicio.css"; // Ensure this path is correct
import image from "../../imagenes/5252.jpg"; // Ensure this path is correct

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
        
      </div>
      </div>
    </div>  
  );
}

