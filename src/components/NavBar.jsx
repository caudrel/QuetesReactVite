export default function NavBar({ pokemonList, goToPokemon }) {
  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => goToPokemon(index)}>
          {pokemon.name}
        </button>
      ))}
    </>
  );
}
