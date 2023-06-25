import { Outlet, Link } from "react-router-dom";
import { /*FaBars,*/ FaTimes } from "react-icons/fa";
import logoBlancos from '../assets/logos/DDR-logo-blancos.png'

function NavBar(){
    return(
        <header className="header-container">
            <div className="logo-container">
                <img className="logo" alt="logo DDR tech solutions" src={ logoBlancos } />
            </div>
            <nav className="nav-container">
                <Link to="/" className="nav-link">Inicio</Link>
                <Link to="/seguridad" className="nav-link">Seguridad</Link>
                <Link to="/climas" className="nav-link">Climas</Link>
                <Link to="/mantenimiento" className="nav-link">Mantenimiento</Link>
                <Link to="/robotica" className="nav-link">Robotica</Link>
            </nav>
            <div className="container-btn-contacto">
                <a className="btn-secondary" href="google.com">
                    Contacto
                </a>
            </div>
            <button className="toggle-menu">
                <FaTimes/>
            </button>
            <Outlet/>
        </header>
    )
}
export default NavBar;