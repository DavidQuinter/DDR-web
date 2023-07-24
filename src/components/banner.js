import React from "react";
import Planeacion from "../assets/icons/banner/portapapeles.png";
import Instalacion from "../assets/icons/banner/atencion-al-cliente.png";
import Soporte from "../assets/icons/banner/soporte-tecnico-bn.png";

function Banner(){
  return(
    <div className="banner-structure">
      <div className="banner-container">
        <article className="banner">
          <div className="content-banner">
            <h2>Tu solucion ideal para tu seguridad y confort</h2>
            <p>Seguridad y frescura de ultima tecnología para tus instalaciones, cubriendo desde hogares hasta la industria </p>
            <div className="btn-primary">
              <a href="">view our projects</a>
            </div>
          </div>
        </article>
        <article className="banner-menu">
          <section className="banner-title">
            <h2>Our Services</h2>
          </section>
          <section className="banner-menu-content">
            <div className="card-banner">
              <figure className="imgbox-banner">
                <img className="img-card-banner" src={ Planeacion } alt=""/>
              </figure>
              <figcaption className="card-banner-des">
                <h3>Planeación</h3>
                <p>Llevada acabo con profecionales altamente capacitados</p>
              </figcaption>
            </div>
            <div className="card-banner">
              <figure className="imgbox-banner">
                <img className="img-card-banner" src={ Instalacion } alt=""/>
              </figure>
              <figcaption className="card-banner-des">
                <h3>Instalación</h3>
                <p>Instalación de primera, en tiempo y forma</p>
              </figcaption>
            </div>
            <div className="card-banner">
              <figure className="imgbox-banner">
                <img className="img-card-banner" src={ Soporte } alt=""/>
              </figure>
              <figcaption className="card-banner-des">
                <h3>Soporte</h3>
                <p>Soporte técnico y de manteniemiento durante el proceso</p>
              </figcaption>
            </div>
          </section>
        </article>
      </div>
      <aside className="aside-banner">
        <h2>La seguridad no es un privilegio</h2>
        <a className="btn-primary">Solicitar una cotización</a>
      </aside>
    </div>
  )
}
export default Banner;