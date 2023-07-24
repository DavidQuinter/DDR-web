import React from "react";
const CardProduct=(props)=>{
    return(
        <article className="des-box sty-des">
            <div className="icon-box icon-abs">
                <img className="img-icon" src={props.img} alt={'icono' + props.name}></img>
            </div>
            <div className="des-sty">
                <h1 className="title txt-withe">{props.name}</h1>
                <p className="mb-2 des des-font txt-withe">{props.text}</p>
            </div>
        </article>
    )
}
export default CardProduct;