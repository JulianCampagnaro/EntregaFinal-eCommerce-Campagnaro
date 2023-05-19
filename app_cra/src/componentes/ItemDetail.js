/* import { Button }  from  "react-bootstrap"; */
import ItemCount from "./ItemCount"
import { useState } from "react"
import { saveSale } from "../utils"



const ItemDetail = (props) => {

    /* const [venta, setVenta] = useState () */
    
    const [cartItems, setCartItems] = useState([]);
    const {stock} = props
    const onAdd = (count) => {
        alert(`Agregaste ${count} productos`); 
        const item = {
            nombre: props.nombre,
            cantidad: count
        }
        setCartItems([...cartItems, item]);
    } //Con esto me voy a guardar bien lo que voy comprando.


    console.log ( cartItems)

    return (
        <div className="main">
            <h2 className= "main__titulo">Acá tenes todo el detalle...</h2>
            <div  className = "itemDetailContainer__card" key={props.id}>
                <h3 className="itemDetailContainer__card__h3">{props.nombre}</h3>
                <img className="itemDetailContainer__card__img" src= {props.img} alt= {props.nombre}/>
                <h3 className="itemDetailContainer__card__h3">Precio: ${props.precio}</h3>
                <p className="itemDetailContainer__card__p">Stock: {props.stock}</p>
                <div className='Itemcount-container'> 
                    <ItemCount className='itemcount'  
                        onAdd={onAdd} 
                        stockDisp = {stock}
                    />
                </div>
            </div>
        </div>

    )


}


export default ItemDetail