import React from "react";
import "./style.css";

function PokeCard({ name, image }) {
  return (
    <div className="container">
      <img className="image" src={image} alt="" />
      <div className="name">{name}</div>
    </div>
  );
}

export default PokeCard;
