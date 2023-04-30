import { useLocation, Link } from "react-router-dom";



const Producto = () => {
  
  const  {state}= useLocation ();
  
  return (
    <main className="main">
      <h2 className= "main__titulo">Acá tenes todo el detalle...</h2>
      <div  className = "itemDetailContainer__card" key={state.id}>
          <h3 className="itemDetailContainer__card__h3">{state.nombre}</h3>
          <img className="itemDetailContainer__card__img" src= {state.imgUrl} />
          <h3 className="itemDetailContainer__card__h3">Precio: ${state.precio}</h3>
        <p className="itemDetailContainer__card__p">Stock: {state.stock}</p>
      </div>
      <Link to= {"/categoria/" + state.categoria} className="itemDetailContainer__btn">Regresar a {state.sabor}</Link>
    </main>
  )
}

export default Producto

