/* import { Button }  from  "react-bootstrap"; */
import ItemCount from "./ItemCount"
import { useState } from "react"
import { saveCarrito } from "../utils"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemDetail = (props) => {

    const [cartItems, setCartItems] = useState({});
    const {stock} = props

    const onAdd = (count) => {
        const itemIndex = cartItems[props.id] ? true : false;
        if (itemIndex) {
        const updatedCartItems = { ...cartItems };
        updatedCartItems[props.id].cantidad += count;
        setCartItems(updatedCartItems);
        } else {
        const item = {
            nombre: props.nombre,
            cantidad: count,
            sabor: props.sabor,
            idProd: props.id,
            imgProd: props.img,
        };
        setCartItems((prevState) => ({
            ...prevState,
            [props.id]: item,
        }));
        }
        alert(`Agregaste ${count} productos`);
        saveCarrito(cartItems,count, props.nombre);
    };

    

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
            <ToastContainer/>
        </div>
    )
}




export default ItemDetail

