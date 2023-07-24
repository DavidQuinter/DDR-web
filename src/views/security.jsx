import React, { useState } from "react";
import Seguridad from "../db/Seguridad";
import SecondaryBanner from "../components/SecondaryBAnner";

const imagePaths = {
  SeguridadBg: require("../assets/imagenes/bg/Guardia-seguridad.jpg")
}

function Security(){
  const [req, res]=useState([
    {
      banner:{
        id:0,
        bg:imagePaths.SeguridadBg,
        title:"Seguridad",
        text:"Brindamos tranquilidad absoluta con nuestra amplia gama de servicios de seguridad: CCTV, GPS, alarmas, cercado y más. Con nosotros sus activos siempre estarán protegidos."
      }
    }
  ])
  return(
    <div>
      <SecondaryBanner key={req[0].banner.id} title={req[0].banner.title} text={req[0].banner.text} bg={req[0].banner.bg} />
      <Seguridad></Seguridad>
    </div>
  )
}
export default Security;