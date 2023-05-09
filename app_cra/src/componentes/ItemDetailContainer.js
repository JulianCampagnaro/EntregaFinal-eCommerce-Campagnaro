import { useLocation } from 'react-router-dom';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

  const {state} = useLocation ();

  return (
    <main className="main">
      <div className="">
        <ItemDetail 
          id= {state.id}
          nombre= {state.nombre}
          precio= {state.precio}
          stock= {state.stock}
          img= {state.imgUrl}
          cat= {state.categoria}
        ></ItemDetail>
      </div>
    </main>

  )
    


  /* const {state}= useLocation ();
  

  return (
    <main className="main">
      <h2 className= "main__titulo">Acá tenes todo el detalle...</h2>
      <div  className = "itemDetailContainer__card" key={state.id}>
        <h3 className="itemDetailContainer__card__h3">{state.nombre}</h3>
        <img className="itemDetailContainer__card__img" src= {state.imgUrl} alt= {state.nombre}/>
        <h3 className="itemDetailContainer__card__h3">Precio: ${state.precio}</h3>
        <p className="itemDetailContainer__card__p">Stock: {state.stock}</p>
        <Button>Comprar</Button>
      </div>
    </main>
  ) */
}

export default ItemDetailContainer

