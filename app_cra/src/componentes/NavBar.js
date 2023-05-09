import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom"

const NavBar = () => {

  return (

    <header className="header">
      <NavLink to="/">
                    <img src="/images/htlogo.png" alt="Logo"/>
      </NavLink>
      <nav className="header__navBar">
        <NavLink to="/" className="header__navBar__link link">Inicio</NavLink>
        <NavLink to="/items" className="header__navBar__link link">Catalogo</NavLink>
        <NavLink to="/category/Dulces"  state = "1" className="header__navBar__link link">Dulces</NavLink>
        <NavLink to="/category/Saladas" state = "2" className="header__navBar__link link">Saladas</NavLink>
        <CartWidget/>
      </nav>
    </header>
  )
}

export default NavBar