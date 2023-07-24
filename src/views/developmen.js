import React, { useState } from "react";
import InteractiveCard from "../components/interactiveCard";
import SecondaryBanner from "../components/SecondaryBAnner";

const imagePaths = {
  CCTV:require("../assets/imagenes/Mantenimiento-img/Mantenimiento-CCTV.jpg"),
  Aires:require("../assets/imagenes/Mantenimiento-img/Mantenimiento-Aires.jpg"),
  Oficinas: require("../assets/imagenes/Mantenimiento-img/Mantenimiento-Oficina.jpg"),
  Industria: require("../assets/imagenes/Mantenimiento-img/Mantenimiento-Industrial.jpg"),
  Soprte: require("../assets/imagenes/Mantenimiento-img/soporte.jpg"),
  SoprteBg: require("../assets/imagenes/bg/bgSoporte.jpg"),
};

const Development = () =>{
  const [req, res]= useState([
    {
      name: "Mantenimiento",
      text: "Soluciones de mantenimiento confiables para tus necesidades. Cubrimos el mantenimiento industrial y de oficina, además de ofrecer servicios de mantenimiento para sistemas de CCTV y aire acondicionado. Mantenemos tus instalaciones en óptimas condiciones.",
      product: [
        {
          img: imagePaths.CCTV,
          name: "CCTV",
          text: "Mantén tus sistemas de videovigilancia en óptimas condiciones con nuestro servicio de mantenimiento a CCTV. Nuestros expertos en seguridad garantizan un funcionamiento continuo, resolución de problemas y actualizaciones, para que tus cámaras y equipos de vigilancia estén siempre listos para proteger tu hogar o negocio.",
        },
        {
          img: imagePaths.Aires,
          name: "Aires acondicionados",
          text: "Mantén un ambiente fresco y confortable con nuestro servicio de mantenimiento a aires acondicionados. Nuestros técnicos capacitados se encargan de limpiar, ajustar y reparar tus equipos, asegurando un rendimiento eficiente y prolongando su vida útil. Disfruta de un clima perfecto durante todo el año.",
        },
        {
          img: imagePaths.Oficinas,
          name: "Oficinas",
          text: "Mantén tus espacios de trabajo en óptimas condiciones con nuestro servicio de mantenimiento a oficinas. Realizamos tareas de limpieza, reparación y mantenimiento de equipos, asegurando un entorno funcional y cómodo para tus empleados. Optimiza la productividad y el bienestar en tu lugar de trabajo.",
        },
        {
          img: imagePaths.Industria,
          name: "Industrias",
          text: "Mantén tus instalaciones industriales en funcionamiento sin problemas con nuestro servicio de mantenimiento especializado. Nuestro equipo técnico experto se encarga de la inspección, reparación y mantenimiento preventivo de maquinaria, sistemas eléctricos y equipos industriales. Maximiza la eficiencia y evita costosos tiempos de inactividad.",
        },
        {
          img: imagePaths.Soprte,
          name: "Soporte técnico",
          text: "Obtén el respaldo y la asistencia que necesitas con nuestro servicio de soporte técnico. Nuestros profesionales altamente capacitados están listos para ayudarte con la resolución de problemas, la configuración de equipos y la optimización de tus sistemas tecnológicos. Mantén tu infraestructura en funcionamiento sin interrupciones.",
        },
      ],
      banner:{
        id:0,
        bg:imagePaths.SoprteBg,
        title:"Mantenimiento",
        text:"Nuestos expertos se encargaran de garantizar el correcto funcionamiento de tus equipos"
      }
    },
  ])
  return(
    <section>
      <SecondaryBanner key={req[0].banner.id} title={req[0].banner.title} text={req[0].banner.text} bg={req[0].banner.bg} />
      <article className="structure-container-iCards">
        {req[0].product.map((producto) => (
          <InteractiveCard
            key={producto.name}
            name={producto.name}
            text={producto.text}
            img={producto.img}
          />
        ))}
      </article>
    </section>
  )
}
export default Development;