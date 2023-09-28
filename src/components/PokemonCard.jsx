import PropTypes from "prop-types";

export default function PokemonCard(props) {
  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }),
  };

  console.log(props);

  return (
    <figure>
      {props.pokemon.imgSrc !== undefined ? (
        <img src={props.pokemon.imgSrc} alt={props.pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{props.pokemon.name}</figcaption>
    </figure>
  );
}
