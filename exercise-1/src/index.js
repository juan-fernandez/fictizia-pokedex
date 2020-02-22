import React from "react";
import ReactDOM from "react-dom";
import PokeCard from "./PokeCard";
import "./index.css";

ReactDOM.render(
  <PokeCard
    name="Bulbasaur"
    image="https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png"
  />,
  document.getElementById("root")
);
