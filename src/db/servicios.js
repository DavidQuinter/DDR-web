import React from "react";
import { useState } from "react";

const Servicios = () => {
  const [req, res] = useState([
    {
      name: "Seguridad",
      text: "Protege tu entorno con nuestras soluciones de seguridad líderes. Ofrecemos sistemas de CCTV de vanguardia, comunicación por radio confiable, tecnología GPS para rastreo, alarmas efectivas y cercado perimetral sólido. Mantén la tranquilidad sabiendo que tus activos están protegidos con nuestra amplia gama de servicios de seguridad.",
      section:[
        {
          name:"Seguridad Residencial",
          text:"Protección integral para tu hogar con servicios de seguridad, tecnología avanzada y atención personalizada. Tranquilidad y confianza garantizadas.",
          img:"../assets/imagenes/Seguridad-img/Seguridad-Residencial.jpg"
        },
        {
          name:"Seguridad comercial",
          text:"Seguridad confiable para tu negocio con soluciones de vanguardia, sistemas de videovigilancia, alarmas inteligentes y control de accesos. Protege tus activos con tranquilidad.",
          img:"../assets/imagenes/Seguridad-img/Seguridad-Comercial.jpg"
        },
        {
          name:"Seguridad empresarial",
          text:"Soluciones de seguridad empresarial líderes en la industria. Protege tus instalaciones y datos confidenciales con tecnología avanzada, monitoreo proactivo y ciberseguridad de vanguardia.",
          img:"../assets/imagenes/Seguridad-img/Seguridad-Empresarial.jpg"
        },
        {
          name:"Seguridad industrial",
          text:"Protección robusta para entornos industriales. Mantén la seguridad de tus instalaciones, maquinaria y personal con sistemas de CCTV, control de acceso y mantenimiento especializado.",
          img:"../assets/imagenes/Seguridad-img/Seguridad-Idustrial.jpg"
        },
        {
          name:"Seguridad Escolar",
          text:"Seguridad escolar completa y confiable. Protege a estudiantes, personal y activos con soluciones de videovigilancia, control de acceso y protocolos de seguridad adaptados a entornos educativos.",
          img:"../assets/imagenes/Seguridad-img/Seguriudad-Escolar.jpg"
        }
      ],
      product: [
        {
          name: "CCTV",
          text: "Protege tu hogar o negocio con nuestra avanzada tecnología de videovigilancia CCTV. Nuestros sistemas de alta resolución capturan imágenes claras y te permiten monitorear en tiempo real desde cualquier lugar. Obtén una seguridad sólida y una mayor tranquilidad con nuestras soluciones de CCTV de última generación.",
        },
        {
          name: "Alarmas",
          text: "Mantén tu propiedad segura las 24 horas del día con nuestros sistemas de alarmas inteligentes. Nuestras alarmas de última tecnología detectan cualquier intento de intrusión y te alertan de manera inmediata, brindándote una respuesta rápida y eficaz ante cualquier emergencia.",
        },
        {
          name: "GPS",
          text: "Optimiza la gestión de tu flota y protege tus activos con nuestra avanzada tecnología de seguimiento GPS. Nuestros sistemas te permiten rastrear en tiempo real la ubicación de tus vehículos y equipos, mejorar la eficiencia operativa y tomar decisiones basadas en datos precisos.",
        },
        {
          name: "Radios",
          text: "Mantén una comunicación instantánea y confiable con nuestro sistema de radios de dos vías. Con un alcance amplio y una calidad de sonido excepcional, nuestras radios mejoran la coordinación y la seguridad de tu equipo, incluso en entornos sin cobertura celular.",
        },
        {
          name: "Cercado",
          text: "Refuerza la seguridad de tu propiedad con nuestras soluciones de cercado perimetral. Nuestros sistemas de cercado de alta resistencia proporcionan una barrera física robusta, disuadiendo intrusiones no deseadas y protegiendo tus instalaciones de manera efectiva.",
        },
        {
          name: "Control de accesos",
          text: "Mejora el control y la seguridad en tus instalaciones con nuestro sistema de control de accesos. Desde cerraduras inteligentes hasta tarjetas de proximidad, nuestro sistema garantiza que solo las personas autorizadas tengan acceso, protegiendo tus espacios y tus activos.",
        },
        {
          name: "Central de monitoreo",
          text: "Confía en nuestra experiencia en el desarrollo de centrales de monitoreo personalizadas. Diseñamos y construimos soluciones de vanguardia para una vigilancia constante y una respuesta rápida ante cualquier evento. Nuestros expertos en seguridad supervisan de forma proactiva tus sistemas las 24 horas, los 7 días de la semana, asegurando una protección integral y una acción inmediata en caso de cualquier incidencia.",
        },
        {
          name: "Ciberseguridad",
          text: "Protege tus sistemas y datos confidenciales con nuestras soluciones de ciberseguridad líderes en la industria. Utilizamos las mejores prácticas y tecnologías avanzadas para identificar y mitigar las amenazas cibernéticas, manteniendo tu información a salvo y tu negocio protegido contra ataques maliciosos.",
        },
      ],
    },
    {
      name: "Climas",
      text: "Mantén un ambiente fresco y confortable con nuestros sistemas de aire acondicionado de alta calidad. Ofrecemos instalación y mantenimiento de mini split y fan and coil, brindando soluciones eficientes y personalizadas para satisfacer tus necesidades de climatización. Disfruta de un ambiente agradable en cualquier espacio con nuestros servicios de aire acondicionado.",
      section:[
        {
          name:"Indiustrias",
          text:"Ambientes óptimos en la industria con sistemas de aire acondicionado eficientes y personalizados. Mantén una temperatura ideal para maximizar la productividad y el bienestar de tu equipo.",
          img:"../assets/imagenes/Seguridad-img/Seguridad-Idustrial.jpg"
        },
        {
          name:"Comercios",
          text:"Climatización perfecta para comercios. Asegura un ambiente fresco y confortable en supermercados y plazas comerciales con nuestros sistemas de aire acondicionado eficientes y de calidad.",
          img:"../assets/imagenes/Seguridad-img/Seguridad-Comercial.jpg"
        },
        {
          name:"Residencias",
          text:"Confort personalizado en tu hogar con nuestros sistemas de aire acondicionado. Disfruta de un ambiente fresco y agradable en cada rincón de tu residencia, brindando el máximo bienestar para ti y tu familia.",
          img:"../assets/imagenes/Seguridad-img/Seguridad-Residencial.jpg"
        },
        {
          name:"Escuelas",
          text:"Ambientes propicios para el aprendizaje en las escuelas. Nuestros sistemas de aire acondicionado proporcionan una temperatura adecuada en las aulas, creando un entorno cómodo y propicio para el estudio y el rendimiento académico.",
          img:"../assets/imagenes/Seguridad-img/Seguriudad-Escolar.jpg"
        }
      ],
      product: [
        {
          name: "Fan and Coil",
          text: "Maximiza tu comodidad con nuestros eficientes sistemas de fan and coil. Con tecnología avanzada, nuestros productos ofrecen una distribución uniforme del aire y un rendimiento óptimo. Disfruta de un ambiente fresco y confortable en cualquier espacio.",
        },
        {
          name: "MiniSplit",
          text: "Controla el clima en tu hogar u oficina con nuestros modernos sistemas de MiniSplit. Con una instalación sencilla y un diseño compacto, nuestros productos brindan una refrigeración o calefacción eficiente y personalizada. Disfruta de un ambiente perfecto todo el año.",
        },
      ],
    },
    {
      name: "Mantenimiento",
      text: "Soluciones de mantenimiento confiables para tus necesidades. Cubrimos el mantenimiento industrial y de oficina, además de ofrecer servicios de mantenimiento para sistemas de CCTV y aire acondicionado. Mantenemos tus instalaciones en óptimas condiciones.",
      product: [
        {
          name: "Mantenimiento a CCTV",
          text: "Mantén tus sistemas de videovigilancia en óptimas condiciones con nuestro servicio de mantenimiento a CCTV. Nuestros expertos en seguridad garantizan un funcionamiento continuo, resolución de problemas y actualizaciones, para que tus cámaras y equipos de vigilancia estén siempre listos para proteger tu hogar o negocio.",
        },
        {
          name: "Mantenimiento a aires acondicionados",
          text: "Mantén un ambiente fresco y confortable con nuestro servicio de mantenimiento a aires acondicionados. Nuestros técnicos capacitados se encargan de limpiar, ajustar y reparar tus equipos, asegurando un rendimiento eficiente y prolongando su vida útil. Disfruta de un clima perfecto durante todo el año.",
        },
        {
          name: "Mantenimiento a oficinas",
          text: "Mantén tus espacios de trabajo en óptimas condiciones con nuestro servicio de mantenimiento a oficinas. Realizamos tareas de limpieza, reparación y mantenimiento de equipos, asegurando un entorno funcional y cómodo para tus empleados. Optimiza la productividad y el bienestar en tu lugar de trabajo.",
        },
        {
          name: "Mantenimiento a industrias",
          text: "Mantén tus instalaciones industriales en funcionamiento sin problemas con nuestro servicio de mantenimiento especializado. Nuestro equipo técnico experto se encarga de la inspección, reparación y mantenimiento preventivo de maquinaria, sistemas eléctricos y equipos industriales. Maximiza la eficiencia y evita costosos tiempos de inactividad.",
        },
        {
          name: "Soporte técnico",
          text: "Obtén el respaldo y la asistencia que necesitas con nuestro servicio de soporte técnico. Nuestros profesionales altamente capacitados están listos para ayudarte con la resolución de problemas, la configuración de equipos y la optimización de tus sistemas tecnológicos. Mantén tu infraestructura en funcionamiento sin interrupciones.",
        },
      ],
    },
  ]);
  return(
    <section>

    </section>
  )

};
export default Servicios;
