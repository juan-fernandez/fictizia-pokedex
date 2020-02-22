import React from "react";

import "./App.css";
import PokeCard from "./PokeCard";

const POKEMONS = [
  {
    name: "Bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    name: "Charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
    name: "Squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  }
];

class App extends React.Component {
  render() {
    return (
      <>
        Theme
        <div className="AppContainer">
          {POKEMONS.map(pokemon => (
            <PokeCard
              key={pokemon.name}
              name={pokemon.name}
              image={pokemon.image}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
