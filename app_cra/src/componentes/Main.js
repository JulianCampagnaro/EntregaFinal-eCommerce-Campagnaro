
import Dulces from "../pages/Dulces";
import Inicio from "../pages/Inicio"
import Saladas from "../pages/Saladas"
/* import Tienda from "../pages/Inicio" */
import {Route, Routes} from "react-router-dom"

const Main = () => {

  return (
    
      <Routes>
        <Route path="/" element={ <Inicio></Inicio> }></Route>
        <Route path="/categoria/1" element= { <Dulces> </Dulces>}></Route>
        <Route path="/categoria/2" element= { <Saladas> </Saladas>}></Route>
        {/* <Route path="/" element={ <Inicio></Inicio> }></Route> */}
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