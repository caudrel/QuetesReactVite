import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const currentPokemon = pokemonList[pokemonIndex];

  const handleIndexIncrease = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  const handleIndexDecrease = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <>
      <div>
        <PokemonCard pokemon={currentPokemon} />
        <p>{pokemonIndex}</p>
        {pokemonIndex > 0 ? (
          <button onClick={handleIndexDecrease}>Précédent</button>
        ) : (
          ""
        )}

        {pokemonIndex < pokemonList.length - 1 ? (
          <button onClick={handleIndexIncrease}>Suivant</button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
