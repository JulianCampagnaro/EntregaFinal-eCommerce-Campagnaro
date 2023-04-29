
import {useState, useEffect} from "react"
import ItemListContainer from "../componentes/ItemListContainer";

const Dulces = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("/dulces.json")
            .then((response) => response.json())
            .then((data) => {
                setProductos(data);
        });
    }, [])
    
    return (
        <main className="main">
            <h2 className= "main__titulo">Si amas lo dulce, esta sección es para vos</h2>
            <section>
                <ItemListContainer productos = {productos}></ItemListContainer>
            </section>
        </main>
    )

}

export default Dulces