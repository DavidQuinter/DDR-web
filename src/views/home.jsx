import React, { useState } from "react";
import Banner from "../components/banner";
import ProjectCard from "../components/ProjectCard";

const imagePaths = {
  Golan: require("../assets/imagenes/Projectos/Golan.jpg"),
  Gps: require("../assets/imagenes/Projectos/autos-gps.jpg"),
  CCTV: require("../assets/imagenes/Projectos/espectacular.jpg")
}
const logosPaths = {
  GolanSecurity: require("../assets/logos/Clientes/GOLAN.png"),
  Bydsa: require("../assets/logos/Clientes/BYDSA.png"),
  AdCity: require("../assets/logos/Clientes/ADCITY.png")
}
const Home = () => {
  const [req, res]=useState([
    {
      projects:[
        {
          title:"Estacion de monitoreo",
          name:"Golan",
          img:imagePaths.Golan,
          text:"Estación monitoreo 4 monitores, servidor y protección eléctrica. Eficiente y completo sistema para un seguimiento integral. "
        },
        {
          title:"GPS Flotilla",
          name:"GPS",
          img:imagePaths.Gps,
          text:"Sistema completo GPS para monitoreo flotilla: Instalación precisa y configuración óptima garantizando seguimiento en tiempo real."
        },
        {
          title:"CCTV espectaculares",
          name:"CCTV",
          img:imagePaths.CCTV,
          text:"Vigilancia efectiva: Cámaras de seguridad en espectaculares de Adcity, protegiendo espacios públicos con tecnología de vanguardia."
        }
      ]
    }
  ])
  return (
    <main>
      <Banner />
      <section className="cardCompany">
        <article className="imgbox-cardcompany">
          <div className="img-bg">
            <div className="img-masc"></div>
          </div>
        </article>
        <article className="desBox-cardCompany">
          <div className="des-box-structure">
            <div className="desgen-box structre">
              <h2>Nosotros</h2>
              <p>
                En DDR Tech Solutions, nos dedicamos a proporcionar soluciones
                integrales en seguridad y tecnología para empresas y clientes
                individuales. Con un equipo altamente capacitado y una amplia
                experiencia en el campo, estamos comprometidos en brindar
                soluciones tecnológicas y de seguridad confiables y
                personalizadas para satisfacer las necesidades específicas de
                nuestros clientes.
              </p>
            </div>
            <div className="structre mis">
              <h2>Mision</h2>
              <p>
                Ser líderes en el campo de la seguridad y la tecnología,
                reconocidos por nuestra excelencia en la prestación de servicios
                y por ser la elección preferida de los clientes en el mercado.
              </p>
            </div>
            <div className="structre vis">
              <h2>Vision</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, molestiae dolorum tempore saepe sed deleniti,
                eveniet nulla eligendi laboriosam quisquam tenetur rerum non
                laborum ratione nihil itaque libero quam! Officia!
              </p>
              <a></a>
            </div>
          </div>
          <aside className="aside-cardCompany">
            <div className="aside-info c2 structre">
              <h2>1</h2>
              <p>Año en el mercado</p>
            </div>
            <div className="aside-info structre">
              <h2>6</h2>
              <p>Proyectos completados</p>
            </div>
          </aside>
        </article>
      </section>
      <section className="Projects-section">
        <h2>Ultimos Proyectos</h2>
        {/*<!------Cards------->*/}
        <div className="projects-structure">
        {req[0].projects.map((project)=>(
          <ProjectCard key={project.title} name={project.name} text={project.text} img={project.img} title={project.title}></ProjectCard>
        ))}
        </div>
        {/*<a>View all</a>*/}
      </section>
      <section className="Logos-clientes">
        <img className="logo-cliente" src={logosPaths.AdCity} alt="Adcity" />
        <img className="logo-cliente" src={logosPaths.Bydsa} alt="Bydsa" />
        <img className="logo-cliente" src={logosPaths.GolanSecurity} alt="Golan" />
      </section>
    </main>
  );
};
export default Home;
