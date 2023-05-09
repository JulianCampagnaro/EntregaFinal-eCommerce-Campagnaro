import Inicio from "../pages/Inicio"
import Cart from "../pages/Cart";
import ItemDetailContainer from "./ItemDetailContainer"
import {Route, Routes} from "react-router-dom"
import ItemListContainer from "./ItemListContainer";

const Main = () => {

  return (
    
    <Routes className="main">
      <Route path="/" element={ <Inicio></Inicio> }></Route>
      <Route path="/cart" element = { <Cart></Cart>} />
      <Route path="/category/:category" element = {<ItemListContainer></ItemListContainer>} ></Route>
      <Route path="/item/:id" element = { <ItemDetailContainer></ItemDetailContainer>}></Route>
    </Routes> 

  )
}

export default Main;
