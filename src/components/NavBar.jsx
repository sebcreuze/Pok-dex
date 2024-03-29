import PropTypes from "prop-types";

export default function NavBar({ pokemonIndex, pokemonList, setpokemonIndex }) {
  const handleClickSuivant = () => {
    setpokemonIndex(pokemonIndex + 1);
  };
  const handleClickPrécédent = () => {
    setpokemonIndex(pokemonIndex - 1);
  };
  return (
    <>
      {pokemonIndex > 0 && (
        <button onClick={handleClickPrécédent}>
          <p>Précédent</p>
        </button>
      )}

      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleClickSuivant}>
          <p>Suivant</p>
        </button>
      )}
    </>
  );
}

NavBar.protoTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setpokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};
