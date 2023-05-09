import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

  /* const {state} = useLocation () */
  const {category} = useParams (); //Acá miro que onda, si es o no alguna categoria filtrada por NavBar
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState ("");
  

    useEffect(() => {
        fetch("/productos.json")
            .then((response) => response.json())
            .then((data) => {

              if (category) {

                const filteredProductos = data.filter((producto) => producto.sabor === category);
                setProductos(filteredProductos)
                setTitulo ("Aquí tenes todas las opciones " + category)

              }else {

                setProductos(data);
                setTitulo ("Alimentate de manera ¡inteligente!")

              }
            })
            .catch((err) => console.log(err));
      }, [category])

    return (
      <div className="main">
        <h2 className="main__titulo"> {titulo} </h2>
          <ItemList
            productos = {productos}
          ></ItemList>
      </div>
    ) 

  
}

export default ItemListContainer


