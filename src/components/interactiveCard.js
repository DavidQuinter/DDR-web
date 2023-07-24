import React from "react";
const InteractiveCard = (props) => {
  return (
    <div className="ICard-container">
      <div className="img-ICard-container">
        <img
          className="ICard-img"
          src={props.img}
          alt={"Imagen" + props.name}
        ></img>
        <div className="ICard-text txt-withe txt-center">
          <h1>{props.name}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};
export default InteractiveCard;
