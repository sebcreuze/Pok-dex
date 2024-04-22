import PropTypes from "prop-types";

function NavBar({ pokemonList, setPokemonIndex }) {
  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          onClick={() => {
            setPokemonIndex(index);
            if (pokemon.name === "pikachu") {
              alert("pika pikachu !!!");
            }
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

NavBar.propTypes = {
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};

export default NavBar;
