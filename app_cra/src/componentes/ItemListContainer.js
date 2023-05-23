import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProductos } from "../utils"


const ItemListContainer = () => {

  const {category} = useParams (); 
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState ("");
  
    useEffect(() => {
      getProductos  ()
        .then ((resultado) => {
          if (category) {
            const filteredProductos = resultado.filter((producto) => producto.sabor === category);
            setProductos(filteredProductos)
            setTitulo ("Aquí tenes todas las opciones " + category)
          }else {
            setProductos(resultado);
            setTitulo ("Todas nuestras exquisitas tortitas, para vos.")
          }
        })
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






