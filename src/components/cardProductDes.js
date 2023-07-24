import React from "react";
const CardProductDes=(props)=>{
    return(
        <div className="cardProcuctDes">
            <div className="product-icon-box">
                <img className="cpd-icon" src={props.img} alt={'icono' + props.name}></img>
            </div>
            <div className="content">
                <h1 className="title-card">{props.name}</h1>
                <p className="mb-1 des-font">{props.text}</p>
            </div>
        </div>
    )
}
export default CardProductDes;