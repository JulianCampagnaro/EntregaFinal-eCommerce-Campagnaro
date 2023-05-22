import {CustomContext} from "../componentes/CustomProvider"
/* import CheckOut from '../componentes/CheckOut';
 */
import React, { useContext, useEffect, useState } from 'react';
import { getProductosEnCart, eliminarItemsSeleccionados, calcularPrecioTotalGeneral, calcularPrecioTotal } from '../utils';
import { Link } from 'react-router-dom'



const Cart = () => {

    const { db } = useContext(CustomContext);
    const [ventasItems, setVentasItems] = useState([]);
    const [precioTotalGeneral, setPrecioTotalGeneral] = useState(0);
    /* const [mostrarCheckOut, setMostrarCheckOut] = useState(false); */

    useEffect(() => {
        getProductosEnCart ()   
            .then ((resultado) => {
                setVentasItems(resultado);
                const totalGeneral = calcularPrecioTotalGeneral(resultado);
                setPrecioTotalGeneral(totalGeneral);
            })
    }, [db]);

    return (

        <main className="main">   
                <h2 className= "main__titulo">Aquí tenes tu pedido...</h2>
                <div className="itemListContainer">
                {ventasItems.map((item) => (
                    <div key={item.id} className="itemListContainer__card">
                        <h2 className="itemListContainer__card__h2">{item.itemName}</h2>
                        <img className= "itemListContainer__card__img" src={item.itemImg} alt={item.itemName} />
                        <p className="itemDetailContainer__card__p">Cantidad: {item.cantidad}</p>
                        <p className="itemDetailContainer__card__p">
                            Precio total del item: {calcularPrecioTotal(item)}
                        </p>
                    </div>
                ))}
                </div>
                <h2 className="itemListContainer__card__h2">
                    Precio Total General: ${calcularPrecioTotalGeneral(ventasItems)}
                </h2>
                <Link to= "/finalizarCompra" state= {precioTotalGeneral}  >
                    <button className="addCarrito">
                        Finalizar Compra, a ser feliz
                    </button>
                </Link>
                <button className="addCarrito" onClick={ () => eliminarItemsSeleccionados(ventasItems) }>
                    Eliminar carrito
                </button>

        </main> 
    )

}
export default Cart