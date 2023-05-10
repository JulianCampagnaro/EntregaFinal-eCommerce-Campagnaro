import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Carrusel = ({ imagenes }) => {
    return (
        
        <Carousel>
        {imagenes.map((imagen) => (
            <Carousel.Item key={imagen.id}>
            <img
                className="d-block w-100 main__carousel__img"
                src={imagen.imgUrl}
                alt={imagen.nombre}
            />
            <Carousel.Caption>
                <h3>{imagen.nombre}</h3>
                <p>{imagen.desc}</p>
            </Carousel.Caption>
            </Carousel.Item>
        ))}
        </Carousel>
    );
};

export default Carrusel;