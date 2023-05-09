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
    

}

export default ItemDetailContainer

