import { useEffect, useState } from "react";
import Carrusel from "../componentes/Carrusel";


const Inicio = () => {
    
    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        fetch("/carousel.json")
        .then((response) => response.json())
        .then((data) => {
            setImagenes(data);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h2 className="main__titulo__carousel">Alimentante de manera ¡inteligente!</h2>
            <Carrusel imagenes={imagenes} />
        </div>
    );



}

export default Inicio
