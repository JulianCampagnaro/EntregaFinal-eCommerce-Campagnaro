import { useState, useEffect } from "react";
import ItemListContainer from "../componentes/ItemListContainer";
import { Link } from "react-router-dom";
const Saladas = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("/saladas.json")
            .then((response) => response.json())
            .then((data) => {
                setProductos(data);
        });
    }, [])
    

    return (
        <main className="main">
            <h2 className= "main__titulo">Fuera lo dulce, hola lo ¡salado!</h2>
            <section>
                <ItemListContainer productos = {productos}></ItemListContainer>
            </section>
            <Link to="/" className="itemDetailContainer__btn">Ver todas las categorias</Link>
        </main>

    )




}

export default Saladas