import React, { useState } from "react";
import MisVis from "../components/MyV";
import Nosotros from "../assets/imagenes/nosotros.jpg";

const iconsPaths = {
  Mision: require("../assets/icons/puesta-en-marcha 1.svg").default, // se le pone default al final por que es un archivo svg
  Vision: require("../assets/icons/orientacion 2.svg").default,
};

const CardCompany = () => {
  const [def, setDef] = useState([
    {
      id: 0,
      img: iconsPaths.Mision,
      name: "Mision",
      text: "Ser el socio preferido en seguridad y tecnología para nuestros clientes, ofreciendo soluciones innovadoras y de vanguardia que les permitan proteger sus activos y alcanzar sus objetivos comerciales.",
    },
    {
      id: 1,
      img: iconsPaths.Vision,
      name: "Vision",
      text: "Ser líderes en el campo de la seguridad y la tecnología, reconocidos por nuestra excelencia en la prestación de servicios y por ser la elección preferida de los clientes en el mercado.",
    },
  ]);

  return (
    <article className="about-secction">
      <div className="us-card">
        <div className="us">
          <div className="us-img" />
        </div>
        <p className="des-us">
          En DDR Tech Solutions, nos dedicamos a proporcionar soluciones
          integrales en seguridad y tecnología para empresas y clientes
          individuales. Con un equipo altamente capacitado y una amplia
          experiencia en el campo, estamos comprometidos en brindar soluciones
          tecnológicas y de seguridad confiables y personalizadas para
          satisfacer las necesidades específicas de nuestros clientes.
        </p>
      </div>
      <div className="cards-abou-box">
        {def.map((defi) => {
          return (
            <MisVis
              key={defi.id}
              name={defi.name}
              text={defi.text}
              img={defi.img}
            />
          );
        })}
      </div>
    </article>
  );
};

export default CardCompany;
const info = [
  {
    title: "Nosotros",
    img: require("../assets/imagenes/nosotros.jpg"),
    text: `En DDR Tech Solutions, nos dedicamos a proporcionar soluciones
    integrales en seguridad y tecnología para empresas y clientes
    individuales. Con un equipo altamente capacitado y una amplia
    experiencia en el campo, estamos comprometidos en brindar soluciones
    tecnológicas y de seguridad confiables y personalizadas para
    satisfacer las necesidades específicas de nuestros clientes.`,
  },
  {
    title: "Misión",
    img: require("../assets/icons/puesta-en-marcha 1.svg").default, // se le pone default al final por que es un archivo svg
    text: `Ser el socio preferido en seguridad y tecnología para nuestros clientes, ofreciendo soluciones innovadoras y de vanguardia que les permitan proteger sus activos y alcanzar sus objetivos comerciales.`,
  },
  {
    title: "Visión",
    img: require("../assets/icons/orientacion 2.svg").default,
    text: `Ser líderes en el campo de la seguridad y la tecnología, reconocidos por nuestra excelencia en la prestación de servicios y por ser la elección preferida de los clientes en el mercado.`,
  },
];