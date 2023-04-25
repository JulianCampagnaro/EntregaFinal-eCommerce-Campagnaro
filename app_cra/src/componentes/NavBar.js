import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom"

const NavBar = () => {
  return (
    <header className="header">
      <NavLink to="/categoria/1">
                    <img src="/images/htlogo.png" alt="Logo"/>
      </NavLink>

      <nav className="header__navBar">
        <NavLink to="/categoria/1" className="header__navBar__link link">Inicio</NavLink>
        <NavLink to="/categoria/2" className="header__navBar__link link">Tienda</NavLink>
        <NavLink to="/categoria/3" className="header__navBar__link link">Información Nutricional</NavLink>
        <CartWidget/>
      </nav>
    </header>
  )
}

export default NavBar