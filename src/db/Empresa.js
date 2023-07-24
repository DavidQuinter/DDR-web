import { useState } from "react";
import MiniCard from "../components/miniCards";
import Tecnico from "../assets/icons/soporte-tecnico 1.svg";
import Velocidad from "../assets/icons/Velocidad.svg";
import Asistencia from "../assets/icons/apoyo 1.svg";
import Calidad from "../assets/icons/certificado 1.svg";

//Este componente renderiza el componente minicards y les añade los datos colocados dentro de el objeto

const Valores = () => {
  const [req, res] = useState([
    {
      id: 0,
      img: Tecnico,
      name: "Técnicos",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum sodales dolor non aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
      id: 1,
      img: Velocidad,
      name: "Velocidad",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum sodales dolor non aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
      id: 2,
      img: Asistencia,
      name: "Asistencia",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum sodales dolor non aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
      id: 3,
      img: Calidad,
      name: "Calidad",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum sodales dolor non aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
  ]);
  return (
    <article className="valores-container">
      <div className="valores-structure">
        {req.map((valores) => {
          return (
            <MiniCard
              key={valores.id}
              name={valores.name}
              text={valores.text}
              img={valores.img}
            ></MiniCard>
          );
        })}
      </div>
    </article>
  );
};
export default Valores;
