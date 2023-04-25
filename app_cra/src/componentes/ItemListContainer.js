import { useState } from "react"
import Producto from "./Producto"

const ItemListContainer = () => {

  const [cantTortitasDeseadas, setNumeroTortitas] = useState (0);

  function handleClick(){
    setNumeroTortitas(cantTortitasDeseadas + 1)
  }

  return (
    <Producto
      numero={cantTortitasDeseadas}
      handleClick={handleClick}
    />
  )
}

export default ItemListContainer