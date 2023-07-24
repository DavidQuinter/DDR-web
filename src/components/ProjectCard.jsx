import React from "react";
const ProjectCard = (props) => {
  return (
    <article className="Pjcard-structure">
      <div className="ICard-container imgBox-Pjcard">
        <div className="img-ICard-container sizeImg-PjCard">
          <img
            className="ICard-img"
            src={props.img}
            alt={"Imagen" + props.name}
          ></img>
          <div className="ICard-text txt-withe txt-center">
            <h1>{props.name}</h1>
          </div>
        </div>
      </div>
      <div className="desBox-Pjcard">
        <h1 className="Project-title">{props.title}</h1>
        <p className="Project-des">{props.text}</p>
      </div>
    </article>
  );
};
export default ProjectCard;
