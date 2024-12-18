import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './componentes/navbar/NavBar';
import Tarjeta from './componentes/inicio/Inicio'; // Componente de la tarjeta
import Estudios from './componentes/estudios/Estudios';
import Proyecto from './componentes/Proyectos/Proyecto';
import Contacto from './componentes/contacto/Contacto';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
         
        <Routes>
          <Route path="pag2" element={<Tarjeta />} /> {/* Pantalla principal con la tarjeta */}
          <Route path="/inicio" element={<Tarjeta />} /> {/* Página "Inicio" */}
          <Route path="/inicio/Cursos" element={<Estudios />} /> {/* Página "Estudios" */}
          <Route path="/inicio/Proyectos" element={<Proyecto />} /> {/* Página "Proyectos" */}
          <Route path="/inicio/Contacto" element={<Contacto />} /> {/* Página "Contacto" */}
        </Routes>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
