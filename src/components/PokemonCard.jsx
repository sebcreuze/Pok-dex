function PokemonCard({ pokemon }) {
  return (
    <figure>
      {pokemon.imgSrc === undefined ? (
        <div>
          <figcaption>{pokemon.name} </figcaption>
          <p>???</p>
        </div>
      ) : (
        <div>
          <figcaption>{pokemon.name}</figcaption>
          <img src={pokemon.imgSrc} />
        </div>
      )}
    </figure>
  );
}

export default PokemonCard;
