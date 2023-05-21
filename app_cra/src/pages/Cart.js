import {CustomContext} from "../componentes/CustomProvider"
import React, { useContext, useEffect, useState } from 'react';
import { getProductosEnCart, eliminarItemsSeleccionados } from '../utils';



const Cart = () => {

    const { db } = useContext(CustomContext);
    const [ventasItems, setVentasItems] = useState([]);

    useEffect(() => {
        getProductosEnCart ()   
            .then ((resultado) => {
                setVentasItems(resultado);
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
                    </div>
                ))}
                </div>

                <button className="addCarrito">
                    Finalizar Compra, a ser feliz
                </button>

                <button className="addCarrito" onClick={ () => eliminarItemsSeleccionados(ventasItems) }>
                    Eliminar carrito
                </button>



        </main> 


    )





}

export default Cart