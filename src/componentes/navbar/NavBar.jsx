
import React from 'react';
import { Link } from 'react-router-dom';
import "../navbar/NavBar.css";
import logo from '../../imagenes/1234.jpeg'; // Ajusta la ruta

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo-container">
            <Link to="/inicio" className="logo"> {/* Se cambió "inicio" a "/inicio" */}
                <img src={logo} alt="Logo" className="logo-image" />
            </Link>
        </div>
        <ul className="menu">
            <li><Link className="menu-link" to="/inicio">Sobre Mí</Link></li> {/* Ruta consistente */}
            <li><Link className="menu-link" to="/inicio/Cursos">Cursos</Link></li> {/* Ruta consistente */}
            <li><Link className="menu-link" to="/inicio/Proyectos">Proyectos</Link></li> {/* Ruta consistente */}
            <li><Link className="menu-link" to="/inicio/Contacto">Contacto</Link></li> {/* Ruta consistente */}
        </ul>
    </nav>
  );
};

export default Navbar;

