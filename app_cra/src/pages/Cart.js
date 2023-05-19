import React, { useContext } from 'react';
import {CustomContext} from "../componentes/CustomProvider"


const Cart = () => {


    const { cartItems } = useContext(CustomContext);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (

        <main className="main">   
                <h2 className= "main__titulo">Aquí podrás ver tus elecciones...</h2>
                <span>{totalItems}</span>

                <button className="addCarrito">
                    Finalizar Compra, a ser feliz
                </button>



        </main> 


    )





}

export default Cart