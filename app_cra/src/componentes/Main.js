import Catalogo from "../pages/Catalogo"
import Cart from "../pages/Cart";
import ItemDetailContainer from "./ItemDetailContainer"
import {Route, Routes} from "react-router-dom"
import ItemListContainer from "./ItemListContainer";
import Inicio from  "../pages/Inicio";

const Main = () => {

  return (
    
    <Routes className="main">
      <Route path="/" element={ <Inicio></Inicio> }></Route>
      <Route path="/items" element={ <Catalogo></Catalogo> }></Route>
      <Route path="/cart" element = { <Cart></Cart>} />
      <Route path="/category/:category" element = {<ItemListContainer></ItemListContainer>} ></Route>
      <Route path="/item/:id" element = { <ItemDetailContainer></ItemDetailContainer>}></Route>
    </Routes> 

  )
}

export default Main;
