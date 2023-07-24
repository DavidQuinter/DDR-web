import { Outlet, Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/logos/DD-logo-fondo-blanco.png'

function NavBar(){
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive-nav");
    }
    return(
        <header className="header-container">
            <div className="logo-container">
                <img className="logo" alt="logo DDR tech solutions" src={ logo } />
            </div>
            <nav className="nav-container" ref={navRef}>
                <Link to="/" className="nav-link">Inicio</Link>
                <Link to="/seguridad" className="nav-link">Seguridad</Link>
                <Link to="/climas" className="nav-link">Climas</Link>
                <Link to="/mantenimiento" className="nav-link">Mantenimiento</Link>
            </nav>
            <div className="container-btn-contacto">
                <a className="btn-secondary" href="#Form">
                    Contacto
                </a>
            </div>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars className="nav-menu"/>
            </button>
            <Outlet/>
        </header>
    )
}
export default NavBar;