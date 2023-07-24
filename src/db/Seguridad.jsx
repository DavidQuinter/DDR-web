import React from "react";
import { useState } from "react";
import CardProductDes from "../components/cardProductDes";
import InteractiveCard from "../components/interactiveCard";

const imagePaths = {
    seguridadIndustrial: require("../assets/imagenes/Seguridad-img/SeguridadIndustrial.jpg"),
    seguridadComercial: require("../assets/imagenes/Seguridad-img/SeguridadComercial.jpg"),
    seguridadResidencial: require("../assets/imagenes/Seguridad-img/SeguridadResidencial.jpg"),
    seguridadEscolar: require("../assets/imagenes/Seguridad-img/SeguriudadEscolar.jpg"),
  };
const iconsPaths = {
    cctv: require("../assets/icons/CCTV/cctv.png"),
    gps: require("../assets/icons/CCTV/satelite.png"),
    radios:require("../assets/icons/CCTV/walkie-talkie.png"),
    alarma: require("../assets/icons/CCTV/alarma.png"),
    cercado: require("../assets/icons/CCTV/cerca-electrica.png"),
    accesos: require("../assets/icons/CCTV/control-de-acceso.png"),
    ciberSeguridad: require("../assets/icons/CCTV/seguridad-informatica.png"),
    monitoreo: require("../assets/icons/CCTV/seguridad.png")
}

const Seguridad = () => {
  const [req, res] = useState([
    {
      name: "Seguridad",
      text: "Protege tu entorno con nuestras soluciones de seguridad líderes. Ofrecemos sistemas de CCTV de vanguardia, comunicación por radio confiable, tecnología GPS para rastreo, alarmas efectivas y cercado perimetral sólido. Mantén la tranquilidad sabiendo que tus activos están protegidos con nuestra amplia gama de servicios de seguridad.",
      section: [
        {
          name: "Seguridad Residencial",
          text: "Protección integral para tu hogar con servicios de seguridad, tecnología avanzada y atención personalizada. Tranquilidad y confianza garantizadas.",
          img: imagePaths.seguridadResidencial,
        },
        {
          name: "Seguridad comercial",
          text: "Seguridad confiable para tu negocio con soluciones de vanguardia, sistemas de videovigilancia, alarmas inteligentes y control de accesos. Protege tus activos con tranquilidad.",
          img: imagePaths.seguridadComercial,
        },
        {
          name: "Seguridad empresarial",
          text: "Soluciones de seguridad empresarial líderes en la industria. Protege tus instalaciones y datos confidenciales con tecnología avanzada, monitoreo proactivo y ciberseguridad de vanguardia.",
          img: imagePaths.seguridadIndustrial,
        },
        {
          name: "Seguridad escolar",
          text: "Seguridad escolar completa y confiable. Protege a estudiantes, personal y activos con soluciones de videovigilancia, control de acceso y protocolos de seguridad adaptados a entornos educativos.",
          img: imagePaths.seguridadEscolar,
        },
      ],
      product: [
        {
          img: iconsPaths.cctv,
          name: "CCTV",
          text: "Sistemas de alta resolución que capturan imágenes claras y te permiten monitorear en tiempo real.",
        },
        {
            img: iconsPaths.alarma,
          name: "Alarmas",
          text: "Alarmas de última tecnología detectan cualquier intento de intrusión y te alertan de manera inmediata.",
        },
        {
            img: iconsPaths.gps,
          name: "GPS",
          text: "Optimiza la gestión de tu flota y protege tus activos con nuestra avanzada tecnología de seguimiento GPS.",
        },
        {
            img: iconsPaths.radios,
          name: "Radios",
          text: "Con un alcance amplio y una calidad de sonido excepcional, nuestras radios mejoran la coordinación y la seguridad de tu equipo.",
        },
        {
            img: iconsPaths.cercado,
          name: "Cercado",
          text: "Nuestros sistemas de cercado de alta resistencia proporcionan una barrera, disuadiendo intrusiones no deseadas y protegiendo tus instalaciones.",
        },
        {
            img: iconsPaths.accesos,
          name: "Control de accesos",
          text: "Mejora el control y la seguridad en tus instalaciones con nuestro sistema de control de accesos.",
        },
        {
            img: iconsPaths.monitoreo,
          name: "Central de monitoreo",
          text: "Diseñamos y construimos soluciones de vanguardia para una vigilancia constante y una respuesta rápida ante cualquier evento.",
        },
        {
            img: iconsPaths.ciberSeguridad,
          name: "Ciberseguridad",
          text: "Protege tus sistemas y datos confidenciales con nuestras soluciones de ciberseguridad líderes en la industria.",
        },
      ],
    },
  ]);

  return (
    <section className="basic-structure">
      <article className="Serv-secc">
        <div className="sectitle-serv">
          <div>
            <h2>Nuestros servicios</h2>
          </div>
        </div>
        <div className="box-cards-product">
          {req[0].product.map((producto) => (
            <CardProductDes key={producto.name} name={producto.name} text={producto.text} img={producto.img}/>
          ))}
        </div>
      </article>  
      <article className="structure-container-iCards">
        {req[0].section.map((seccion) => (
          <InteractiveCard key={seccion.name} name={seccion.name} text={seccion.text} img={seccion.img} />
        ))}
      </article>
    </section>
  );
};

export default Seguridad;
