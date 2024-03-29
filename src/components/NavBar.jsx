export default function NavBar({
  pokemonIndex,
  pokemonList,
  handleClickPrécédent,
  handleClickSuivant,
}) {
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
