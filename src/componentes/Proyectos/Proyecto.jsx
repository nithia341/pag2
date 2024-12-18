import React from "react";
import "../Proyectos/proyecto.css";
import CardMedia from '@mui/material/CardMedia';
import contador from "../../imagenes/contador.png";
import contadorQ from "../../imagenes/contadorQ.png";
import calculadora from "../../imagenes/calculadora.png"; 
import calculadoraQ from "../../imagenes/calculadoraQ.png";
import tareas from "../../imagenes/tareas.png"; 
import tareasQ from "../../imagenes/tareasQ.png"; 


export default function Proyecto() {
    return (
        <div className="fondo">
            <div className="con-tar">
                <div className="tar">
                    <CardMedia
                        component="img"
                        className="tar-img"
                        alt="contador"
                        image={contador}
                    />
                </div>
                <div className="con-tar2">
                    <CardMedia
                        component="img"
                        className="tar-img-small"
                        alt="contadorQ"
                        image={contadorQ}
                    />
                    <h2>Contador</h2>
                    <p>Esta aplicación fue desarrollada con React. Permite incrementar y disminuir un número al hacer clic en los botones correspondientes. Además, cada clic cambia el color de la pantalla, y al reiniciar, se restaura el color original.</p>
                </div>
            </div>

            
            <div className="con-tar">
               
                <div className="tar">
                    <CardMedia
                        component="img"
                        className="tar-img"
                        alt="calculadora"
                        image={calculadora} 
                    />
                </div>

                <div className="con-tar2">
                    <CardMedia
                        component="img"
                        className="tar-img-small"
                        alt="calculadoraq"
                        image={calculadoraQ}
                    />
                    <h2>Calculadora</h2>
                    <p>Calculadora interactiva construida con React, que incluye todas las funciones básicas de una calculadora. </p>
                </div>
            </div>
            <div className="con-tar">
                <div className="tar">
                    <CardMedia
                        component="img"
                        className="tar-img"
                        alt="tareas"
                        image={tareas}
                    />
                </div>
                <div className="con-tar2">
                    <CardMedia
                        component="img"
                        className="tar-img-small"
                        alt="tareasq"
                        image={tareasQ}
                    />
                    <h2>Lista de tareas</h2>
                    <p>Aplicación en React para gestionar tareas, que te muestra tus pendientes en 'Completas' ,'Todas' e 'incompletas' . Las tareas completadas se rayan y cambian de color, y puedes eliminarlas de forma definitiva para mantener tu lista organizada.</p>
                </div>
            </div>
        </div>
    );
}
