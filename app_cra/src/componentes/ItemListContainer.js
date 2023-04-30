import Producto from "./Producto"
import { Link } from "react-router-dom"
const ItemListContainer = ({productos}) => {

/*   const [cantTortitasDeseadas, setNumeroTortitas] = useState (0);

  function handleClick(){
    setNumeroTortitas(cantTortitasDeseadas + 1)
  } */


  return (
    <div className="itemListContainer">
      <div className="itemListContainer__producto">
      {productos.map ((producto) => {
        return(
        <div  className = "itemListContainer__card" key={producto.id}>
          <h2 className="itemListContainer__card__h2">{producto.nombre}</h2>
          <img className="itemListContainer__card__img" src= {producto.imgUrl} />
          <Link to={"/item" + producto.sabor + "/" + producto.id} state={producto} className="itemListContainer__card__btn" id={producto.id}>Ver detalle</Link>
        </div>
        )
      })}
      </div>
    </div>
  )
  
}

export default ItemListContainer


