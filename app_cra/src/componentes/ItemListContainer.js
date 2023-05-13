import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProductos } from "../utils"



const ItemListContainer = () => {

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
                setTitulo ("Todas nuestras exquisitas tortitas, para vos.")
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






/* useEffect(() => {
  fetch("/productos.json")
      .then((response) => response.json())
      .then((data) => {
        if (category) {
          const filteredProductos = data.filter((producto) => producto.sabor === category);
          setProductos(filteredProductos)
          setTitulo ("Aquí tenes todas las opciones " + category)
        }else {
          setProductos(data);
          setTitulo ("Todas nuestras exquisitas tortitas, para vos.")
        }
      })
      .catch((err) => console.log(err));
}, [category]) */