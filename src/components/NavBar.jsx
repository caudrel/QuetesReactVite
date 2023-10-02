export default function NavBar({ pokemonList, goToPokemon }) {
  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          onClick={() => {
            if (pokemon.name === "pikachu") {
              alert("Pika pikachu !!");
            }
            goToPokemon(index);
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </>
  );
}
