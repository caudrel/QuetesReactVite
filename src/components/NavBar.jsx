export default function NavBar({
  handleIndexDecrease,
  handleIndexIncrease,
  pokemonIndex,
  pokemonList,
}) {
  return (
    <>
      <p>{pokemonIndex}</p>
      {console.log(pokemonList)}
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
    </>
  );
}
