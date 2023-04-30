
import Dulces from "../pages/Dulces";
import Inicio from "../pages/Inicio"
import Saladas from "../pages/Saladas"
import Cart from "../pages/Cart";
import Producto from "./Producto"

/* import Tienda from "../pages/Inicio" */
import {Route, Routes} from "react-router-dom"

const Main = () => {

  return (
    
      <Routes className="main">
        <Route path="/" element={ <Inicio></Inicio> }></Route>
        <Route path="/categoria/1" element= { <Dulces> </Dulces>}></Route>
        <Route path="/categoria/2" element= { <Saladas> </Saladas>}></Route>
        <Route path="/cart" element = { <Cart></Cart>} />
        <Route path="/itemDulces/:id" element = { <Producto></Producto>}></Route>
        <Route path="/itemSaladas/:id" element = { <Producto></Producto>}></Route>
    </Routes> 

  )
}

export default Main;
