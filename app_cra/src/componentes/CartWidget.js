import {NavLink, Link}  from "react-router-dom"



const CartWidget = () => {


    return (
        <NavLink to="/cart" className="header__navBar__link"><img src="/images/carrito.png" className="header__navBar__link link" alt="Carro de compras">
            </img><span className="cartWidget__value">0</span>
        </NavLink>
    )
}

export default CartWidget