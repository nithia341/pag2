import React, { useState, useEffect } from 'react';
import CardMedia from '@mui/material/CardMedia';
import ibmA from "../../imagenes/ibmA.jpg";
import IBMC from "../../imagenes/IBMC.jpg";
import python from "../../imagenes/python.jpg";
import G7 from "../../imagenes/G7.jpg";
import javascript from "../../imagenes/javascript.jpg";
import "../estudios/estudios.css";
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';

export default function Estudios() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Escuchar el evento de scroll
    const handleScroll = () => {
      if (window.scrollY > 300) {  // Mostrar el botón después de 300px de desplazamiento
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Agregar el event listener para el scroll
    window.addEventListener('scroll', handleScroll);

    // Eliminar el event listener cuando el componente se desmonte
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',  // Desplazamiento suave
    });
  };

  return (
    <div className="i">
      <div className="titulo">
        <h3>Cursos</h3>
      </div>

      <div className="tarjetas">
        <div className="card">
          <CardMedia
            className="img"
            alt="Python"
            image={python}
          />
        </div>
        <div className="card">
          <CardMedia
            className="img"
            alt="IBM A"
            image={IBMC}
          />
        </div>
        <div className="card">
          <CardMedia
            className="img"
            alt="IBM A"
            image={ibmA}
          />
        </div>
        <div className="card">
          <CardMedia
            className="img"
            alt="JavaScript"
            image={javascript}
          />
        </div>

        <div className="card">
          <CardMedia
            className="img"
            alt="G7"
            image={G7}
          />
        </div>
      </div>

      {/* Botón para subir hacia arriba */}
      {isVisible && (
        <button 
          onClick={scrollToTop}  // Llamamos a la función scrollToTop al hacer clic
          className="scroll-to-top-button"
        >
          <ArrowDropUpSharpIcon />
        </button>
      )}
    </div>
  );
}
