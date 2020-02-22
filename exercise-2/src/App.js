import React from "react";

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

// We want to show a list of pokemons and the number of times they have been clicked

// We need to lift the state up!

class App extends React.Component {
  render() {
    return "Where are my pokemons?";
  }
}

export default App;
