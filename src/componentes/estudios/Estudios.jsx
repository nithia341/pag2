import React from 'react';
import Slider from 'react-slick'; // Importar el componente Slider de react-slick
import '../estudios/estudios.css'; // Estilos personalizados
import 'slick-carousel/slick/slick.css'; // Estilos base de Slick
import 'slick-carousel/slick/slick-theme.css'; // Estilos de tema de Slick
import Certificados from './Certificados'; // Importación de los certificados

// Configuración del Slider
const settings = {
  infinite: true,
  speed: 20,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: true,
};

const Estudios = () => {
  return (
    <div className="i">
      <div className="titulo">Certificados</div>
      <Slider {...settings}>
        {Certificados.map(({ id, name, image }) => (
          <div key={id} className="certificado">
            <img src={image} alt={name} className="certificado-imagen" />
            <h3>{name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Estudios;
