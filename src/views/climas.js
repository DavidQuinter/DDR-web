import React, { useState } from "react";
import MiniCard from "../components/miniCards";
import InteractiveCard from "../components/interactiveCard";
import SecondaryBanner from "../components/SecondaryBAnner";

const imagePaths = {
  seguridadIndustrial: require("../assets/imagenes/Seguridad-img/SeguridadIndustrial.jpg"),
  seguridadComercial: require("../assets/imagenes/Seguridad-img/SeguridadComercial.jpg"),
  seguridadResidencial: require("../assets/imagenes/Seguridad-img/SeguridadResidencial.jpg"),
  seguridadEscolar: require("../assets/imagenes/Seguridad-img/SeguriudadEscolar.jpg"),
  ClimasBg: require("../assets/imagenes/bg/aire-acondicionado.jpg")
};
const iconsPaths = {
  miniSplit : require("../assets/icons/HVAC/miniSplit.png"),
  fan: require("../assets/icons/HVAC/fanAndCoil.png")
}

const Climas = () => {
  const [req, res] = useState([
    {
      name: "Climas",
      text: "Mantén un ambiente fresco y confortable con nuestros sistemas de aire acondicionado de alta calidad. Ofrecemos instalación y mantenimiento de mini split y fan and coil, brindando soluciones eficientes y personalizadas para satisfacer tus necesidades de climatización. Disfruta de un ambiente agradable en cualquier espacio con nuestros servicios de aire acondicionado.",
      section: [
        {
          name: "Indiustrias",
          text: "Ambientes óptimos en la industria con sistemas de aire acondicionado eficientes y personalizados. Mantén una temperatura ideal para maximizar la productividad y el bienestar de tu equipo.",
          img: imagePaths.seguridadIndustrial,
        },
        {
          name: "Comercios",
          text: "Climatización perfecta para comercios. Asegura un ambiente fresco y confortable en supermercados y plazas comerciales con nuestros sistemas de aire acondicionado eficientes y de calidad.",
          img: imagePaths.seguridadComercial,
        },
        {
          name: "Residencias",
          text: "Confort personalizado en tu hogar con nuestros sistemas de aire acondicionado. Disfruta de un ambiente fresco y agradable en cada rincón de tu residencia, brindando el máximo bienestar para ti y tu familia.",
          img: imagePaths.seguridadResidencial,
        },
        {
          name: "Escuelas",
          text: "Ambientes propicios para el aprendizaje en las escuelas. Nuestros sistemas de aire acondicionado proporcionan una temperatura adecuada en las aulas, creando un entorno cómodo y propicio para el estudio y el rendimiento académico.",
          img: imagePaths.seguridadEscolar,
        },
      ],
      product: [
        {
          img: iconsPaths.fan,
          name: "Fan and Coil",
          text: "Maximiza tu comodidad con nuestros eficientes sistemas de fan and coil. Con tecnología avanzada, nuestros productos ofrecen una distribución uniforme del aire y un rendimiento óptimo. Disfruta de un ambiente fresco y confortable en cualquier espacio.",
        },
        {
          img: iconsPaths.miniSplit,
          name: "MiniSplit",
          text: "Controla el clima en tu hogar u oficina con nuestros modernos sistemas de MiniSplit. Con una instalación sencilla y un diseño compacto, nuestros productos brindan una refrigeración o calefacción eficiente y personalizada. Disfruta de un ambiente perfecto todo el año.",
        },
      ],
      banner:{
        id:0,
        bg:imagePaths.ClimasBg,
        title:"Climas",
        text:"Manten tu ambiente fresco con nuestra tecnologia."
      }
    },
  ]);
  return (
    <section>
      <SecondaryBanner key={req[0].banner.id} title={req[0].banner.title} text={req[0].banner.text} bg={req[0].banner.bg} />
      <div className="txt-section">
        <p className="txt-climas txt-center">{req[0].text}</p>
      </div>
      <article className="valores-container">
        <div className="valores-structure">
        {req[0].product.map((producto) => (
          <MiniCard
            key={producto.name}
            name={producto.name}
            text={producto.text}
            img={producto.img}
          />
        ))}
        </div>
      </article>
      <article className="structure-cards-climas">
        {req[0].section.map((seccion) => (
          <InteractiveCard
            key={seccion.name}
            name={seccion.name}
            text={seccion.text}
            img={seccion.img}
          />
        ))}
      </article>
    </section>
  );
};
export default Climas;
