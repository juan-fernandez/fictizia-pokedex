import React from "react";
import "./style.css";
import PokeAvatar from "./PokeAvatar";
import PokeName from "./PokeName";

class PokeCard extends React.Component {
  state = {};
  render() {
    const { name, image } = this.props;
    return (
      <div className="Container">
        Clicked: ??
        <div className="PokeCard">
          <PokeAvatar image={image} />
          <PokeName name={name} />
        </div>
      </div>
    );
  }
}

export default PokeCard;
