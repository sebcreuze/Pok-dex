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
