
import Info from "../pages/Info"
import Inicio from "../pages/Inicio"
import Tienda from "../pages/Tienda"
import {Route, Routes} from "react-router-dom";


const Main = (props) => {

  return (

    <Routes>
      <Route path="/" element={ <Inicio></Inicio> }></Route>
      <Route path="/categoria/1" element={ <Inicio></Inicio> }></Route>
      <Route path="/categoria/2" element={ <Tienda></Tienda> }></Route>
      <Route path="/categoria/3" element={ <Info></Info> }></Route>
    </Routes>
  )
}

export default Main;






/* return (
  <main className="main">
    <h2 className= "main__titulo">{props.titulo}</h2>
    <section className="productos">
      <ItemListContainer/>
    </section>
  </main >
) */